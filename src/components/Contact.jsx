import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section">
            <h2>Entre em Contato</h2>
            <div className="contact-buttons">
                <a href="https://www.linkedin.com/company/classe-a-panfletos" target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp com a Agência Classe A">
                <i className="bi bi-linkedin" style={{ fontSize: "5rem" }}></i>
                <p>LinkedIn</p>
                </a>
                <a href="https://www.facebook.com/classeapanfletos" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Agência Classe A">
                <i className="bi bi-facebook" style={{ fontSize: "5rem" }}></i>
                <p>Facebook</p>
                </a>
                <a href="https://www.instagram.com/agencia_classea" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Agência Classe A">
                <i className="bi bi-instagram" style={{ fontSize: "5rem" }}></i>
                <p>Instagram</p>
                </a>
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-envelope" style={{ fontSize: "5rem" }}></i>
                <p>Gmail</p>
                </a>
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp" style={{ fontSize: "5rem" }}></i>
                <p>WhatsApp 1</p>
                </a>
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp" style={{ fontSize: "5rem" }}></i>
                <p>WhatsApp 2</p>
                </a>
            </div>
        </div>
    );
};

export default Contact;