// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
  const header = document.querySelector(".navbar");

  window.onscroll = function () {
    const top = window.scrollY;

    // On utilise la hauteur de la fenêtre (100vh) moins une petite marge (ex: 70px pour la hauteur de la navbar)
    // pour déclencher le fond gris juste avant de quitter l'image.
    if (top >= window.innerHeight - 70) {
      header.classList.add("navbarDark");
    } else {
      header.classList.remove("navbarDark");
    }
  };
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
  const navLinks = document.querySelectorAll(".nav-item");
  const menuToggle = document.getElementById("navbarSupportedContent");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      new bootstrap.Collapse(menuToggle).toggle();
    });
  });
}

function createSkillsFromJSON() {
  const container = document.querySelector("#skills .container");
  let row = document.createElement("div");
  row.classList.add("row");

  fetch("data/skills.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("col-lg-4", "mt-4");
        // Remplacement du <h4> par un <h3 class="... fs-4"> 👇
        card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" alt="${item.alt}" class="img-fluid" />
                            <h3 class="card-title mt-3 fs-4">${item.title}</h3>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

        row.appendChild(card);

        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          container.appendChild(row);
          row = document.createElement("div");
          row.classList.add("row");
        }
      });
    });
}

// Function to dynamically create HTML elements from the JSON file
function createPortfolioFromJSON() {
  const container = document.querySelector("#portfolio .container");
  let row = document.createElement("div");
  row.classList.add("row");

  fetch("data/portfolio.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("col-lg-4", "mt-4");
        // Remplacement du <h4> par un <h3 class="... fs-4"> 👇
        card.innerHTML = `
                    <div class="card portfolioContent h-100">
                        <img class="card-img-top portfolio-img" src="images/${item.image}" alt="${item.alt}">
                        <div class="card-body d-flex flex-column">
                            <h3 class="card-title fs-4">${item.title}</h3>
                            <p class="card-text">${item.text}</p>
                            <div class="text-center mt-auto">
                                <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn btn-success">Voir le projet</a>
                            </div>
                        </div>
                    </div>
                `;

        row.appendChild(card);

        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          container.appendChild(row);
          row = document.createElement("div");
          row.classList.add("row");
        }
      });
    });
}

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();

// présenter 2 projets
// responsive
// Versionning
// Profil de développeur (Photo)
// Accessible en ligne
// Lighthouse et WAVE, les 4 dans le vert
// explications de l'hébergeur
// outils dans la présentation finale
