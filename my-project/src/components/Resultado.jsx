import React from 'react';

const Resultado = ({ nome, tmb, onReset }) => {
  if (tmb === null) {
    return (
      <div className="p-4 bg-gray-100 border-l-4 border-gray-400 text-gray-700 rounded-lg mt-6">
        <p>Preencha os dados e clique em "Calcular" para ver sua TMB.</p>
      </div>
    );
  }

  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-lg space-y-2 mt-6">
      <h3 className="font-bold text-lg">Olá, {nome}!</h3>
      <p>
        Sua Taxa Metabólica Basal (TMB) é de:
        <span className="text-3xl font-extrabold text-green-700 block mt-1">{tmb} Kcal/dia</span>
      </p>
      <p className="text-sm">
        Essa é a quantidade mínima de calorias que seu corpo necessita em repouso.
      </p>
      
      <button 
        onClick={onReset}
        className="text-sm text-indigo-600 hover:text-indigo-800 underline mt-2"
      >
        Limpar campos
      </button>
    </div>
  );
};

export default Resultado;