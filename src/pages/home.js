import Button from '../components/button.js';
import Input from '../components/inputs.js';


function Home() {
  const template = `
    <h1>LaboraTrocas</h1>
    ${Button({title:'Logar'})}
    ${Input({title:'email'})}
    <p>Esse é um exemplo 🛍 🤝 🛍</p>
  `;

  return template;
}

export default Home;

${Button({ id: '🐠', title: 'Botão 🐠' })}
${Button({ id: '🎉', title: 'Botão 🎉' })}
