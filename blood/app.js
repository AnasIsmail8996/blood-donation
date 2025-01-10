

function CheckedDonateFor(){
    let userName= document.getElementById('name').value.trim();
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    let bloodGroup= document.getElementById('blood').value.trim().toUpperCase();

    userName.value = "";
    bloodGroup.value ="";
    let result= "";
     
   

  if(userName === "" || bloodGroup === ""){
    Swal.fire({
        title: "Error!",
        text: "Please enter your Name & Blood Group.",
        icon: "question"
      }); 
  }else if(userName === userName.value){
        Swal.fire({
            title: "Error!",
            text: "Please enter Blood Group.",
            icon: "question"
          });
    }else if(bloodGroup === bloodGroup.value){
        Swal.fire({
            title: "Error!",
            text: "Please enter Name First.",
            icon: "question"
          });
    }
   else if(bloodGroup.toUpperCase() == "A+"){
        result = "A+, A-, B+, B-, AB+, AB-, O+, O-";
    }else if(bloodGroup.toUpperCase() == "A-"){
        result = "A-, B-, AB-, O-";}
    else if(bloodGroup.toUpperCase() == "B+"){
        result = "B+, B-, AB+, AB-";
        
    }else if(bloodGroup.toUpperCase() == "B-"){
        result = "B-, AB-";
        
    } else if(bloodGroup.toUpperCase() == "AB+"){ 
        result = "AB+, AB-";
        
    } else if(bloodGroup.toUpperCase() == "AB-"){
        result = "AB-";
        
    } else if(bloodGroup.toUpperCase() == "O+"){
        result = "O+, O-";
        
    } else if(bloodGroup.toUpperCase() == "O-"){
        result = "O-";
    }else{
        console.log( bloodGroup, userName);
     
        
    }
    
    document.getElementById('name').value = "";
    document.getElementById('blood').value = "";


//      Swal.fire({ 
//     title: "Blood Donation Result",
//     text: userName  ? `Hello ${userName}  You can Donate Blood to :    ${result}` : ` Please enter your Name details of blood group to get the result.`,
//     icon: "success"
// })
 document.getElementById('output').innerHTML =userName  ? `Hello ${userName}  You can Donate Blood to :    ${result}` : ` Please enter your Name details of blood group to get the result.`;

}
