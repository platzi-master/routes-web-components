import "./custom-header.js";

class customHeader extends HTMLElement {
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
          display: block; 
          top: 0;
          background: #46cff3;
          position:sticky;
          height: 80px;
          box-shadow: 1px 0px 5px 0px black;
        }
        .custom-header__ul {
          display: flex;
          margin: 0;
          justify-content: flex-end;
          height: 100%;
        }
        .custom-header__li {
          align-self: center;
          list-style: none;
          margin-right: 25px;
        }
        .custom-header__li a {
          text-decoration: none;
          color:white;
          font-size: 25px;
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
      .querySelectorAll(".custom-header__li a")
      .forEach((aTag, index) => {
        aTag.addEventListener("click", (e) => {
          this.handleClick(index);
        });
      });
  }
}

customElements.define("custom-header", customHeader);
