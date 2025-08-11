import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const [campaigns, setCampaigns] = useState(0);
    const [conversion, setConversion] = useState(0);
    const [cities, setCities] = useState(0);

    useEffect(() => {
        let start = 0;
        const endCampaigns = 500;
        const endConversion = 7.5;
        const endCities = 15;

        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;

        const incrementCampaigns = endCampaigns / steps;
        const incrementConversion = endConversion / steps;
        const incrementCities = endCities / steps;

        const timer = setInterval(() => {
            start++;
            setCampaigns(prev => Math.min(prev + incrementCampaigns, endCampaigns));
            setConversion(prev => Math.min(prev + incrementConversion, endConversion));
            setCities(prev => Math.min(prev + incrementCities, endCities));
            if (start >= steps) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="hero-overlay">
                <div className="hero-inner">
                    <div className="hero-content">
                        <h1>
                            Alcance mais clientes com <span className="highlight">distribuição estratégica!</span>
                        </h1>
                        <p>
                            Trabalhamos com transparência, e eficácia para atingir o seu público alvo, seja na distribuição de panfletos porta a porta, ponto-fixo, mala direta ou distribuição de brindes para fidelizar á sua marca.
                        </p>
                        <div className="bottons-cta">
                            <a href="#contato" className="cta-btn-1">Solicitar Orçamento Agora</a>
                            <a href="#contato" className="cta-btn-2">Saiba como funciona</a>
                        </div>
                    </div>
                    <div className="hero-phone">
                        <img src="/img/phone-hero-banner.png" alt="Telefone" />
                    </div>
                </div>

                {/* Métricas fora do texto, ocupando toda largura */}
                <div className="metrics">
                    <div>
                        <h3>{Math.floor(campaigns)}+</h3>
                        <p>Campanhas realizadas<br />com sucesso</p>
                    </div>
                    <div>
                        <h3>{conversion.toFixed(1)}%</h3>
                        <p>Taxa de conversão<br />média</p>
                    </div>
                    <div>
                        <h3>{Math.floor(cities)}+</h3>
                        <p>Cidades<br />atendidas</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
