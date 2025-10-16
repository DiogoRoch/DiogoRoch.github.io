const projects = [
    {
      title: 'Speech/Gaze-Guided Text Editor',
      image: 'resources/imgs/text-editor.png',
      desc : 'Multimodal text-editor that can be controlled through gaze and voice commands. Multimodal User Interfaces (2024).',
      tech : ['Python','Flask', 'HTML', 'CSS', 'JavaScript'],
      links: [
        {text:'GitHub', url:'https://github.com/DiogoRoch/SR_Gaze_TextEditor'},
        {text:'PDF Report', url:'resources/reports/sg-text-editor.pdf', ghost:true}
      ]
    },
    {
        title: 'Gamified Touchscreen Monkey Training',
        image: 'resources/imgs/xbi-logo.png',
        desc : 'Unsupervised touchscreen training system for rhesus monkeys using the XBI tablet. Bachelor project in collaboration with Schmid Research Group (2022-2023).',
        tech : ['MWEL','Matlab'],
        links: [
          {text:'PDF Report', url:'resources/reports/diogor-bachelor.pdf', ghost:true}
        ]
      },
      {
        title: 'Community Detection in Bipartite Networks',
        image: 'resources/imgs/network.jpg',
        desc : 'Bipartite network analysis of communities on letterboxd user-movie data through a custom implementation of the bilouvain algorithm. Social Media Analytics (2024).',
        tech : ['Python', 'NetworkX'],
        links: [
          {text:'GitHub', url:'https://github.com/DiogoRoch/SMA-Lboxd'},
          {text:'PDF Report', url:'resources/reports/sa-report-2024.pdf', ghost:true}
        ]
      },
      {
        title: 'Predicting Psychological Outcomes of Digital Life: A Machine Learning Analysis on European Data',
        image: 'resources/imgs/timed2.png',
        desc : 'Prediction of psychological distress and time pressure questionnaire scores using decision tree-based ensemble ML regression models. The predictions were then interpreted using SHAP values to explore the effects of digitalization predictors on mental health and time experience.',
        tech : ['Python', 'Streamlit', 'Scikit-Learn', 'XGBoost', 'LightGBM', 'SHAP'],
        links: [
          {text:'GitHub', url:'https://github.com/DiogoRoch/TIMED_ML_Pipeline'},
          {text:'PDF Report', url:'resources/reports/MasterThesis_DiogoRocha.pdf', ghost:true}
        ]
      },
];


// grab containers
const container = document.querySelector(".projects-container");
const nav = document.querySelector(".slide-nav");

let currentSlide = 0;

// create slides & dots
projects.forEach((p, i) => {
  // build slide
  const card = document.createElement("div");
  card.className = "project-card";
  if (i === 0) card.classList.add("active-slide");

  card.innerHTML = `
    <img src="${p.image}" alt="${p.title} screenshot">
    <div class="card-body">
      <h2 class="project-title">${p.title}</h2>
      <p class="project-desc">${p.desc}</p>
      <ul class="tech-stack">${p.tech.map(t => `<li>${t}</li>`).join("")}</ul>
      <div class="card-links">
        ${p.links.map(l =>
          `<a href="${l.url}" target="_blank"
              class="btn${l.ghost ? " btn-ghost" : ""}">
             ${l.text}
           </a>`
        ).join("")}
      </div>
    </div>
  `;
  container.appendChild(card);

  // build nav dot
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active-dot");
  dot.addEventListener("click", () => showSlide(i));
  nav.appendChild(dot);
});

/**
 * Hide all slides & deactivate all dots,
 * then show the one at `index`.
 */
function showSlide(index) {
  const slides = document.querySelectorAll(".project-card");
  const dots   = document.querySelectorAll(".slide-nav button");

  slides.forEach(s => s.classList.remove("active-slide"));
  dots.forEach(d => d.classList.remove("active-dot"));

  slides[index].classList.add("active-slide");
  dots[index].classList.add("active-dot");
  currentSlide = index;
}