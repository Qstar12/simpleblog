export class Cards extends HTMLElement {
    title = '';
    description = '';
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.render();
    }

    static get observedAttributes() {
        return ['title', 'description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('--> attributeChangedCallback', name, oldValue, newValue);
        switch (name) {
            case 'title':
                this.title = newValue || '';
                break;
            case 'description':
                this.description = newValue || '';
                break;
        }
        this.render();
    }

    ConnectedCallback(){
        console.log('--> connected');
        this.render();
    }

    disconnectedCallback(){
        console.log('--> disconnected');
    };

    get template(){
        return `
        ${this.style}
        <div class="card">
            <div class="card-title">
                <h2>${this.title}</h2>
            </div>
            <div class="card-description">
                <p>${this.description}</p>
            </div>
        </div>
        `;
    }

    get style(){
        return `
            <style>
                .card{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    
                }
                .card-title{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                .card-description{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                   
                }


            </style>
        `;
    }
    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define('card-element', Cards);