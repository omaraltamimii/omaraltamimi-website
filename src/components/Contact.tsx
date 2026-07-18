import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import Section from "./Section";
import { contact } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something engineered to last"
      subtitle="Engineering projects, collaborations, mentoring, or just a conversation — I read every message."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease }}
          className="lg:col-span-5"
        >
          <a
            href={`mailto:${contact.email}`}
            className="card group flex items-center gap-4 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md border border-ink-500 text-bone-50 transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
              <Mail size={18} />
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <p className="mt-1 text-sm text-bone-50">{contact.email}</p>
            </div>
          </a>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="card flex items-center justify-center px-3 py-5 text-sm text-bone-300 transition-colors duration-300 hover:text-bone-50"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease, delay: 0.08 }}
          onSubmit={(e) => e.preventDefault()}
          className="card lg:col-span-7 grid gap-4 p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="your@email.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="What is this about?" />
          <label className="flex flex-col gap-2">
            <span className="eyebrow">Message</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me a bit about your project or question."
              className="resize-none rounded-md border border-ink-500 bg-ink-800/60 px-4 py-3 text-sm text-bone-50 placeholder:text-bone-400 focus:border-accent focus:outline-none"
            />
          </label>
          <button type="submit" className="btn-primary self-start">
            Send Message <Send size={15} />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-md border border-ink-500 bg-ink-800/60 px-4 py-3 text-sm text-bone-50 placeholder:text-bone-400 focus:border-accent focus:outline-none"
      />
    </label>
  );
}
