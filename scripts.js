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

// service mainc section. tours.

document.addEventListener("DOMContentLoaded", function () {
  const tours = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1581941995986-f1666d401c9f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Tour in Tusheti",
      text: "Explore high Caucasus Mountains.",
      rating: 5,
      price: 350,
      startDate: "15 Aug 2024",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1666079698872-53f4f9ecd6ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFjaGF8ZW58MHx8MHx8fDA%3D",
      heading: "Tour in Racha",
      text: "Mountainous beauty and wines.",
      rating: 4,
      price: 300,
      startDate: "20 Sep 2024",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGJpbGlzaXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Tour in Tbilisi",
      text: "Blend of history and culture.",
      rating: 3,
      price: "250",
      startDate: "10 Oct 2024",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1569498318710-d347897b2280?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFncmF0aSUyMGNhdGhlZHJhbHxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Tour in Imereti",
      text: "Wine and cultural heritage.",
      rating: 3,
      price: "280",
      startDate: "5 Nov 2024",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1660038089814-36b1dd18794b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtha2hldGl8ZW58MHx8MHx8fDA%3D",
      heading: "Tour in Kakheti",
      text: "Cultural and wine heart.",
      rating: 4,
      price: "300",
      startDate: "18 Nov 2024",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1568632102228-b7d3e77459c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2F6YmVnaXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Tour in Kazbegi",
      text: "Scenic mountain trails.",
      rating: 5,
      price: "320",
      startDate: "3 Dec 2024",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1598085605000-11ccd660df5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2hldnN1cmV0aXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Tour in Khevsureti",
      text: "Remote mountain culture.",
      rating: 4,
      price: "270",
      startDate: "20 Dec 2024",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1668846488612-7dcac5776df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ZhbmV0aXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Tour in Svaneti",
      text: "Cultural and scenic beauty.",
      rating: 5,
      price: "290",
      startDate: "5 Jan 2025",
    },
    // Add the rest of the tours here
  ];

  const tourList = document.getElementById("tour-list");
  const modal = document.getElementById("tour-detail-modal");
  const closeModal = document.getElementById("close-modal");

  // Function to create and display the tour cards
  function displayTours(tours) {
    tourList.innerHTML = ""; // Clear previous content
    tours.forEach((tour) => {
      const tourCard = document.createElement("div");
      tourCard.className = "t-card";
      tourCard.innerHTML = `
              <div class="t-image">
                  <img src="${tour.image}" alt="${tour.heading}">
              </div>
              <h4>${tour.heading}</h4>
              <div class="stars">
                  ${"★".repeat(tour.rating)}${"☆".repeat(5 - tour.rating)}
              </div>
              <div class="tour-info">
                  <p>Price: $${tour.price}</p>
                  <p>Start Date: ${tour.startDate}</p>
              </div>
          `;
      tourCard.addEventListener("click", () => showTourDetails(tour));
      tourList.appendChild(tourCard);
    });
  }

  // Function to show the tour details in a modal
  function showTourDetails(tour) {
    modal.style.display = "block";
    document.getElementById("modal-heading").textContent = tour.heading;
    document.getElementById("modal-image").src = tour.image;
    document.getElementById("modal-text").textContent = tour.text;
    document.getElementById("modal-rating").textContent = tour.rating;
    document.getElementById("modal-price").textContent = tour.price;
    document.getElementById("modal-start-date").textContent = tour.startDate;
  }

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Initially display all tours
  displayTours(tours);
});
