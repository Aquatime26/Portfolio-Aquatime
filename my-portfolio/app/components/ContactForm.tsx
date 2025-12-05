"use client";
import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if(formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="w-full py-20 bg-gray-50"
      ref={formRef}
    >
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-8">
        <h2 className={`text-3xl font-bold text-center ${visible ? "fade-in" : ""}`}>
          Contactez-moi
        </h2>

        <form className={`flex flex-col gap-6 w-full ${visible ? "fade-in-delay" : ""}`}>
          {/*Nom*/}
          <label htmlFor="name" className="sr-only">Votre nom</label>
          <input type="text" name="name" placeholder="Votre nom"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          {/*email*/}
          <label htmlFor="email" className="sr-only">Votre email</label>
          <input type="email" name="email" placeholder="Votre email"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          {/*type de demande*/}
          <label htmlFor="type" className="sr-only">Type de demande</label>
          <select name="type"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">-- Choisissez un type --</option>
            <option value="new-client">Je suis un nouveau client</option>
            <option value="follow-up">J&apos;ai déjà effectué une demande / Suivi de ma demande</option>
            <option value="regular-client">Je suis un client régulier / Suivi sur un site web déjà terminé</option>
          </select>

          {/*sujet*/}
          <label htmlFor="subject" className="sr-only">Sujet du message</label>
          <input type="text" name="subject" placeholder="Sujet du message"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          {/*message*/}
          <label htmlFor="message" className="sr-only">Votre message</label>
          <textarea name="message" placeholder="Votre message (max 500 caractères)"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            rows={6} maxLength={500} required
          ></textarea>
          <button type="submit"
            className="bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 hover:shadow-lg transition-all"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}