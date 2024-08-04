import Link from 'next/link';
import React from 'react'

const Footer = () => {
  const navLinks = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms and Conditions", href: "/terms-and-conditions" },
    { title: "Contact us", href: "/contact" },
    { title: "Unsubscribe", href: "/unsubscribe" },
  ];
  return (
    <footer className="w-full py-4 md:py-5 bg-black-1 text-gray-300">
      <div className="layout flex flex-col items-center gap-y-2 md:flex-row justify-center md:justify-between">
        <p>© {new Date().getFullYear()} Axis Remodeling. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {navLinks.map((link, index) => (
            <>
              <Link key={index} href={link.href} className="border-b border-b-transparent hover:border-b-white hover:text-white transition">{link.title}</Link>
              <div className="w-[2px] h-4 md:h-5 bg-gray-300 last:hidden"></div>
            </>
          ))}
        </div>
      </div>
    </footer>
  )
}

export { Footer }