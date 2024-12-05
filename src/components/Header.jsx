import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark shadow-sm">
        <div className="container-fluid mx-5">
          <a className="navbar-brand text-light " href="/">
            ECOMMERCE STORE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      JEANS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JACKET
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      SHOES
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      SHIRTS
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      T-SHIRTS
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
