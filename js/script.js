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
                otherIcon.classList.remove('rotate-180');
                otherContent.classList.remove('mt-6');
                otherBtn.setAttribute('aria-expanded', 'false');
            }
        });
        if (expanded) {
            content.style.height = '0px';
            icon.classList.remove('rotate-180');
            content.classList.remove('mt-6');
        } else {
            content.style.height = `${content.scrollHeight}px`;
            icon.classList.add('rotate-180');
            content.classList.add('mt-6');
        }
        btn.setAttribute('aria-expanded', !expanded);
    });
});
