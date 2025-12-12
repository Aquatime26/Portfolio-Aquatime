import Image from 'next/image';
import "./aboutMe.scss";

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        
        {/* Partie gauche : photo */}
        <div className="md:w-1/2 flex justify-center">
            <Image
              src="/photo3.webp"
              alt="Photo de créateur du site : Alexis Avril"
              width={300}
              height={300}
              className="profile-photo "
            />
        </div>

        {/* Partie droite : description + contacts */}
        <div className="md:w-1/2 flex flex-col justify-between h-full gap-8">
          
          {/* Description personnelle */}
          <div className="mb-4 text-justify">
            <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
            <p className="text-gray-700">
              C&apos;est en recherchant un travail de précision et de patience que je me suis intéressé au développement web.
              J&apos;ai découvert un univers passionnant où la créativité rencontre la technique.
            </p>
            <p className="text-gray-700 mt-4">
              Dans l&apos;optique d&apos;une reconversion professionnelle, j&apos;ai suivi une formation intensive de développeur web et web mobile chez OpenClassrooms.
              Aujourd&apos;hui, je suis enthousiaste à l&apos;idée de contribuer à des projets innovants et de continuer à apprendre dans ce domaine en constante évolution.
            </p>
            <p className="text-gray-700 mt-4"> 
              Une question ? Une idée de projet ? N&apos;hésitez pas à me contacter !
            </p>
          </div>

          {/* Moyens de contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact</h3>
            <ul className="space-y-2 text-gray-700 font-bold">
              <li>Email : alexisavril@sfr.fr</li>
              <li>Téléphone : 06 02 18 05 62</li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alexis-avril-developper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lien vers mon profil LinkedIn"
                >
                  <Image
                    src="/logoLinkedin.webp"
                    alt="Logo LinkedIn : lien vers mon profil LinkedIn"
                    width={24} 
                    height={24}
                  />
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}