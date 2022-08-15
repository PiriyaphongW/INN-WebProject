class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <nav class="nav-mobile d-block d-lg-none">
        <div id="navMobileBody " class="nav-mobile-body">
          <div   class="nav-mobile-content ">
            <div class="nav-mobile-left">
              <div class="nav-mobile-logo">
                <a href="">
                  <img src="/assets/nav/mobile-logo.png" alt="">
                </a>
              </div>
            </div>
            <div class="nav-mobile-right">
              <!-- Search Icon Button   -->
              <div class="nav-mobile-search">
                <img id="searchMain" data-bs-toggle="collapse" data-bs-target="#openSearch"
                  src="/assets/nav/mobile-search-white.svg " alt="">
              </div>
              <!-- Close Hamburger Button-->
              <div class="nav-mobile-toggle">
                <div id="mobile-toggle-open" data-bs-toggle="collapse" data-bs-target="#openToggle">
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="topicMenu" class="topic-mobile accordion ">
            <div id="openSearch" class="collapse" data-bs-parent="#topicMenu">
              <div class=" topicSearch ">
                <h1 class="text-white text-center">ค้นหา</h1>
                <div class="mobile-search-content  ">
                  <div class="search-form  ">
                    <img src="/assets/nav/search-blue-icon.svg" alt="">
                    <div class="search-input">
                      <input type="email" class="form-control">
                    </div>
                    <span>ยกเลิก</span>
                  </div>
                </div>
                <div class="search-mobile-follow">
                  <h3 class="text-white">ติดตามข่าวสารได้ที่</h3>
                  <div class="topic-mobile-social">
                    <ul class="list-unstyled ">
                      <li><a href=""><img src="/assets/social-icon/facebook.png" alt=""></a></li>
                      <li><a href=""><img src="/assets/social-icon/youtube.png" alt=""></a></li>
                      <li><a href=""><img src="/assets/social-icon/twitter.png" alt=""></a></li>
                      <li><a href=""><img src="/assets/social-icon/tiktok.png" alt=""></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="openToggle" class="collapse  " data-bs-parent="#topicMenu">
              <div class="topic-mobile-list  bg-white">
                <ul class="list-topic">
                  <li><a href="#" onclick="listTopic1(this)">ข่าว</a></li>
                  <li><a href="#" onclick="listTopic2(this)">บันเทิง</a></li>
                  <li><a href="#" onclick="listTopic3(this)">ไลฟ์สไตล์</a></li>
                  <li><a href="#" onclick="listTopic4(this)">การเงิน</a></li>
                  <li><a href="#" onclick="listTopic5(this)">ดวง</a></li>
                  <li><a href="#" onclick="listTopic6(this)">ลอตเตอรี่</a></li>
                  <li><a href="#" onclick="listTopic7(this)">E-Sport</a></li>
                  <li><a href="#" onclick="listTopic8(this)">Podcast</a></li>
                  <li><a href="#" onclick="listTopic9(this)">Video</a></li>
                </ul>
                <div class="topic-mobile-follow text-center">
                  <h3>ติดตามข่าวสารได้ที่</h3>
                  <div class="topic-mobile-social">
                    <ul class="ps-0 ">
                      <li><a href=""><img src="/assets/social-icon/facebook.png" alt=""></a></li>
                      <li><a href=""><img src="/assets/social-icon/youtube.png" alt=""></a></li>
                      <li><a href=""><img src="/assets/social-icon/twitter.png" alt=""></a></li>
                      <li><a href=""><img src="/assets/social-icon/tiktok.png" alt=""></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div id="mobile-follow" class="topic-mobile-follow d-none">
                        <h3>ติดตามข่าวสารได้ที่</h3>
                        <div class="topic-mobile-social">
                            <ul>
                                <li><a href=""><img src="/assets/social-icon/facebook.png" alt=""></a></li>
                                <li><a href=""><img src="/assets/social-icon/youtube.png" alt=""></a></li>
                                <li><a href=""><img src="/assets/social-icon/twitter.png" alt=""></a></li>
                                <li><a href=""><img src="/assets/social-icon/tiktok.png" alt=""></a></li>
                            </ul>
                        </div>
                    </div> -->
          </div>
        </div>  
        <div id="subListTopic" class="sub-list-topic d-none p-0" >
          <div class="nav-sub-list-title  ps-5 d-flex align-items-baseline">
            <h1 class="text-white m-0 fs-5" onclick="subList(this)">Back</h1>
          </div>
          <div class="sub-list-topic-body bg-white ">
            <ul class="sub-list-topic-content m-0 ">
              <li id="subList1" class="list-unstyled d-none">
                <a class="text-decoration-none" href="">ข่าว</a>
                <ul class="text-decoration-none list-unstyled">
                  <li><a href="">พระราชสำนัก</a></li>
                  <li><a href="">ทั่วไป</a></li>
                  <li><a href="">การเมือง</a></li>
                  <li><a href="">เศรษฐกิจ</a></li>
                  <li><a href="">กีฬา</a></li>
                  <li><a href="">ต่างประเทศ</a></li>
                  <li><a href="">Tech</a></li>
                  <li><a href="">ภูมิภาค</a></li>
                  <li><a href="">อาชญากรรม</a></li>
                </ul>
              </li>
              <li id="subList2" class="list-unstyled d-none">
                <a href="">บันเทิง</a>
                <ul class="text-decoration-none list-unstyled">
                  <li><a href="">HotNews</a></li>
                  <li><a href="">บันเทิงไทย</a></li>
                  <li><a href="">บันเทิงสากล</a></li>
                  <li><a href="">เพลง</a></li>
                  <li><a href="">หนัง</a></li>
                  <li><a href="">ซีรีย์</a></li> 
                </ul>
              </li>
              <li id="subList3" class="list-unstyled d-none">
                <a href="">ไลฟ์สไตล์</a>
                <ul class="text-decoration-none list-unstyled">
                  <li><a href="">ท่องเที่ยว</a></li>
                  <li><a href="">อาหาร</a></li>
                  <li><a href="">สุขภาพ</a></li>
                  <li><a href="">บิวตี้</a></li>
                  <li><a href="">ช้อปปิ้ง</a></li>
                  <li><a href="">โปรโมชั่น</a></li>
                  <li><a href="">Local Vlog</a></li>
                </ul>
              </li>
              <li id="subList4" class="list-unstyled d-none">
                <a href="">การเงิน</a>
                <ul class="text-decoration-none list-unstyled">
                   <li><a href="">การเงิน</a></li>
                   <li><a href="">หุ้น</a></li>
                   <li><a href="">ทองคำ</a></li>
                   <li><a href="">น้ำมัน</a></li> 
                </ul>
              </li>
              <li id="subList5" class="list-unstyled d-none">
                <a href="">ดวง</a>
                <ul class="text-decoration-none list-unstyled">
                   <li><a href="">ดวง</a></li>
                   <li><a href="">ปาฏิหาริย์</a></li>
                   <li><a href="">ฮวงจุ้ย</a></li> 
                </ul>
              </li>
              <li id="subList6" class="list-unstyled d-none">
                <a href="">ลอตเตอรี่</a>
                <ul class="text-decoration-none list-unstyled">
                  <li><a href="">ข่าว</a></li>
                  <li><a href="">บทความแนะนำ</a></li> 
                </ul>
              </li>
              <li id="subList7" class="list-unstyled d-none">
                <a href="">E-Sport </a>
                <ul class="text-decoration-none list-unstyled">
                  <li><a href="">ข่าวสาร</a></li>
                  <li><a href="">คอนเทนต์</a></li>
                  <li><a href="">รีวิว</a></li> 
                </ul>
              </li>
              <li id="subList8" class="list-unstyled d-none">
                <a href="">Podcast</a>
                <ul class="text-decoration-none list-unstyled">
                  <li><a href="">Trending</a></li>
                  <li><a href="">ทั่วไป</a></li> 
                </ul>
              </li>
              <li id="subList9" class="list-unstyled d-none">
                <a href="">Video</a>
                <ul class="text-decoration-none list-unstyled">
                   <li><a href="">Hot Clips</a></li>
                   <li><a href="">คลิปเด่น Social</a></li>
                   <li><a href="">คลิปข่าวทั่วไป</a></li>
                   <li><a href="">คลิปข่าวต้นชั่วโมง</a></li>
                   <li><a href="">News Round Up</a></li>
                   <li><a href="">สัมภาษณ์พิเศษ</a></li> 
                </ul>
              </li>
            </ul>
            <div class="topic-mobile-follow mt-4 text-center">
              <h3>ติดตามข่าวสารได้ที่</h3>
              <div class="topic-mobile-social">
                <ul class="ps-0 list-unstyled">
                  <li><a href=""><img src="/assets/social-icon/facebook.png" alt=""></a></li>
                  <li><a href=""><img src="/assets/social-icon/youtube.png" alt=""></a></li>
                  <li><a href=""><img src="/assets/social-icon/twitter.png" alt=""></a></li>
                  <li><a href=""><img src="/assets/social-icon/tiktok.png" alt=""></a></li>
                </ul>
              </div>
            </div>
          </div>        
        </div>
      </nav>
      <nav class="navbar-desktop  ps-5 pe-5  d-none d-lg-block position-sticky top-0 navbar     ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            <img src="/assets/nav/desktop-logo.png " alt="">
          </a>         
          <div class="navbar-desktop-topic">
             ข่าว 
            <ul>
              <li><a href="">พระราชสำนัก</a></li>
              <li><a href="">ทั่วไป</a></li>
              <li><a href="">การเมือง</a></li>
              <li><a href="">เศรษฐกิจ</a></li>
              <li><a href="">กีฬา</a></li>
              <li><a href="">ต่างประเทศ</a></li>
              <li><a href="">Tech</a></li>
              <li><a href="">ภูมิภาค</a></li>
              <li><a href="">อาชญากรรม</a></li>
            </ul>
          </div> 
          <div class="navbar-desktop-topic  ">
             บันเทิง 
            <ul>
              <li><a href="">Hot News</a></li>
              <li><a href="">บันเทิงไทย</a></li>
              <li><a href="">บันเทิงสากล</a></li>
              <li><a href="">เพลง</a></li>
              <li><a href="">หนัง</a></li>
              <li><a href="">ซีรีย์</a></li>
            </ul>
          </div> 
          <div class="navbar-desktop-topic">
            ไลฟ์สไตล์ 
            <ul>
              <li><a href="">ท่องเที่ยว</a></li>
              <li><a href="">อาหาร</a></li>
              <li><a href="">สุขภาพ</a></li>
              <li><a href="">บิวตี้</a></li>
              <li><a href="">ช้อปปิ้ง</a></li>
              <li><a href="">โปรโมชั่น</a></li>
              <li><a href="">Local Viog</a></li>
            </ul>
          </div> 
          <div class="navbar-desktop-topic">
             การเงิน 
            <ul>
              <li><a href="">การเงิน</a></li>
              <li><a href="">หุ้น</a></li>
              <li><a href="">ทองคำ</a></li>
              <li><a href="">น้ำมัน</a></li> 
            </ul>
          </div> 
          <div class="navbar-desktop-topic">
             ดวง 
            <ul>
              <li><a href="">ดวง</a></li>
              <li><a href="">ปาฏิหาริย์</a></li>
              <li><a href="">ฮวงจุ้ย</a></li> 
            </ul>
          </div> 
          <div class="navbar-desktop-topic">
            ลอตเตอรี่ 
            <ul>
              <li><a href="">ข่าว</a></li>
              <li><a href="">บทความแนะนำ</a></li> 
            </ul>
          </div> 
          <div class="navbar-desktop-topic">
             E-Sport 
            <ul>
              <li><a href="">ข่าวสาร</a></li>
              <li><a href="">คอนเทนต์</a></li> 
              <li><a href="">รีวิว</a></li> 
            </ul>
          </div> 
          <div class="navbar-desktop-topic">
             Podcast 
            <ul>
              <li><a href="">Trending</a></li>
              <li><a href="">ทั่วไป</a></li> 
            </ul>
          </div> 
          <div class="navbar-desktop-topic">
             Video 
            <ul>
              <li><a href="">Hot Clips</a></li>
              <li><a href="">คลิปเด่น Social</a></li> 
              <li><a href="">คลิปข่าวทั่วไป</a></li>
              <li><a href="">คลิปข่าวต้นชั่วโมง</a></li>
              <li><a href="">News Round Up</a></li>
              <li><a href="">สัมภาษณ์พิเศษ</a></li> 
            </ul>
          </div> 
           
          <img src="/assets/nav/desktop-search.png" alt="">
        </div>
      </nav>

        `
    }
}

customElements.define('main-header',Header);