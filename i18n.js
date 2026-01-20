const translations = {
  en: {
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
