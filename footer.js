// create a class for custom element
class Footer extends HTMLElement {
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
        <footer class="py-5 mt-5 border-top border-light border-opacity-75">
          <div class="container">
            <small class="d-block text-center text-muted">&copy; 2022</small>
          </div>
        </footer>
      `;
  }
}

// define custom element (for HTML) and assign class from above
customElements.define("my-footer", Footer);
