<template>
  <div class="p-6 max-w-4xl mx-auto space-y-6">
    <h1 class="text-3xl font-bold text-gray-800 border-b pb-2">Glossário do Projeto</h1>
    <p class="text-gray-600">Termos fundamentais e conceitos utilizados no ecossistema do HUB PET-Saúde Clima.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="(item, index) in termos" :key="index" class="p-4 bg-white rounded-lg shadow border border-gray-100">
        <h2 class="text-lg font-semibold text-emerald-700 capitalize">{{ item.termo }}</h2>
        <p class="text-sm text-gray-700 mt-1"><strong>Definição:</strong> {{ item.definicao }}</p>
        <p class="text-xs text-gray-500 mt-2 italic"><strong>Exemplo:</strong> {{ item.exemplo }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
const termos = [
  // 12 Termos exigidos no enunciado
  {
    termo: "1. Meta",
    definicao: "Indica um objetivo ou alvo a ser alcançado",
    exemplo: "Nossa meta é mapear 100% das áreas de risco de calor extremo no município até o fim do ano."
  },
  {
    termo: "2. Indicador",
    definicao: "medidas quantitativas ou qualitativas usadas para avaliar, monitorar e analisar o desempenho de processos, projetos, empresas ou cenários econômicos e sociais",
    exemplo: "Um indicador, por exemplo, é o percentual de unidades de saúde com plano de contingência para ondas de calor."
  },
  {
    termo: "3. Ação",
    definicao: "É qualquer comportamento, movimento ou realização de uma atividade.",
    exemplo: "Campanha de conscientização sobre hidratação para idosos e criaças durante o verão."
  },
  {
    termo: "4. Atividade",
    definicao: "É a capacidade ou o resultado de agir e realizar uma tarefa, trabalho ou movimento.",
    exemplo: "Panfletagem na praça central do bairro para informar a população sobre os riscos de desidratação e insolação."
  },
  {
    termo: "5. Evidência",
    definicao: "Significa aquilo que é claro, manifesto e incontestável, não deixando margem para dúvidas",
    exemplo: "Foto da reunião com a comunidade e lista de presença assinada."
  },
  {
    termo: "6. Validação em Lote",
    definicao: "É a comprovação técnica de que um processo de fabricação ou um novo lote de insumos (como reagentes ou matérias-primas) gera consistentemente produtos dentro dos padrões de qualidade e normas exigidas.",
    exemplo: "A validação de lote garante que cada nova remessa de vacinas mantenha exatamente a mesma eficácia e segurança do imunizante original."
  },
  {
    termo: "7. Território",
    definicao: "É uma porção do espaço geográfico delimitada por relações de poder, controle ou domínio, podendo ser definida por fronteiras políticas, sociais ou culturais.",
    exemplo: "Bairro caracterizado como ilha de calor urbana."
  },
  {
    termo: "8. Linha de Base ou baseline",
    definicao: "É a versão oficial e aprovada do planejamento inicial de um projeto, que serve como referência para medir o progresso e o desempenho ao longo do tempo.",
    exemplo: "A taxa de internações por desidratação em 2023 antes das ações do PET."
  },
  {
    termo: "9. Numerador",
    definicao: "O valor superior de uma fração no cálculo de um indicador, representando os casos de interesse.",
    exemplo: "Número de UBS com hortas comunitárias ativas (15)."
  },
  {
    termo: "10. Denominador",
    definicao: "O valor inferior da fração no cálculo de um indicador, representando o total pesquisado.",
    exemplo: "Número total de UBS cadastradas no município (20)."
  },
  {
    termo: "11. Eixo",
    definicao: "Categoria temática principal que estrutura e organiza as frentes de trabalho do programa.",
    exemplo: "Eixo 1: Vigilância em Saúde e Eventos Climáticos Extremos."
  },
  {
    termo: "12. HUB",
    definicao: "Plataforma centralizadora que integra dados, ações e participantes do PET-Saúde Clima.",
    exemplo: "O sistema web onde gestores e estudantes registram os relatórios municipais."
  },

  // 8 Termos extraídos diretamente das metas dos grupos no site
  {
    termo: "13. APS (Atenção Primária à Saúde)",
    definicao: "Porta de entrada do SUS responsável pelos cuidados básicos e contínuos de saúde da comunidade.",
    exemplo: "Integração das equipes de saúde da família para identificar pacientes sensíveis ao calor."
  },
  {
    termo: "14. Arboviroses",
    definicao: "Doenças virais transmitidas por insetos vetores, como dengue, zika e chikungunya.",
    exemplo: "Mapeamento de áreas de risco para proliferação de focos após chuvas intensas."
  },
  {
    termo: "15. Georreferenciamento",
    definicao: "Mapeamento de dados associando informações de saúde a coordenadas geográficas específicas.",
    exemplo: "Plotagem dos pontos críticos de incidência de escorpiões no mapa digital do município."
  },
  {
    termo: "16. Agravos Climáticos",
    definicao: "Doenças ou danos à saúde desencadeados ou intensificados por eventos meteorológicos extremos.",
    exemplo: "Aumento de problemas respiratórios decorrentes da seca e queimadas na região."
  },
  {
    termo: "17. Dashboard",
    definicao: "Painel visual interativo que centraliza dados e indicadores para suporte à decisão.",
    exemplo: "Tela gerencial que exibe a taxa de acompanhamento de usuários vulneráveis."
  },
  {
    termo: "18. Proliferação Vetorial",
    definicao: "Aumento na reprodução e espalhamento de organismos transmissores de enfermidades.",
    exemplo: "Monitoramento de locais propícios à reprodução de mosquitos em períodos de ondas de calor."
  },
  {
    termo: "19. PET",
    definicao: "Programa de Educação Tutorial, é um programa acadêmico do Governo Federal brasileiro, vinculado ao Ministério da Educação (MEC), que apoia grupos de estudantes de graduação sob a tutoria de um professor. O programa baseia-se na indissociabilidade entre os três pilares da universidade: ensino, pesquisa e extensão.",
    exemplo: "O PET-Saúde Clima atua na integração de estudantes e profissionais de saúde para enfrentar os desafios das mudanças climáticas."
  },
  {
    termo: "20. Vigilância Epidemiológica",
    definicao: "Coleta e análise contínua de dados de saúde para o planejamento de medidas de prevenção.",
    exemplo: "Emissão de relatórios periódicos sobre agravos respiratórios atendidos na rede pública."
  }
];
</script>