interface Skill {
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    title: "Développement de sites Web",
    description: "Création de sites modernes et fonctionnels avec HTML, CSS, JS et frameworks."
  },
  {
    title: "Optimisation SEO",
    description: "Amélioration du référencement et de la visibilité des sites."
  },
  {
    title: "Responsive Design",
    description: "Adaptation des sites pour tous types d’écrans et appareils."
  }
];

export default function GeneralSkills() {
  return (
    <section
      id="general-skills"
      className="w-full py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Mes compétences</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}