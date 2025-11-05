import Calculadora from './components/Calculadora';
import ilustracao from './assets/post.jpg';
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      {/* Container Principal */}
      <div className="bg-white shadow-2xl rounded-xl max-w-4xl w-full grid md:grid-cols-2 gap-8">
        
        {/* Lado Esquerdo (Conteúdo/Texto) */}
        <div className="p-8 space-y-6">
          <h1 className="text-3xl font-bold text-indigo-700">
            Calculadora de Taxa Metabólica Basal
          </h1>
          <p className="text-gray-600">
            A TMB representa a quantidade de calorias que seu corpo consome em 
            repouso, apenas para manter as funções vitais (respirar, bombear sangue, 
            preservar a temperatura etc.).
          </p>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <img
              src={ilustracao}
              alt="Ilustração sobre metabolismo basal"
              className="object-cover w-full h-64"
              />
          </div>
        </div>
        
        {/* Lado Direito (Componente Calculadora) */}
        <div className="p-4 md:p-8">
          <Calculadora />
        </div>
        
      </div>
    </div>
  );
}

export default App;