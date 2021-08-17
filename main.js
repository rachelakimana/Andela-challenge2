function validateForm() {
   let  x = document.getElementById("mymessage").innerHTML = "Please provide a valid e-mail address"
        console.log('>>>>>>>>>>'+ x)
  document.getElementById("email").style.borderColor = "hsl(354, 100%, 66%)"
  
    
  }

  function hidParagraph() {
   let display =  document.getElementById("mymessage").style.display="none";
   document.getElementById("email").style.borderColor = "hsl(0, 0%, 59%)";
    
}
  function ValidateEmail(input) {

  var validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (input.value.match(validRegex)) {

    alert("Your email submited successfully!");

    document.form1.text1.focus();

    return true;

  } else {
    document.form1.text1.focus();
    return validateForm();
    
    

  }

}