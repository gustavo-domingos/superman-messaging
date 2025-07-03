import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    body: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const response = await fetch('http://localhost:8080/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email enviado com sucesso!');
        setFormData({ to: '', subject: '', body: '' }); // Limpa o formulário
      } else {
        const errorText = await response.text();
        setStatus(`Falha no envio: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      setStatus('Erro de conexão. Verifique se o backend está rodando.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Superman-Messaging</h1>
        <p>Envie um e-mail de forma simples.</p>
        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            name="to"
            placeholder="Para (email@destinatario.com)"
            value={formData.to}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="body"
            placeholder="Corpo da mensagem"
            value={formData.body}
            onChange={handleChange}
            rows="6"
            required
          />
          <button type="submit">Enviar Email</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </header>
    </div>
  );
}

export default App;