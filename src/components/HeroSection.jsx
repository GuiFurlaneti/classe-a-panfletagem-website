import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-overlay">
                <div className="hero-inner">
                <div className="hero-content">
                    <h1>
                        Atendimento <span className="highlight">Eficiente</span>
                    </h1>
                    <p>
                        Trabalhamos com transparência, e eficácia para atingir o seu público alvo, seja na distribuição de panfletos porta a porta, ponto-fixo, mala direta ou distribuição de brindes para fidelizar á sua marca.                    </p>
                    <a href="#contato" className="cta-btn">Entre em contato</a>
                </div>
                <div className="hero-phone">
                    <img src="/img/phone-hero-banner.png" alt="Telefone" />
                </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
