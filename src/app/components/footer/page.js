import Link from "next/link";
import "../../../../public/css/custom-css.css";
export default function Footer() {
  return (
    <>
      <div className="footer-div">
        <footer className="text-white py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2 className="text-uppercase">Get in Touch</h2>
                {/* <h6 class="mb-3">Experience the Best Dining in Town</h6> */}
                <p className="mt-4">
                  Experience the best flavors in town, with fresh ingredients
                  and mouth-watering dishes.
                </p>
                <p>
                  We’re open Monday to Sunday, 10 AM - 10 PM. Come and enjoy a
                  meal with us!
                </p>

                <ul className="list-unstyled d-flex justify-content-center mt-4">
                  <li>
                    <Link href="https://www.instagram.com/accounts/login/?hl=en" target="blank" className="text-white me-4">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/login" target="blank" className="text-white me-4">
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/login.php/" target="blank" className="text-white me-4">
                      <i className="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D" target="blank" className="text-white">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h4>Quick Links</h4>
                <ul className="list-unstyled pt-3 flex-column quick-link-ul">
                  <li>
                    <i class="fa-solid fa-house"></i>
                    <Link href="/" className=" pt-3 px-2">
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <i class="fa-solid fa-eject"></i>
                    <Link href="/screens/about" className=" mt-3 px-2">
                      About
                    </Link>
                  </li>
                  <li className="mt-2">
                    <i class="fa-brands fa-servicestack px-2"></i>
                    <Link href="/screens/services" className=" ">
                      Services
                    </Link>
                  </li>
                  <li className="mt-2">
                    <i class="fa-solid fa-address-book px-2"></i>
                    <Link href="/screens/contact" className="">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h4>Contact Information</h4>
                <ul className="list-unstyled pt-3 quick-link-ul">
                  <li>
                    <i className="fas fa-envelope px-2"></i>
                    <Link href="#" className="">
                      contact@example.com
                    </Link>
                  </li>
                  <li className="mt-2">
                    <i className="fas fa-phone"></i>    
                    <Link href="#" className="px-2">
                      +123 456 7890
                    </Link>
                  </li>
                  <li className="mt-2">
                    <i className="fas fa-map-marker-alt px-2"></i> 
                    <Link href="#" className="">
                    123 Main St,
                    Anytown, USA
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
