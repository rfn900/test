/*

Gör en funktion: get_average_sum. Funktionen ska ta emot en array som parameter och räkna ut genomsnittet och summan av talen du skickade in och returnera de två svaren till den som anropar metoden. Du ska returnera svaren som ett objekt med egenskaperna average och sum. Du ska inte skriva någon klass utan bara returnera ett "fristående" objekt.

Du måste använda en reduce-funktion.

Anropa get_average_sum och skicka med en array med 2 till 10 heltal. Kontrollera antalet tal och returnera false om antalet tal är fel eller om ett värde inte är ett heltal.

Skriv kod som anropar get_average_sum, sparar resultatet i en variabel och skriver ut båda värdena.

OBS! get_average_sum-funktionen i sig får inte innehålla utskrifter, utskriften ska ske utanför funktionen.

Exempel på värden och deras svar:

1, 2, 3 ger average=2 och sum=6
4, 5, 6, 7 ger average=5,5 och sum=22
-1, 2, 18 ger average=6,333 och sum=19

*/

function get_average_sum(arr) {
    //Test all elements to see if they are all of type "number" using the filter function
    if (arr.filter(nbr => typeof(nbr) != "number").length > 0){
        return false;
    }
  
    //Test array's length 
    if (arr.length < 2 || arr.length > 10){
        return false;
    }

    //Initialize the object we will use to store the results
    let answer = {
        sum : 0,
        average: 0
    }

    //Calculate sum and average using reduce
    answer.sum = arr.reduce((accum, currentValue) => (accum + currentValue));
    answer.average = answer.sum/arr.length;

    return answer;
}


let arr = [4,2,1811];


if (get_average_sum(arr)) {
    let sum = get_average_sum(arr).sum;
    let average = get_average_sum(arr).average;
    console.log(sum, average)
}else console.log("Array not valid: Must contain between 2 and 10 integers!")