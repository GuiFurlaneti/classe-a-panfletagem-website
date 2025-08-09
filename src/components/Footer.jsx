import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Classe A Panfletagem. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;