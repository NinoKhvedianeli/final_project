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