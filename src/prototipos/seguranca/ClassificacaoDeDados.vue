<template>
  <h1>Classificação de dados</h1>
  <p class="sub">Campos do formulário de atividade: dado pessoal, risco e cuidado.</p>

  <table class="tabela">
    <thead>
      <tr>
        <th>Campo</th>
        <th>Dado pessoal?</th>
        <th>Risco</th>
        <th>Cuidado necessário</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pessoa</td>
        <td>Sim</td>
        <td>O nome identifica diretamente quem fez a atividade. Se vazar, expõe a pessoa e pode ser usado para avaliar ou comparar indivíduos.</td>
        <td>Usar só nomes fictícios no laboratório. No sistema real, limitar o acesso e coletar só o necessário.</td>
      </tr>
      <tr>
        <td>Data</td>
        <td>Depende</td>
        <td>Sozinha não identifica ninguém. Junto com a pessoa, mostra a rotina e onde ela esteve em cada dia.</td>
        <td>Mostrar de forma agregada (por mês, por exemplo) quando der. Registro individual só para quem precisa.</td>
      </tr>
      <tr>
        <td>Tipo</td>
        <td>Depende</td>
        <td>Em geral é uma categoria geral e de baixo risco. Pode revelar algo sensível se for descritivo demais.</td>
        <td>Usar uma lista fechada de categorias, sem texto livre.</td>
      </tr>
      <tr>
        <td>Horas</td>
        <td>Depende</td>
        <td>Sozinha é só um número. Ligada à pessoa vira dado de desempenho e frequência, e pode afetar bolsa ou certificação se estiver errada.</td>
        <td>Tratar junto com a pessoa, com acesso restrito. Validar limites (por exemplo, de 0 a 24 horas por dia).</td>
      </tr>
            <tr>
        <td>Descrição</td>
        <td>Depende</td>
        <td>É texto livre, então a pessoa pode escrever nomes de terceiros, endereços ou informações de saúde de quem foi atendido. Dado de saúde é dado pessoal sensível na LGPD.</td>
        <td>Orientar a não escrever nomes nem dados de pessoas atendidas. Limitar o tamanho do texto e revisar antes de exibir em página pública.</td>
      </tr>
      <tr>
        <td>Evidência</td>
        <td>Sim</td>
        <td>Foto, lista de presença ou documento podem mostrar rostos, nomes, assinaturas e até a localização (metadados da foto). Se vazar, expõe várias pessoas de uma vez.</td>
        <td>Guardar fora do repositório, com acesso restrito. Aceitar só tipos e tamanhos definidos e remover metadados. No laboratório, usar só arquivos fictícios.</td>
      </tr>
      <tr>
        <td>Território</td>
        <td>Depende</td>
        <td>Município ou região não identifica ninguém. Endereço ou comunidade pequena, junto com data e pessoa, revela onde alguém esteve e pode identificar moradores.</td>
        <td>Usar nível agregado (município ou região) e lista fechada, sem endereço completo.</td>
      </tr>
      <tr>
        <td>Validador</td>
        <td>Sim</td>
        <td>Identifica quem aprovou o registro. Se qualquer um puder validar, ou se a pessoa validar a si mesma, o registro perde confiança.</td>
        <td>Registrar por identificador de usuário, controlar quem pode validar, impedir autovalidação e guardar um histórico de quem aprovou.</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.tabela { border-collapse: collapse; width: 100%; }
.tabela th, .tabela td { border: 1px solid #ccc; padding: .5rem; text-align: left; vertical-align: top; }
.tabela th { background: #f0f0f0; }
</style>