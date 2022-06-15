function opentopic(open){
    const opentopicMobile = document.getElementById('mobile-topic')
    opentopicMobile.classList.remove('d-none')
    const togglehamburger  = document.getElementById('mobile-toggle-open')
    togglehamburger.classList.add('d-none')
    const toggleclose  = document.getElementById('mobile-toggle-close')   
    toggleclose.classList.remove('d-none')
}

function closetopic(close){
    const closetopicMobile = document.getElementById('mobile-topic')
    closetopicMobile.classList.add('d-none')
    const toggleclose  = document.getElementById('mobile-toggle-close')   
    toggleclose.classList.add('d-none')
    const togglehamburger  = document.getElementById('mobile-toggle-open')
    togglehamburger.classList.remove('d-none')
}

function search(search){
    const opensearch = document.getElementById('topic-mobile-search')
    opensearch.classList.remove('d-none')
}