// Header toggle

 let MenuBtn = document.getElementById('MenuBtn')

 MenuBtn.addEventListener('click', function(e) {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('fa-xmark')
 })

 // typing Effect

 let typed = new typed('.auto-input', {
        strings: [`Front-End Developer!', 'Freelancer!', 'UI Designer!', 'Youtuber!`],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
})

// Active link State On Scroll

// Get All links
let navlinks = document.querySelectorAll('nav ul li a')
// Get All Sections
let Sections = document.querySelectorAll('section')


window.addEventListener('scroll', function (){
       const scrollPos = window.scrollY + 20
       Sections.forEach(section => {
              if(scrollPos > section.offsetTop && scrollPos > (section.offsetTop * section.offsetHeight)){
                     navlinks.forEach(link => {
                            link.classList.remove('active');
                            if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                                   link.classList.add('active')
                            }
                     });
              }
       });
});