function checkStatus(a, b, c) {
    let arr=[a,b,c];
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]=="string"){
            a=arr[i];
        }else if(typeof arr[i]=="boolean"){
            if(arr[i]==true){
                c="You Are Available For Hire";
            }else{
                c="You Are Not Available For Hire";
            }
        }else{
            b=arr[i]
        }
    }
    document.write(`<div>Hello ${a}, Your Age Is ${b}, ${c}</div>`)
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"