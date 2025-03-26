import React from 'react';
import { InfoIcon } from 'lucide-react';
import Footer from "../components/Footer"; // Importujeme naši komponentu

interface Element {
  number: number;
  symbol: string;
  name: string;
  mass: number;
  category: string;
  group?: string;
  period?: number;
}

export default function PeriodicTablePage() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
          Periodická tabulka prvků
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Interaktivní periodická tabulka prvků s detailními informacemi o každém prvku. Klikněte na prvek pro zobrazení podrobností.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100 p-6 shadow-sm mb-8">
        <div className="flex items-center gap-2 mb-4">
          <InfoIcon className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Legenda</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <LegendItem color="bg-red-200" text="Alkalické kovy" />
          <LegendItem color="bg-orange-200" text="Kovy alkalických zemin" />
          <LegendItem color="bg-purple-200" text="Přechodné kovy" />
          <LegendItem color="bg-blue-300" text="Kovy" />
          <LegendItem color="bg-blue-200" text="Polokovy" />
          <LegendItem color="bg-green-200" text="Nekovy" />
          <LegendItem color="bg-teal-200" text="Halogeny" />
          <LegendItem color="bg-yellow-200" text="Vzácné plyny" />
          <LegendItem color="bg-gray-100" text="Lanthanoidy" />
          <LegendItem color="bg-gray-200" text="Aktinoidy" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="periodic-table grid gap-2 min-w-[1024px]" 
          style={{ 
            gridTemplateColumns: 'repeat(18, 1fr)', // Všechny prvky mají stejnou šířku
            gridAutoRows: '1fr', // Všechny řádky jsou stejně velké
          }}>
          {periodicTableData.map((element) => (
            <div key={element.number} 
              style={{ 
                gridColumn: getGridColumn(element),
                gridRow: getGridRow(element)
              }}>
              <ElementCard element={element} />
            </div>
          ))}
        </div>
      </div>

      <Footer/>

    </div>
  );
}

function getGridColumn(element: Element): number {
  if (element.number >= 57 && element.number <= 71) {
    return element.number - 57 + 3;
  }
  if (element.number >= 89 && element.number <= 103) {
    return element.number - 89 + 3;
  }
  return parseInt(element.group || "1");
}

function getGridRow(element: Element): number {
  if (element.number >= 57 && element.number <= 71) {
    return 8;
  }
  if (element.number >= 89 && element.number <= 103) {
    return 9;
  }
  return element.period || 1;
}

function LegendItem({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded ${color}`}></div>
      <span className="text-sm text-gray-600">{text}</span>
    </div>
  );
}

function ElementCard({ element }: { element: Element }) {
  const getCategoryColor = (category: string) => {
    const colors = {
      'alkalicke_kovy': 'bg-red-200 hover:bg-red-300',
      'kovy_alkalickych_zemin': 'bg-orange-200 hover:bg-orange-300',
      'prechodne_kovy': 'bg-purple-200 hover:bg-purple-300',
      'kovy': 'bg-blue-300 hover:bg-blue-400',
      'polokovy': 'bg-blue-200 hover:bg-blue-300',
      'nekovy': 'bg-green-200 hover:bg-green-300',
      'halogeny': 'bg-teal-200 hover:bg-purple-300',
      'vzacne_plyny': 'bg-yellow-200 hover:bg-yellow-300',
      'lanthanoidy': 'bg-gray-100 hover:bg-gray-200',
      'aktinoidy': 'bg-gray-200 hover:bg-gray-300',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 hover:bg-gray-200';
  };

  return (
    <button 
      className={`aspect-square w-full h-full p-1 rounded-lg backdrop-blur-sm ${getCategoryColor(element.category)} 
      prechodne_kovy-all duration-200 group hover:shadow-md border border-transparent hover:border-blue-200`}
    >
      <div className="flex flex-col w-full">
        <div className="text-xs text-gray-500">{element.number}</div>
        <div className="text-xl font-bold text-gray-900 group-hover:text-blue-700 prechodne_kovy-colors">
          {element.symbol}
        </div>
        <div className="text-xs text-gray-600 mt-auto">
          {element.name}
        </div>
        <div className="text-xs text-gray-500">
          {element.mass.toFixed(2)}
        </div>
      </div>
    </button>


  );
}

const periodicTableData: Element[] = [
  { number: 1, symbol: 'H', name: 'Vodík', mass: 1.008, category: 'nekovy', group: '1', period: 1 },
  { number: 2, symbol: 'He', name: 'Helium', mass: 4.003, category: 'vzacne_plyny', group: '18', period: 1 },

  { number: 3, symbol: 'Li', name: 'Lithium', mass: 6.941, category: 'alkalicke_kovy', group: '1', period: 2 },
  { number: 4, symbol: 'Be', name: 'Beryllium', mass: 9.012, category: 'kovy', group: '2', period: 2 },
  { number: 5, symbol: 'B', name: 'Bor', mass: 10.811, category: 'polokovy', group: '13', period: 2 },
  { number: 6, symbol: 'C', name: 'Uhlík', mass: 12.011, category: 'nekovy', group: '14', period: 2 },
  { number: 7, symbol: 'N', name: 'Dusík', mass: 14.007, category: 'nekovy', group: '15', period: 2 },
  { number: 8, symbol: 'O', name: 'Kyslík', mass: 15.999, category: 'nekovy', group: '16', period: 2 },
  { number: 9, symbol: 'F', name: 'Fluor', mass: 18.998, category: 'halogeny', group: '17', period: 2 },
  { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.180, category: 'vzacne_plyny', group: '18', period: 2 },

  { number: 11, symbol: 'Na', name: 'Sodík', mass: 22.990, category: 'alkalicke_kovy', group: '1', period: 3 },
  { number: 12, symbol: 'Mg', name: 'Hořčík', mass: 24.305, category: 'kovy', group: '2', period: 3 },
  { number: 13, symbol: 'Al', name: 'Hliník', mass: 26.982, category: 'kovy', group: '13', period: 3 },
  { number: 14, symbol: 'Si', name: 'Křemík', mass: 28.086, category: 'polokovy', group: '14', period: 3 },
  { number: 15, symbol: 'P', name: 'Fosfor', mass: 30.974, category: 'nekovy', group: '15', period: 3 },
  { number: 16, symbol: 'S', name: 'Síra', mass: 32.065, category: 'nekovy', group: '16', period: 3 },
  { number: 17, symbol: 'Cl', name: 'Chlor', mass: 35.453, category: 'halogeny', group: '17', period: 3 },
  { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.948, category: 'vzacne_plyny', group: '18', period: 3 },

  { number: 19, symbol: 'K', name: 'Draslík', mass: 1.008, category: 'alkalicke_kovy', group: '1', period: 4 },
  { number: 20, symbol: 'Ca', name: 'Vápník', mass: 4.003, category: 'kovy_alkalickych_zemin', group: '2', period: 4 },
  { number: 21, symbol: 'Sc', name: 'Skandium', mass: 6.941, category: 'prechodne_kovy', group: '3', period: 4 },
  { number: 22, symbol: 'Ti', name: 'Titan', mass: 9.012, category: 'prechodne_kovy', group: '4', period: 4 },
  { number: 23, symbol: 'V', name: 'Vanad', mass: 10.811, category: 'prechodne_kovy', group: '5', period: 4 },
  { number: 24, symbol: 'Cr', name: 'Chrom', mass: 12.011, category: 'prechodne_kovy', group: '6', period: 4 },
  { number: 25, symbol: 'Mn', name: 'Mangan', mass: 14.007, category: 'prechodne_kovy', group: '7', period: 4 },
  { number: 26, symbol: 'Fe', name: 'Železo', mass: 15.999, category: 'prechodne_kovy', group: '8', period: 4 },
  { number: 27, symbol: 'Co', name: 'Kobalt', mass: 18.998, category: 'prechodne_kovy', group: '9', period: 4 },
  { number: 28, symbol: 'Ni', name: 'Nikl', mass: 20.180, category: 'prechodne_kovy', group: '10', period: 4 },
  { number: 29, symbol: 'Cu', name: 'Měď', mass: 22.990, category: 'prechodne_kovy', group: '11', period: 4 },
  { number: 30, symbol: 'Zn', name: 'Zinek', mass: 24.305, category: 'prechodne_kovy', group: '12', period: 4 },
  { number: 31, symbol: 'Ga', name: 'Gallium', mass: 26.982, category: 'kovy', group: '13', period: 4 },
  { number: 32, symbol: 'Ge', name: 'Germanium', mass: 28.086, category: 'polokovy', group: '14', period: 4 },
  { number: 33, symbol: 'As', name: 'Arsen', mass: 30.974, category: 'polokovy', group: '15', period: 4 },
  { number: 34, symbol: 'Se', name: 'Selen', mass: 32.065, category: 'nekovy', group: '16', period: 4 },
  { number: 35, symbol: 'Br', name: 'Brom', mass: 35.453, category: 'halogeny', group: '17', period: 4 },
  { number: 36, symbol: 'Kr', name: 'Krypton', mass: 39.948, category: 'vzacne_plyny', group: '18', period: 4 },

  { number: 37, symbol: 'Rb', name: 'Rubidium', mass: 1.008, category: 'alkalicke_kovy', group: '1', period: 5 },
  { number: 38, symbol: 'Sr', name: 'Stroncium', mass: 4.003, category: 'kovy_alkalickych_zemin', group: '2', period: 5 },
  { number: 39, symbol: 'Y', name: 'Yttrium', mass: 6.941, category: 'prechodne_kovy', group: '3', period: 5 },
  { number: 40, symbol: 'Zr', name: 'Zirkonium', mass: 9.012, category: 'prechodne_kovy', group: '4', period: 5 },
  { number: 41, symbol: 'Nb', name: 'Niobium', mass: 10.811, category: 'prechodne_kovy', group: '5', period: 5 },
  { number: 42, symbol: 'Mo', name: 'Molybden', mass: 12.011, category: 'prechodne_kovy', group: '6', period: 5 },
  { number: 43, symbol: 'Tc', name: 'Technecium', mass: 14.007, category: 'prechodne_kovy', group: '7', period: 5 },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: 15.999, category: 'prechodne_kovy', group: '8', period: 5 },
  { number: 45, symbol: 'Rh', name: 'Rhodium', mass: 18.998, category: 'prechodne_kovy', group: '9', period: 5 },
  { number: 46, symbol: 'Pd', name: 'Palladium', mass: 20.180, category: 'prechodne_kovy', group: '10', period: 5 },
  { number: 47, symbol: 'Ag', name: 'Stříbro', mass: 22.990, category: 'prechodne_kovy', group: '11', period: 5 },
  { number: 48, symbol: 'Cd', name: 'Kadmium', mass: 24.305, category: 'prechodne_kovy', group: '12', period: 5 },
  { number: 49, symbol: 'In', name: 'Indium', mass: 26.982, category: 'kovy', group: '13', period: 5 },
  { number: 50, symbol: 'Sn', name: 'Cín', mass: 28.086, category: 'kovy', group: '14', period: 5 },
  { number: 51, symbol: 'Sb', name: 'Antimon', mass: 30.974, category: 'polokovy', group: '15', period: 5 },
  { number: 52, symbol: 'Te', name: 'Tellur', mass: 32.065, category: 'polokovy', group: '16', period: 5 },
  { number: 53, symbol: 'I', name: 'Jod', mass: 35.453, category: 'halogeny', group: '17', period: 5 },
  { number: 54, symbol: 'Xe', name: 'Xenon', mass: 39.948, category: 'vzacne_plyny', group: '18', period: 5 },

  { number: 55, symbol: 'Cs', name: 'Cesium', mass: 1.008, category: 'alkalicke_kovy', group: '1', period: 6 },
  { number: 56, symbol: 'Ba', name: 'Baryum', mass: 4.003, category: 'kovy_alkalickych_zemin', group: '2', period: 6 },
  { number: 72, symbol: 'Hf', name: 'Hafnium', mass: 9.012, category: 'prechodne_kovy', group: '4', period: 6 },
  { number: 73, symbol: 'Ta', name: 'Tantal', mass: 10.811, category: 'prechodne_kovy', group: '5', period: 6 },
  { number: 74, symbol: 'W', name: 'Wolfram', mass: 12.011, category: 'prechodne_kovy', group: '6', period: 6 },
  { number: 75, symbol: 'Re', name: 'Rhenium', mass: 14.007, category: 'prechodne_kovy', group: '7', period: 6 },
  { number: 76, symbol: 'Os', name: 'Osmium', mass: 15.999, category: 'prechodne_kovy', group: '8', period: 6 },
  { number: 77, symbol: 'Ir', name: 'Iridium', mass: 18.998, category: 'prechodne_kovy', group: '9', period: 6 },
  { number: 78, symbol: 'Pt', name: 'Platina', mass: 20.180, category: 'prechodne_kovy', group: '10', period: 6 },
  { number: 79, symbol: 'Au', name: 'Zlato', mass: 22.990, category: 'prechodne_kovy', group: '11', period: 6 },
  { number: 80, symbol: 'Hg', name: 'Rtuť', mass: 24.305, category: 'prechodne_kovy', group: '12', period: 6 },
  { number: 81, symbol: 'Tl', name: 'Thallium', mass: 26.982, category: 'kovy', group: '13', period: 6 },
  { number: 82, symbol: 'Pb', name: 'Olovo', mass: 28.086, category: 'kovy', group: '14', period: 6 },
  { number: 83, symbol: 'Bi', name: 'Bismut', mass: 30.974, category: 'kovy', group: '15', period: 6 },
  { number: 84, symbol: 'Po', name: 'Polonium', mass: 32.065, category: 'kovy', group: '16', period: 6 },
  { number: 85, symbol: 'At', name: 'Astat', mass: 35.453, category: 'halogeny', group: '17', period: 6 },
  { number: 86, symbol: 'Rn', name: 'Radon', mass: 39.948, category: 'vzacne_plyny', group: '18', period: 6 },

  { number: 87, symbol: 'Fr', name: 'Francium', mass: 1.008, category: 'alkalicke_kovy', group: '1', period: 7 },
  { number: 88, symbol: 'Ra', name: 'Radium', mass: 4.003, category: 'kovy_alkalickych_zemin', group: '2', period: 7 },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: 9.012, category: 'prechodne_kovy', group: '4', period: 7 },
  { number: 105, symbol: 'Db', name: 'Dubnium', mass: 10.811, category: 'prechodne_kovy', group: '5', period: 7 },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: 12.011, category: 'prechodne_kovy', group: '6', period: 7 },
  { number: 107, symbol: 'Bh', name: 'Bohrium', mass: 14.007, category: 'prechodne_kovy', group: '7', period: 7 },
  { number: 108, symbol: 'Hs', name: 'Hassium', mass: 15.999, category: 'prechodne_kovy', group: '8', period: 7 },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: 18.998, category: 'prechodne_kovy', group: '9', period: 7 },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: 20.180, category: 'prechodne_kovy', group: '10', period: 7 },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: 22.990, category: 'prechodne_kovy', group: '11', period: 7 },
  { number: 112, symbol: 'Cn', name: 'Copernicium', mass: 24.305, category: 'prechodne_kovy', group: '12', period: 7 },
  { number: 113, symbol: 'Nh', name: 'Nihonium', mass: 26.982, category: 'kovy', group: '13', period: 7 },
  { number: 114, symbol: 'Fl', name: 'Flerovium', mass: 28.086, category: 'kovy', group: '14', period: 7 },
  { number: 115, symbol: 'Mc', name: 'Moscovium', mass: 30.974, category: 'kovy', group: '15', period: 7 },
  { number: 116, symbol: 'Lv', name: 'Livermorium', mass: 32.065, category: 'kovy', group: '16', period: 7 },
  { number: 117, symbol: 'Ts', name: 'Tennesine', mass: 35.453, category: 'halogeny', group: '17', period: 7 },
  { number: 118, symbol: 'Og', name: 'Oganesson', mass: 39.948, category: 'vzacne_plyny', group: '18', period: 7 },

  { number: 57, symbol: 'La', name: 'Lanthan', mass: 4.003, category: 'lanthanoidy', group: '3', period: 9 },
  { number: 58, symbol: 'Ce', name: 'Cer', mass: 9.012, category: 'lanthanoidy', group: '4', period: 9 },
  { number: 59, symbol: 'Pr', name: 'Praseodym', mass: 10.811, category: 'lanthanoidy', group: '5', period: 9 },
  { number: 60, symbol: 'Nd', name: 'Neodymium', mass: 12.011, category: 'lanthanoidy', group: '6', period: 9 },
  { number: 61, symbol: 'Pm', name: 'Promethium', mass: 14.007, category: 'lanthanoidy', group: '7', period: 9 },
  { number: 62, symbol: 'Sm', name: 'Samarium', mass: 15.999, category: 'lanthanoidy', group: '8', period: 9 },
  { number: 63, symbol: 'Eu', name: 'Europium', mass: 18.998, category: 'lanthanoidy', group: '9', period: 9 },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: 20.180, category: 'lanthanoidy', group: '10', period: 9 },
  { number: 65, symbol: 'Tb', name: 'Terbium', mass: 22.990, category: 'lanthanoidy', group: '11', period: 9 },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: 24.305, category: 'lanthanoidy', group: '12', period: 9 },
  { number: 67, symbol: 'Ho', name: 'Holmium', mass: 26.982, category: 'lanthanoidy', group: '13', period: 9 },
  { number: 68, symbol: 'Er', name: 'Erbium', mass: 28.086, category: 'lanthanoidy', group: '14', period: 9 },
  { number: 69, symbol: 'Tm', name: 'Thulium', mass: 30.974, category: 'lanthanoidy', group: '15', period: 9 },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: 32.065, category: 'lanthanoidy', group: '16', period: 9 },
  { number: 71, symbol: 'Lu', name: 'Lutetium', mass: 35.453, category: 'lanthanoidy', group: '17', period: 9 },

  { number: 89, symbol: 'Ac', name: 'Aktinium', mass: 4.003, category: 'aktinoidy', group: '3', period: 10 },
  { number: 90, symbol: 'Th', name: 'Thorium', mass: 9.012, category: 'aktinoidy', group: '4', period: 10 },
  { number: 91, symbol: 'Pa', name: 'Protaktinium', mass: 10.811, category: 'aktinoidy', group: '5', period: 10 },
  { number: 92, symbol: 'U', name: 'Uran', mass: 12.011, category: 'aktinoidy', group: '6', period: 10 },
  { number: 93, symbol: 'Np', name: 'Neptunium', mass: 14.007, category: 'aktinoidy', group: '7', period: 10 },
  { number: 94, symbol: 'Pu', name: 'Plutonium', mass: 15.999, category: 'aktinoidy', group: '8', period: 10 },
  { number: 95, symbol: 'Am', name: 'Americium', mass: 18.998, category: 'aktinoidy', group: '9', period: 10 },
  { number: 96, symbol: 'Cm', name: 'Curium', mass: 20.180, category: 'aktinoidy', group: '10', period: 10 },
  { number: 97, symbol: 'Bk', name: 'Berkelium', mass: 22.990, category: 'aktinoidy', group: '11', period: 10 },
  { number: 98, symbol: 'Cf', name: 'Kalifornium', mass: 24.305, category: 'aktinoidy', group: '12', period: 10 },
  { number: 99, symbol: 'Es', name: 'Einsteinium', mass: 26.982, category: 'aktinoidy', group: '13', period: 10 },
  { number: 100, symbol: 'Fm', name: 'Fermium', mass: 28.086, category: 'aktinoidy', group: '14', period: 10 },
  { number: 101, symbol: 'Md', name: 'Mendelevium', mass: 30.974, category: 'aktinoidy', group: '15', period: 10 },
  { number: 102, symbol: 'No', name: 'Nobelium', mass: 32.065, category: 'aktinoidy', group: '16', period: 10 },
  { number: 103, symbol: 'Lr', name: 'Lawrecium', mass: 35.453, category: 'aktinoidy', group: '17', period: 10 },

];