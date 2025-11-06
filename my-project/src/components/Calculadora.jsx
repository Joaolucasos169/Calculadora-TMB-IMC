import React, { useState } from 'react';
import Resultado from './Resultado';

const Calculadora = () => {
  const [dados, setDados] = useState({
    nome: '',
    idade: '',
    peso: '',
    altura: '',
    sexo: '',
    tmb: null,
    ndc: null,
    imc: null,
    erro: '',
    nivelAtividade: '',
  });

  const fatoresAtividade = {
    'pouca': 1.2,
    'leve': 1.375,
    'moderada': 1.55,
    'intensa': 1.725,
    'muito-intensa': 1.9,
  };

  const handleReset = () => {
    setDados({
      nome: '',
      idade: '',
      peso: '',
      altura: '',
      sexo: '',
      tmb: null,
      ndc: null,
      imc: null,
      erro: '',
      nivelAtividade: '',
    });
  };

  const calcularIMC = (peso, altura) => {
    const alturaMetros = altura / 100;
    return (peso / (alturaMetros * alturaMetros)).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const p = parseFloat(dados.peso);
    const a = parseFloat(dados.altura);
    const i = parseFloat(dados.idade);
    const sexo = dados.sexo;
    const nivel = dados.nivelAtividade;

    if (
      !dados.nome.trim() ||
      !p || p <= 0 ||
      !a || a <= 0 ||
      !i || i <= 0 ||
      !sexo ||
      !nivel
    ) {
      setDados(prev => ({
        ...prev,
        erro: 'Por favor, preencha todos os campos com valores válidos, incluindo o Sexo e o Nível de Atividade.',
        tmb: null,
        ndc: null,
        imc: null,
      }));
      return;
    }

    setDados(prev => ({ ...prev, erro: '' }));

    let tmbCalc;
    if (sexo === 'masculino') {
      tmbCalc = 88.36 + (13.4 * p) + (4.8 * a) - (5.7 * i);
    } else {
      tmbCalc = 447.6 + (9.2 * p) + (3.1 * a) - (4.3 * i);
    }

    const imcCalc = calcularIMC(p, a);
    const fator = fatoresAtividade[nivel];
    const ndcCalc = tmbCalc * fator;

    setDados(prev => ({
      ...prev,
      tmb: tmbCalc.toFixed(2),
      ndc: ndcCalc.toFixed(2),
      imc: imcCalc,
    }));
  };

  const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="p-0 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Insira seus dados</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <span className={labelClasses}>Selecione o Sexo:</span>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sexo"
                value="feminino"
                checked={dados.sexo === 'feminino'}
                onChange={() => setDados(prev => ({ ...prev, sexo: 'feminino' }))}
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
                checked={dados.sexo === 'masculino'}
                onChange={() => setDados(prev => ({ ...prev, sexo: 'masculino' }))}
                className="text-indigo-600 focus:ring-indigo-600"
                required
              />
              Masculino
            </label>
          </div>
        </div>

        <div>
          <label className={labelClasses} htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            placeholder="Seu Nome"
            value={dados.nome}
            onChange={e => setDados(prev => ({ ...prev, nome: e.target.value }))}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="peso">Peso (kg):</label>
          <input
            type="number"
            id="peso"
            placeholder="Ex: 70"
            value={dados.peso}
            onChange={e => setDados(prev => ({ ...prev, peso: e.target.value }))}
            className={inputClasses}
            min="1"
            required
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="altura">Altura (cm):</label>
          <input
            type="number"
            id="altura"
            placeholder="Ex: 175"
            value={dados.altura}
            onChange={e => setDados(prev => ({ ...prev, altura: e.target.value }))}
            className={inputClasses}
            min="1"
            required
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="idade">Idade (anos):</label>
          <input
            type="number"
            id="idade"
            placeholder="Ex: 30"
            value={dados.idade}
            onChange={e => setDados(prev => ({ ...prev, idade: e.target.value }))}
            className={inputClasses}
            min="1"
            required
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="nivelAtividade">Nível de atividade física:</label>
          <select
            id="nivelAtividade"
            value={dados.nivelAtividade}
            onChange={e => setDados(prev => ({ ...prev, nivelAtividade: e.target.value }))}
            className={inputClasses}
            required
          >
            <option value="">Selecione</option>
            <option value="pouca">Pouca ou nenhuma atividade</option>
            <option value="leve">Exercício leve 1 a 3 dias/semana</option>
            <option value="moderada">Exercício moderado 3 a 5 dias/semana</option>
            <option value="intensa">Exercício intenso 6 a 7 dias/semana</option>
            <option value="muito-intensa">Exercício muito intenso, trabalho físico ou atleta</option>
          </select>
        </div>

        {dados.erro && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md">
            {dados.erro}
          </div>
        )}

        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Calcular TMB e IMC
        </button>
      </form>

      <Resultado
        nome={dados.nome}
        tmb={dados.tmb}
        ndc={dados.ndc}
        imc={dados.imc}
        onReset={handleReset}
      />
    </div>
  );
};

export default Calculadora;
