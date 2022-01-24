var data = new Date();

var dia = String(data.getDate()).padStart(2,'0');
var mes = String(data.getMonth()+1).padStart(2,'0');
var ano = data.getFullYear();

var dataAtual = dia+"/"+mes+"/"+ano;
console.log(dataAtual)

document.getElementById('inputDate').value = dataAtual;

console.log(data)