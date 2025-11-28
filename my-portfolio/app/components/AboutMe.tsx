export default function AboutMe() {
  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        
        {/* Partie gauche : photo */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-gray-200 rounded-lg">
            {/* Ici tu pourras mettre ta photo avec <img src="..." /> */}
          </div>
        </div>

        {/* Partie droite : description + contacts */}
        <div className="md:w-1/2 flex flex-col justify-between h-full gap-8">
          
          {/* Description personnelle */}
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
            <p className="text-gray-700">
              Ici, tu pourras mettre ta description personnelle, tes objectifs, ton parcours, etc.
            </p>
          </div>

          {/* Moyens de contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Email : alexisavril@sfr.fr</li>
              <li>Téléphone : 06 02 18 05 62</li>
              <li>https://www.linkedin.com/in/alexis-avril-7330aa297/</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}