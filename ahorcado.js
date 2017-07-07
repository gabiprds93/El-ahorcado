function imprimirHTML(M)
{
    var n = M.length;
    for (var i = 0; i < n; i++)
    {
        console.log(M[i]); 
    }  
} 

function imprimirMatriz(M)
{
    var n = M.length;
    for (var i = 0; i < n; i++)
    {
        console.log(M[i]); 
    }  
} 

function obtenerPalabraSecreta() 
{
    var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
    "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
    "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
    "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
    "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];
    var indice = Math.round(Math.random() * 27)
    var cadena = new String(libreriaPalabras[indice])
    var palabra = cadena.split(" ")
    return palabra;
}

var hombre = ["________",    
              "   |",   
              "   |",
              "   |",
              "   O",
              "  /|\\",
              "  / \\",
              "         ",
              "         ",
              "________"];

var palabraSecreta = obtenerPalabraSecreta();
//console.log(palabraSecreta);
//imprimirMatriz(hombre);
var caracter = "";
var secreta = [];
var letras = [];
var contador = 0;
for(var i = 0; i < palabraSecreta.length; i++)
{
    secreta.push("*");
}
console.log(secreta.join(""));
var i = 1;
while(contador < hombre.length)
{
    var bandera = false;
    var bandera1 = true;
    if(secreta.join("") != palabraSecreta.join(""))
    {
        while(caracter.length != 1 || bandera1)
        {
            bandera1 = false;
            caracter = prompt("Ingresar una sola letra. Intento numero " + (i));
            for(var l in letras)
            {
                if(caracter == letras[l])
                    bandera1 = true;
            }
        }
        letras.push(caracter);
        console.log("Intento numero " + (i))
        for(var j in palabraSecreta)
        {
            if(caracter == palabraSecreta[j])
            {
                secreta[j] = caracter;
                bandera = true;
            }
        }
        console.log(secreta.join(""));
        if(!bandera)
        {
            contador++;
            for(var k = 0; k < contador; k++)
                console.log(hombre[k]);
        }
    }
    else
    {
        break;
    } 
    i++;
}
    
if(secreta.join("") != palabraSecreta.join(""))
{
    console.log(palabraSecreta.join(""));
    alert("Fin del Juego. Perdiste :´(");
}
else
{
    alert("Fin del Juego. Ganaste! :D");
}