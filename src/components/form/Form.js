import React from 'react';
import iconUser from '../../images/icons-user.png';
import iconEmail from '../../images/icon-email.png'
import iconMessage from '../../images/icons-message.png';

function Contact() {
  return(
    <section>
      <p>Fiquem a vontade para enviar dicas, sugestões, elogios, criticas construtivas, sobre a construção e disposição do portfólio. Caso prefira, me chame no Linkedin para batermos um papo!!</p>
      <form>
        <label htmlFor="name">
          <img
            src={ iconUser }
            alt="Escreva seu nome"
          />
        </label>
        <input
          id="name"
          type="text"
          placeholder="Escreva seu nome"
        />
        <label htmlFor="email">
          <img
            src={ iconEmail }
            alt="Escreva seu e-mail"
          />
        </label>
        <input
          id="email"
          type="text"
          placeholder="Escreva seu email"
        />
        <label htmlFor="message">
          <img
            src={ iconMessage }
            alt="Deixe seu comentário aqui"
          />
        </label>
        <textarea
          id="message"
        />
        <button type="button">
          enviar
        </button>
      </form>
    </section>
  )
}

export default Contact;
