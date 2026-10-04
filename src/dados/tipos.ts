/** Formato dos dados de src/dados/*.json */
export interface Meta {
  codigo: string; grupo: number; eixo: string; titulo: string; indicador: string;
  acoes_sugeridas: string | null; prazo_inicio: number | null; prazo_fim: number | null;
}
export interface Territorio { codigo: string; sigla: string; nome: string }
