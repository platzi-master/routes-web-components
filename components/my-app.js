import "./custom-header.js";

import "./page-home.js";
import "./page-two.js";

class myApp extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shownSection = 1;
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = this.getTemplate();
  }
  getTemplate() {
    return `
      <custom-header></custom-header>
      <div>
        <p>Hi world!</p>
      </div>
    `;
  }
  getSection(section) {
    switch (section) {
      case 1:
        return `
          <page-home></page-home>
        `;
        break;
      case 2:
        return `
          <page-one></page-one>
        `;
        break;
      case 3:
        return `
          <page-two></page-two>
        `;
        break;

      default:
        break;
    }
  }
  reRenderSection() {
    this.shadowRoot.querySelectorAll(
      ".app-section"
    ).innerHTML = this.getSection(this.shownSection);
  }
  connectedCallBack() {
    this.shadowRoot
      .querySelectorAll("custom-header")
      .addEventListener("header-clicked", (e) => {
        let newShownSection = e.detail.data;
        if (newShownSection !== this.shownSection) {
          this.shownSection = newShownSection;
          this.reRenderSection();
        }
      });
  }
}

customElements.define("my-app", myApp);
