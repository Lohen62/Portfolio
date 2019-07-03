var nombre = Math.floor(Math.random()*100+1);

console.log(nombre);

function click2(){
    
    var texte = document.getElementById("texte").value;
    document.getElementById("texte").value="";
    var chaudfroid = document.getElementById("chaudoufroid");
    var victoire = document.querySelector("Body");

    var resultat = nombre-texte
             if (resultat < 0){
        resultat = resultat*-1;
        
             }

    
    
    if (resultat == 0) 
    { var p = document.querySelector("#chaudoufroid")
      victoire.style.backgroundImage= 'url("img/chat.gif")';
      p.innerHTML = ("VICTOIRE BRUTAL !!!")
    }
    else if (resultat >10 && resultat <=25 ){
      var p = document.querySelector("#chaudoufroid");
    p.innerHTML = ("chaud");

  }
    else if (resultat<=10){
      var p = document.querySelector("#chaudoufroid");
      p.innerHTML = ("t'es chaud bouillant");
  }else if (resultat>25 && resultat <=50){
    var p = document.querySelector("#chaudoufroid");
     p.innerHTML = ("tu refroidit ");
  }
    else {
      var p = document.querySelector("#chaudoufroid");
        p.innerHTML = ("t'es gelée la ! ");
    }

console.log(texte);
}

