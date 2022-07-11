  // Slide-First 
$(document).ready(function(){
    $(".owl-carousel-first").owlCarousel({
        items:1,
        loop:true,
        dots:true,
        nav:true,
        navText:[ 
          '<span class="slide-second-next"><img src="/slide-second-previous.svg "></span>',
          '<span class="slide-second-next"><img src="/slide-second-next.svg"></span>'
        ],
    });
  });
  // Slide-Second 
$(document).ready(function(){
    $(".owl-carousel-second").owlCarousel({
        items:1,
        nav:true,
        dots:false,
        loop:true,
        navText:[ 
          '<span class="slide-second-next"><img src="/slide-second-previous.svg "></span>',
          '<span class="slide-second-next"><img src="/slide-second-next.svg"></span>'
        ],
    });
  });
  // Slide-Third
$(document).ready(function(){
    $(".owl-carousel-third").owlCarousel({
        center:true,
        items:1.4, 
        loop:true,
        dots:false,
        margin:15,
         
    });
  });

  // function openToggle(open){
  //   const hamburger = document.getElementById('mobile-toggle-open')
  //   hamburger.classList.toggle("hamburger-change")
  // }

  function subList(hide){
    const closeSubListTopic = document.getElementById('subListTopic')
    closeSubListTopic.classList.add('d-none')
    const closeNavBody = document.getElementById('navMobileBody ')
    closeNavBody.classList.remove('d-none')

    const openSubListTopic1 = document.getElementById('subList1')
    openSubListTopic1.classList.add('d-none')
    const openSubListTopic2 = document.getElementById('subList2')
    openSubListTopic2.classList.add('d-none')
    const openSubListTopic3 = document.getElementById('subList3')
    openSubListTopic3.classList.add('d-none')
    const openSubListTopic4 = document.getElementById('subList4')
    openSubListTopic4.classList.add('d-none')
    const openSubListTopic5 = document.getElementById('subList5')
    openSubListTopic5.classList.add('d-none')
    const openSubListTopic6 = document.getElementById('subList6')
    openSubListTopic6.classList.add('d-none')
    const openSubListTopic7 = document.getElementById('subList7')
    openSubListTopic7.classList.add('d-none')
    const openSubListTopic8 = document.getElementById('subList8')
    openSubListTopic8.classList.add('d-none')
    const openSubListTopic9 = document.getElementById('subList9')
    openSubListTopic9.classList.add('d-none')
 
  }

  function listTopic1(open){
    const closeNavBody = document.getElementById('navMobileBody ')
    closeNavBody.classList.add('d-none') 
    const openSubListTopicBody = document.getElementById('subListTopic')
    openSubListTopicBody.classList.remove('d-none')  

    const openSubListTopic1 = document.getElementById('subList1')
    openSubListTopic1.classList.remove('d-none') 
  }
  function listTopic2(open){
    const closeNavBody = document.getElementById('navMobileBody ')
    closeNavBody.classList.add('d-none') 
    const openSubListTopicBody = document.getElementById('subListTopic')
    openSubListTopicBody.classList.remove('d-none')  

    const openSubListTopic2 = document.getElementById('subList2')
    openSubListTopic2.classList.remove('d-none') 
  }
  function listTopic3(open){
    const closeNavBody = document.getElementById('navMobileBody ')
    closeNavBody.classList.add('d-none') 
    const openSubListTopicBody = document.getElementById('subListTopic')
    openSubListTopicBody.classList.remove('d-none')  
     
    const openSubListTopic3 = document.getElementById('subList3')
    openSubListTopic3.classList.remove('d-none') 
  }
  function listTopic4(open){
    const closeNavBody = document.getElementById('navMobileBody ')
    closeNavBody.classList.add('d-none') 
    const openSubListTopicBody = document.getElementById('subListTopic')
    openSubListTopicBody.classList.remove('d-none')  

    const openSubListTopic4 = document.getElementById('subList4')
    openSubListTopic4.classList.remove('d-none') 
  }
  function listTopic5(open){
    const closeNavBody = document.getElementById('navMobileBody ')
    closeNavBody.classList.add('d-none') 
    const openSubListTopicBody = document.getElementById('subListTopic')
    openSubListTopicBody.classList.remove('d-none')  

    const openSubListTopic5 = document.getElementById('subList5')
    openSubListTopic5.classList.remove('d-none') 
  }
  function listTopic6(open){
    const closeNavBody = document.getElementById('navMobileBody ')
    closeNavBody.classList.add('d-none') 
    const openSubListTopicBody = document.getElementById('subListTopic')
    openSubListTopicBody.classList.remove('d-none')  

    const openSubListTopic6 = document.getElementById('subList6')
    openSubListTopic6.classList.remove('d-none') 
  }
  function listTopic7(open){
    const closeNavBody = document.getElementById('navMobileBody ')
    closeNavBody.classList.add('d-none') 
    const openSubListTopicBody = document.getElementById('subListTopic')
    openSubListTopicBody.classList.remove('d-none')  

    const openSubListTopic7 = document.getElementById('subList7')
    openSubListTopic7.classList.remove('d-none') 
  }
  function listTopic8(open){
    const closeNavBody = document.getElementById('navMobileBody ')
    closeNavBody.classList.add('d-none') 
    const openSubListTopicBody = document.getElementById('subListTopic')
    openSubListTopicBody.classList.remove('d-none')  

    const openSubListTopic8 = document.getElementById('subList8')
    openSubListTopic8.classList.remove('d-none') 
  }
  function listTopic9(open){
    const closeNavBody = document.getElementById('navMobileBody ')
    closeNavBody.classList.add('d-none') 
    const openSubListTopicBody = document.getElementById('subListTopic')
    openSubListTopicBody.classList.remove('d-none')  

    const openSubListTopic9 = document.getElementById('subList9')
    openSubListTopic9.classList.remove('d-none') 
  }
   
// function opentopic(open){
//     const opentopicMobile = document.getElementById('topic-mobile-conent')
//     opentopicMobile.classList.remove('d-none')
//     const togglehamburger  = document.getElementById('mobile-toggle-open')
//     togglehamburger.classList.add('d-none')
//     const toggleclose  = document.getElementById('mobile-toggle-close')   
//     toggleclose.classList.remove('d-none')
//     const serachSubTopic = document.getElementById('searchSub')
//     serachSubTopic.classList.remove('d-none')
//     const searchMainTopic = document.getElementById('searchMain')
//     searchMainTopic.classList.add('d-none') 
// }
// function closetopic(close){
//     // closetopic content
//     const closetopicMobile = document.getElementById('topic-mobile-conent')
//     closetopicMobile.classList.add('d-none')    
//     const toggleclose  = document.getElementById('mobile-toggle-close')   
//     toggleclose.classList.add('d-none')
//     const togglehamburger  = document.getElementById('mobile-toggle-open')
//     togglehamburger.classList.remove('d-none')
//     const searchSubTopic = document.getElementById('searchSub')
//     searchSubTopic.classList.add('d-none')
//     const searchMainTopic = document.getElementById('searchMain')
//     searchMainTopic.classList.remove('d-none') 
  
// }
// function searchMain(){
//     // input form
//     const opensearch = document.getElementById('topic-mobile-search')
//     opensearch.classList.remove('d-none')
//     // ซ่อน hamburger
//     const hiddenHamburger = document.getElementById('mobile-toggle-open')
//     hiddenHamburger.classList.add('d-none')
//     //  Follow and Social 
//     const followSearch = document.getElementById('mobile-follow')
//     followSearch.classList.remove('d-none')
//     // open search close sub 
//     const searchCloseSub = document.getElementById('search-toggle-close-sub')
//     searchCloseSub.classList.remove('d-none')

//     const searchMainTopic = document.getElementById('searchMain')
//     searchMainTopic.classList.add('d-none') 
// }
// function searchcloseSub(closeSub){
//     // input form
//     const opensearch = document.getElementById('topic-mobile-search')
//     opensearch.classList.add('d-none')
//     // ซ่อน hamburger
//     const hiddenHamburger = document.getElementById('mobile-toggle-open')
//     hiddenHamburger.classList.remove('d-none')
//     //  Follow and Social 
//     const followSearch = document.getElementById('mobile-follow')
//     followSearch.classList.add('d-none')
//     // open search close sub 
//     const searchCloseSub = document.getElementById('search-toggle-close-sub')
//     searchCloseSub.classList.add('d-none')

//     const searchMainTopic = document.getElementById('searchMain')
//     searchMainTopic.classList.remove('d-none') 
// }
// function searchSub(search){
//     // ช่องกรอกข้อมูล
//     const opensearch = document.getElementById('topic-mobile-search')
//     opensearch.classList.remove('d-none') 
//     // icon ปิด
//     const serchToggle = document.getElementById('search-toggle-close')
//     serchToggle.classList.remove('d-none')
//     // SocialFollow
//     const followSearch = document.getElementById('mobile-follow')
//     followSearch.classList.remove('d-none')
//     // close iconMain 
//     const toggleclose  = document.getElementById('mobile-toggle-close')   
//     toggleclose.classList.add('d-none')
//     // close topicContent
//     const opentopicMobile = document.getElementById('topic-mobile-conent')
//     opentopicMobile.classList.add('d-none')

//     const searchSubTopic = document.getElementById('searchSub')
//     searchSubTopic.classList.add('d-none')
// }
// function searchclose(searchclose){
//     const opensearch = document.getElementById('topic-mobile-search')
//     opensearch.classList.add('d-none')
    
//     const serchToggle = document.getElementById('search-toggle-close')
//     serchToggle.classList.add('d-none')
     
//     const followSearch = document.getElementById('mobile-follow')
//     followSearch.classList.add('d-none')
//     // close topicContent
//     const opentopicMobile = document.getElementById('topic-mobile-conent')
//     opentopicMobile.classList.remove('d-none')
//     // close iconMain 
//     const toggleclose  = document.getElementById('mobile-toggle-close')   
//     toggleclose.classList.remove('d-none')

//     const searchSubTopic = document.getElementById('searchSub')
//     searchSubTopic.classList.remove('d-none')
// }



// function searchclose(closeSearch){
//     const opensearch = document.getElementById('topic-mobile-search')
//     opensearch.classList.add('d-none')
//     const serchToggle = document.getElementById('search-toggle-close')
//     serchToggle.classList.add('d-none')
//     const hiddenHamburger = document.getElementById('mobile-toggle-open')
//     hiddenHamburger.classList.remove('d-none')
//     const followSearch = document.getElementById('mobile-follow')
//     followSearch.classList.add('d-none')
// }