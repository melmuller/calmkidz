// Define uma variável e uma função para atualizar seu valor.

// Declaração da variável 'account' e inicialização com 'null'.
// O uso de 'let' permite que o valor de 'account' seja modificado posteriormente.
export let account = null;

// A função 'setAccount' recebe um novo valor e o atribui à variável 'account'.
// A função é exportada, o que permite que seja usada em outros módulos.
export function setAccount(newAccount) {
  account = newAccount;
}