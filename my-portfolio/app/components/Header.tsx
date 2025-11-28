export default function Header() {
   return (
    <header id="header" className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Alexis AVRIL</div>
        <ul className="flex space-x-6 justify-end">
          <li><a href="#banner" className="hover:underline">Accueil</a></li>
          <li><a href="#general-skills" className="hover:underline">Compétences</a></li>
          <li><a href="#about" className="hover:underline">À propos</a></li>
          <li><a href="#projects" className="hover:underline">Projets</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}