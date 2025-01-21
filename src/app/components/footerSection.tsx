'use client';

import React from 'react';

const quickLinks = [
  { label: 'About Us', href: '/aboutus' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Our Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
];

const ourServices = [
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Contact Support', href: '/support' },
  { label: 'Careers', href: '/careers' },
];

const socialIcons = [
  { icon: 'facebook-icon', href: 'https://facebook.com' },
  { icon: 'twitter-icon', href: 'https://twitter.com' },
  { icon: 'instagram-icon', href: 'https://instagram.com' },
];

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="section-center">
        {/* Medcare Column */}
        <div>
          <h4 className="footer-title">Medcare</h4>
          <p className="footer-description">
            Your trusted partner in healthcare solutions.
          </p>
          <div className="flex mt-2">
            <span className="icon mail-icon"></span>
            <p className="text-white">info@website.com</p>
          </div>
          <div className="flex mt-2">
            <span className="icon location-icon"></span>
            <p className="text-white">123 Health St, Wellness City</p>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services Column */}
        <div>
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            {ourServices.map((service, index) => (
              <li key={index}>
                <a href={service.href} className="footer-link">
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Book an Appointment Column */}
        <div>
          <h4 className="footer-title">Book an Appointment</h4>
          <p className="footer-description">
            Reach out to us to book your next appointment.
          </p>
          <p className="footer-phone">+1 234 567 890</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Bottom Section */}
      <div className="footer-bottom section-center ">
        <p className='text-white'>
          All Right Reserved @Company2025 |{' '}
          <a href="/terms" className=" footer-bottom-link">
            Terms and Conditions
          </a>{' '}
          |{' '}
          <a href="/privacy" className="footer-bottom-link">
            Privacy Policy
          </a>
        </p>
        <div className="flex">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`footer-social-icon ${social.icon}`}
            ></a>
          ))}
        </div>
      </div>
    </footer>
  );
}
