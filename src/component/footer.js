const Footer = () => {
    return <footer class="footer">
    <div class="container footer-container">
      <div class="footer-row">
        <div class="footer-identity">
          <a href="#home" class="nav-logo">WeGo<span>Jim</span> 💪</a>
          <p class="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            fugiat ullam aspernatur maiores iusto suscipit ipsum ipsa incidunt
            sint consequuntur!
          </p>
        </div>
        <div class="footer-feature">
          <div class="col footer-feature-1">
            <h4 class="footer-feature-title">About</h4>
            <ul class="footer-feature-list">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#term-condition">Terms & Agreements</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h4 class="footer-feature-title">Support</h4>
            <ul class="footer-feature-list">
              <li>
                <a href="#faq">Faq</a>
              </li>
              <li>
                <a href="#support">Support Center</a>
              </li>
              <li>
                <a href="#privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h4 class="footer-feature-title">Contact Us</h4>
            <ul class="footer-feature-list">
              <li>
                <a href="#gmail"
                  ><i class="ri-mail-line"></i> McGillyCuddy@gmail.com</a
                >
              </li>
              <li>
                <a href="#address"
                  ><i class="ri-map-pin-line"></i> Bandung, 7 July
                  2022</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        All rights reserved, &copy; 2022 
      </div>
    </div>
  </footer>
}

export default Footer;