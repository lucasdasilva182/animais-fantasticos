import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {

  //Cria a div  contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //Preenche cad aanimal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal){
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //Anima os números de cada animal
  function animaAnimaisNumeros(){
    const animanumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animanumeros.init();
  }

  //Puxa os animais através de um fecth e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      //Fetch e espera a resposta
      const animaisResponse = await fetch(url);
      //Transforma a resposta em JSON
      const animaisJSON = await animaisResponse.json();
      //ativa as funções para preencher e animar os números
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();

  criarAnimais('./animaisapi.json');
}
