customElements.define('senior-icon', class extends HTMLElement {
    constructor() {
        super();
        // const icon = this.getAttribute('icon');
    }

    connectedCallback() {
        this.initShadowDom();
    }

    initShadowDom() {
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.innerHTML = this.template;
    }

    get template() {
        return `
                  <slot></slot>
        `
    }

});
