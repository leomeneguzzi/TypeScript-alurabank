let negociacao = new Negociacao(new Date(), 2, 100);
console.log(negociacao);

const controller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit',controller.add.bind(controller));