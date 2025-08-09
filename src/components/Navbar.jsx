import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [darkMode, setDarkMode] = useState(true); // começa com navbar branco no fundo escuro

    useEffect(() => {
        if (location.pathname !== '/') {
            setDarkMode(false); // em qualquer rota que não seja home, navbar claro
            return;
        }

        const heroSection = document.querySelector('#hero');

        if (!heroSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setDarkMode(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1, // ativa quando menos de 10% do hero estiver visível
            }
        );

        observer.observe(heroSection);

        return () => {
            observer.unobserve(heroSection);
        };
    }, [location]);

    return (
        <nav className={`navbar ${darkMode ? '' : 'scrolled'}`}>
            <div className="navbar-logo">
                <Link to="/">
                    <img src="/img/classe-a.png" alt="Logo Classe A" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li><a onClick={() => document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' })}>Início</a></li>
                <li><a onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })}>Serviços</a></li>
                <li><a onClick={() => document.getElementById('geofusion').scrollIntoView({ behavior: 'smooth' })}>Geofusion</a></li>
                <li><a onClick={() => document.getElementById('clientes').scrollIntoView({ behavior: 'smooth' })}>Clientes</a></li>
                <li><a onClick={() => document.getElementById('duvidas').scrollIntoView({ behavior: 'smooth' })}>Dúvidas</a></li>
                <li><a onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}>Contatos</a></li>
            </ul>
            <div className="navbar-social">
                <a href="https://www.instagram.com/agencia_classea" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Agência Classe A">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/classeapanfletos" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Agência Classe A">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5511947319138" target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp com a Agência Classe A">
                    <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/company/classe-a-panfletos" target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp com a Agência Classe A">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
