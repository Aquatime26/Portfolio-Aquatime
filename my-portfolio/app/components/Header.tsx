import "./header.scss";
import Image from "next/image";

export default function Header() {
   return (
    <header id="header" className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Alexis AVRIL</div>

         <div className="flex space-x-2 mx-6">
          <Image src="/spade.webp" alt="Pique" width={24} height={24} className="header-image" />
          <Image src="/heart.webp" alt="Cœur" width={24} height={24} className="header-image" />
          <Image src="/club.webp" alt="Trèfle" width={24} height={24} className="header-image" />
          <Image src="/diamond.webp" alt="Carreau" width={24} height={24} className="header-image" />
        </div>

         <ul className="flex space-x-6 justify-end">
          <li><a href="#banner" className="text-black hover:text-red-600 transition-colors duration-300">Accueil</a></li>
          <li><a href="#general-skills" className="text-black hover:text-red-600 transition-colors duration-300">Compétences</a></li>
          <li><a href="#about" className="text-black hover:text-red-600 transition-colors duration-300">À propos</a></li>
          <li><a href="#projects" className="text-black hover:text-red-600 transition-colors duration-300">Projets</a></li>
          <li><a href="#contact" className="text-black hover:text-red-600 transition-colors duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}