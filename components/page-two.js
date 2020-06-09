class pageHome extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = this.getTemplate();
  }
  getTemplate() {
    return `
      <h1>I'm home page</h1>
    `;
  }
}

customElements.define("page-home");
