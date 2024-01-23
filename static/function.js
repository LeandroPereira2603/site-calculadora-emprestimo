

function calculate(){
// Pesquisa os elementos de entrada e saída no documento.
var amount = document.getElementById("amount");
var apr = document.getElementById("apr");
var years = document.getElementById("years");
var zipcode = document.getElementById("zipcode");
var payment = document.getElementById("payment");
var total = document.getElementById("total");
var totalinterest = document.getElementById("totalinterest");

// Obtém a entrada do usuário através dos elementoss de entrada. Presume que tudo isso.
// é válido.
// Converte os juros de porcentagem para decimais e converte de taxa 
// anual para taxa mensal .Converte o periodo de pagamento em anos 
// para o número de pagamentos mensais .

var principal = parseFloat(amount.value);
var interest = parseFloat(apr.value) / 100 / 12 ;
var payments = parseFloat(years.value) * 12;

// Agora calcula o valor do pagamento mensal .

var x = Math.pow(1 + interest,payments); // Math.pow() calcula potências 
var montly = (principal*x*interest)/(x-1);

// Se o resultado é um número finito , a entrada do usuário estava correta e 
// Temos resultados significativos para exibir 

if(isFinite(monthly)){

// Preenche os campos de saída, arrendondando para 2 casas decimais 

payment.innerHTML = monthly.toFixed(2);
total.innerHTML = (monthly * payments).toFixed(2);
totalinterest.innerHTML = (( montly*payments)-principal).toFixed(2);

// Salva a entrada do usuário para que posamos recuperá-la maprocima vez que 
// ele visitar

save(amount.value,apr.value,years.value,zipcode.value)
};

}