/*

Gör en funktion som tar emot en fras som parameter och returnerar true (boolskt, inte sträng eller annat) om strängen är ett palindrom eller false om den inte är det.

https://sv.wikipedia.org/wiki/Palindrom

https://medium.com/better-programming/5-ways-to-reverse-a-string-in-javascript-466f62845827

Lägg märke till att ni måste hantera mellanslag. "Ni talar bra latin" är t ex ett palindrom. Ni behöver bara hantera små bokstäver.

*/

function is_palindrome(str) {
    //First turn the string to lowercase and get rid of all spaces 
    let no_space_str = str.toLowerCase().split(" ").join("")
    
    //Then find the middle point index for the second half of the string
    //this will work regardless whether the string has an even or odd length
    let index = (no_space_str.length/2)+(no_space_str.length%2)

    //Now I jusr write the two halves 
    let str_first_half = no_space_str.slice(0,no_space_str.length/2);
    let str_second_half = no_space_str.slice(index,str.length);

    //Reverse according to the Medium post reference in the comments
    let str_second_half_reverse = str_second_half.split("").reverse().join("");
    
    //This ternary operator returns true only if the two halves are the same
    return str_first_half === str_second_half_reverse ? true : false

}

let test_string = 'Socorram me subi no onibus em Marrocos';
if ( is_palindrome( test_string ) ) {
    console.log( test_string + " is a palindrome" );
} else {
    console.log( test_string + " is NOT a palindrome" );
}
is_palindrome(test_string)
