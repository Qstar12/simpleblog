export class Post extends HTMLElement {
  title = "";
  link = "";
  timestamp = "";
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  static get observedAttributes() {
    return ["title", "link", "timestamp"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("--> attributeChangedCallback", name, oldValue, newValue);
    switch (name) {
      case "title":
        this.title = newValue || "";
        break;
      case "link":
        this.link = newValue || "";
        break;
        case "timestamp":
        this.timestamp = newValue || "";
        break;
      
    }
    this.render();
  }

  connectedCallback() {
    console.log("--> connectedCallback");
    this.render();
  }

  disconnectedCallback() {
    console.log("--> disconnectedCallback");
  }

  get template() {
    return `
        ${this.style}
        <div class="card">
            <div class="post">
                <slot name="title"><h1>${this.title}</h1></slot>
                <div class="flex">
                <slot name="link"><a href="${this.link}">Read More</a></slot>
                <slot name="timestamp"><p>${this.timestamp}</p></slot>
                </div>
            </div>
        </div>
        `;
  }

  get style() {
    return `
            <style>
                
                .card {
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

                a {
                    text-decoration: none;
                    color: #000;
                    font-size: 1rem;
                    font-weight: 400;
                   

                }
                p {
                    font-size: 1rem;
                }

                .flex {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;

                }
                
            </style>
        `;
  }

  render() {
    this.shadowRoot.innerHTML = this.template;
  }
}
customElements.define("my-post", Post);
