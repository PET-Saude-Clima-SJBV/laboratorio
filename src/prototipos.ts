import type { Component } from 'vue';

/**
 * Descobre sozinho todos os protótipos da pasta src/prototipos/.
 * Para criar o seu: um arquivo NomeDoPrototipo.vue lá dentro. Ele aparece no menu, sem registrar nada.
 * O nome do arquivo vira o título: "MapaDeCalorClarisse.vue" -> "Mapa De Calor Clarisse".
 */
const arquivos = import.meta.glob<{ default: Component }>('./prototipos/*.vue');

export interface Prototipo { slug: string; titulo: string; carregar: () => Promise<{ default: Component }> }

export const prototipos: Prototipo[] = Object.entries(arquivos)
  .map(([caminho, carregar]) => {
    const nome = caminho.split('/').pop()!.replace(/\.vue$/, '');
    return {
      slug: nome.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
      titulo: nome.replace(/([a-z0-9])([A-Z])/g, '$1 $2'),
      carregar,
    };
  })
  .sort((a, b) => (a.slug === 'exemplo' ? -1 : b.slug === 'exemplo' ? 1 : a.titulo.localeCompare(b.titulo)));
