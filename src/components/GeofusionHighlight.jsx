import React from 'react';
import './GeofusionHighlight.css';

const GeofusionHighlight = () => {
  return (
    <section className="geofusion-section">
      <div className="geofusion-container">
        <div className="geofusion-left">
          <h2>
            Utilizamos o <br />
            sistema <strong> Geofusion</strong>
          </h2>
          <p>
            Porque ele foi desenvolvido para oferecer muito mais do que simples dados. Ele entrega inteligência estratégica, 
            permitindo que sua campanha alcance o público certo, no lugar certo e no momento ideal.
          </p>
        </div>
        <div className="geofusion-right">
          <h3>Funcionalidades Incluídas:</h3>
          <ul className="features-list">
            <li>
              <span className="plus-icon">+</span>
              <div>
                <strong>Mapeamento de Potenciais Clientes</strong>
                <p>Identifique regiões com maior concentração do seu público-alvo de forma rápida e precisa.</p>
              </div>
            </li>
            <li>
              <span className="plus-icon">+</span>
              <div>
                <strong>Acompanhamento em Tempo Real</strong>
                <p>Monitore a distribuição e garanta que cada ação seja executada conforme o planejado.</p>
              </div>
            </li>
            <li>
              <span className="plus-icon">+</span>
              <div>
                <strong>Planejamento Logístico Eficiente</strong>
                <p>Organize rotas e cronogramas para otimizar tempo e reduzir custos.</p>
              </div>
            </li>
            <li>
              <span className="plus-icon">+</span>
              <div>
                <strong>Relatório de Assertividade</strong>
                <p>Analise os resultados e descubra o impacto real das ações na geração de vendas.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GeofusionHighlight;
