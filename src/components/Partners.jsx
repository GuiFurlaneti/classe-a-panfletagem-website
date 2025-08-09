import React, { useState } from 'react';
import './Partners.css';

const Partners = () => {
    const partners = [
        { name: 'Calvo Atacadista', off: '/assets/partners/calvo-off.png', on: '/assets/partners/calvo-on.png' },
        { name: 'Estadão – O Estado de S. Paulo ', off: '/assets/partners/estadao-off.png', on: '/assets/partners/estadao-on.png' },
        { name: 'Assaí Atacadista', off: '/assets/partners/assai-off.png', on: '/assets/partners/assai-on.png' },
        { name: 'Mercado OXXO', off: '/assets/partners/oxxo-off.png', on: '/assets/partners/oxxo-on.png' },
        { name: 'Lopes Supermercados', off: '/assets/partners/lopes-off.png', on: '/assets/partners/lopes-on.png' },
        { name: 'Barbosa Supermercados', off: '/assets/partners/barbosa-off.png', on: '/assets/partners/barbosa-on.png' },
        { name: 'Roldão Atacadista', off: '/assets/partners/roldao-off.png', on: '/assets/partners/roldao-on.png' },
        { name: 'Rede Construir', off: '/assets/partners/rede-construir-off.png', on: '/assets/partners/rede-construir-on.png' },
    ];

    // Duplicando o array pra loop suave
    const duplicatedPartners = [...partners, ...partners];

    // Estado para controlar hover individual
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="partners-section">
            <h2>Nossos Clientes</h2>
            <p>
                Na Classe A, temos orgulho dos relacionamentos que construímos com nossos clientes ao longo dos anos. 
                Atendemos empresas de diferentes portes e segmentos, sempre com foco na excelência, confiança e compromisso com resultados.
            </p>
            <div className="carousel-wrapper">
                <div className="carousel-track">
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="partner-logo"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={hoveredIndex === index ? partner.on : partner.off}
                                alt={partner.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
