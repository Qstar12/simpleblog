export class Cards extends HTMLElement {
    title = '';
    image = '';
    description = '';
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.render();
    }

    static get observedAttributes() {
        return ['title', 'image','description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('--> attributeChangedCallback', name, oldValue, newValue);
        switch (name) {
            case 'title':
                this.title = newValue || '';
                break;
            case 'image':
                    this.image = newValue || '';
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
                <div class="image-hover">
                    <slot name="title" class="image"><img src=""</slot>
                    <slot name="click" class="click-me"><button>View More</button></slot>
                </div>
             
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
                
                .image-hover {
                    background-image: url(${this.image});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    height: 300px;
                    width: 100%;
                    position: relative;
  
                }

                .image-hover:hover:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    transition: all 0.5s ease;
                    
                }

                
               
                .click-me button {
                    padding: 10px 20px;
                    background-color: #404040;
                    border: none;
                    color: #fff;
                    position: absolute;
                    top: 50%;
                    left: 34%;
                    
                }

                .click-me button:hover {
                    background-color: #fff;
                    color: #404040;
                    border: 1px solid #404040;
                    
                }

                
                .card{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    box-shadow: 0 4px 8px 0 rgba(2,22,0,0.2);
                   
                }
                .card-title{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                    font-weight: 600;
                    
                }

                .card-title h2 {
                    margin-bottom: 0;
                    padding: 1rem;
                }

                .card-description{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    font-size: 1rem;
                    line-height: 1.5rem;
                    font-weight: 400;
                    
                  
                }

                .card-description p {
                    padding: 0 1rem;
                }


            </style>
        `;
    }
    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define('card-element', Cards);