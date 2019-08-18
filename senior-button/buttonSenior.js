class ButtonSenior extends HTMLButtonElement {
    constructor() {
        super();
    }
}

customElements.define("senior-button", ButtonSenior, { extends: "button" });
