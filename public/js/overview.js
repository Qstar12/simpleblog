export class Overview extends HTMLElement {
  title = "";
  header = "";
  description = "";

  constructor() {
    super();
    const font = document.createElement("link");
    font.href =
      "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;1,700&display=swap";
    font.rel = "stylesheet";
    document.head.appendChild(font);
    this.attachShadow({ mode: "open" });
    this.render();
  }

  static get observedAttributes() {
    return ["title", "header", "description"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("--> attributeChangedCallback", name, oldValue, newValue);
    switch (name) {
      case "title":
        this.title = newValue || "";
        break;
      case "header":
        this.header = newValue || "";
      case "description":
        this.description = newValue || "";
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
                <slot name="header"><p>${this.header}</p></slot>
                <slot name="description"><p>${this.description}</p></slot>
                
            </div>
        </div>
        `;
  }

  get style() {
    return `
            <style>

            :host {
              color: #0e0e14;
              font-family: 'Source Sans Pro', sans-serif;
            }
                
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
                    font-size: 3rem;
                    line-height: 1.2rem;
                    font-weight: 600;
                    margin: 0;
                    margin-bottom: 2rem;
                }

                p {
                  margin: 0 0 1rem 0;
                }
                slot[name="header"] {
                    font-size: 1.25rem;
                    line-height: 1.5rem;
                    font-weight: 400;
                    color: #515154;
                  
                }

                slot[name="description"] {
                    font-size: 1rem;
                    line-height: 1.5rem;
                    font-weight: 400;
                    color: #515154;

                }

                
                
            </style>
        `;
  }

  render() {
    this.shadowRoot.innerHTML = this.template;
  }
}
customElements.define("my-overview", Overview);
