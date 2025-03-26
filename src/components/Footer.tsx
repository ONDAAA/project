import React, { useState, useEffect } from 'react';
import { BeakerIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  

  return (
    <footer className="border-t border-blue-100 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <p className="text-gray-600">© Anorganické názvosloví - největší databáze anorganického názvosloví</p>
          </div>
          <div className="flex justify-center items-center gap-8 text-sm">
            <FooterLink href="/guide" label="Study Guide" isNew />
            <FooterLink href="/periodic-table" label="Periodická tabulka" />
            <FooterLink href="/tests" label="Cvičné testy" />
            <FooterLink href="#" label="O projektu" />
          </div>
          <div className="text-center mt-8">
            <div className="flex justify-center items-center gap-1 text-sm text-gray-500">
              <a href="/privacy" className="hover:text-blue-600 transition-colors">Soukromí</a>
              <span>·</span>
              <a href="/toc" className="hover:text-blue-600 transition-colors">Podmínky použití</a>
            </div>
          </div>
        </div>
      </footer>
  );
}

function FooterLink({ href, label, isNew }: { href: string; label: string; isNew?: boolean }) {
    return (
      <a href={href} className="relative inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
        {label}
        {isNew && (
          <span className="ml-2 bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
            New
          </span>
        )}
      </a>
    );
  }
