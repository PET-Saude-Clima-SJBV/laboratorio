<template>
  <div class="p-6 max-w-3xl mx-auto space-y-6">
    <h1 class="text-3xl font-bold text-gray-800 border-b pb-2">Dificuldades de Instalação</h1>
    <p class="text-gray-600">Registro dos problemas encontrados ao configurar o ambiente e como foram resolvidos.</p>

    <div class="space-y-4">
      <div class="p-4 bg-white rounded-lg shadow border-l-4 border-amber-500">
        <h2 class="font-bold text-gray-800">1. Erro do Git não reconhecido</h2>
        <p class="text-sm mt-2 text-gray-600"><strong>Problema:</strong> O terminal exibiu a mensagem de que o termo 'git' não era reconhecido como um comando válido.</p>
        <p class="text-sm text-emerald-700 mt-1"><strong>Solução:</strong> Instalei o Git pelo site oficial e reiniciei o VS Code para que o terminal identificasse o programa.</p>
      </div>

      <div class="p-4 bg-white rounded-lg shadow border-l-4 border-amber-500">
        <h2 class="font-bold text-gray-800">2. Bloqueio de scripts no PowerShell</h2>
        <p class="text-sm mt-2 text-gray-600"><strong>Problema:</strong> Erro de segurança ao rodar `npm install` porque a execução de scripts estava desabilitada no sistema.</p>
        <p class="text-sm text-emerald-700 mt-1"><strong>Solução:</strong> Abri o PowerShell como administrador e executei o comando `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` para liberar o acesso.</p>
      </div>

      <div class="p-4 bg-white rounded-lg shadow border-l-4 border-amber-500">
        <h2 class="font-bold text-gray-800">3. Erro ENOENT ao instalar dependências</h2>
        <p class="text-sm mt-2 text-gray-600"><strong>Problema:</strong> O `npm install` falhou acusando que não encontrava o arquivo `package.json`.</p>
        <p class="text-sm text-emerald-700 mt-1"><strong>Solução:</strong> O terminal estava na pasta do usuário. Usei o comando `cd laboratorio` para entrar na pasta correta do projeto antes de rodar a instalação.</p>
      </div>
    </div>
  </div>
</template>