import React from 'react';
import { Heart, Code2, GraduationCap, Coffee, Mail, Github, Globe } from 'lucide-react';
import Footer from "../components/Footer"; // Importujeme naši komponentu

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Description */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Tato část stránky je aktálně ve vývoji
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Každým dnem se snažíme na stránce pracovat a přidávat nové věci. Vzhledem k tomu, že je projekt Open-Source a stránka neobsahuje reklamy tak je přidávání nových funkcionalit značně náročnější
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