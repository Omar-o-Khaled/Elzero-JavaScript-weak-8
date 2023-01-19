/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/

function showDetails(a,b,c){
    let showArray=[a,b,c].sort();
    for(let i=0;i<showArray.length;i++){
        (typeof showArray[i]==="string")?
        a=showArray[i]:
        (typeof showArray[i]==="number")?
        b=showArray[i]:
        c=showArray[i],
            c===true? c=" You Are Available For Hire" : c=" You Are Not Available For Hire";
        }
        document.write(`<div>Hello ${a}, Your Age Is ${b}, ${c}</div>`);
    }

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

