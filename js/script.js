window.addEventListener('scroll', function(){
    const headernav = document.querySelector('.header-content')
    if(window.pageYOffset >= 100){
        headernav?.classList.add('!max-w-[1086px]')
        headernav?.classList.remove('!max-w-[949px]')
    }
    else{
        headernav?.classList.remove('!max-w-[1086px]')
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

// Modal Functionality
const modaldivs = document.querySelectorAll('.modal')
const modalsets = document.querySelectorAll("[data-modal]")
const closemodal = document.querySelectorAll(".modal-close")

modalsets.forEach((modalset)=>
    modalset.addEventListener('click', function (e){
        const target = document.querySelector(modalset.dataset.modal)
        target.classList.add('active')
    })
)
closemodal.forEach((btn)=>
    btn.addEventListener('click', function (){
        modaldivs.forEach((modal)=>{
            modal.classList.remove('active')
        })
    })
)

// Accordion Functionality
const accordionBtn = document.querySelectorAll('.accordionBtn');
accordionBtn.forEach((btn) => {
    btn.addEventListener('click', function(event) {
        const content = btn.lastElementChild;
        const icon = btn.querySelector('.accordion-icon');
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        accordionBtn.forEach((otherBtn) => {
            const otherContent = otherBtn.lastElementChild;
            const otherIcon = otherBtn.querySelector('.accordion-icon');
            if (otherBtn !== btn) {
                otherContent.style.height = '0px';
                otherIcon.classList.remove('icon-minus-circle');
                otherIcon.classList.add('icon-add-circle');
                otherContent.classList.remove('mt-6');
                otherBtn.setAttribute('aria-expanded', 'false');
            }
        });
        if (expanded) {
            content.style.height = '0px';
            icon.classList.remove('icon-minus-circle');
            icon.classList.add('icon-add-circle');
            content.classList.remove('mt-6');
        } else {
            content.style.height = `${content.scrollHeight}px`;
            icon.classList.add('icon-minus-circle');
            icon.classList.remove('icon-add-circle');
            content.classList.add('mt-6');
        }
        btn.setAttribute('aria-expanded', !expanded);
    });
});