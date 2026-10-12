<script setup lang="ts"></script>

<template>
  <div class="container">
    <form action="#" method="#">
      <div class="form-header">
        <h1>Nova Atividade</h1>
        <p>Preencha os dados para registrar uma nova atividade.</p>
      </div>

      <div class="form-group">
        <label for="atividade">Atividade</label>
        <select name="atividade" id="atividade">
          <option value="#">Ação Técnica</option>
          <option value="#">Reunião</option>
          <option value="#">Orientação</option>
          <option value="#">Estudo</option>
          <option value="#">Produção</option>
          <option value="#">Evento</option>
          <option value="#">Gestão</option>
        </select>
      </div>

      <div class="form-group">
        <label for="data">Data</label>
        <input type="date" name="data" id="data">
      </div>

      <div class="form-group">
        <label>Horário</label>

        <div class="input-row">
          <div class="input-wrapper">
            <span>Início</span>
            <input type="time" name="horario_inicio" id="horario_inicio">
          </div>

          <div class="input-wrapper">
            <span>Fim</span>
            <input type="time" name="horario_fim" id="horario_fim">
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="modalidade">Modalidade</label>
        <select name="modalidade" id="modalidade">
          <option value="#">Presencial</option>
          <option value="#">Remoto</option>
          <option value="#">Híbrido</option>
        </select>
      </div>

      <div class="form-group">
        <label for="territorio">Território</label>
        <input type="text" name="territorio" id="territorio" placeholder="Informe o território">
      </div>

      <div class="form-group">
        <label for="local">Local</label>
        <input type="text" name="local" id="local" placeholder="Informe o local da atividade">
      </div>

      <div class="form-group">
        <label for="acao">Ação Relacionada</label>
        <button class="button-action">Vincular Ação</button>
      </div>

      <div class="form-group">
        <label for="descricao_atividade">
          Descrição da Atividade
        </label>

        <textarea name="descricao_atividade" id="descricao_atividade" rows="5"
          placeholder="Descreva a atividade realizada..."></textarea>
      </div>

      <div class="form-group">
        <label for="evidencias">Evidências</label>

        <input type="file" name="evidencias" id="evidencias">

        <small>
          Adicione documentos ou arquivos que comprovem a atividade.
        </small>
      </div>

      <div class="form-group">
        <label for="responsavel">Enviar para validação</label>

        <select name="responsavel" id="responsavel">
          <option value="#">Administrador</option>
        </select>
      </div>

      <input type="submit" value="Enviar para Validação">
    </form>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background: #f5f7f7;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px 16px;

  background: #ffffff;
  border: 1px solid var(--borda);
  border-radius: var(--raio);

  box-shadow: 0 2px 10px rgba(20, 117, 110, 0.05);
}

.form-header {
  padding-bottom: 16px;
  border-bottom: 1px solid #edf0ef;
}

.form-header h1 {
  margin: 0 0 6px;

  color: var(--texto);
  font-size: 1.35rem;
  font-weight: 650;
}

.form-header p {
  margin: 0;

  color: var(--texto);
  font-size: 0.85rem;
  line-height: 1.4;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.form-group label {
  color: var(--texto);
  font-size: 0.88rem;
  font-weight: 600;
}

select,
input,
textarea {
  box-sizing: border-box;
  width: 100%;

  padding: 12px;

  border: 1px solid #d8dfdd;
  border-radius: 7px;

  background: #ffffff;
  color: var(--texto);

  font-family: inherit;
  font-size: 0.95rem;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

select:focus,
input:focus,
textarea:focus {
  border-color: var(--teal-900);
  box-shadow: 0 0 0 3px rgba(20, 117, 110, 0.1);
}

input::placeholder,
textarea::placeholder {
  color: var(--texto-2);
}

textarea {
  min-height: 120px;
  resize: vertical;
  line-height: 1.5;
}

.input-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input-wrapper span {
  color: var(--texto-2);
  font-size: 0.75rem;
}

input[type="file"] {
  padding: 8px;

  background: var(--teal-50);

  font-size: 0.85rem;
}

input[type="file"]::file-selector-button {
  padding: 7px 10px;
  border: none;
  border-radius: 5px;
  background: var(--teal-50);
  color: var(--teal-900);
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 600;
}

.form-group small {
  color: var(--texto-2);
  font-size: 0.75rem;
  line-height: 1.4;
}

.form-actions {
  margin-top: 4px;
  padding-top: 18px;

  border-top: 1px solid var(--teal-50);
}

input[type="submit"] {
  width: 100%;

  padding: 13px 16px;

  border: none;
  border-radius: 7px;

  background: var(--teal-900);
  color: #FFF;

  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 600;
}

.button-action {
  width: 100%;

  padding: 13px 16px;

  border: none;
  border-radius: var(--raio);

  border: solid 1px var(--teal-900);
  background-color: var(--teal-50);
  color: var(--teal-900);

  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 600;
}
</style>