document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {

    event.preventDefault();
    
    const userName = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    let messages = [];

    //username

    if (userName.length < 3) {
      isValid = false;
      messages.push("error message user name");
    }

    //email

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("error message email");
    } 

    //password

    if (password.length < 8) {
      isValid = false;
      messages.push("error message password");
    }

    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = "#dc3545";
      console.log(messages.join('<br>'))
    }

  });

});

