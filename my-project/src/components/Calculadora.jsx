import React, { useState } from 'react';
import Resultado from './Resultado'; 

const Calculadora = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState(''); 
  const [tmb, setTmb] = useState(null);
  const [erro, setErro] = useState('');

  console.log("Passou por aqui!")

  const handleReset = () => {
    setNome('');
    setIdade('');
    setPeso('');
    setAltura('');
    setSexo('');
    setTmb(null);
    setErro('');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Impede o reload do formulário
    
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    const i = parseFloat(idade);

    if (!nome.trim() || !p || !a || !i || !sexo || p <= 0 || a <= 0 || i <= 0) {
      setErro('Por favor, preencha todos os campos com valores válidos, incluindo o Sexo.');
      setTmb(null);
      return;
    }
    
    setErro('');

    let resultado;

    if (sexo === 'masculino') {
      resultado = 88.36 + (13.4 * p) + (4.8 * a) - (5.7 * i);
    } else {
      resultado = 447.6 + (9.2 * p) + (3.1 * a) - (4.3 * i);
    }

    setTmb(resultado.toFixed(2));
  };


  const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  
  return (
    <div className="p-0">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Insira seus dados</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4"> 

        {/* CAMPO NOVO: Seleção de Sexo (Radio Buttons) */}
        <div>
          <span className={labelClasses}>Selecione o Sexo:</span>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                name="sexo" 
                value="feminino" 
                checked={sexo === 'feminino'}
                onChange={() => setSexo('feminino')} 
                className="text-pink-500 focus:ring-pink-500"
                required
              />
              Feminino
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                name="sexo" 
                value="masculino" 
                checked={sexo === 'masculino'}
                onChange={() => setSexo('masculino')} 
                className="text-indigo-600 focus:ring-indigo-600"
                required
              />
              Masculino
            </label>
          </div>
        </div>
        
        {/* Campo Nome */}
        <div>
          <label className={labelClasses} htmlFor="nome">Nome:</label>
          <input 
            type="text" 
            id="nome"
            placeholder="Seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={inputClasses}
            required
          />
        </div>
        
        {/* Campo Peso (kg) */}
        <div>
          <label className={labelClasses} htmlFor="peso">Peso (kg):</label>
          <input 
            type="number" 
            id="peso"
            placeholder="Ex: 70"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className={inputClasses}
            min="1"
            required
          />
        </div>
        
        {/* Campo Altura (cm) */}
        <div>
          <label className={labelClasses} htmlFor="altura">Altura (cm):</label>
          <input 
            type="number" 
            id="altura"
            placeholder="Ex: 175"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            className={inputClasses}
            min="1"
            required
          />
        </div>
        
        {/* Campo Idade (anos) */}
        <div>
          <label className={labelClasses} htmlFor="idade">Idade (anos):</label>
          <input 
            type="number" 
            id="idade"
            placeholder="Ex: 30"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            className={inputClasses}
            min="1"
            required
          />
        </div>

        {erro && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md">
            {erro}
          </div>
        )}

        <button 
          type="submit" 
          className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Calcular TMB
        </button>
      </form>

      <Resultado nome={nome} tmb={tmb} onReset={handleReset} />
    </div>
  );
};

export default Calculadora;