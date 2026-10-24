# Contrato de API - Atividade

Este documento especifica o contrato de dados (payload) esperado pela API para o cadastro e validação de atividades do projeto.

## Endpoint
- **Método:** `POST`
- **Rota:** `/api/acoes-e-atividades`

---

## Estrutura do Objeto

| Campo | Tipo | Obrigatório | Regras e Validações |
| :--- | :--- | :--- | :--- |
| `tipo` | `string` | Sim | Deve pertencer estritamente à lista oficial de tipos permitidos. |
| `horas` | `number` | Sim | Representa o total de horas dedicadas. Deve ser um valor numérico entre **0,5** e **12**. |
| `descricao` | `string` | Sim | Texto descritivo da atividade realizada. Deve conter no mínimo **20** caracteres. |
| `semana` | `number` | Sim | Número da semana em que a atividade ocorreu. Deve estar entre **1** e **104**. |
| `evidencia` | `string` | Sim | Link ou URL de comprovação. Deve iniciar obrigatoriamente com `http://` ou `https://`. |

---

## Lista Oficial de Tipos Permitidos
O campo `tipo` aceita apenas os seguintes valores textuais:
- `Ação Técnica`
- `Reunião`
- `Orientação`
- `Estudo`
- `Produção`
- `Evento`
- `Gestão`

---

## Exemplo de Requisição (JSON Válido)

```json
{
  "tipo": "Estudo",
  "horas": 4.5,
  "descricao": "Participação extensiva no estudo prático de TypeScript e Vue para componentização avançada.",
  "semana": 5,
  "evidencia": "http(s)://github.com/projeto/evidencia"
}