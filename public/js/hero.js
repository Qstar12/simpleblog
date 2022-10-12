export class Hero extends HTMLElement {
    thumbnail = '';
    title = '';
    description = '';
    link = '';

    constructor() {
        super();
        this.attachShadow({ mode: 'closed' });
        this.render();
    }

    static get observedAttributes() {
        return ['thumbnail', 'title', 'description', 'link'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('--attributeChangedCallback--', name, oldValue, newValue)
        switch (name) {
            case 'thumbnail':
                this.thumbnail = newValue || '';
                break;
            case 'title':
                this.title = newValue || '';
                break;
            case 'description':
                this.description = newValue || '';
                break;
            case 'link':
                this.link = newValue || '';
                break;
        }
        this.render();
    }

    connectedCallback() {
        console.log('--connectedCallback--');
        this.render();
    }

    disconnectedCallback() {
        console.log('--disconnectedCallback--');
    }

    get template() {
        return `
            ${this.style}
            <div class="hero">
                <div class="hero__thumbnail">
                    <img src="${this.thumbnail}" alt="${this.title}">
                </div>
                <div class="hero__content">
                    <h1>${this.title}</h1>
                    <p>${this.description}</p>
                    <a href="${this.link}">Read more</a>
                </div>
            </div>
        `;
    }

    get style() {
        return `
            <style>
                .hero {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                }
                .hero__thumbnail {
                    width: 100%;
                    height: 100%;
                    max-width: 500px;
                    max-height: 500px;
                    overflow: hidden;
                    border-radius: 5px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

                }
                .hero__thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                }
                .hero__content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;

                }
                .hero__content h1 {
                    font-size: 2rem;
                    margin: 0;
                    padding: 0;

                }
                .hero__content p {
                    font-size: 1.2rem;
                    margin: 0;
                    padding: 0;

                }
                .hero__content a {
                    text-decoration: none;
                    color: #000;
                    font-size: 1.2rem;
                    margin: 0;
                    padding: 0;

                }
            </style>

                `;
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }

}
customElements.define('hero-element', Hero);