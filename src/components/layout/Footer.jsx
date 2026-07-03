import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, FacebookIcon } from '../ui/SocialIcons';
import siteConfig from '../../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-cream-200">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent-500 flex items-center justify-center font-serif font-bold text-white text-lg shadow-lg shadow-accent-500/20">
                RM
              </div>
              <div>
                <p className="font-serif font-semibold text-white">{siteConfig.shortName}</p>
                <p className="text-xs text-cream-200/60">{siteConfig.title}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream-200/70 mb-5">
              Trusted legal counsel in {siteConfig.city} with over 23 years of courtroom experience.
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-navy-800 hover:bg-accent-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-navy-800 hover:bg-accent-500 hover:text-white transition-colors" aria-label="Twitter">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-navy-800 hover:bg-accent-500 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-cream-200/70 hover:text-accent-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/faq" className="text-sm text-cream-200/70 hover:text-accent-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-cream-200/70 hover:text-accent-400 transition-colors">Testimonials</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-white font-semibold mb-5">Practice Areas</h3>
            <ul className="space-y-3">
              {['Criminal Law', 'Civil Litigation', 'Corporate Law', 'Family Law', 'Property Law', 'Intellectual Property'].map((area) => (
                <li key={area}>
                  <Link
                    to={`/practice-areas/${area.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm text-cream-200/70 hover:text-accent-400 transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-white font-semibold mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-cream-200/70">{siteConfig.contact.address.full}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="flex gap-3 text-sm text-cream-200/70 hover:text-accent-400 transition-colors">
                  <Phone className="w-4 h-4 text-accent-500 shrink-0" aria-hidden="true" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex gap-3 text-sm text-cream-200/70 hover:text-accent-400 transition-colors">
                  <Mail className="w-4 h-4 text-accent-500 shrink-0" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream-200/50">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream-200/50">
            Bar Council Enrollment: {siteConfig.barCouncil.enrollmentNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
