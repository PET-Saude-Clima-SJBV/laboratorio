import type { Component } from 'vue';

/**
 * Descobre sozinho todos os protótipos de src/prototipos/. Nada para registrar.
 *
 *   src/prototipos/Exemplo.vue                     -> página solta (grupo "Geral")
 *   src/prototipos/mapa-de-calor/Painel.vue        -> página "Painel" na área "Mapa de calor"
 *   src/prototipos/mapa-de-calor/componentes/X.vue -> NÃO vira página (peças internas da área)
 *
 * O nome do arquivo vira o título: "PainelDeAlertas.vue" -> "Painel De Alertas".
 * O nome da pasta vira o nome da área: "mapa-de-calor" -> "Mapa de calor".
 */
const arquivos = import.meta.glob<{ default: Component }>(['./prototipos/*.vue', './prototipos/*/*.vue']);

export interface Prototipo {
  slug: string;
  titulo: string;
  area: string;        // pasta da área ('' quando o arquivo está solto em src/prototipos/)
  caminho: string;     // caminho no repositório, para os links do GitHub
  carregar: () => Promise<{ default: Component }>;
}
export interface Area { pasta: string; nome: string; prototipos: Prototipo[] }

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
export const nomeDaArea = (pasta: string) =>
  pasta ? pasta.charAt(0).toUpperCase() + pasta.slice(1).replace(/[-_]+/g, ' ') : 'Geral';

export const prototipos: Prototipo[] = Object.entries(arquivos)
  .map(([caminho, carregar]) => {
    const partes = caminho.replace('./prototipos/', '').split('/');
    const nome = partes.pop()!.replace(/\.vue$/, '');
    const area = partes[0] ?? '';
    return {
      slug: (area ? `${area}/` : '') + kebab(nome),
      titulo: nome.replace(/([a-z0-9])([A-Z])/g, '$1 $2'),
      area,
      caminho: `src/prototipos/${area ? area + '/' : ''}${nome}.vue`,
      carregar,
    };
  })
  .sort((a, b) => (a.slug === 'exemplo' ? -1 : b.slug === 'exemplo' ? 1 : a.titulo.localeCompare(b.titulo)));

/** Protótipos agrupados por área: "Geral" primeiro, depois as áreas em ordem alfabética. */
export const areas: Area[] = [...new Set(prototipos.map((p) => p.area))]
  .sort((a, b) => (a === '' ? -1 : b === '' ? 1 : a.localeCompare(b)))
  .map((pasta) => ({ pasta, nome: nomeDaArea(pasta), prototipos: prototipos.filter((p) => p.area === pasta) }));

const REPO = 'https://github.com/PET-Saude-Clima-SJBV/laboratorio';
export const linkCodigo = (p: Prototipo) => `${REPO}/blob/main/${p.caminho}`;
export const linkHistorico = (pasta: string) => `${REPO}/commits/main/src/prototipos${pasta ? '/' + pasta : ''}`;
