function calcul_moyenne() {
    var n1 = prompt("donner la première note : ");
    var n2 = prompt("donner la deuxième note :");
    var n3 = prompt("donner la troisième note :");
    var somme = Number(n1) + Number(n2) + Number(n3);
    document.write("voici la somme : " + somme + "<br>");
    var moyenne = somme / 3;
    document.write("voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("redoublant");
    }
    else if (moyenne < 12) {
        document.write("admis - Mention Passable");
    }
    else if (moyenne < 14) {
        document.write("admis - Mention Bien");
    }
    else {
        document.write("admis - Mention Très bien");
    }
}

function température() {
    var temp = prompt("donner la température en °C : ");
    if (temp < 10) {
        document.write(Froid)
    }
    else if (temp < 25) {
        document.write("Normal");
    }
    else if (temp >= 25) {
        document.write("Chaud");
    }
}

function comparaison_nbr() {
    var a = prompt("saisir un premier nombre :")
    var b = prompt("saisir un deuxième nombre :")
    if (a < b) {
        document.write("le nombre " + b + " est plus grand que le nombre " + a + ".")
    }
    else if (a > b) {
        document.write("le nombre " + a + " est plus grand que le nombre " + b + ".")
    }
}

function devine() {
    var chiffresecret = Math.floor(Math.random() * 20) + 1;
    var nombre = prompt("Saisir un nombre entre 1 et 20 : ");
    if (chiffresecret < nombre); {
        document.write("Votre chiffre est inférieur au chiffre secret !")
    } 
else if (chiffresecret > nombre); {
        document.write("Votre chiffre est supérieur au chiffre secret !")
    }
else if (chiffresecret == nombre); {
        document.write(Félicitations! Vous avez trouvé le chiffre secret!)
    }
}