const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

/* Visa animation*/

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

/* scrolla projekt*/

const projects = [
  {
    Image: "img/dogplay.png",
    number: "01",
    type: "PWA / Mikrointeraktion",
    title: "DogPlay",
    description:
      "En mobilanpassad PWA-app utvecklad inom ramen för mikrointeraktion. Syftet är att hjälpa hundägare att hitta hundvänliga platser i närheten. Fokus låg på små interaktiva detaljer, visuell feedback och en tydlig användarupplevelse.",
    tags: ["HTML", "CSS", "JavaScript", "PWA" , "Mikrointeraktion" , "Grafisk design" , "REST API"],
    link: "https://dogplay.netlify.app/",
  },
  {
    // Image: "img/portfolio.png",
    number: "02",
    type: "Webbplats / Frontend",
    title: "Portfolio-webbplats",
    description:
      "En responsiv portfolio byggd med fokus på tydlig struktur, mörk visuell identitet, projektpresentation och personlig profilering inför praktik.",
    tags: ["HTML", "CSS", "JavaScript", "Responsiv design"],
    link: "https://open.spotify.com/",
  },
  {
    // Image: "img/northern-guardians.png",
    number: "03",
    type: "Spel / JavaScript",
    title: "Northern Guardians",
    description:
      "Ett spelprojekt där fokus ligger på rörelse, skjutmekanik, fiender, nivåer och en tydlig spelstruktur med JavaScript.",
    tags: ["JavaScript", "Game design", "Canvas", "node.js" , "Electron", "Git" , "pixel art" , "Arcade" , "OOP"],
    link: "https://northernguardians.netlify.app/",
  },
  {
    // Image: "img/mobil-app-prototyp.png",
    number: "04",
    type: "UX/UI / Figma-prototyp",
    title: "Fiskebutiken Marulken",
    description:
      "Ett UX/UI-koncept i Figma med fokus på användarflöden, wireframes och ett tydligt gränssnitt för mobil användning.",
    tags: ["Figma", "UX", "UI Design", "Prototyp"],
    link: "https://www.figma.com/proto/H1ZggPFVK7mQeTDvbcbGgq/U1Webbplats?node-id=1-45&p=f&viewport=167%2C167%2C0.07&t=euy3XvucusLXUcg2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&page-id=0%3A1",
  },
  {
    Image: "img/visuell-identitet.png",
    number: "05",
    type: "Grafisk design",
    title: "Visuell identitet -DogPlay",
    description:
      "Ett grafiskt designprojekt med fokus på färg, typografi, layout och ett sammanhållet visuellt uttryck för DogPlay.",
    tags: ["Illustrator", "Photoshop", "Grafisk form"],
    link: "images/dogPlay-GrafiskManual.pdf",
  },

  {
    Image: "img/kort-videoproduktion.png",
    number: "06",
    type: "Videoproduktion",
    title: "Kort videoproduktion",
    description:
      "Ett videoprojekt med fokus på klippning, tempo, berättande och visuell presentation med hjälp av Premiere Pro.",
    tags: ["Premiere Pro", "Video", "Storytelling"],
    link: "https://www.youtube.com/watch?v=8ndDzorHaSc",
  },
];

let activeProject = 0;

const projectCard = document.getElementById("projectCard");
const projectNumber = document.getElementById("projectNumber");
const projectTotal = document.getElementById("projectTotal");
const projectType = document.getElementById("projectType");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectTags = document.getElementById("projectTags");
const projectLink = document.getElementById("projectLink");
const prevProject = document.getElementById("prevProject");
const nextProject = document.getElementById("nextProject");

function renderProject() {
  const project = projects[activeProject];

  projectCard.classList.remove("is-changing");
  void projectCard.offsetWidth;
  projectCard.classList.add("is-changing");

  projectNumber.textContent = project.number;
  projectTotal.textContent = `/ ${String(projects.length).padStart(2, "0")}`;
  projectType.textContent = project.type;
  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;
  projectLink.href = project.link;

  projectTags.innerHTML = "";

  project.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    projectTags.appendChild(span);
  });
}

if (prevProject && nextProject) {
  prevProject.addEventListener("click", () => {
    activeProject = (activeProject - 1 + projects.length) % projects.length;
    renderProject();
  });

  nextProject.addEventListener("click", () => {
    activeProject = (activeProject + 1) % projects.length;
    renderProject();
  });

  renderProject();
}

/* Scroll to top button */

const scrollTopButton = document.getElementById("scrollTopButton");

// 1. Kontrollera om JS hittar knappen i din HTML
if (scrollTopButton) {
  console.log("✅ Framgång: JS hittade scrollTopButton i HTML-koden!");
} else {
  console.log("❌ Fel: JS kan INTE hitta något element med id='scrollTopButton'. Dubbelkolla din HTML!");
}

function toggleScrollTopButton() {
  if (!scrollTopButton) return;

  // 2. Skriver ut din nuvarande scroll-position varje gång du scrollar
  console.log("Du scrollar! Nuvarande position (scrollY) är:", Math.round(window.scrollY));

  if (window.scrollY > 700) {
    scrollTopButton.classList.add("visible");
    console.log("🚀 Positionen är över 700px! lade till klassen '.visible'");
  } else {
    scrollTopButton.classList.remove("visible");
  }
}

window.addEventListener("scroll", toggleScrollTopButton);
toggleScrollTopButton();

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    console.log("👉 Du klickade på knappen! Scrollar till toppen...");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}


