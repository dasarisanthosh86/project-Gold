function sanThosh(event) {
  event.preventDefault();

   username = document.getElementById("username").value;
   password = document.getElementById("password").value;
  
  if (username === "admin" && password === "1234") {
    
    window.location.href = "earring.html";
  }
}

