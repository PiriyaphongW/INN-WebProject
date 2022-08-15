class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="footer">
        <div
          class="footer-body text-center  d-flex flex-column flex-md-row justify-content-md-around  align-items-md-center  p-3 gap-1">
          <div class="footer-left d-flex flex-column">
            <img class="m-auto " src="/assets/footer/footer-logo.png" alt=" ">
            <span class="text-white  ">Independent News Network</span>
          </div>
          <div class="footer-middle text-white fw-light d-none d-md-block">
            <span>ABOUT</span>
            <span>|</span>
            <span>CONTACT</span>
          </div>
          <div class="footer-right">
            <span class="text-white fw-light ">FOLLOW US</span>
            <ul class="list-unstyled d-flex justify-content-center mt-2 gap-2">
              <li><a href=""><img src="/assets/footer/facebook.png" alt=""></a></li>
              <li><a href=""><img src="/assets/footer/youtube.png" alt=""></a></li>
              <li><a href=""><img src="/assets/footer/twitter.png" alt=""></a></li>
              <li><a href=""><img src="/assets/footer/tiktok.png" alt=""></a></li>
  
            </ul>
          </div>
  
        </div>
      </footer>
        
        `
    }
}
customElements.define('main-footer',Footer);