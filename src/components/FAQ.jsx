import React, { useState } from 'react';
import Lottie from 'lottie-react';
import panfletagemAnimation from '../animations/animation-test.json';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "O que é panfletagem?",
            answer: "Panfletagem é uma técnica de marketing que envolve a distribuição de panfletos para promover produtos ou serviços."
        },
        {
            question: "Como funciona o sistema Geofusion?",
            answer: "O Geofusion é um sistema que utiliza tecnologia de geolocalização para otimizar a distribuição de panfletos."
        },
        {
            question: "Quais serviços vocês oferecem?",
            answer: "Oferecemos diversos serviços de panfletagem, incluindo distribuição em eventos, residências e empresas."
        },
        {
            question: "Como posso entrar em contato?",
            answer: "Você pode entrar em contato através da seção de contato em nosso site ou pelas redes sociais."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-container">
            <div className="faq-content">
                <div className="faq-text">
                    <h2>Dúvidas Frequentes</h2>
                    <p>Tem alguma pergunta sobre nossos serviços? Estamos aqui para ajudar! 
                        Confira abaixo as respostas para as dúvidas mais comuns sobre a Classe A.</p>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${activeIndex === index ? 'open' : ''}`}>
                                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                    <h3>{faq.question}</h3>
                                    <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
                                </div>
                                {activeIndex === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="faq-animation">
                    <Lottie animationData={panfletagemAnimation} loop autoplay style={{ height: 500 }} />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
