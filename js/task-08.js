const loginForm = document.querySelector(".login-form");
let userDetails = {};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = loginForm.elements.email.value;
  let password = loginForm.elements.password.value;

  if (email != "" && password != "") {
    userDetails.email = email;
    userDetails.password = password;
    console.log(userDetails);
    loginForm.reset();
  } else {
    alert("All fields must be filled in.");
  }
});
