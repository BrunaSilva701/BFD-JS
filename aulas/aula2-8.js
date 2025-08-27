//Calculo de conceito de nota

const entrada = require('prompt-sync') ({sigint:false});

let media = entrada ("Digite sua media: ")

if (media >=9){ 
    console.log("Conceito A")
}else if (media >=7 && media<9){
    console.log("Conceito B")
}else if (media >=5 && media <7){
    console.log("Conceito C")
}else {
    console.log("Conceito D")
}