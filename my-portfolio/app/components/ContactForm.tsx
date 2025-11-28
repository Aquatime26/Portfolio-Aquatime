export default function ContactForm() {
  return (
    <section id="contact" className="w-full py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contactez-moi</h2>

        <form className="flex flex-col gap-6">
          
          {/* Nom */}
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Liste à choix */}
          <select
            name="type"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">-- Choisissez un type --</option>
            <option value="new-client">Je suis un nouveau client</option>
            <option value="follow-up">J&apos;ai déjà effectué une demande / Suivi de ma demande</option>
            <option value="regular-client">Je suis un client régulier / Suivi sur un site web déjà terminé</option>
          </select>

          {/* Sujet */}
          <input
            type="text"
            name="subject"
            placeholder="Sujet du message"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Votre message (max 500 caractères)"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            rows={6}
            maxLength={500}
            required
          ></textarea>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Envoyer
          </button>

        </form>
      </div>
    </section>
  );
}