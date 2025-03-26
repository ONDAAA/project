import React from 'react';
import { Heart, Code2, GraduationCap, Coffee, Mail, Github, Globe } from 'lucide-react';
import Footer from "../components/Footer"; // Importujeme naši komponentu

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Description */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            O projektu Anorganické názvosloví
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Projekt Anorganické názvosloví vznikl s cílem vytvořit moderní, přehledný a interaktivní vzdělávací portál
              pro studium chemického názvosloví. Naším posláním je zpřístupnit chemii všem studentům a zájemcům o tento
              fascinující obor.
            </p>
            <p>
              Věříme, že správné pochopení názvosloví je základním kamenem pro další studium chemie. Proto jsme vytvořili
              tento nástroj, který kombinuje teoretické znalosti s praktickými příklady a interaktivními cvičeními.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
            <div className="flex items-center mb-4">
              <Code2 className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Technologie
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Moderní React framework</li>
              <li>• Responzivní design</li>
              <li>• Optimalizováno pro všechna zařízení</li>
              <li>• Pravidelné aktualizace</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Vzdělávací přístup
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Systematické vysvětlení</li>
              <li>• Praktické příklady</li>
              <li>• Interaktivní cvičení</li>
              <li>• Průběžné testování znalostí</li>
            </ul>
          </div>
        </div>

        {/* Author */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent flex items-center">
            <Heart className="h-5 w-5 mr-2 text-blue-600" />
            Autor projektu
          </h2>
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Author"
              className="w-20 h-20 rounded-full border-2 border-blue-100"
            />
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-gray-900">Ondřej Zemánek</h3>
              <p className="text-gray-600">Junior Full Stack Web Developer</p>
            </div>
          </div>
          <div className="prose max-w-none text-gray-700">
            <p>
              Tento projekt - jednoduchý vyhledávač pro vzorce/sloučeniny anorganické chemie vznikl v mé hlavě již
              pár let zpět, kdy jsem jej poprvé uvedl do provozu. Asi po roce provozu byl pozastaven, ale z důvodu
              rozšíření portfolia jsem jej přepracoval, přidal moderní grafiku a pár užitečných funkcí, aby projekt
              nebyl jen dalším do sbírky projektů, ale i užitečným nástrojem pro studenty. Doufám že bude sloužit.
            </p>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="mailto:contact@example.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              Kontakt
            </a>
            <a href="https://github.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
            <a href="https://example.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Globe className="h-5 w-5 mr-2" />
              Web
            </a>
          </div>
        </div>

        {/* Sources */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Použité zdroje
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-100 pl-4">
              <h3 className="font-semibold text-gray-900">Odborná literatura</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>• Chemické názvosloví anorganických látek (Academia, 2020)</li>
                <li>• Přehled středoškolské chemie (SPN, 2019)</li>
                <li>• Nomenclature of Inorganic Chemistry (IUPAC, 2005)</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-100 pl-4">
              <h3 className="font-semibold text-gray-900">Online zdroje</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>• Databáze chemických vzorců ChemSpider</li>
                <li>• Vzdělávací portál E-ChemBook</li>
                <li>• IUPAC Recommendations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8">
          <div className="flex items-center mb-6">
            <Coffee className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Podpořte projekt
            </h2>
          </div>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Tento projekt je vyvíjen a udržován jako open-source iniciativa. Pokud vám projekt pomohl a chcete
              podpořit jeho další rozvoj, zvažte některou z následujících možností:
            </p>
            <ul className="space-y-2">
              <li>• Sdílejte projekt s ostatními</li>
              <li>• Přispějte k vývoji na GitHubu</li>
              <li>• Nahlaste chyby nebo navrhněte vylepšení</li>
              <li>• Podpořte nás finančně přes GitHub Sponsors</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}