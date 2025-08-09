  import React from 'react';
  import Navbar from './components/Navbar';
  import HeroSection from './components/HeroSection';
  import Services from './components/Services';
  import GeofusionHighlight from './components/GeofusionHighlight';
  import Partners from './components/Partners';
  import Testimonials from './components/Testimonials';
  import FAQ from './components/FAQ';
  import Contact from './components/Contact';
  import Footer from './components/Footer';
  import './styles/main.css';

  const App = () => {
    return (
      <div>
        <Navbar />
        <section id="inicio"><HeroSection /></section>
        <section id="servicos"><Services /></section>
        <section id="geofusion"><GeofusionHighlight /></section>
        <section id="clientes"><Partners /></section>
        <section id="testemunhos"><Testimonials /></section>
        <section id="duvidas"><FAQ /></section>
        <section id="contato"><Contact /></section>
      </div>
    );
  };

  export default App;