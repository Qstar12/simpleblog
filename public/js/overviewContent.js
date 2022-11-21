export class OverviewContent extends HTMLElement {
    #posts = [];
    constructor() {
        super()
        this.attachShadow({mode: 'open'});
        this.render();
    }

    set post(post) {
        this.#posts = post;
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="post-list">
                ${this.#posts.map(post => `
                    <my-overview title="${post.title}" header="${post.header}" description="${post.description}"</my-overview>
                `).join('')}
            </div>
        `;
    }

    get style() {
        return `
            <style>
               

               
            </style>

            `;
    }
    
}
customElements.define('overview-content', OverviewContent);