const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

document
  .getElementById("button-bottom")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;
    if (email.match(emailPattern)) {
      console.log("true");
    } else {
      console.log("error");
    }
    if (password.length < 6) {
      console.log("error");
    } else {
      console.log("right");
    }
  });
