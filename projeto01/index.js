let exp = 10001;
let nomeHeroi = "Luiz";
let classificacao = "Ferro";

if (exp <= 1000){
    classificacao = "Ferro";
}else if ((exp > 1000) && (exp <= 2000)) {
    classificacao = "Bronze";
}else if ((exp > 2000) && (exp <= 5000)){
    classificacao = "Prata";
}else if ((exp > 5000) && (exp <= 7000)){
    classificacao = "Ouro";
}else if ((exp > 7000) && (exp <= 8000)){
    classificacao = "Platina";
}else if ((exp > 8000) && (exp <= 9000)){
    classificacao = "Ascendente";
}else if ((exp > 9000) && (exp <= 10000)){
    classificacao = "Imortal";
}else{
    classificacao = "Radiante";
}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + classificacao);