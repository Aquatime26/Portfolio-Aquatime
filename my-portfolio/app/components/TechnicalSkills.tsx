"use client"; 

import { useEffect, useRef, useState } from "react";
import "./technicalSkills.scss";
import Image from "next/image";

interface TechSkill {
  name: string;
  image: string;
}

const techSkills: TechSkill[] = [
  { name: "HTML/CSS", image: "/htmlCss.webp" },
  { name: "JavaScript", image: "/jsLogo.webp" },
  { name: "React", image: "/react.webp" },
  { name: "Node.js", image: "/nodeJs.webp" },
  { name: "MongoDB / noSQL", image: "/mongoDB.webp" },
  { name: "Git / GitHub", image: "/gitAndGithub.webp" },
];

export default function TechnicalSkills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // on ne veut déclencher qu'une fois
          }
        });
      },
      { threshold: 0.3 } // déclenchement quand 30% de la section est visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="technical-skills"
      className="w-full py-20 bg-gray-50"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Compétences Techniques
        </h2>

        <div className="grid gap-20 md:grid-cols-3">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className={`card ${visible ? "revealed" : ""}`}
            >
              <div className="card-front justify-center items-center flex flex-col gap-4">
                <p className="text-lg font-semibold">{skill.name}</p>
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              </div>
                <div className="card-back">
                  <Image
                  src="/cards.webp"
                  alt="paire d'as de cartes"
                  width={150}
                  height={150}
                  style={{ objectFit: "cover" }}
                  />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}