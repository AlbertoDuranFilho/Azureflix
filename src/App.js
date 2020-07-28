import React from 'react';
import Menu from './components/Menu/index';
import dadosInicias from '../src/data/dados_iniciais.json';
import BannerMain from '../src/components/BannerMain';
import Carousel from '../src/components/Carousel';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu/>
      
      <BannerMain videoTitle={dadosInicias.categorias[0].videos[0].titulo}
        url={dadosInicias.categorias[0].videos[0].url}
        videoDiscription={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel
        ignoreFistVideo
        category={dadosInicias.categorias[0]}
        />

      <Carousel
        category={dadosInicias.categorias[0]}
        />

      <Carousel
        category={dadosInicias.categorias[0]}
        />

      <Carousel
        category={dadosInicias.categorias[0]}
        />
    </div>
  );
}

export default App;
