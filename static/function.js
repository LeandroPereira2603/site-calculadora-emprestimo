

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


// Anúncio: localiza e exibe financeiras locais, mas ignora erros 

try{
    // Captura quaisquer erros que ocorram dentro destas chaves 
    getLenders(amount.value, apr.value, years.value,zipcode.value);
}
catch(e){
    /* E igora esses erros */ 
    // Por fim , traça o gráfico do aldo devedoor , dos juros e sos pagamentos capital
    Chart(principal,interest,monthly,payments);
}
else{
      // O resultado foi Not-a-Number ou infinito, o que significa
      // estava incompleta ou era inválida.Apaga qualquer saída exibida a 
    payment.innerHTML = ""; // Apaga o conteúdo desses elementos
    total.innerHTML =""
    totalinterest.innerHTML ="";
    chart(); // Sem argumentos, apaga o gráfico 

}

// Salva a entrada do usuário como propriedades do objeto localStorage. Essas
// propriedades ainda existirão quando o usuário visitar no futuro
// Esse recurso de armazenamento não vai funcionar em alguns navegadores ( o Firefox, por )
// exemplo), se voce executar o exemlo a partir de um arquivo local : // URL. Contudo,
// funciona com HTTP .

function dave( amount, apr,years,zipcode){
    if(window.localStorage){ // Só faz isso se o navegador suportar
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
         
    }
}

// Tenta restaurar os campos de entrada automaticamente quando o documento é carregado 
// pela primeira vez .

window.onload = function(){
    
    // Se o navegador suporta localStorage e temos alguns dados armazenados 

if ( window.localStorage && localStorage.loan_amount){
    document.getElementById("amount").value = localStorage.loan_amount;
    document.getElementById("apr").value = localStorage.loan_apr;
    document.getElementById("years").value = localStorage.loan_years;
    document.getElementById("zipcode").value = localStorage.loan_zipcode;
}

// Passa a entrada do usuário para um script no lado do servidor quando 
// retornar 
// uma lista de links para financeiras locais interessadas em fazer 
// exemplo não contém uma implementação real desse serviço de busca 
// se o serviço existissse , essa função funcionaria com ele .

function getLenders(amount, apr, years,zipcode){

    // Se o navehador não suporta o objeto XMLHttpRequest, não faz
if (!window.XMLHttpRequest) return ;
}


}