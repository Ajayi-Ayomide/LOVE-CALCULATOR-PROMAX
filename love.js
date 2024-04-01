
function showPercentage(){
  let sub = Math.round(Math.random()*99)
    if (firstname.value === "" || secondname.value === "") {
     alert("Please enter your name")
    }
    else{
     if (sub >= 0 && sub < 20) {
         gauge.innerHTML = `<p style='font-size:100px'>${sub}%</p>`
         complement.innerHTML = `with this complement do you still want to continue with the relationship?`
       
     }                    
     else if(sub >= 20 && sub < 40){
         gauge.innerHTML =  `<p style='font-size:100px'>${sub}%</p>`
         complement.innerHTML = `I hope you know that anything less than 40 is ......ummm make i no talk?`
     }
     else if (sub >= 40 && sub < 60) {
         gauge.innerHTML = `<p style='font-size:100px'>${sub}%</p>`
         complement.innerHTML = `"Ummm lover boy?`
     }
     else if (sub >= 60 && sub < 80) {
         gauge.innerHTML =  `<p style='font-size:100px'>${sub}%</p>`
         complement.innerHTML = `where una dey always see this love?`	
         }
     else if (sub >= 80 && sub <= 100) {
         gauge.innerHTML =  `<p style='font-size:100px'>${sub}%</p>`
         complement.innerHTML = `Shey na you be the only person made for love nii?`
     }
    }
    document.getElementById('firstname').value = ""
    document.getElementById('secondname').value = ""
 }