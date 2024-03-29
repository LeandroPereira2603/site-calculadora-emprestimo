

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

save(amount.value,apr.value,years.value,zipcode.value);




// Anúncio: localiza e exibe financeiras locais, mas ignora erros 

try{
    // Captura quaisquer erros que ocorram dentro destas chaves 
    getLenders(amount.value, apr.value, years.value,zipcode.value);
}
catch(e){ /* E igora esses erros */ 
    // Por fim , traça o gráfico do aldo devedoor , dos juros e sos pagamentos capital
    Chart(principal,interest,monthly,payments);

}

}

else {
      // O resultado foi Not-a-Number ou infinito, o que significa
      // estava incompleta ou era inválida.Apaga qualquer saída exibida  
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

// Localiza o elemento para exibir a lista de financeiras

var ad = document.getElementById("lenders");
if(!ad) return; // Encerra se não há pponto de saida 
// Codifica a entrada do usúario com paramêtros de consulta em um URL
var url = "getLenders.php" + // Url do serviço mais
    "?amt=" + encodeURIComponent(amount) +  // dados do usuário na string de consulta 

    "&apr=" + encodeURIComponent(apr) +
    "&yrs=" + encodeURIComponent(years) +
    "&zip=" + encodeURIComponent(zipcode);


   // Busca o coneúdo  desse URL usando o objeto XMLHttpRequest

   var req = new XMLHttpRequest(); // Inicia um novo pedido

   req.open("GET", url);  // Um pedido GET da HTTP para o url 
   reqq.send(null);      // Envia o pedido sem corpo 


   // Antes de retornar , registra uma função de rotina de tratamento de evento que sera 
   // chamada em um momento posterior, quandoa resposta do servidor, de HTTP chegar,
   // Esse tipo de programação assincrona e muito comum em javascript do lado do 
   // cliente

   req.onreadystatechange = function (){
    if ( req.readyState == 4 && req.status == 200){
        // Se chegamos até aqui , obtivemos uma resposta HTTP válida e completa
        var response = req.responseText; // Resposta HTTP cpmp string
        var lenders = JSON.parse(ressponse); //Analisa em um array JS
        
        // Converte o array de objetos lender em uma string HTML 
        var list ="";
        for(var i = 0;i < lenders.lenght; i++){
            list += "<li> <a href="+lenders[i].url +">" +
            lenders[i].name +"</a>";
        }
        // Exibe o código HTML no elemento acima.
        ad.innerHTML = "<ul>" + list +"</ul>";
    }
   }

}

// Faz o gráfico do saldo devedor mensaç, dos juros e do capitaç em um elemento <canvas> 
// da HTML .
// Se for chamado sem argumentos, basta apagar qualquer gráfico desenhado anteriormente, 

function chart(principal, interest, monthly , payments){
    var graph = document.getElementById("graph"); // Obtém a marca <canvas>
    graph.width = graph.width; // Mágica para apagar e redefinir o elemento
    // canvas
    // Se chamamossem argumentos ou se esse navegador não suporta
    // elementos gráficos em um elemento <canvas>, basta retornar agora,

    if (arguments.length == 0 || !graph.getContext) return;


    // Obtem o objeto "contexto" de <canvas> que define API de desenho 
    var g = graph.getContext("2d"); // Todo desenho é feita com esse objeto
    var width = graph.width, height = graph.height; // Obtém o tamanho da tela de // desenho
}

// Essas funcões convetem números de pagamento e valores monetários em pixels

function paymentTox(n) { return n * width/payments;}
function amountToy(a) { return height-(a * height /(montly*payments*1.05));}

// Os pagamentos são uma linha de (0,0) a (payments, montly*payments)

g.moveTo(paymentTox(0), amountToy(0)); // Começa no canto inferior esquerdo
g.lineTo(paymentToX(payment),
amountToy(montly*payments));
g.lineTo(paymentToX(payments), amountToy(o));  // Para baixo , até o canto

g.closePath();                              // inferior direto
g.fillStyle = "#f88";                       // Vermelho - claro
g.fill();                                   // Preenche o triângulo
g.font = "bold 12px sans-serif";            // Define uma fonte
g.fillText("Total Interest Payments", 20,20);    // Desenha texto na legenda 

// O capital acumulado não é linear e é mais complicado de repreentar no gráfico  
var equity = 0;                             // inicia uma nova figura 
g.beginPath();                               // cOMEÇANDO NO CANTO INFERIOR 
g.moveTo(paymentToX(0), amountToY(0));      // ESQUERDO


for ( var p = 1;p <= payments; p++){

    // Para cada pagamento, descobre quanto é o juro

    var thisMonthsInterest = (principal-equity)*interest; equity += (monthly - thisMonthsInterest);        // O resto vai para o capital 
    g.lineTo(paymentTox(p),amountToY(equity));  // Linha até este ponto 

}

g.lineTo(paymentToX(payments), amountToY(0));  // Linha de volta para o eixo X 
g.closePath();                                 // E VOLTA para o ponto inicial 
g.fillStyle ="green";                          // Agora usa tinta verde 
g.fill();                                      // E preenche a área sob a curva 
g.fillText("Total Equity ", 20,35);            // Rotulo em verde 


// Faz laço novamente , como acima , mas representa o saldo devedor como uma linha 
// preta grossa no gráfico .

var bal = principal ;
g.moveTo(paymentTox(0).amountToY(bal));
for(var p = 1; p <= payments;p++){
    var thisMonthsInterest = bal*interest;
    bal -= (montly - thisMonthsInterest);    // O resto va para o capitaç
    g.lineTo(paymentTox(p),amountToy(bal));  // Desenha a linha até esse ponto 

}
g.lineWidth = 3;                            // Usa uma linha grossa 
g.stroke();                                 // Desenha a curvaa do saldo 
g.fillStyle ="black";                       // Troca para texto preto 
g.fillText("Loan Balance", 20, 50);         // Entrada da legenda     


// Agora faz marcaçôes anuais e os números de ano no eixo x 

g.textAlign="center";                       // Centraliza o texto nas 

var y = amountToy(0);


for(var year = 1; year*12 <= payments;years++){   // Coordenas y do eixo x
    var x = paymentTox(year*12);                  // Para cada ano
    g.fillReact(x-0.5,y-3,1,3);                   // Calcula a posição da marca 
    if(year == 1) g.fillText("year", x, y-5);      // Rotula o eixo 
}

}
}


