export class Post extends HTMLElement {
    title = '';
    description = '';
    constructor() {
        super()
        this.attachShadow({mode: 'open'});
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
        this.render()
    }

    connectedCallback() {
        console.log('--> connectedCallback');
        this.render();
    }

    disconnectedCallback() {
        console.log('--> disconnectedCallback');
    }

    get template() {
        return `
        ${this.style}
        <div class="card">
            <div class="post">
                <slot name="title"><h1>${this.title}</h1></slot>
                <slot name="description"><p>${this.description}</p></slot>
            </div>
        </div>
        `;
    }

    get style() {
        return `
            <style>
                
                .card {
                    background:linear-gradient(45deg, #f5f5f5, #e8e8e8);
                    border-radius: 5px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
                    margin: 1rem;
                    padding: 1rem;
                }

                .post {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    height: 100%;

                }

                h1 {
                    font-size: 1.5rem;

                }

                p {
                    font-size: 1rem;

                }
            </style>
        `;
    }

    render(){
        this.shadowRoot.innerHTML = this.template;
    }

}
customElements.define('my-post', Post);
