'use client'

import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter, Lock, Copyright } from 'lucide-react'
import { servicesData } from '@/lib/services-data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            {/* Left Section - Brand & Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <img src="/logo-bg-2.png" alt="DigitalRakshak Logo" className="w-20 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white">DigitalRakshak</h3>
              </div>
              <p className="text-sm text-slate-400 mb-2">DigitalRakshak InfoTech Pvt. Ltd</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">CIN: U78300GJ2025PTC171397</p>
              <p className="text-sm font-mono text-teal-400 mb-6"></p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Your trusted partner for comprehensive verification and compliance solutions. Secure, reliable, and compliant services for your business.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/idigitalrakshak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/iDigitalRakshak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/idigitalrakshak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/iDigitalRakshak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Service Categories Columns */}
            {servicesData.slice(0, 2).map((service) => (
              <div key={service.name}>
                <h4 className="text-sm font-bold text-teal-500 uppercase tracking-wider mb-4">
                  {service.name}
                </h4>
                <ul className="space-y-2.5">
                  {service.subservices.map((subService) => (
                    <li key={subService.name}>
                      <a
                        href="#"
                        className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                      >
                        {subService.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* More Services + Company Details */}
            <div>
              <h4 className="text-sm font-bold text-teal-500 uppercase tracking-wider mb-4">
                More Services
              </h4>
              <ul className="space-y-2.5 mb-8">
                {servicesData.slice(2).map((service) => (
                  <li key={service.name}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-sm font-bold text-teal-500 uppercase tracking-wider mb-4">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@digitalrakshak.com"
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors break-all"
                  >
                    info@digitalrakshak.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:sales@digitalrakshak.com"
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors break-all"
                  >
                    sales@digitalrakshak.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400">
                    Gandhinagar, Gujarat, India
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+917387022442"
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    +91 73870 22442
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-400">
            <p>© {currentYear} DigitalRakshak InfoTech Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
