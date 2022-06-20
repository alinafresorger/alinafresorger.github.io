// create a class for custom element
class Card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // TODO use templates
    // Set innerHTML using attributes that were defined in parent HTML
    // We use custom element's REAL dom.
    // We can't use shadow DOM because Bootstrap styles will not propagate to shadow.
    // Shadow DOM is a technology used along with Custom Elements to create isolated sub-DOMs with custom styles
    this.innerHTML = /* html */ `
        <div class="card">
            <img src="${this.getAttribute("data-image")}" class="card-img-top" alt="${this.getAttribute("data-title")}">
                <div class="card-body">
                    <h5 class="card-title">${this.getAttribute("data-title")}</h5>
                    <p class="card-text">${this.getAttribute("data-description")}</p>
                </div>
                <div class="card-footer">
                    <a href="${this.getAttribute("data-url")}" target="blank" class="btn btn-primary">Run</a>
                    <a href="${this.getAttribute("data-repo")}" target="blank" class="btn btn-primary">Go to repo</a>
                </div>
            </div>
        `;
  }
}

// define custom element (for HTML) and assign class from above
customElements.define("my-card", Card);
