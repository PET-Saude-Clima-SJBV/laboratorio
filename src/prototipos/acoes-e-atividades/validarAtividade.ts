export const LISTA_OFICIAL_TIPOS = [
  'Ação Técnica',
  'Reunião',
  'Orientação',
  'Estudo',
  'Produção',
  'Evento',
  'Gestão'
] as const;

export type TipoAtividade = typeof LISTA_OFICIAL_TIPOS[number];

export type Atividade = {
  tipo: TipoAtividade,
  horas: number,
  descricao: string,
  semana: number,
  evidencia: string
}

/**
 * Valida os dados da atividade de acordo com as regras:
 * 
 * 1. O tipo está dentro da lista oficial.
 * 2. As horas estão entre 0,5h e 12h.
 * 
 * @param atividade Representa a atividade realizada pelo integrante.
 */
export function validarAtividade(atividade: Atividade): { valido: boolean, mensagem?: string } {
  if (!LISTA_OFICIAL_TIPOS.includes(atividade.tipo)) {
    return {
      valido: false,
      mensagem: `Tipo inválido. Permitidos: ${LISTA_OFICIAL_TIPOS.join(', ')}`
    };
  }

  if (atividade.horas < 0.5 || atividade.horas > 12) {
    return {
      valido: false,
      mensagem: `A quantidade de horas deve estar entre 0,5 e 12.`
    };
  }

  if (!atividade.descricao || atividade.descricao.length < 20) {
    return {
      valido: false,
      mensagem: `A descrição deve conter no mínimo 20 caracteres.`
    };
  }

  if (!atividade.evidencia || (!atividade.evidencia.startsWith('http://') && 
      !atividade.evidencia.startsWith('https://'))) {
    return {
      valido: false,
      mensagem: `A evidência é obrigatória e deve iniciar com http:// ou https://.`
    };
  }

  if (atividade.semana < 1 || atividade.semana > 104) {
    return {
      valido: false,
      mensagem: `A semana deve estar entre 1 e 104.`
    };
  }

  return { valido: true }
}