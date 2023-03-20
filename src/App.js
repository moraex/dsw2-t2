import React, {useState} from 'react';
import './App.css';
import logo from './assets/images/ufscat_logo.png';
import banner from './assets/images/banner.png';

const App = () => {
  //aqui vai o codigo responsavel pela utilização da API
  
  return (
    <body>
      <header>
        <div className="container">
          <img src={logo} alt="UFSCat" />
          <div className="menu-section">
            <button className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </button>
            <nav>
              <ul>
                <li>
                  <a href="./index.html">Home</a>
                </li>
                <li>
                  <a href="./sobre/index.html">Sobre nós</a>
                </li>
                <li>
                  <a href="./adote/index.html">Adote</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="presentation">
        <div className="container">
          <div>
            <h2>
              Adoção responsável de amigos felinos é aqui na UFSCat
            </h2>
            <p>
              Mais de 500 gatos já foram retirados das ruas e ganharam um novo lar e uma nova família.
              Nesse exato momento, existem milhares de gatinhos esperando um humano para chamar de seu. Você pode mudar o
              destino de um animal de rua.
              Não compre. Adote!
            </p>
            <a href="/adote" className="button">Quero Adotar!!!</a>
          </div>
          <img src={banner} alt="Banner Cats" />
        </div>
      </section>

      <main>
        
      </main>
    </body>
  );
}

export default App;
