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
    </tbody>
  </table>
</template>

<style scoped>
.tabela { border-collapse: collapse; width: 100%; }
.tabela th, .tabela td { border: 1px solid #ccc; padding: .5rem; text-align: left; vertical-align: top; }
.tabela th { background: #f0f0f0; }
</style>