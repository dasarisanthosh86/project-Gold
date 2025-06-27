function sanThosh(event) {
  event.preventDefault();

   username = document.getElementById("username").value;
   password = document.getElementById("password").value;
  
  if (username === "admin" && password === "1234") {
    
    window.location.href = "calculation.html";
  }
}

function calculateLoan(){
        let weight = parseFloat(document.getElementById("weight").value);
        
        let purity = parseFloat(document.getElementById("purity").value);
       
          purityfraction = (purity / 24);

        totalValue = weight * 10000 * purityfraction;
        loanAmount = (totalValue * 50 )/100; 
        intrest = ( loanAmount *2)/100;
        
           document.getElementById('result').innerText =
             "Eligible Amount " + loanAmount ;
             document.getElementById('intrest').innerText =
             " Intrest"  + intrest;
             document.getElementById('result').style.color = "green"
             
         }