class NegociacoesView {

    private _element : Element;

    constructor(selector : string) {
        this._element = document.querySelector(selector);
    }

    update(model : Negociacoes): void {
        this._element.innerHTML = this.template(model);
    }


    template(model : Negociacoes): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>

            ${model.get().map(negociacao => 
                `
                    <tr>
                        <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>                        
                `).join('')}

            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `
    }
}