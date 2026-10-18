<script setup lang="ts"></script>

<template>
  <h1>Engenharia de Software - UNIFAE</h1>

  <h2>O que eu quero aprender com o projeto</h2>

  <p>Durante minha participação no PET Saúde Clima, meu principal foco de aprendizado e aprofundamento técnico está voltado para o Desenvolvimento Web. Além disso, busco evoluir do conhecimento teórico para a aplicação prática de DevOps, compreendendo como aplicar essas rotinas no ciclo real de desenvolvimento. Também tenho grande interesse em adquirir e expandir meus conhecimentos em Cloud Computing e Automação.</p>

  <p>No contexto do projeto, quero vivenciar essa experiência interdisciplinar para entender como posso aplicar a tecnologia para transformar a saúde pública, além de compreender melhor como as mudanças climáticas impactam e influenciam a saúde da população.</p>

  <h2>Até terça se possível, 20/10:</h2>
  
  <table border="1">
    <thead>
      <tr>
        <th>Atividade</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="container">
            Criar a página <code>Apresentacao.vue</code> na sua pasta, com nome, curso, área e o que quer aprender no projeto.
          </div>
        </td>
        <td>
          <div class="container">
            <span class="circle-ok"></span> OK
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="container">
            Fazer alteração do mesmo arquivo: ver o histórico com <code>git log</code> e <code>git diff</code>, e desfazer uma mudança com <code>git restore</code>.
          </div>
        </td>
        <td>
          <div class="container">
            <span class="circle-ok"></span> OK
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="container">
            Na pasta acoes-e-atividades, criar validarAtividade.ts com o tipo Atividade e as 2 primeiras regras (tipo dentro da lista oficial e horas entre 0,5 e 12). Criar também o contrato-atividade.md com os campos que a API vai receber.
          </div>
        </td>
        <td>
          <div class="container">
            <span class="circle-ok"></span> OK
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
code {
  background-color: var(--cinza);
  color: var(--texto);
  padding: 4px;
  border-radius: 4px;
}

.container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.circle-ok {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: green;
  border-radius: 50%;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table thead {
  color: #FFF;
  background-color: var(--teal-700);
}

table td,
table th {
  padding: 10px;
  border: solid 1px var(--teal-700);
  vertical-align: middle;
}

table td:last-child {
  white-space: nowrap;
}
</style>