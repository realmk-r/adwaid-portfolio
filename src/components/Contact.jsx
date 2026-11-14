
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Send } from 'lucide-react';

// Replace this with your actual email address
const MY_EMAIL = 'adwaidpb@gmail.com';

// Replace this with your actual LinkedIn profile URL
const LINKEDIN_URL =
  'https://www.linkedin.com/in/adwaid-p-b-8b8165332';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const mailtoLink =
      `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  return (
    <>
      <section
        className="contact-section section-padding"
        id="contact"
      >

        {/* Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">
            05 / GET IN TOUCH
          </p>

          <h2>
            LET'S BUILD
            <span> SOMETHING.</span>
          </h2>

          <p className="section-subtitle">
            Have an idea, an opportunity or just want to connect?
            My inbox is always open.
          </p>
        </motion.div>

        <div className="contact-grid">

          {/* Left information */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="contact-big-text">
              HAVE A
              <span> PROJECT?</span>
              <br />
              LET'S TALK.
            </p>

            <p className="contact-description">
              I'm always interested in exploring new ideas,
              collaborating on projects and connecting with
              people in technology.
            </p>

            <a
              href={`mailto:${MY_EMAIL}`}
              className="contact-email"
            >
              {MY_EMAIL}
              <ArrowUpRight size={18} />
            </a>

            <div className="contact-socials">

              <a
                href="https://github.com/realmk-r"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
                <ArrowUpRight size={14} />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN
                <ArrowUpRight size={14} />
              </a>

            </div>

          </motion.div>

          {/* Contact form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="form-heading">
              <span>01 — SEND A MESSAGE</span>
              <Send size={19} />
            </div>

            <div className="form-group">
              <label htmlFor="contact-name">
                YOUR NAME
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">
                YOUR EMAIL
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">
                YOUR MESSAGE
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your idea..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              SEND MESSAGE
              <ArrowUpRight size={18} />
            </button>

            <p className="form-note">
              Your email application will open with
              your message ready to send.
            </p>

          </motion.form>

        </div>

      </section>

      {/* Footer */}
      <footer className="portfolio-footer">

        <div className="footer-main">

          <a href="#home" className="footer-logo">
            APB<span>.</span>
          </a>

          <p>
            BUILDING THE FUTURE, ONE LINE AT A TIME.
          </p>

          <a href="#home" className="back-to-top">
            BACK TO TOP
            <ArrowUp size={16} />
          </a>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} ADWAID P B.
            ALL RIGHTS RESERVED.
          </span>

          <span>
            DESIGNED & DEVELOPED WITH PASSION.
          </span>

        </div>

      </footer>
    </>
  );
}

export default Contact;
