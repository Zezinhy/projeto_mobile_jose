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

//function Mostrarpares(){
  //const tabela = document.getElementyById('tabelaValores').getElementyById('tbody')[0];

  //for (let i = 0; i < vetor.length; i++) {
  //const valor = valor = vetor[i];
  //if (valor % 2 === 0){
    //const linha = tabela.insertRow();
    //const celula = linha.insertCell(0);
    //celula.textContent = valor;
// }
//}
//}
