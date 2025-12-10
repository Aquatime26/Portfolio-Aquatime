"use client";
import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "rate">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form =e.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.status === 429) {
      setStatus("rate");
      return;
    }

    const result = await response.json();

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

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

        <form onSubmit={onSubmit} className={`flex flex-col gap-6 w-full ${visible ? "fade-in-delay" : ""}`}>
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
          <select id="type" name="type"
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

          {status === "success" && (
            <p className="text-green-600 font-semibold">Votre message a bien été envoyé.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-semibold">Une erreur est survenue. Veuillez réessayer.</p>
          )}
          {status === "rate" && (
            <p className="text-orange-600 font-semibold">Veuillez attendre quelques instants avant de réessayer.</p>
          )}

        </form>
      </div>
    </section>
  );
}