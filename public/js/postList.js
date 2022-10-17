export class PostList extends HTMLElement {
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
                    <my-post title="${post.title}" link="${post.link}" timestamp=${post.timestamp}></my-post>
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
customElements.define('post-list', PostList);