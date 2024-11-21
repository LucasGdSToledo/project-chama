import React from 'react';
import './Home.css';
import bombeiros from './images/bombeiros.png';
const Home = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
      <div className="nav-info"><a href="Sobre">Sobre</a></div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#listagem">Listagem</a>
          <a href="#mapa">Mapa</a>
        </div>
      </nav>

      {/*texto */}
      <section className="reportar" id="reportar">
        <div className="report-content">
          <h2>Reporte um foco de incêndio</h2>
          <p>
            Sua contribuição é fundamental para proteger o meio ambiente e evitar
            a propagação de incêndios. Informe a localização e outros detalhes
            importantes para que possamos agir rapidamente. Cada denúncia conta e
            ajuda a preservar nosso ecossistema.
          </p>
          <button className="report-button">Reportar</button>
        </div>
        <img src={bombeiros} alt="bombeiros" className="report-image"
        />
      </section>
    </div>
  );
}

export default Home;
