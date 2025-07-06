class NavMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        .navmenu ul {
          list-style: none;
          display: flex;
          gap: 16px;
          padding: 0;
          margin: 0;
        }

        .navmenu li a {
          text-decoration: none;
          color: black;
          padding: 8px 12px;
          border-radius: 4px;
          transition: background 0.3s;
        }

        .navmenu li a.active {
          background-color: #f0f0f0;
        }

        .contact-link {
          background-color: #E96B56;
          border-radius: 50px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-link a {
          color: white;
          text-decoration: none;
        }

        .mobile-nav-toggle {
          display: none;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 1200px) {
          .mobile-nav-toggle {
            display: block;
          }
        }
      </style>

      <nav class="navmenu">
        <ul>
          <li><a href="index.html" class="active">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="marketing.html">Marketing</a></li>
          <li><a href="our-products.html">Our Products</a></li>
          <li class="contact-link"><a href="contact.html">Contact Us</a></li>
        </ul>
        <i class="mobile-nav-toggle bi bi-list"></i>
      </nav>
    `;
  }
}

customElements.define('nav-menu', NavMenu);
