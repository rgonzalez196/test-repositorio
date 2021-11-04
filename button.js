class DesactivableButton extends HTMLButtonElement {

    static get observedAttributes(){
        return ['busytext'];
    }

    constructor(){
        super();

        this.busyText = "Guardando...";
        this._onButtonClicked = this._onButtonClicked.bind(this);
    }

    _onButtonClicked(){
        this.setAttribute("disabled", "disabled");
        this.innerText = this.busyText;
    }

    connectedCallback() {
        this.addEventListener('click', this._onButtonClicked)
    }

    disconnectedCallback() {
        this.removeEventListener('click', this._onButtonClicked)
    }

}

window.customElements.define("desactivable-button", DesactivableButton, { extends: "button", });