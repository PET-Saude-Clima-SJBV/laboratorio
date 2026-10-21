<template>
  <div class="p-6 max-w-6xl mx-auto">
    <h1 class="text-2xl font-bold mb-4 text-blue-700">Resumo por Pessoa</h1>
    <p class="text-gray-600 mb-6">Acompanhamento das atividades registradas com base nos dados do HUB.</p>

    <!-- Filtro de Seleção -->
    <div class="mb-6 bg-white p-4 rounded-lg shadow border border-gray-200">
      <label class="block text-sm font-medium text-gray-700 mb-2">Filtrar por Pessoa:</label>
      <select v-model="pessoaSelecionada" class="border border-gray-300 rounded p-2 w-full md:w-1/3 bg-white">
        <option value="">Todas as pessoas</option>
        <option v-for="pessoa in listaPessoas" :key="pessoa" :value="pessoa">
          {{ pessoa }}
        </option>
      </select>
    </div>

    <!-- Tabela de Atividades -->
    <div class="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pessoa</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duração</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validação</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(atividade, index) in atividadesFiltradas" :key="index">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ atividade.pessoa }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ atividade.data }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ atividade.tipo }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ calcularHoras(atividade.hora_inicio, atividade.hora_fim) }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">
              <span :class="atividade.validado ? 'text-green-600 font-semibold' : 'text-amber-600 font-semibold'">
                {{ atividade.validado ? 'Validado' : 'Pendente' }}
              </span>
            </td>
          </tr>
          <tr v-if="atividadesFiltradas.length === 0">
            <td colspan="5" class="px-6 py-4 text-center text-sm text-gray-500">Nenhuma atividade encontrada.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import dadosFicticios from '../../../dados/atividades-ficticias.json'

const pessoaSelecionada = ref('')

// Obter lista única de nomes das pessoas
const listaPessoas = computed(() => {
  const nomes = dadosFicticios.map(item => item.pessoa)
  return [...new Set(nomes)]
})

// Filtrar as atividades com base na seleção
const atividadesFiltradas = computed(() => {
  if (!pessoaSelecionada.value) return dadosFicticios
  return dadosFicticios.filter(item => item.pessoa === pessoaSelecionada.value)
})

// Função para calcular as horas com base em hora_inicio e hora_fim
function calcularHoras(inicio, fim) {
  if (!inicio || !fim) return '0h'
  const [hIni, mIni] = inicio.split(':').map(Number)
  const [hFim, mFim] = fim.split(':').map(Number)
  const totalMinutos = (hFim * 60 + mFim) - (hIni * 60 + mIni)
  const horas = (totalMinutos / 60).toFixed(1)
  return `${horas}h`
}
</script>