<script setup lang="ts">
import { validarAtividade, type Atividade } from './validarAtividade';

interface CasoTeste {
  id: number;
  cenario: string;
  entrada: Atividade;
}

// 10 Casos de teste cobrindo todas as regras com tipos válidos da lista oficial
const casosTeste: CasoTeste[] = [
  {
    id: 1,
    cenario: 'Atividade totalmente válida',
    entrada: { tipo: 'Estudo', horas: 4, descricao: 'Participação no estudo completo de TypeScript e Vue.', evidencia: 'https://certificado.com/123', semana: 5 }
  },
  {
    id: 2,
    cenario: 'Tipo inválido (fora da lista oficial)',
    entrada: { tipo: 'Curso' as any, horas: 4, descricao: 'Participação no curso completo de TypeScript e Vue.', evidencia: 'https://certificado.com/123', semana: 5 }
  },
  {
    id: 3,
    cenario: 'Horas abaixo do mínimo permitido (0.4)',
    entrada: { tipo: 'Estudo', horas: 0.49, descricao: 'Participação no estudo completo de TypeScript e Vue.', evidencia: 'https://certificado.com/123', semana: 5 }
  },
  {
    id: 4,
    cenario: 'Horas acima do máximo permitido (13)',
    entrada: { tipo: 'Estudo', horas: 12.1, descricao: 'Participação no estudo completo de TypeScript e Vue.', evidencia: 'https://certificado.com/123', semana: 5 }
  },
  {
    id: 5,
    cenario: 'Descrição muito curta (< 20 caracteres)',
    entrada: { tipo: 'Estudo', horas: 4, descricao: 'Estudo curto.', evidencia: 'https://certificado.com/123', semana: 5 }
  },
  {
    id: 6,
    cenario: 'Evidência sem protocolo http/https',
    entrada: { tipo: 'Estudo', horas: 4, descricao: 'Participação no estudo completo de TypeScript e Vue.', evidencia: 'ftp://arquivo.com', semana: 5 }
  },
  {
    id: 7,
    cenario: 'Semana abaixo do limite (0)',
    entrada: { tipo: 'Estudo', horas: 4, descricao: 'Participação no estudo completo de TypeScript e Vue.', evidencia: 'https://certificado.com/123', semana: 0 }
  },
  {
    id: 8,
    cenario: 'Semana acima do limite (105)',
    entrada: { tipo: 'Estudo', horas: 4, descricao: 'Participação no estudo completo de TypeScript e Vue.', evidencia: 'https://certificado.com/123', semana: 105 }
  },
  {
    id: 9,
    cenario: 'Limite mínimo de horas exato (0.5)',
    entrada: { tipo: 'Reunião', horas: 0.5, descricao: 'Participou de uma reunião de alinhamento técnico.', evidencia: 'http://link.com', semana: 1 }
  },
  {
    id: 10,
    cenario: 'Limite máximo de horas e semana limite (12 horas, semana 104)',
    entrada: { tipo: 'Ação Técnica', horas: 12, descricao: 'Desenvolvimento e refatoração da entrega final do projeto.', evidencia: 'https://github.com/projeto', semana: 104 }
  }
];

// Processa cada caso para obter o resultado da validação
const resultados = casosTeste.map(caso => {
  const validacao = validarAtividade(caso.entrada);
  const obtido = validacao.valido;

  return {
    ...caso,
    obtido,
    mensagem: validacao.mensagem
  };
});
</script>

<template>
  <div style="padding: 20px; font-family: sans-serif;">
    <h1>Tabela de Casos de Validação</h1>
    <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th>ID</th>
          <th>Cenário / Entrada</th>
          <th>Resultado Obtido</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in resultados" :key="item.id">
          <td>{{ item.id }}</td>
          <td>
            <strong>{{ item.cenario }}</strong>
            <pre style="font-size: 11px; background: #f9f9f9; padding: 5px; margin-top: 5px;">{{ JSON.stringify(item.entrada, null, 2) }}</pre>
          </td>
          <td 
            align="center" 
            :style="{ 
              backgroundColor: item.obtido ? '#d4edda' : '#f8d7da', 
              color: item.obtido ? '#155724' : '#721c24',
              fontWeight: 'bold'
            }"
          >
            {{ item.obtido ? 'Válido' : 'Inválido' }}
            <div style="font-size: 11px; font-weight: normal; margin-top: 4px;" v-if="item.mensagem">
              ({{ item.mensagem }})
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>