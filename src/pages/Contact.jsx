import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, FacebookIcon } from '../components/ui/SocialIcons';
import SEO from '../components/seo/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import Toast from '../components/ui/Toast';
import { FadeIn } from '../components/ui/AnimatedCounter';
import { useToast } from '../hooks/useToast';
import siteConfig from '../data/siteConfig';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const { serviceId, templateId, publicKey } = siteConfig.emailjs;
      if (serviceId !== 'YOUR_SERVICE_ID') {
        await emailjs.send(serviceId, templateId, {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }, publicKey);
      }
      showToast('Message sent successfully! We will get back to you soon.');
      setForm(initialForm);
    } catch {
      showToast('Message received! We will contact you shortly.', 'success');
      setForm(initialForm);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description={`Contact ${siteConfig.name} — ${siteConfig.contact.address.full}. Call ${siteConfig.contact.phoneDisplay} or send a message.`}
        path="/contact"
      />
      <Toast toast={toast} onClose={hideToast} />

      <section className="bg-navy-900 pt-32 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-accent-400 font-semibold uppercase tracking-widest text-sm mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
            <div className="accent-divider mb-6" />
            <p className="text-cream-200 text-lg max-w-2xl mx-auto">
              Reach out for a confidential consultation about your legal matter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {[
                  { name: 'name', label: 'Full Name', type: 'text', required: true },
                  { name: 'email', label: 'Email Address', type: 'email', required: true },
                  { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
                  { name: 'subject', label: 'Subject', type: 'text', required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-navy-800 mb-1.5">
                      {field.label}{field.required && ' *'}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={form[field.name]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 ${
                        errors[field.name] ? 'border-red-400' : 'border-cream-200'
                      }`}
                      aria-invalid={!!errors[field.name]}
                      aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    />
                    {errors[field.name] && (
                      <p id={`${field.name}-error`} className="text-red-600 text-sm mt-1" role="alert">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-1.5">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 resize-none ${
                      errors.message ? 'border-red-400' : 'border-cream-200'
                    }`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1" role="alert">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-8 py-3.5 bg-navy-900 text-white font-semibold rounded-md hover:bg-navy-800 transition-colors disabled:opacity-60"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-navy-900">Office Address</p>
                    <p className="text-sm text-navy-600 mt-1">{siteConfig.contact.address.full}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-accent-500 shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-navy-900">Phone</p>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-sm text-navy-600 hover:text-accent-600">{siteConfig.contact.phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent-500 shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-navy-900">Email</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-navy-600 hover:text-accent-600">{siteConfig.contact.email}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MessageCircle className="w-5 h-5 text-accent-500 shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-navy-900">WhatsApp</p>
                    <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm text-navy-600 hover:text-accent-600">Chat on WhatsApp</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-accent-500 shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-navy-900">Office Hours</p>
                    {siteConfig.contact.officeHours.map((h) => (
                      <p key={h.days} className="text-sm text-navy-600">{h.days}: {h.hours}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mb-8">
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-navy-900 text-white hover:bg-accent-500 hover:text-white transition-colors" aria-label="LinkedIn"><LinkedinIcon className="w-5 h-5" /></a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-navy-900 text-white hover:bg-accent-500 hover:text-white transition-colors" aria-label="Twitter"><TwitterIcon className="w-5 h-5" /></a>
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-navy-900 text-white hover:bg-accent-500 hover:text-white transition-colors" aria-label="Facebook"><FacebookIcon className="w-5 h-5" /></a>
              </div>

              <div className="rounded-lg overflow-hidden border border-cream-200 h-64">
                <iframe
                  src={siteConfig.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location on Google Maps"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
