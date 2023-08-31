import logo from './logo.svg';
import './App.css';

function App() {
  const fnçs = "finanças"
  const eqp = "equipe"
  const copas = "organizar"
  return (
   <div className='App'>
    <h1>Grama Verde Finanças</h1>
    <p>o projeto está sendo desenvolvido com o objetivo de ajudar o usuário a {copas} as suas {fnçs}</p>
    <p>minha parte no projeto é {copas} os membros e fazer o back-end do app</p>
    <p>vale ressaltar que como líder, minha parte não é apenas {copas} os integrantes da {eqp},</p>
    <p>mas também estar ativamente procurando formas de como melhorar o uso do app, com novas features e etc.</p>
    <p>to economizando a 1 ano pra comprar uma flro muito</p>
   </div>
  );
}

export default App;
