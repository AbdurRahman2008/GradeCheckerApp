function gradeCheck(event) {

    event.preventDefault();

    let percentageInput = document.querySelector("#percentageInput").value;
    percentageInput = Number(percentageInput)


    console.log(percentageInput);

    if (percentageInput < 0) {
        console.log("Invalid input. Please enter a percentage between 0 and 100.");
        document.querySelector("#resultWindow").innerHTML = "Invalid input. Please enter a percentage between 0 and 100.";
        
    } else if (percentageInput > 100) {
        console.log("Invalid input. Please enter a percentage between 0 and 100.");
        document.querySelector("#resultWindow").innerHTML = "Invalid input. Please enter a percentage between 0 and 100.";

    } else if (percentageInput < 50) {
        console.log("F You failed")
        document.querySelector("#resultWindow").innerHTML = "Your grade is F (You need to practice more.)"
    
    } else if (percentageInput < 60) {
        console.log("C You can do better")
        document.querySelector("#resultWindow").innerHTML = "Your grade is C (You can do better.)"
    
    } else if (percentageInput < 70) {
        console.log("B Not bad")
        document.querySelector("#resultWindow").innerHTML = "Your grade is B (Not bad, Good!)"

    }  else if (percentageInput < 80) {
        console.log("A Best ")
        document.querySelector("#resultWindow").innerHTML = "Your grade is A (Best work! Keep going.)"    
  
    }  else {
        console.log("A+ Excellent")
        document.querySelector("#resultWindow").innerHTML = "Your grade is A+ (Excellent! Keep it up.)" 
        
    } 

    


}

