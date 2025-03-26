import React from 'react';
import { Heart, Code2, GraduationCap, Coffee, Mail, Github, Globe } from 'lucide-react';
import Footer from "../components/Footer"; // Importujeme naši komponentu

export default function ToCPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Description */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Podmínky použití
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
            Vítejte na našich stránkách! Před používáním našich služeb si prosím přečtěte následující podmínky, které upravují vaše používání těchto stránek.
            </p>
            
            <h3 className="font-medium">
            1. Přijetí podmínek
            </h3>

            <p>
            Používáním našich stránek souhlasíte s těmito podmínkami. Pokud s nimi nesouhlasíte, prosím, naše stránky nepoužívejte.
            </p>
            
            <h3 className="font-medium">
            2. Používání stránek
            </h3>

            <p>
            Naše stránky jsou určeny pro osobní a nekomerční použití. Nesmíte je využívat pro nezákonné účely nebo jakýmkoli způsobem, který by mohl poškodit jejich funkčnost nebo narušit jejich používání ostatními uživateli.            </p>

            <h3 className="font-medium">
            3. Duševní vlastnictví
            </h3>

            <p>
            Všechna práva na obsah našich stránek, včetně textů, obrázků, log a designu, jsou chráněna autorským právem a jinými právy duševního vlastnictví. Obsah stránek nesmíte kopírovat, reprodukovat, šířit ani jinak používat bez předchozího písemného souhlasu.            </p>

            <h3 className="font-medium">
            4. Odpovědnost
            </h3>

            <p>
            I když se snažíme zajistit správnost informací na našich stránkách, neneseme odpovědnost za případné chyby nebo nepřesnosti. Nepřebíráme odpovědnost za žádné škody vzniklé použitím našich stránek.            </p>

            <h3 className="font-medium">
            5. Odkazy na třetí strany
            </h3>

            <p>
            Na našich stránkách mohou být odkazy na externí webové stránky, které nejsou pod naší kontrolou. Za obsah těchto stránek neneseme odpovědnost.
            </p>

          </div>
        </div>

      </div>

      <Footer/>

    </div>
  );
}