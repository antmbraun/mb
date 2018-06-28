// Update for current year
function copyrightDate() {
  document.getElementById("copyright").textContent = new Date().getFullYear();
}

// Validate registration form and display error / success messages.
function processRegistration() {
	var fields = (document.registration.elements);
   var feedback = "";
   var formMessage = document.getElementById("form-message");
   for (var i = 0, field; field = fields[i++];) {
     if (field.value === "")
      feedback += field.placeholder + " is required.</br>";
     //check for valid email
     else if (field.name == "email" && validateEmail(field.value) === false) {
      feedback += "You must submit a valid email address."
     }
   }

   // display feedback message
   formMessage.style.display = "block";
   if (feedback !== "") {
      formMessage.innerHTML=feedback;
      formMessage.style.background = "#f9b4b4";
   }
   else if (feedback === "") {
      formMessage.innerHTML="You have successfully registered!";
      formMessage.style.background = "#c4f9b4";
   }

   // Do actual data processing via ajax and return false so page is not reloaded
   return false;
}

// source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}