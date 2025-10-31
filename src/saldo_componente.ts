let saldo = 3000;
alert ("testando ts");
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if(elementoSaldo != null){
    elementoSaldo.textContent = saldo.toString();
}