import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar"; // Importujeme naši komponentu
import Footer from "../../components/Footer"; // Importujeme naši komponentu
import ScrollToTop from '../../components/ScrollToTop'; // Importuj komponentu ScrollToTop


interface TableRow {
    oxidationNumber: string;
    formula: string;
    example: string;
}





  


const oxidesTable: TableRow[] = [
    { oxidationNumber: 'I+', formula: 'MI+2OII-', example: 'Li2O oxid lithný' },
    { oxidationNumber: 'II+', formula: 'MII+OII-', example: 'MgO oxid hořečnatý' },
    { oxidationNumber: 'III+', formula: 'MIII+2OII-3', example: 'B2O3 oxid boritý' },
    { oxidationNumber: 'IV+', formula: 'MIV+OII-2', example: 'SiO2 oxid křemičitý' },
    { oxidationNumber: 'V+', formula: 'MV+2OII-5', example: 'As2O5 oxid arseničný\nP2O5 oxid fosforečný' },
    { oxidationNumber: 'VI+', formula: 'MVI+OII-3', example: 'MoO3 oxid molybdenový' },
    { oxidationNumber: 'VII+', formula: 'MVII+2OII-7', example: 'Mn2O7 oxid manganistý' },
    { oxidationNumber: 'VIII+', formula: 'MVIII+OII-4', example: 'XeO4 oxid xenoničelý' }
];


export default function OxidyPage() {
    const [selectedTopic, setSelectedTopic] = useState("Oxidy");

    
    
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
        <ScrollToTop />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Sidebar */}
            <div className="col-span-3">
              <Sidebar selectedTopic={selectedTopic} onSelectTopic={setSelectedTopic} />
            </div>
  
            {/* Main Content */}
            <div className="col-span-9">
              <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {selectedTopic}
                </h2>
  
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Binární (dvouprvkové) sloučeniny kyslíku s dalším prvkem se nazývají oxidy. 
                    Dříve se používal název kysličník. Oxidy obsahují ve své molekule oxidový anion O<sup>2-</sup>.
                  </p>
  
                  <p className="text-gray-700 mb-6">
                    Oxidy vznikají odtržením 2 atomů vodíku z vody (H<sub>2</sub>O). 
                    Proto má kyslík ve všech oxidech oxidační číslo II-. 
                    Oxidační číslo prvku, který je vázán na kyslík, může nabývat hodnot od I+ až do VIII+.
                  </p>
  
                  <p className="text-gray-700 mb-8">
                    Název je složen z podstatného a přídavného jména. 
                    Podstatné jméno udává aniontovou složku s koncovkou -id a přídavné jméno kationtovou složku. 
                    Koncovka přídavného jména udává i oxidační číslo tohoto prvku.
                  </p>
  
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Oxidační číslo prvku M
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Obecný vzorec
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Příklad
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {oxidesTable.map((row, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {row.oxidationNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                              {row.formula}
                            </td>
                            <td className="px-6 py-4 whitespace-pre-line text-sm text-gray-500">
                              {row.example}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div> {/* Konec divu tabulky */}
                </div> {/* Konec divu .prose */}
              </div> {/* Konec divu hlavního obsahu */}
            </div> {/* Konec divu pro main content */}
            
          </div> {/* Konec gridu */}
        </div> {/* Konec max-w-7xl */}

        <Footer/>
      </div>
    );
  }
  
