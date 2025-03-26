import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // Importujeme naši komponentu
import Footer from "../components/Footer"; // Importujeme naši komponentu

export default function GuidePage() {
  const [selectedTopic, setSelectedTopic] = useState("Úvod do problematiky");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
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
              <p className="text-gray-700">
                {/* Obsah pro {selectedTopic} */}
                Obsah této sekce bude dynamicky generován podle vybraného tématu.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  );
}
