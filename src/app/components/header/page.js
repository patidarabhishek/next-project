import Link from "next/link";
import "../../../../public/css/custom-css.css";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span>
              <i
                className="fa-solid fa-burger"
                style={{ color: "red", fontSize: "30px" }}
              ></i>
            </span>
            <span
              className="navbar-brand"
              // href="/"
              style={{
                marginLeft: "0.4rem",
                color: "red",
                fontWeight: "600",
                letterSpacing: "0.01rem",
                fontSize: "19px",
              }}
            >
              𝕰𝖆𝖙 𝕵𝖚𝖓𝖈𝖙𝖎𝖔𝖓
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(1)" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/screens/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/screens/events"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/screens/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/screens/contact"
                >
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" href="/screens/contact">
                  Contact
                </Link>
              </li> */}
              {/* </form> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
