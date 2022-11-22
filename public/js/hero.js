
export class Hero extends HTMLElement {
    image = "https://i.postimg.cc/4yHmGR4F/Amario-Jones-png.png";
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.render();
    }


    
    static get ObservedAttributes(){
        return ['image'];
    };


    attributeChangedCallback(name, oldValue, newValue){
        console.log('--> attributeChangedCallback', name, oldValue, newValue);
        switch(name){
            case 'image':
                this.image = newValue || "";
        }
        this.render();
    };

    connectedCallback(){
        console.log('--> connectedCallback');
        this.render();
    };

    disconnectedCallback(){
        console.log('--> disconnectedCallback');
    }

    render(){
    this.shadowRoot.innerHTML = `
        
            ${this.style}
            <div class="hero">
                <div class="hero-image">
                    <img src="${this.image}" alt="hero image">
                </div>
               
            </div>
        `;
    }
    

    get style(){
        return `
            <style>
                .hero{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 50px;
                    
                }   

               
                .hero-image img{
                    width: 100%;
                    height: 100%;
                    background-image: url(${this.image});
                    background-size: 300px 300px;
                    background-position: center;
                    background-repeat: no-repeat;
                    
                }

               
            
            </style>
        `;
    };
    
   

}
customElements.define('hero-element', Hero);
