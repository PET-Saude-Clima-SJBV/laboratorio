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
  "horas": 4.5
}