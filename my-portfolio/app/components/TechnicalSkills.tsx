interface TechSkill {
  name: string;
}

const techSkills: TechSkill[] = [
  { name: "HTML/CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Node.js" },
  { name: "MongoDB / noSQL" },
  { name: "Git / GitHub" }
];

export default function TechnicalSkills() {
  return (
    <section id="technical-skills" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Compétences Techniques</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md text-center"
            >
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}