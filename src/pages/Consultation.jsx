import { useState } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Toast from '../components/ui/Toast';
import { FadeIn } from '../components/ui/AnimatedCounter';
import { useToast } from '../hooks/useToast';
import siteConfig from '../data/siteConfig';

const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
];

const practiceOptions = [
  'Criminal Law', 'Civil Litigation', 'Corporate Law',
  'Family Law', 'Property Law', 'Intellectual Property', 'Other',
];

export default function ConsultationPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', practice: '', date: '', time: '', notes: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [booked, setBooked] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  const minDate = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.practice) newErrors.practice = 'Please select a practice area';
    if (!form.date) newErrors.date = 'Please select a date';
    if (!form.time) newErrors.time = 'Please select a time slot';
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
    await new Promise((r) => setTimeout(r, 1000));
    setBooked(true);
    showToast('Consultation booked successfully!');
    setSubmitting(false);
  };

  if (booked) {
    return (
      <>
        <SEO title="Consultation Booked" path="/consultation" noindex />
        <section className="min-h-[70vh] flex items-center justify-center section-padding bg-cream-50">
          <FadeIn className="text-center max-w-md">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-bold text-navy-900 mb-4">Consultation Booked!</h1>
            <p className="text-navy-600 mb-2">Thank you, {form.name}.</p>
            <p className="text-navy-600 mb-6">
              Your consultation for <strong>{form.practice}</strong> is scheduled on{' '}
              <strong>{new Date(form.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong> at{' '}
              <strong>{form.time}</strong>.
            </p>
            <p className="text-sm text-navy-500">A confirmation will be sent to {form.email}.</p>
          </FadeIn>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Book a Consultation"
        description={`Schedule a confidential legal consultation with ${siteConfig.name} in ${siteConfig.city}. Choose your preferred date and time.`}
        path="/consultation"
      />
      <Toast toast={toast} onClose={hideToast} />

      <section className="bg-navy-900 pt-32 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-accent-400 font-semibold uppercase tracking-widest text-sm mb-3">Schedule</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Book a Consultation</h1>
            <div className="accent-divider mb-6" />
            <p className="text-cream-200 text-lg max-w-2xl mx-auto">
              Choose a convenient date and time for your confidential legal consultation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom max-w-2xl">
          <FadeIn>
            <form onSubmit={handleSubmit} noValidate className="bg-white rounded-xl border border-cream-200 p-6 md:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-800 mb-1.5">Full Name *</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 ${errors.name ? 'border-red-400' : 'border-cream-200'}`} />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-1.5">Email *</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 ${errors.email ? 'border-red-400' : 'border-cream-200'}`} />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy-800 mb-1.5">Phone *</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 ${errors.phone ? 'border-red-400' : 'border-cream-200'}`} />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="practice" className="block text-sm font-medium text-navy-800 mb-1.5">Practice Area *</label>
                <select id="practice" name="practice" value={form.practice} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 ${errors.practice ? 'border-red-400' : 'border-cream-200'}`}>
                  <option value="">Select a practice area</option>
                  {practiceOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                {errors.practice && <p className="text-red-600 text-sm mt-1">{errors.practice}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-navy-800 mb-1.5">
                    <Calendar className="w-4 h-4 inline mr-1" aria-hidden="true" /> Preferred Date *
                  </label>
                  <input id="date" name="date" type="date" min={minDate} value={form.date} onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 ${errors.date ? 'border-red-400' : 'border-cream-200'}`} />
                  {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-navy-800 mb-1.5">
                    <Clock className="w-4 h-4 inline mr-1" aria-hidden="true" /> Preferred Time *
                  </label>
                  <select id="time" name="time" value={form.time} onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 ${errors.time ? 'border-red-400' : 'border-cream-200'}`}>
                    <option value="">Select a time slot</option>
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-navy-800 mb-1.5">Brief Description (Optional)</label>
                <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handleChange}
                  placeholder="Briefly describe your legal matter..."
                  className="w-full px-4 py-3 rounded-lg border border-cream-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 resize-none" />
              </div>

              <button type="submit" disabled={submitting}
                className="w-full px-8 py-3.5 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-colors disabled:opacity-60">
                {submitting ? 'Booking...' : 'Book Consultation'}
              </button>

              <p className="text-xs text-navy-400 text-center">
                Initial consultation fee: ₹2,000 (30 minutes). Payment details will be shared upon confirmation.
              </p>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
