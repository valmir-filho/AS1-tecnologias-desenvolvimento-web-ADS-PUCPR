// Importando React e useState para criar componentes e gerenciar estados.
import React, { useState } from 'react';
// Importando o arquivo CSS para estilização.
import './App.css';

// Função principal do componente App.
function App() {
  // Estados para armazenar os valores dos inputs de e-mail e senha, e para a mensagem de feedback.
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função chamada quando o botão de acessar é clicado.
  const handleAcessar = () => {
    // Verifica se o e-mail e a senha correspondem aos valores esperados.
    if (email === 'vmcfilho@gmail.com' && senha === '123456') {
      // Se verdadeiro, exibe a mensagem de sucesso.
      setMensagem('Acessado com sucesso!');
    } else {
      // Se falso, exibe a mensagem de erro.
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  // Renderiza o componente.
  return (
    <div className="login-container"> {/* Container do formulário de login com estilização aplicada. */}
      <h1>Login</h1> {/* Título do formulário. */}
      {/* Campo de input para e-mail. */}
      <input
        className="input-field"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do e-mail com o valor inserido.
      />
      {/* Campo de input para senha. */}
      <input
        className="input-field"
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha com o valor inserido.
      />
      {/* Botão para realizar o login. */}
      <button className="access-button" onClick={handleAcessar}>Acessar</button>
      {/* Exibe a mensagem de feedback. */}
      <label className="message">{mensagem}</label>
    </div>
  );
}

export default App; // Exporta o componente App para ser utilizado em outras partes do aplicativo.
