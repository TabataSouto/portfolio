import React from "react";
import Tabata from '../../images/tabata.jpeg'

function Home() {
  return(
    <main>
      <section>
        <h5> Olá! Meu nome é </h5>
        <h1> Tabata Caroline Souto </h1>
        <h5> Estudante de desenvolvimento Web na Trybe - Turma XP </h5>
      </section>
      <section>
        <img src={ Tabata } alt="foto Tabata" width='200'/>
        <p>
          Sejam todos muito bem-vindos(as) ao meu portfólio pessoal. Neste espaço, falo sobre meu momento, desejos, expertise e apresento o que foi desenvolvido até este momento.
        </p>
        <p>
          Sou a Tabata Caroline Souto, tenho { 29 } anos, e estudo desenvolvimento na Trybe – Turma XP (formação Full Stack). O Curso acabará em outubro de 2022.
        </p>
        <p>
          Ao longo da minha carreira, atuei em Departamento Pessoal/RH e operando base de dados para operações gerenciais na Bradesco Seguros. Tenho formação superior em sistemas de informação, gosto de ler, ver animes e, principalmente, jogar. Tenho especial apreço por estilização e experiência de usuário, mesmo não sendo requisito dentre os projetos realizados até este momento pela Trybe, estou orgulhosa do meu desempenho e evolução para demostrar minha paixão. Meu maior desejo é ser referência nacional na área que escolhi e impactar a vida de muitas pessoas. Espero que goste e, se tiver qualquer dúvida, critica, elogio, sugestão, ou só quiser conversar, por gentileza, não hesite em me contatar.
        </p>
      </section>
    </main>
  )
}

export default Home;