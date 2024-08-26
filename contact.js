// Header
function toggleMenu() {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");
  }
  
  function toggleDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
  }
  
  function changeLanguage(language) {
    document.querySelector(".dropbtn").textContent = language + "▼";
    toggleDropdown();
  }

  // validate contact me form

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const password = document.getElementById("password").value.trim();
  
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{6,15}$/;
  
      if (!name) {
        alert("Name is required.");
        return;
      }
  
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (!subject) {
        alert("Subject is required.");
        return;
      }
  
      if (!message) {
        alert("Message is required.");
        return;
      }
  
      if (!passwordRegex.test(password)) {
        alert(
          "Password must be at least 6 characters long, include uppercase letter, at least one number and one special character."
        );
        return;
      }
  
      alert("Form submitted successfully!");
    });
  
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");
  
    togglePassword.addEventListener("click", function () {
      const type =
        passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);
      this.classList.toggle("fa-eye");
      this.classList.toggle("fa-eye-slash");
    });
  });