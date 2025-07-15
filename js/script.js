window.addEventListener('scroll', function(){
    const headernav = document.querySelector('.header').firstElementChild
    if(window.pageYOffset >= 100){
        headernav?.classList.add('!max-w-[1118px]')
        headernav?.classList.remove('!max-w-[949px]')
    }
    else{
        headernav?.classList.remove('!max-w-[1118px]')
        headernav?.classList.add('!max-w-[949px]')
    }
})

const droodownbtn = document.querySelectorAll('.dropdown-btn')
const dropdownlist = document.querySelectorAll('.dropdown-list')
droodownbtn.forEach(btn=>{
    btn.addEventListener('click', function (){
        dropdownlist.forEach(list=>{
            list.classList.toggle('hidden')
        })
    })
})