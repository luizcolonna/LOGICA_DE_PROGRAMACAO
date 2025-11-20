let nVitoria = 89
let nDerrota = 34
let nSaldo = calculaSaldo(nVitoria, nDerrota)

if(nVitoria <= 10){
	console.log("O Herói tem de saldo de " + nSaldo + " e está no nível de Ferro")
}else if((nVitoria > 10)&&(nVitoria <= 20)){
	console.log("O Herói tem de saldo de " + nSaldo + " e está no nível de Bronze")
}else if((nVitoria > 20)&&(nVitoria <= 50)){
	console.log("O Herói tem de saldo de " + nSaldo + " e está no nível de Prata")
}else if((nVitoria > 50)&&(nVitoria <= 80)){
	console.log("O Herói tem de saldo de " + nSaldo + " e está no nível de Ouro")
}else if((nVitoria > 80)&&(nVitoria <= 90)){
	console.log("O Herói tem de saldo de " + nSaldo + " e está no nível de Diamante")
}else if((nVitoria > 90)&&(nVitoria <= 100)){
	console.log("O Herói tem de saldo de " + nSaldo + " e está no nível de Lendário")
}else{
	console.log("O Herói tem de saldo de " + nSaldo + " e está no nível de Imortal")
}

function calculaSaldo(vitoria,derrota){
	return vitoria - derrota
}