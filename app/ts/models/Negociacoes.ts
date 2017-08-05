class Negociacoes {

    private _negociacoes: Array < Negociacao > = [];

    add(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    toArray(): Array < Negociacao > {
        return [].concat(this._negociacoes);
    }

}