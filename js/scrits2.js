document.write("<h1>Executando script 2.js</h1>");
document.write("<p>Esse scrit esta em um arquivo externo</p>");
document.write("<p>Referenciado no fim do body do HTML</p>");

function mudarCor(novaCor) {
        var x = document.getElementById("demo");
        x.style.color = novaCor;
}