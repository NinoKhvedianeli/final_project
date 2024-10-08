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
      text: "Tusheti is a remote mountainous region in Georgia, renowned for its pristine nature, medieval stone towers, and rich cultural traditions, making it a popular destination for hiking and adventure.",
      rating: 5,
      price: 350,
      startDate: "15 Aug 2024",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1627289496743-8a9a08bb228a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Tour in Racha",
      text: "Racha is a mountainous region in Georgia, famous for its beautiful landscapes, rich winemaking tradition, and charming villages, making it a destination for both nature lovers and cultural explorers.",
      rating: 4,
      price: 300,
      startDate: "20 Sep 2024",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGJpbGlzaXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Tour in Tbilisi",
      text: "Tbilisi is the vibrant capital of Georgia, known for its diverse architecture, rich history, and blend of modern and traditional culture, situated along the scenic banks of the Kura River.",
      rating: 3,
      price: "250",
      startDate: "10 Oct 2024",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1569498318710-d347897b2280?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFncmF0aSUyMGNhdGhlZHJhbHxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Tour in Imereti",
      text: "Imereti is a region in western Georgia, known for its lush landscapes, ancient cave monasteries, and rich cultural heritage, particularly in winemaking and traditional crafts.",
      rating: 3,
      price: "280",
      startDate: "5 Nov 2024",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1688568383730-16feee3ac221?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Tour in Kakheti",
      text: "Kakheti is a region in eastern Georgia, celebrated as the heart of Georgian winemaking, with picturesque vineyards, historic monasteries, and a rich cultural heritage.",
      rating: 4,
      price: "300",
      startDate: "18 Nov 2024",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1568632102228-b7d3e77459c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2F6YmVnaXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Tour in Kazbegi",
      text: "Kazbegi is a mountainous region in northern Georgia, renowned for its dramatic landscapes, including Mount Kazbek, and the iconic Gergeti Trinity Church, offering breathtaking views and outdoor adventures.",
      rating: 5,
      price: "320",
      startDate: "3 Dec 2024",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1598085605000-11ccd660df5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2hldnN1cmV0aXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Tour in Khevsureti",
      text: "Khevsureti is a remote and rugged mountainous region in northeastern Georgia, known for its medieval stone towers, untouched natural beauty, and rich traditions of warrior culture.",
      rating: 4,
      price: "270",
      startDate: "20 Dec 2024",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1668846488612-7dcac5776df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ZhbmV0aXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Tour in Svaneti",
      text: "Svaneti is a remote region in Georgia known for its stunning Caucasus mountain landscapes, ancient stone towers, and rich, preserved cultural heritage.",
      rating: 5,
      price: "290",
      startDate: "5 Jan 2025",
    },
  ];

  const tourList = document.getElementById("tour-list");
  const modal = document.getElementById("tour-detail-modal");
  const closeModal = document.getElementById("close-modal");

  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");
  const filterSelect = document.getElementById("filter-select");

  // Function to display tours
  function displayTours(tours) {
    tourList.innerHTML = "";
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
                    <p>price: $${tour.price}</p>
                    <p>Start Date: ${tour.startDate}</p>
                </div>
            `;
      tourCard.addEventListener("click", () => showTourDetails(tour));
      tourList.appendChild(tourCard);
    });
  }

  //  filter tours by price and rating according to number of stars
  function filterTours(tours) {
    const filterValue = filterSelect.value;
    return tours.filter((tour) => {
      switch (filterValue) {
        case "less300":
          return tour.price < 300;
        case "moreEqual300":
          return tour.price >= 300;
        case "lessEqual3stars":
          return tour.rating <= 3;
        case "4stars":
          return tour.rating === 4;
        case "5stars":
          return tour.rating === 5;
        default:
          return true;
      }
    });
  }

  //sort tours according to date which tour is sooner and according to alphabetical order
  function sortTours(tours) {
    const sortValue = sortSelect.value;
    return tours.sort((a, b) => {
      switch (sortValue) {
        case "asc":
          return new Date(a.startDate) - new Date(b.startDate);
        case "desc":
          return new Date(b.startDate) - new Date(a.startDate);
        case "az":
          return a.heading.localeCompare(b.heading);
        case "za":
          return b.heading.localeCompare(a.heading);
        default:
          return 0;
      }
    });
  }

  //searching tours
  function searchTours(tours) {
    const searchValue = searchInput.value.toLowerCase();
    return tours.filter((tour) =>
      tour.heading.toLowerCase().includes(searchValue)
    );
  }

  // Function to handle all filters, sorts, and searches
  function updateTourDisplay() {
    let filteredTours = filterTours(tours);
    let sortedTours = sortTours(filteredTours);
    let searchedTours = searchTours(sortedTours);
    displayTours(searchedTours);
  }

  // when user click on the tour card should become bigger and display info about tours
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

  searchInput.addEventListener("input", updateTourDisplay);
  sortSelect.addEventListener("change", updateTourDisplay);
  filterSelect.addEventListener("change", updateTourDisplay);

  updateTourDisplay();
});

//ჩემი მიზანია, რადგან ტურის ფასები მოცემულია დოლარებში,, სერვერიდან წამოვიღო ვალუტის კურსი ევროში და ლარში დაა ეს ინფორმაცია გამოვიყენო
//იმისათვის რომ გავამრავლო დოლარზე და გავიგოთ ტურის ღირებულება რა იქნება ლარში და დოლარში.  დასამთავრებელი მაქვს ეს ნაწილი. წამოვიღე სერვერიდან, ახლა უნდა გამოვიყენო
let exchangeRates = {};

function getExchangeRateById(id) {
  fetch(`https://freetestapi.com/api/v1/currencies/${id}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw response.status;
      }
      return response.json();
    })
    .then((exchangeRateData) => {
      console.log("API response:", exchangeRateData);

      exchangeRates[exchangeRateData.code] = exchangeRateData.exchange_rate;
      console.log("Stored exchange rates:", exchangeRates);

      const exchangeRate = exchangeRateData.exchange_rate;
      const currencySymbol = exchangeRateData.symbol;
      const currencyName = exchangeRateData.name;
      document.getElementById(
        "exchange-rate"
      ).textContent += `${currencyName} (${currencySymbol}): ${exchangeRate} `;
    })
    .catch((error) => {
      console.error("Error fetching exchange rates:", error);
      const pError = document.createElement("p");
      pError.textContent = `Error fetching exchange rate for ID ${id}`;
      document.getElementById("data").appendChild(pError);
    });
}

getExchangeRateById(85); // GEL
getExchangeRateById(86); // EUR
