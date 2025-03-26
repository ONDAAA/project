import Footer from "../components/Footer"; // Importujeme naši komponentu

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Description */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Ups.
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Na této stránce zrovna nic není, zkus přejít na odkazy v liště.
            </p>
          </div>
        </div>

      </div>

      <Footer/>

    </div>
  );
}