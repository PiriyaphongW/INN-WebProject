class Banner extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="slide-first">
        <div class="owl-carousel  owl-theme owl-carousel-first">
          <div><img
              src="https://www.innnews.co.th/wp-content/uploads/2022/03/Banner_TMRW_%E0%B9%80%E0%B8%95%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%88%E0%B8%A7%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A-5-%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B9%81%E0%B8%A2%E0%B9%88%E0%B9%81%E0%B8%99%E0%B9%88%E0%B8%96%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%B1%E0%B8%9A-%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2.png"
              alt=""></div>
          <div><img
              src="https://www.innnews.co.th/wp-content/uploads/2022/03/Banner_TMRW_%E0%B9%80%E0%B8%95%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%88%E0%B8%A7%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A-5-%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B9%81%E0%B8%A2%E0%B9%88%E0%B9%81%E0%B8%99%E0%B9%88%E0%B8%96%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%B1%E0%B8%9A-%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2.png"
              alt=""></div>
          <div><img
              src="https://www.innnews.co.th/wp-content/uploads/2022/03/Banner_TMRW_%E0%B9%80%E0%B8%95%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%88%E0%B8%A7%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A-5-%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B9%81%E0%B8%A2%E0%B9%88%E0%B9%81%E0%B8%99%E0%B9%88%E0%B8%96%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%B1%E0%B8%9A-%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2.png"
              alt=""></div>
  
        </div>
      </div>
        
        `
    }
}
customElements.define('main-banner',Banner);