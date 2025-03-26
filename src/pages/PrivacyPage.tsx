import React from 'react';
import { Heart, Code2, GraduationCap, Coffee, Mail, Github, Globe } from 'lucide-react';
import Footer from "../components/Footer"; // Importujeme naši komponentu

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Description */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Zásady ochrany soukromí
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
            Vaše soukromí je pro nás důležité. Tento dokument popisuje, jak shromažďujeme, používáme a chráníme vaše osobní údaje.
            </p>
            <p>
            Shromažďujeme pouze údaje, které nám poskytnete při používání našich služeb, jako jsou:
                * Jméno a příjmení
                * E-mailová adresa
                * Další údaje, které nám poskytnete dobrovolně
            </p>
            <p>
            Jak používáme vaše údaje:
            Vaše údaje používáme k tomu, abychom vám mohli poskytovat naše služby a komunikovat s vámi.
            </p>
            <p>
              Prosíme o strpení a v nejbližší době přibude i tato funkcionalita.
            </p>
            <p>
              Prosíme o strpení a v nejbližší době přibude i tato funkcionalita.
            </p>
            <p>
              Prosíme o strpení a v nejbližší době přibude i tato funkcionalita.
            </p>
            <p>
              Prosíme o strpení a v nejbližší době přibude i tato funkcionalita.
            </p>
          </div>
        </div>

      </div>

      <Footer/>

    </div>
  );
}