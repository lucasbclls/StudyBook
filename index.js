onload= alert(`Hello, eu sou a rocha virtual`);

function touchRock () {
    let userName = prompt("Qual é o seu nome ?")

    if(userName) {
        alert("Prazer em conhecer voce, " + userName + ".")
        document.getElementById("irock").src = "./images/irockHappy.png"
    }
    
}

