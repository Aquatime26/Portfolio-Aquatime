export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Informations légales */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; 2025 Alexis. Tous droits réservés.
        </p>

        {/* Liens supplémentaires */}
        <ul className="flex space-x-6 text-sm">
          <li><a href="#" className="hover:underline text-white">Mentions légales</a></li>
          <li><a href="#" className="hover:underline text-white">Politique de confidentialité</a></li>
          <li><a href="#" className="hover:underline text-white">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}