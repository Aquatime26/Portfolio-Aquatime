export default function Banner() {
 return (
    <section
      id="banner"
      className="w-full h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenue sur mon portfolio
        </h1>
        <p className="text-lg md:text-2xl">
          Ici, vous découvrirez mes projets et mes compétences.
        </p>
      </div>
    </section>
  );
}