function anos(idade) {
    const dias = (idade * 365)
    if(idade<0) {
        console.log("tenho quase certeza que essa não é a sua idade.")
    }
    else if(idade>0) {
        console.log("você tem",dias,"dias de vida")
    }
}
console.log(anos())