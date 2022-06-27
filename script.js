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