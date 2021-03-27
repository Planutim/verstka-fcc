let all = document.querySelectorAll('.nav-links li')
all.forEach(elem=>{
    elem.addEventListener('click', function(e){
        all.forEach(a=>{
            a.classList.remove('active')
        })
        elem.classList.add('active')
    })
})