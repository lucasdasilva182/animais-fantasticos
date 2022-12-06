export default class Modal {
  constructor(btnAbrir, btnFechar, modalContent){
     this.botaoAbrir = document.querySelector(btnAbrir);
     this.botaoFechar = document.querySelector(btnFechar);
     this.containerModal = document.querySelector(modalContent);

     //bind this ao callback para referenciar o objeto da Classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  //Abre ou fecha o modal
  toggleModal(event) {
    this.containerModal.classList.toggle('ativo');
  }

  //Adciona o evento de toogle ao modal
  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  }

  //Fecha o modal ao clicar fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  //adciona os elementos ao modal
  addModalEvent(){
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init(){
    if (this.botaoAbrir && this.botaoFechar && this.containerModal){
      this.addModalEvent();
    }
    return this;
  }

}
