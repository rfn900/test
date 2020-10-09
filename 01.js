/*

- Lös FizzBuzz-problemet* för talen 0-100.
- Spara alla värden i en array i en array som heter fizzbuzz.
- Skriv ut arrayen.

FizzBuzz är ett elementärt programmeringsproblem där man skriver ut tal i en talserie. Om det aktuella talet är jämnt delbart med 3 skriver man ut Fizz, är det jämnt delbart med 5 skriver man ut Buzz, är det jämnt delbart med båda skriver man ut FizzBuzz och annars skriver man ut talet. I detta fall skriver ni alltså dock inte ut värdet utan sparar det i arrayen och skriver ut arrayen när ni är klara.

*/
let fizzbuzz = []

for (N =1; N<=100; N++){

    if (N%3 == 0 && N%5 == 0){
        fizzbuzz.push("FizzBuzz");
    }
    else if (N%5 == 0){
        fizzbuzz.push("Buzz");
    }
    else if (N%3 == 0){
        fizzbuzz.push("Fizz");
    }
    else {
        fizzbuzz.push(N);
    }
}

console.log(fizzbuzz)
