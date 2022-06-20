// create a class for custom element
class Nav extends HTMLElement {
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
        <nav class="navbar navbar-expand-lg bg-light fixed-top">
            <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Alina Fresorger</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="projects.html">Projects</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects On GitHub
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="https://github.com/alinafresorger/PackMen" target="blank">PacMen</a></li>
                    <li><a class="dropdown-item" href="https://github.com/alinafresorger/eyes" target="blank">Eyes</a></li>
                    <li><a class="dropdown-item" href="https://github.com/alinafresorger/real_time_bus_tracker" target="blank">Bus Tracker</a></li>
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    `;
  }
}

// define custom element (for HTML) and assign class from above
customElements.define("my-nav", Nav);
