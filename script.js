const myDate = new Date();
const hrs = myDate.getHours();
var greet;

if (hrs < 12) {
	greet = 'Good Morning';
}
else if (hrs >= 12 && hrs < 17) {
	greet = 'Good Afternoon';
}
else if (hrs >= 17 && hrs <= 24) {
  greet = 'Good Evening';
}

document.getElementById('greet2').innerHTML = greet;

const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");

showBtn.addEventListener("click", function() {
  
  if (pass_field.type === "password") {
    
    pass_field.type = "text";
    document.getElementById("icon").innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    showBtn.style.color = "#3498db";
  
  } else {
    
    pass_field.type = "password";
    document.getElementById("icon").innerHTML = '<i class="fa-regular fa-eye"></i>';
    showBtn.style.color = "#222";
  }
});