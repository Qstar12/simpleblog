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
        <div class="wrapper">
        <div class="card">
            <div class="card-title">
                <h2>${this.title}</h2>
            </div>
            <div class="card-description">
                <p>${this.description}</p>
            </div>
        </div>
        </div>
        `;
    }

    get style(){
        return `
            <style>
            
            .wrapper {
                padding: 1rem;
            }
                .card{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
               
                 
                    
                }
                .card-title{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-left: 1rem;
                }

                .card-title h2 {
                    margin-bottom: 0;
                }
                .card-description{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    font-size: 1rem;
                    font-weight: 400;
                    margin-left: 1rem;
                
                   
                }


            </style>
        `;
    }
    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define('card-element', Cards);