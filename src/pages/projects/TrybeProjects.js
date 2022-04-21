import React from 'react';
import projects from '../../data/trybeProjects.js'
import Header from '../../components/header/Header';
import CardProjects from '../../components/cardprojects/CardProjects';
import Footer from '../../components/footer/Footer';

function TrybeProjects() {
  return(
    <section>
      <Header />
      <CardProjects projects={ projects }/>
      <Footer />
    </section>
  )
}

export default TrybeProjects;
