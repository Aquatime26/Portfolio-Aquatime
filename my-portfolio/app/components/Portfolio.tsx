interface Project {
  title: string;
  description: string;
  technologies?: string;
  image?: string; // URL ou chemin de l'image
  github?: string; // Lien GitHub
}

const projects: Project[] = [
  {
    title: "Site d'échange de notations de livres",
    description: "Site permettant aux utilisateurs d'échanger des notations, d'ajouter, de supprimer et de modifier des livres.",
    technologies: "HTML, CSS, JavaScript, Node.js, Express, MongoDB",
    image: "/projet6.webp",
    github: "https://github.com/Aquatime26/0C-Project-6",
  },
  {
    title: "Site de présentation de logements en ligne",
    description: "Travail de création d'un site web pour présenter des logements avec des fonctionnalités interactives.",
    technologies: "React, HTML, CSS, JavaScript",
    image: "/projet5.webp",
    github: "https://github.com/Aquatime26/OC-5-React",
  },
  {
    title: "Site d'affichage en HTML et CSS, + gestion des medias queries",
    description: "Application web pour gérer des tâches avec des fonctionnalités de création, modification et suppression.",
    technologies: "HTML, CSS,",
    image: "/projet2.webp",
    github: "https://github.com/Aquatime26/Projet-2-Openclassroom",
  },
  {
    title: "Travail d'amélioration et de gestion d'un SEO pour un site web existant",
    description: "Optimisation du référencement naturel (SEO) d'un site web existant pour améliorer sa visibilité sur les moteurs de recherche.",
    technologies: "HTML, CSS, Javascript, SEO, Wave, Lighthouse",
    image: "/projet4.webp",
    github: "https://github.com/Aquatime26/Oc-4new",
  },
  {
    title: "Création d'un site web pour une photographe professionnelle",
    description: "Développement d'un site web vitrine pour une photographe, incluant une galerie d'images et un formulaire de contact.",
    technologies: "HTML, CSS, JavaScript",
    image: "/projet3.webp",
    github: "https://github.com/Aquatime26/OC-Projet-3-JS",
  }
  // Tu pourras ajouter d’autres projets ici facilement
];

export default function Portfolio() {
  return (
    <section id="projects" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">{project.technologies}</p>
                <div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}