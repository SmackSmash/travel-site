class Modal {
  constructor() {
    this.openModalButton = document.querySelector('.open-modal');
    this.modal = document.querySelector('.modal');
    this.closeModalButton = document.querySelector('.modal__close');
    this.events();
  }

  events() {
    this.openModalButton.addEventListener('click', this.openModal.bind(this));
    this.closeModalButton.addEventListener('click', this.closeModal.bind(this));
    document.addEventListener('keyup', event => {
      if (event.key == 'Escape') {
        this.closeModal();
      }
    });
  }

  openModal() {
    this.modal.classList.add('modal--is-visible');
  }

  closeModal() {
    this.modal.classList.remove('modal--is-visible');
  }
}

export default Modal;
