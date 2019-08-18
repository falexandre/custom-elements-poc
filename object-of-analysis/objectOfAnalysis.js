customElements.define('object-of-analysis', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.

        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
                  <style>
                    :host div {
                      width: 97%;
                      min-height: 50px;
                      border: #CCCCCC 1px solid;
                      background: #EEEEEE;
                      padding: 10px;
                      position: relative;
                      margin: 10px auto;
                    }   
                    
                    :host h4 {
                        color: #424242;
                    }
                  </style>
                  <div>
                   <h4>Objeto de analise - Personalizado Senior</h4>
                  <slot></slot>
                  </div>
                 
                `;
    }
});
