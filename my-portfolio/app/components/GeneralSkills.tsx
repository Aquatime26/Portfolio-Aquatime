import Image from "next/image";

interface Skill {
  title: string;
  description: string;
  image: string;
}

const skills: Skill[] = [
  {
    title: "Développement de sites Web",
    description: "Création de sites modernes et fonctionnels avec HTML, CSS, JS et frameworks.",
    image: "/wand.webp"
  },
  {
    title: "Optimisation SEO",
    description: "Amélioration du référencement et de la visibilité des sites.",
    image: "/rabbitHat.webp"
  },
  {
    title: "Responsive Design",
    description: "Adaptation des sites pour tous types d’écrans et appareils.",
    image: "/stars.webp"
  },
  {
    title: "Méthodes Agile et Scrum",
    description: "Méthodes de planification et de travail efficaces pour travailler en équipe.",
    image: "/crystalBall.webp"
  },
  {
    title: "Maintenance de sites Web",
    description: "Mises à jour régulières et résolution de problèmes techniques.",
    image: "/colomb.webp"
  },
  {
    title: "Sécurisation des données",
    description: "Tokens d'authentifications, gestion des mots de passes, bonnes pratiques de sécurité.",
    image: "/lockAndKey.webp"
  },
];

export default function GeneralSkills() {
  return (
    <section
      id="general-skills"
      className="w-full py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
        <div className="grid gap-20 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
                <Image src={skill.image} alt={skill.title} width={80} height={80} className="mt-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}