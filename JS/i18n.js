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
    "cv.education.master.title": "First year of Master in Physics",
    "cv.education.master.program": "Nucleus, Particles and Universe Program",
    "cv.education.master.school": "Bordeaux University",
    "cv.education.master.period": "Current",

    "cv.education.bachelor.title": "Bachelor's degree in Physics",
    "cv.education.bachelor.program": "International Program",
    "cv.education.bachelor.school": "Bordeaux University",
    "cv.education.bachelor.period": "2024",
    "cv.education.bachelor.description": "Erasmus exchange year at Stockholm University in third year",
    

    "cv.education.highschool.title": "High school diploma in Mathematics, Physics and Chemistry",
    "cv.education.highschool.result": "(With Honors)",
    "cv.education.highschool.school": "Jean Cassaigne High School",
    "cv.education.highschool.period": "2021",

    "cv.internships": "Internships",
    "cv.internships.research.M1.title": "First year of Master internship",
    "cv.internships.research.M1.description1": "Generation of intense quasi-static magnetic fields by laser-matter interaction with coil targets",
    "cv.internships.research.M1.description2": "supervised by Pr. Joao Santos. Magnetic field measurement on previously obtained images of laser shots using a polarimetric diagnostic, participation in an expeirmental campaign on the ABC laser at",
    "cv.internships.research.M1.description3": "Frascati, in Italy and preliminary analysis of the images from the first few shots",
    "cv.internships.research.L3.title": "Third year of bachelor internship",
    "cv.internships.research.L3.lab1": "Stockholm University",
    "cv.internships.research.L3.lab2": "Quantum Information and Quantum Optics research group",
    "cv.internships.research.L3.description1": "Characterization of quantum integrated photonic circuits",
    "cv.internships.research.L3.description2": "Supervised by Pr Mohamed Bourennane. Measurements of optical loss in LiNbO3 waveguides protoypes, high voltage periodic poling of LiNbO3 samples.",

    "cv.internships.highschool": "High School",
    "cv.internships.highschool.title": "First year of high scoool internships",
    "cv.internships.highschool.description": "One week at CEA Paris-Saclay Astrophysics department, supervised by Patrice Bouchet. One week at Paris-Diderot University Physics department.",
    
      
    "cv.jobs": "Work experience",
    "cv.jobs.title": "Scientific Animator",
    "cv.jobs.employer": "Cap Sciences",
    "cv.jobs.city": "Bordeaux",
    "cv.jobs.period": "Since 2023",
    "cv.jobs.description1": "Part time job in a science communication association. Animation of the Planetarium. Animation of exhibitions about",
    "cv.jobs.description2": "and",
    "cv.jobs.description3": "Animation of a workshop for teenagers of introduction to synthesizers and musical sound prcessing",

    "cv.digitalskills": "Digital skills",
    "cv.digitalskills.coding": "Coding",
    "cv.digitalskills.coding.description": "Python, Matlab, Arduino, HTML/CSS, Arduino, p5.js",
    "cv.digitalskills.editing": "Presentation tools"
   
    
    
    
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
    
    "cv.position": "Étudiant en Physique",
    
    "cv.education" : "Formation",
    "cv.education.master.title": "Master 1 Physique Fondamentale et Applications",
    "cv.education.master.program": "Parcours Noyaux Particules et Univers",
    "cv.education.master.school": "Université de Bordeaux",
    "cv.education.master.period": "Actuel",

    "cv.education.bachelor.title": "Licence de Physique",
    "cv.education.bachelor.program": "Parcours International",
    "cv.education.bachelor.school": "Université de Bordeaux",
    "cv.education.bachelor.description": "Année d'échange Erasmus à l'Université de Stockholm en L3",
    "cv.education.bachelor.period": "2024",
    

    "cv.education.highschool.title": "Baccalauréat Général Mathématiques, Physique-Chimie",
    "cv.education.highschool.result": "(Mention Très Bien)",
    "cv.education.highschool.school": "Lycée Jean Cassaigne",
    "cv.education.highschool.period": "2021",
    
    "cv.internships": "Stages",
    "cv.internships.research": "Univsersitaire",
    "cv.internships.research.M1.title": "Stage de M1",
    "cv.internships.research.M1.description1": " Génération de champs magnétiques quasi-statiques par interaction laser-matière avec des cibles à boucle",
    "cv.internships.research.M1.description2": "Encadré par Pr. Joao Santos. Mesure de champs magnétiques par polarimétrie sur des images de tirs laser obtenues sur des expériences antérieures, participation à une campagne expérimentale sur le laser ABC à",
    "cv.internships.research.M1.description3": "Frascati, en Italie et analyse préliminaires des images des premiers tirs",
    "cv.internships.research.L3.title": "Stage de L3",
    "cv.internships.research.L3.lab1": "Université de Stockholm",
    "cv.internships.research.L3.lab2": "groupe de recherche",
    "cv.internships.research.L3.description1": "Charactérisation de circuits photoniques quantiques intégrés",
    "cv.internships.research.L3.description2": "encadré par Pr. Mohamed Bourennane. Mesure des pertes optiques dans des prototypes de guides d'ondes en LiNbO3, periodic poling d'échantillon de LiNbO3 par application de haute tension.",

    "cv.internships.highschool": "Découverte",
    "cv.internships.highschool.title": "Stages de seconde : ",
    "cv.internships.highschool.description": "Une semaine au CEA Paris-Saclay, département d'astrophysique encadré par Patrice Bouchet. Une semaine dans l'UF de Physique de l'université Paris Diderot.",
    
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
