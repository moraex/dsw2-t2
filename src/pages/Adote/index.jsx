import React from 'react';
import { useState } from 'react';
import './index.css';
import emailjs from '@emailjs/browser'

function Adote() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail (event) {
    event.preventDefault();

    if(name === '' || email === '' || message === '') {
        alert("Preencha todos os campos!");
        return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_bx00qjy", "template_b75wyik", templateParams, "XN67LRdjJgoogB1W1")
    .then(() => {
      console.log("EMAIL ENVIADO")
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  return (

    <div className="container">
      <div className="text-adocao">
        <h2>
            Adoção responsável de amigos felinos é aqui na UFSCat
        </h2>
        <p>
          Para adotar, basta deixar suas informações de contato que entraremos em contato agendando um dia para sua visita.
        </p>
      </div>
      <div className='form-campos'>
        <h3 className="title">Contato</h3>

        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="textarea"
            placeholder="Digite o nome do fenino desejado..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>

    </div>
  );
}

export default Adote;
