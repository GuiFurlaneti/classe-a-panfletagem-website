import React from 'react';
import './Services.css';
import Lottie from 'lottie-react';
import panfletagemAnimation from '../animations/animation-test.json';
import megaphoneAnimation from '../animations/megaphone-lottie.json';
import paperAnimation from '../animations/paper-lottie.json';
import analisysAnimation from '../animations/analisys-lottie.json';
import marketingAnimation from '../animations/marketing-lottie.json';

const Services = () => {
    const servicesList = [
        {
            icon: <Lottie animationData={megaphoneAnimation} loop autoplay style={{ height: 200 }} />,
            title: 'Pacote Divulgação',
            description: 'Carro de som e distribuição, simultaneamente! Gerando assim, campanhas com 100% de eficiência.'
        },
        {
            icon: <Lottie animationData={paperAnimation} loop autoplay style={{ height: 200 }} />,
            title: 'Panfletagem Tradicional',
            description: 'Distribuição com eficácia, á preço justo, que cabe no bolso de empresários de pequeno, médio e grande porte.'
        },
        {
            icon: <Lottie animationData={analisysAnimation} loop autoplay style={{ height: 200 }} />,
            title: 'Gestão de Redes',
            description: 'Alinhamento, verificação e auditoria do seu serviço sendo realizado em campo. Coordenação de todas lojas simultâneamente.'
        },
        {
            icon: <Lottie animationData={marketingAnimation} loop autoplay style={{ height: 200 }} />,
            title: 'Estratégias de Marketing',
            description: 'Criamos a sua próxima campanha, baseada em seu tabloide, analisando seu público final, e em qual área.'
        }
    ];

    return (
        <section id="services">
            <h2>Nossos Serviços</h2>
            <div className="services-container">
                {servicesList.map((service, index) => (
                    <div key={index} className="service-item">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
            <a href="#contato" className="cta-button">Entre em contato</a>  
        </section>
    );
};

export default Services;
