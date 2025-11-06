import React from 'react';

const Resultado = ({ nome, imc, tmb, ndc, onReset }) => {
  if (tmb === null) {
    return (
      <div className="p-4 bg-gray-100 border-l-4 border-gray-400 text-gray-700 rounded-lg mt-6">
        <p>Preencha os dados e clique em "Calcular" para ver os resultados.</p>
      </div>
    );
  }

  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-lg space-y-4 mt-6">
      <h3 className="font-bold text-lg">Olá, {nome}!</h3>

      <div>
        <p>Seu Índice de Massa Corporal (IMC) é:</p>
        <span className="text-3xl font-extrabold text-green-700 block mt-1">{imc} kg/m²</span>
      </div>

      <div>
        <p>Sua Taxa Metabólica Basal (TMB) é de:</p>
        <span className="text-3xl font-extrabold text-green-700 block mt-1">{tmb} Kcal/dia</span>
        <p className="text-sm">Essa é a quantidade mínima de calorias que seu corpo necessita em repouso.</p>
      </div>

      <div>
        <p>Sua Necessidade Diária de Calorias (NDC) é de:</p>
        <span className="text-3xl font-extrabold text-green-700 block mt-1">{ndc} Kcal/dia</span>
        <p className="text-sm">Calorias necessárias para manter seu peso considerando seu nível de atividade física.</p>
      </div>

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
