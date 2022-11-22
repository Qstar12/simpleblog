export class CardsContent extends HTMLElement {
    #lists = [];
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.render();
    }

    set list(list) {
        this.#lists = list;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
            ${this.style}
            <div class="card-list">
                ${this.#lists.map(list => `
                    <card-element title="${list.title}" image="${list.image}" description="${list.description}"></card-element>
                `).join('')}
            </div>
        `;
    }

    get style(){
        return `
            <style>
               
            </style>
        `;
    }

}
customElements.define('cards-content', CardsContent);