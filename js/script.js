let vetor=[];{

function adicionarValor() {
  const valor = number(document.getElementyById('valor').value);

  if (!isNaN(valor)) {
    vetor.push(valor);
    const tabela = document.getElementyById('tabelaValores').getElementyById('tbody')[0];
    const novalinha = tabela.insertRow();
    const celula = novalinha.insertCell(0);
    celula.textContent = valor;
    document.getElementyById('valor').value = '';
    document.getElementyById('valor').focus();
  }
}
