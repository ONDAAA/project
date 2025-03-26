import React, { useState, useEffect } from 'react';
import { BeakerIcon, BookOpenIcon, GraduationCapIcon, StarIcon, BrainCircuitIcon, ClockIcon, SearchIcon } from 'lucide-react';
import Footer from "../components/Footer"; // Importujeme naši komponentu
import { Link } from 'react-router-dom';
import TopicButton from '../components/TopicButton'; // Přidej tento import na začátek souboru


interface Compound {
  name: string;
  formula: string;
}






export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [compounds, setCompounds] = useState<Compound[]>([]);
  const [filteredCompounds, setFilteredCompounds] = useState<Compound[]>([]);

  useEffect(() => {
    // Function to parse the CSV data
    const parseCSV = async () => {
      try {
        const response = await fetch('/compounds.csv');
        const text = await response.text();
        const rows = text.split('\n').filter(row => row.trim());
        
        const parsedCompounds = rows.map(row => {
          const [name, formula] = row.split(';');
          return { name: name.trim(), formula: formula?.trim() || '' };
        });

        setCompounds(parsedCompounds);
      } catch (error) {
        console.error('Error loading compounds:', error);
      }
    };

    parseCSV();
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = compounds.filter(compound => 
      compound.name.toLowerCase().includes(query) || 
      (compound.formula && compound.formula.toLowerCase().includes(query))
    ).slice(0, 10); // Limit to 10 results
    
    setFilteredCompounds(filtered);
  }, [searchQuery, compounds]);

  return (
    <>
      {/* Hero Section */}
      <div className="text-center pt-40 pb-12 px-4 h-screen ">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20 animate-pulse" />
            <BeakerIcon className="h-16 w-16 text-blue-600 relative" />
          </div>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4 pb-2" >
          Anorganické názvosloví
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Měj chemii v malíčku! Ovládněte anorganické názvosloví díky našemu přehlednému průvodci a interaktivním nástrojům.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Zadejte název sloučeniny nebo vzorec (např., H2SO4 or sulfuric acid)"
              className="w-full px-6 py-4 text-lg rounded-full bg-white/70 backdrop-blur-sm border border-blue-100 focus:border-blue-300 focus:outline-none shadow-sm pr-12 transition-all duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="absolute z-10 w-full mt-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              {filteredCompounds.length > 0 ? (
                <ul className="divide-y divide-gray-100">
                  {filteredCompounds.map((compound, index) => (
                    <li key={index} className="p-4 hover:bg-blue-50/50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">{compound.name}</span>
                        {compound.formula && (
                          <span className="text-blue-600 font-mono bg-blue-50/50 px-2 py-1 rounded-md">
                            {compound.formula}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-gray-500 text-center">
                  Žádné sloučeniny ani vzorce nenalezeny.
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Proč si vybrat Anorganické názvosloví?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<BookOpenIcon className="h-8 w-8 text-blue-600" />}
            title="Srozumitelný průvodce"
            description="Podrobné vysvětlení pravidel a konvencí pojmenování sloučenin."
          />
          <FeatureCard
            icon={<BrainCircuitIcon className="h-8 w-8 text-blue-600" />}
            title="Interaktivní procvičování"
            description="Učte se praxí díky našim cvičením."
          />
          <FeatureCard
            icon={<GraduationCapIcon className="h-8 w-8 text-blue-600" />}
            title="Krok za krokem"
            description="Postupujte od základů až po pokročilé koncepty."
          />
          <FeatureCard
            icon={<StarIcon className="h-8 w-8 text-blue-600" />}
            title="Rychlý přehled"
            description="Snadný přístup k nejběžnějším sloučeninám a pravidlům."
          />
        </div>
      </div>

      {/* Popular Topics */}
      <div className="py-12 px-4 backdrop-blur-sm bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Populární témata
          </h2>
          <div className="flex flex-wrap gap-3">
            <TopicButton to="/oxidy">Oxidy</TopicButton>
            <TopicButton to="/oxidy">Hydroxidy</TopicButton>
            <TopicButton to="/oxidy">Sloučeniny kyslíku</TopicButton>
            <TopicButton to="/oxidy">Sloučeniny polokovů a nekovů</TopicButton>
            <TopicButton to="/oxidy">Hydridy</TopicButton>
            <TopicButton to="/oxidy">Kyseliny - bezkyslíkaté, kyslíkaté </TopicButton>
            <TopicButton to="/oxidy">Halogenidy</TopicButton>
            <TopicButton to="/oxidy">Sulfidy</TopicButton>
            <TopicButton to="/oxidy">Další soli bezkyslíkatých kyselin</TopicButton>
            <TopicButton to="/oxidy">Soli kyslíkatých kyselin</TopicButton>
            <TopicButton to="/oxidy">Funkční deriváty kyselin</TopicButton>
            <TopicButton to="/oxidy">Ionty a atomové skupiny</TopicButton>
            <TopicButton to="/oxidy">Názvosloví krystalohydrátů</TopicButton>
            <TopicButton to="/oxidy">Komplexní sloučeniny</TopicButton>
          </div>
        </div>
      </div>

      {/* Recently Added Compounds */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-6">
          <ClockIcon className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Nedávno přidané sloučeniny
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <CompoundLink name="Antimoničnan barnatý" formula="Ba(SbO3)2" />
            <CompoundLink name="Dichroman draselný" formula="K2Cr2O7" />
            <CompoundLink name="Chlorid železitý" formula="FeCl3" />
          </div>
          <div className="space-y-4">
            <CompoundLink name="Hydroxid sodný" formula="NaOH" />
            <CompoundLink name="Uhličitan vápenatý" formula="CaCO3" />
            <CompoundLink name="Dusičnan amonný" formula="NH4NO3" />
          </div>
          <div className="space-y-4">
            <CompoundLink name="Kyselina sírová" formula="H2SO4" />
            <CompoundLink name="Oxid hořečnatý" formula="MgO" />
            <CompoundLink name="Všechny sloučeniny →" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all duration-200 hover:bg-white/80">
      <div className="mb-4 relative">
        <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

{/*function TopicButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-blue-100 text-blue-700 hover:bg-blue-50/50 transition-all duration-200">
      {children}
    </button>
  );
}
*/}

function CompoundLink({ name, formula }: { name: string; formula?: string }) {
  return (
    <a href="#" className="block text-gray-600 hover:text-blue-600 group">
      <div className="flex items-center p-3 rounded-lg hover:bg-white/70 backdrop-blur-sm transition-all duration-200">
        <span className="text-blue-500 mr-2">•</span>
        <span>{name}</span>
        {formula && (
          <span className="ml-2 text-gray-400 group-hover:text-blue-400 transition-colors">
            ({formula})
          </span>
        )}
      </div>
    </a>
  );
}

