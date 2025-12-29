/*"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

type ContactFormMapData = {
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  buttonText: string;
  mapSrc: string;
};

const ContactFormMap = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.contactFormMap;
  const c = colors.contactFormMap;

  const [formData, setFormData] = useState<ContactFormMapData>({
    namePlaceholder: "",
    emailPlaceholder: "",
    messagePlaceholder: "",
    buttonText: "",
    mapSrc: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=contactPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setFormData({
        namePlaceholder:
          data.find((i: any) => i.componentName === "ContactForm_Name_Placeholder")?.value ||
          "Name",
        emailPlaceholder:
          data.find((i: any) => i.componentName === "ContactForm_Email_Placeholder")?.value ||
          "Email",
        messagePlaceholder:
          data.find((i: any) => i.componentName === "ContactForm_Message_Placeholder")?.value ||
          "How can we help?",
        buttonText:
          data.find((i: any) => i.componentName === "ContactForm_Button_Text")?.value || "SEND",
        mapSrc:
          data.find((i: any) => i.componentName === "ContactMap_Src")?.value ||
          "https://www.google.com/maps?q=Alif+International+School,Dharga+Town,Sri+Lanka&output=embed",
      });
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setSuccess("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSuccess("Failed to send message.");
      }
    } catch (err) {
      setSuccess("Failed to send message.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className={s.sectionWrapper}>
        {/* Form */
      /*  <form className={s.formWrapper} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={formData.namePlaceholder}
            className={s.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder={formData.emailPlaceholder}
            className={s.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder={formData.messagePlaceholder}
            className={s.textarea}
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className={s.button} disabled={loading}>
            {loading ? "Sending..." : formData.buttonText}
          </button>
          {success && <p className="mt-2 text-green-600">{success}</p>}
        </form>

        {/* Map */
       /* <div className={s.mapWrapper}>
          {formData.mapSrc && (
            <iframe
              src={formData.mapSrc}
              className={s.iframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormMap; */

"use client";

import { useEffect, useState } from "react";
import { useBrand } from "@/theme/use-brand";

type ContactFormMapData = {
  mapSrc: string; // Google Maps or Form iframe URL
  formSrc: string; // Google Form iframe URL
};

const ContactFormMap = () => {
  const { spacing, colors } = useBrand();
  const s = spacing.sections.contactFormMap;
  const c = colors.contactFormMap;

  const [formData, setFormData] = useState<ContactFormMapData>({
    mapSrc: "",
    formSrc: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sheetData?sheet=contactPage");
      const data = await res.json();
      if (!Array.isArray(data)) return;

      setFormData({
        mapSrc:
          data.find((i: any) => i.componentName === "ContactMap_Src")?.value ||
          "https://www.google.com/maps?q=Alif+International+School,Dharga+Town,Sri+Lanka&output=embed",
        formSrc:
          data.find((i: any) => i.componentName === "ContactForm_Src")?.value ||
          "https://docs.google.com/forms/d/e/1FAIpQLSfcvyehhxixVMkYDCNGVcVgi0ksR7aMKnG6JEPvsu1Ym5FtkQ/viewform?embedded=true",
      });
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionPadding} style={{ backgroundColor: c.bg }}>
      <div className={s.sectionWrapper}>
        {/* Google Form */}
        {formData.formSrc && (
          <div className={s.formWrapper}>
            <iframe
              src={formData.formSrc}
              className={s.iframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}

        {/* Map */}
        {formData.mapSrc && (
          <div className={s.mapWrapper}>
            <iframe
              src={formData.mapSrc}
              className={s.iframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactFormMap;
