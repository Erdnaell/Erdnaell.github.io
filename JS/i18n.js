const translations = {
  en: {
    nav-home: "Home",
    nav-gallery: "Gallery",
    nav-resume:  "Resume",
    nav-aboutme: "About me",
    nav-work: "My Work",
    nav-academic: "Academic",
    nav-communication: "Scientific communication",
    
    name: "Léandre Roccaserra",
    position: "Physics student",
    education : "Education",
    master: "First year of master programm in Physics",
    bachelor: "Bachelor in Physics",
    highschool: "Baccalauréat général, Mathematics, Physics and Chemistry",
    
    jobs: "Jobs",
    internships: "internships",
    
    
    
  },
  fr: {
    nav-home: "Accueil",
    nav-gallery: "Gallerie",
    nav-resume:  "CV",
    nav-aboutme: "Qui-suis-je ?",
    nav-work: "Productions",
    nav-academic: "Universitaires",
    nav-communication: "Vulgarisation",
    name: "Léandre Roccaserra",
    position: "Etudiant en Physique",
    education : "Formation",
    internships: "Stages",
    jobs : "Expérience Professionelle",
    
    
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);   // Save language choice
  
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key];
  });
}

// Apply language on page load
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "fr";
  setLanguage(saved);
});
