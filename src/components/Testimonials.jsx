import React from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        name: "João Silva",
        company: "Empresa A",
        evaluation: "⭐⭐⭐⭐⭐",
        comment: "A Classe A Panfletagem transformou nossa estratégia de marketing! O serviço é excepcional.",
        photo: '/assets/partners/pessoa-generica.png'
    },
    {
        name: "Maria Oliveira",
        company: "Empresa B",
        evaluation: "⭐⭐⭐⭐⭐",
        comment: "Ótima experiência! A equipe é muito profissional e atenciosa.",
        photo: '/assets/partners/pessoa-generica.png'
    },
    {
        name: "Carlos Pereira",
        company: "Empresa C",
        evaluation: "⭐⭐⭐⭐⭐",
        comment: "Recomendo a Classe A para quem busca qualidade e eficiência na panfletagem.",
        photo: '/assets/partners/pessoa-generica.png'
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>Depoimentos de Clientes</h2>
            <p>Nada nos motiva mais do que a satisfação de nossos clientes. 
                Confira alguns dos feedbacks de parceiros que confiam na Classe A.
            </p>
            <div className="testimonial-list">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <img src={testimonial.photo} alt={`${testimonial.name}'s photo`} />
                        <h3>{testimonial.name}</h3>
                        <h4>{testimonial.company}</h4>
                        <p className='evaluation'>{testimonial.evaluation}</p>
                        <p>{testimonial.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;