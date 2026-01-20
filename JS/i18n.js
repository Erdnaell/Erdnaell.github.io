const translations = {
  en: {
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.resume":  "Resume",
    "nav.aboutme": "About me",
    "nav.work": "My Work",
    "nav.academic": "Academic",
    "nav.communication": "Scientific communication",
    "nav.contact":"Contact",
    
    "cv.name": "Léandre Roccaserra",
    "cv.position": "Physics student",
    "cv.education": "Education",
    "cv.education.master.title": "Master in Physics, First Year",
    "cv.education.master.program": "Nucleus, Particles and Universe Program",
    "cv.education.master.school": "Bordeaux University",
    "cv.education.master.period": "Current",

    "cv.education.bachelor.title": "Physics Bachelor",
    "cv.education.bachelor.program": "International Program",
    "cv.education.bachelor.school": "Bordeaux University",
    "cv.education.bachelor.period": "2024",
    "cv.education.bachelor.description": "Erasmus exchange year at Stockholm University in third year",
    

    "cv.education.highschool.title": "Baccalauréat Général Mathematics, Physics and Chemistry",
    "cv.education.highschool.result": "(With Honors),",
    "cv.education.highschool.school": "Jean Cassaigne High School",
    "cv.education.highschool.period": "2021",
    
    "cv.jobs": "Jobs",
    "cv.internships": "Internships"
    
    
    
  },
  fr: {
    "nav.home": "Accueil",
    "nav.gallery": "Gallerie",
    "nav.resume":  "CV",
    "nav.aboutme": "Qui-suis-je ?",
    "nav.work": "Productions",
    "nav.academic": "Universitaires",
    "nav.communication": "Vulgarisation",
    "nav.contact": "Contact",
    
    "cv.name": "Léandre Roccaserra",
    
    "cv.position": "Etudiant en Physique",
    
    "cv.education" : "Formation",
    "cv.education.master.title": "Master 1 Physique Fondamentale et Applications",
    "cv.education.master.program": "Parcours Noyaux Particules et Univers",
    "cv.education.master.school": "Université de Bordeaux",
    "cv.education.master.period": "Actuel",

    "cv.education.bachelor.title": "Licence de Physique",
    "cv.education.bachelor.program": "Parcours International",
    "cv.education.bachelor.school": "Université de Bordeaux",
    "cv.education.bachelor.description": "Année d'échange Erasmus à l'Université de Stockholm en L3",
    

    "cv.education.highschool.title": "Baccalauréat Général Mathématiques, Physique-Chimie",
    "cv.education.highschool.result": "(Mention Très Bien),",
    "cv.education.highschool.school": "Lycée Jean Cassaigne",
    "cv.education.highschool.period": "- 2021",
    
    "cv.internships": "Stages",
    "cv.jobs" : "Expérience Professionelle"
    
    
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
