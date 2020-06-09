import "./custom-header.js";

class customHeader extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mde: "open" });

    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = this.getTemplate();
  }
  getTemplate() {
    return `
      <header>
        <ul class="custom-header__ul">
          <li class="custom-header__li">
            <a href="/">Home</a>
          </li>
          <li class="custom-header__li">>
            <a href="/">Page 2</a>
          </li>
          <li class="custom-header__li">>
            <a href="/">Page 3</a>
          </li>
        </ul>
      </header>
      ${this.getStyles()}
    `;
  }
  getStyles() {
    return `
      <style>
        :host {
          height: 75px;
          background: #7a7af5
          box-shadow: 1px 0 5px 0 black;
        }
        .custom-header__ul {
          display: flex;
          justify-content: flex-end;
          margin: 0;
          padding: 0;
        }
        .custom-header__li {
          margin-right: 25px;
          list-style: none;
        }
        a {
          text-decoration: none;

        }
      </style>
    `;
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent("header-clicked", {
        detail: { data: index + 1 },
        bubbles: true,
      })
    );
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("custom-header__li a")
      .forEach((atag, index) => {
        atag.addEventListener("click", e);
      });
  }
}

customElements.define("custom-header", customHeader);
