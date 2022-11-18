window.onload = start()

function start(){

    var animation = 0

    var parImpar = document.getElementById("parImpar")
    var negativoPositivo = document.getElementById("negativoPositivo")
    var elseIf = document.getElementById("elseIf")
    var zwitch = document.getElementById("zwitch")
    var op = document.getElementById("operadorTernario")

    setInterval(()=>{
        switch(animation){
            case 0:
                parImpar.style = "background-color: #171717; color: white"
                break
            case 1:
                negativoPositivo.style = "background-color: #171717; color: white"
                break
            case 2:
                elseIf.style = "background-color: #171717; color: white"
                break
            case 3:
                zwitch.style = "background-color: #171717; color: white"
                break
            case 4:
                op.style = "background-color: #171717; color: white"
                break
            case 5:
                parImpar.style = "background-color: white; color: #171717"
                break
            case 6:
                negativoPositivo.style = "background-color: white; color: #171717"
                break
            case 7:
                elseIf.style = "background-color: white; color: #171717"
                break
            case 8:
                zwitch.style = "background-color: white; color: #171717"
                break
            case 9:
                op.style = "background-color: white; color: #171717"
                break
            default:
                animation = -1
        }//switch
        animation++
    },500)

    var main = document.getElementById("main")

    var text = ""

    parImpar.addEventListener("click",()=>{
        var value = document.getElementById("value").value
        try{
            if(Number(value)%2 == 0) text = "Par"
            else text = "Impar"
        }//try
        catch{
            text = "D:"
        }//catch
        main.innerHTML = print(text)
    })

    negativoPositivo.addEventListener("click",()=>{
        var value = document.getElementById("value").value
        try{
            value = Number(value)
            if(value == 0) text = "Neutro"
            else{
                if(value > 0)text = "Positivo "
                else text = "Negativo "
                if(value % 2 == 0) text += "Par"
                else text += "Impar"
            }//else
        }//try
        catch{
            text = "D:"
        }//catch
        main.innerHTML = print(text)
    })

    elseIf.addEventListener("click", ()=>{
        var value = document.getElementById("value").value
        v2 = value.toUpperCase()
        text = "Puede ser Consonante"
        if(v2 == "A") text = "Vocal"
        else if (v2 == "E") text = "Vocal"
        else if (v2 == "I") text = "Vocal"
        else if (v2 == "O") text = "Vocal"
        else if (v2 == "U") text = "Vocal"
        main.innerHTML = print(text)
    })

    zwitch.addEventListener("click",()=>{
        var value = document.getElementById("value").value
        v2 = value.toUpperCase()
        text = "Puede ser Consonante"
        switch(v2){
            case "A":
            case "E":
            case "O":
            case "U":
                text = "Vocal"
        }//switch
        main.innerHTML = print(text)
    })

    op.addEventListener("click",()=>{
        var value = document.getElementById("value").value
        v2 = value.toUpperCase()
        main.innerHTML = print((v2 == "A" || v2 == "E" || v2 == "I" || v2 == "O" || v2 == "U") ? "Vocal" : "Puede ser Consonante")
    })

}//start

function print(text){
    return '<label class ="outcome">'+text+'</label>'
}//print