class Negociacoes {

    private _negociacoes : Array<Negociacao> = [];

    add(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    get() {
       return this._negociacoes;
    }

}