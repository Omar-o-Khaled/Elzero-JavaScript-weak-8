function ageInTime(theAge) {
    if( theAge>10 && theAge<100 ){
        console.log(`${theAge*12} Months`)
        console.log(`${theAge*12*4} Weeks`)
        console.log(`${theAge*12*4*7} Days`)
        console.log(`${theAge*12*4*7*24} hours`)
        console.log(`${theAge*12*4*7*24*60} min`)
        console.log(`${theAge*12*4*7*24*60*60} sec`)
    }else{
        console.log("Age Out Of Range")
    }
    // Your Code Here
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(23); // Months Example => 456 Months