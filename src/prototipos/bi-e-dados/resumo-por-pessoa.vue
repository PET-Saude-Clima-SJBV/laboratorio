<template>
  <div style="padding: 24px; max-width: 1200px; margin: 0 auto; font-family: sans-serif;">
    <h1 style="font-size: 24px; font-weight: bold; color: #1d4ed8; margin-bottom: 8px;">Resumo por Pessoa e Desempenho Semanal</h1>
    <p style="color: #4b5563; margin-bottom: 24px;">Acompanhamento das atividades registradas, horas semanais contra a meta e tipos de atividades.</p>

    <!-- Filtro de Seleção -->
    <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 8px;">Filtrar por Pessoa:</label>
      <select v-model="pessoaSelecionada" style="border: 1px solid #d1d5db; border-radius: 6px; padding: 10px; width: 100%; max-width: 350px; background: white; color: #1f2937;">
        <option value="">Selecione uma pessoa</option>
        <option v-for="pessoa in listaPessoas" :key="pessoa" :value="pessoa">
          {{ pessoa }}
        </option>
      </select>
    </div>

    <!-- Conteúdo exibido apenas se houver uma pessoa selecionada -->
    <div v-if="pessoaSelecionada" style="display: flex; flex-direction: column; gap: 24px;">
      
      <!-- Gráfico de Horas Semanais contra a Meta de 8h (480 min) -->
      <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h2 style="font-size: 18px; font-weight: bold; color: #1f2937; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px; margin-bottom: 16px;">Horas por Semana (Meta: 8h / 480 min)</h2>
        
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div v-for="(semana, chave) in horasPorSemana" :key="chave" style="background: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #f3f4f6;">
            <div style="display: flex; justify-content: space-between; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 8px;">
              <span>Semana de {{ chave }}</span>
              <span style="color: #2563eb; font-weight: bold;">{{ (semana.minutos / 60).toFixed(1) }}h ({{ semana.minutos }} min)</span>
            </div>
            
            <!-- Barra de Progresso com a Meta -->
            <div style="width: 100%; background: #e5e7eb; border-radius: 9999px; height: 20px; position: relative; overflow: hidden;">
              <div 
                style="background: #2563eb; height: 100%; border-radius: 9999px; transition: width 0.5s;" 
                :style="{ width: Math.min((semana.minutos / 480) * 100, 100) + '%' }"
              ></div>
              <!-- Linha Indicadora da Meta de 8h (100%) -->
              <div style="position: absolute; top: 0; bottom: 0; border-left: 2px dashed #ef4444; left: 100%; z-index: 10;"></div>
            </div>
          </div>
        </div>
        <p style="font-size: 12px; color: #6b7280; margin-top: 12px;">* A linha tracejada vermelha representa a meta de 8h (480 minutos).</p>
      </div>

      <!-- Horas por Tipo de Atividade -->
      <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h2 style="font-size: 18px; font-weight: bold; color: #1f2937; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px; margin-bottom: 16px;">Horas por Tipo de Atividade</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
          <div v-for="(minutos, tipo) in horasPorTipo" :key="tipo" style="background: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600; color: #1f2937; font-size: 15px;">{{ tipo }}</span>
            <span style="color: #2563eb; font-weight: bold; background: #eff6ff; padding: 6px 14px; border-radius: 6px; border: 1px solid #dbeafe; font-size: 14px;">{{ (minutos / 60).toFixed(1) }}h</span>
          </div>
        </div>
      </div>

      <!-- Tabela Completa de Atividades da Pessoa -->
      <div style="background: white; border-radius: 8px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="padding: 20px; background: #f9fafb; border-bottom: 1px solid #e5e7eb;">
          <h2 style="font-size: 18px; font-weight: bold; color: #1f2937;">Detalhamento de Atividades</h2>
        </div>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
              <tr style="background: #f3f4f6; border-bottom: 1px solid #e5e7eb;">
                <th style="padding: 16px 20px; font-size: 12px; font-weight: bold; color: #4b5563; text-transform: uppercase;">Data</th>
                <th style="padding: 16px 20px; font-size: 12px; font-weight: bold; color: #4b5563; text-transform: uppercase;">Tipo</th>
                <th style="padding: 16px 20px; font-size: 12px; font-weight: bold; color: #4b5563; text-transform: uppercase;">Duração</th>
                <th style="padding: 16px 20px; font-size: 12px; font-weight: bold; color: #4b5563; text-transform: uppercase;">Validação</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(atividade, index) in atividadesFiltradas" :key="index" style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 16px 20px; font-size: 14px; color: #4b5563;">{{ atividade.data }}</td>
                <td style="padding: 16px 20px; font-size: 14px; font-weight: 600; color: #1f2937;">{{ atividade.tipo }}</td>
                <td style="padding: 16px 20px; font-size: 14px; font-weight: bold; color: #2563eb;">{{ calcularHorasTexto(atividade.hora_inicio, atividade.hora_fim) }}</td>
                <td style="padding: 16px 20px; font-size: 14px;">
                  <span :style="atividade.validado ? 'color: #16a34a; font-weight: bold; background: #dcfce7; padding: 4px 12px; border-radius: 9999px; font-size: 12px;' : 'color: #d97706; font-weight: bold; background: #fef3c7; padding: 4px 12px; border-radius: 9999px; font-size: 12px;'">
                    {{ atividade.validado ? 'Validado' : 'Pendente' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <div v-else style="background: #eff6ff; border: 1px solid #dbeafe; padding: 24px; border-radius: 8px; text-align: center; color: #1d4ed8; font-weight: 500;">
      Por favor, selecione uma pessoa no campo acima para visualizar os gráficos e as atividades.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import dadosFicticios from '../../dados/atividades-ficticias.json'

const pessoaSelecionada = ref('')

const listaPessoas = computed(() => {
  const nomes = dadosFicticios.map(item => item.pessoa)
  return [...new Set(nomes)]
})

const atividadesFiltradas = computed(() => {
  if (!pessoaSelecionada.value) return []
  return dadosFicticios.filter(item => item.pessoa === pessoaSelecionada.value)
})

function calcularMinutos(inicio, fim) {
  if (!inicio || !fim) return 0
  const [hIni, mIni] = String(inicio).split(':').map(Number)
  const [hFim, mFim] = String(fim).split(':').map(Number)
  return (hFim * 60 + (mFim || 0)) - (hIni * 60 + (mIni || 0))
}

function calcularHorasTexto(inicio, fim) {
  const mins = calcularMinutos(inicio, fim)
  return `${(mins / 60).toFixed(1)}h`
}

function obterSegundaDaSemana(dataStr) {
  if (!dataStr) return ''
  const partes = dataStr.split('-')
  if (partes.length !== 3) return dataStr
  
  const data = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]))
  const dia = data.getDay()
  const diff = data.getDate() - dia + (dia === 0 ? -6 : 1)
  const segunda = new Date(data.setDate(diff))
  
  const d = String(segunda.getDate()).padStart(2, '0')
  const m = String(segunda.getMonth() + 1).padStart(2, '0')
  const a = String(segunda.getFullYear()).slice(-2)
  return `${d}/${m}/${a}`
}

const horasPorSemana = computed(() => {
  const semanas = {}
  atividadesFiltradas.value.forEach(item => {
    const semanaChave = obterSegundaDaSemana(item.data)
    const mins = calcularMinutos(item.hora_inicio, item.hora_fim)
    if (!semanas[semanaChave]) {
      semanas[semanaChave] = { minutos: 0 }
    }
    semanas[semanaChave].minutos += mins
  })
  return semanas
})

const horasPorTipo = computed(() => {
  const tipos = {}
  atividadesFiltradas.value.forEach(item => {
    const mins = calcularMinutos(item.hora_inicio, item.hora_fim)
    const tipo = item.tipo || 'Outros'
    if (!tipos[tipo]) {
      tipos[tipo] = 0
    }
    tipos[tipo] += mins
  })
  return tipos
})
</script>