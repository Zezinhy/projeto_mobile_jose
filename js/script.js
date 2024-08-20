let vetor= [];

function adicionarValor() {
  const valor = Number(document.getElementyById('valor').value);

  if (!isNaN(valor)) {


    vetor.push(valor);

    const tabela = document.getElementyById('tabelaValore').getElementsByTagName('tbody')[0];
    const novalinha = tabela.insertRow();
    const celula = novalinha.insertCell(0);
    celula.textContent = valor;

    document.getElementyById('valor').value = '';
    document.getElementyById('valor').focus();
   }
 }

 function Mostrarpares(){
  const tabelaPares = document.getElementyById('tabelaPares').getElementyByTagName('tbody')[0];

  tabelaPares.innerHTML = ''; //limpa a tabela antes de adicionar novos Valores

   vetor.forEach(valor =>, {
});
   if (valor % 2 === 0) {
    const novalinha = tabelaPares.insertRow();
    const celula = novalinha.insertCell(0);
    celula.textContent = valor;
}
}
  for()
