
    // Header toggle

 let MenuBtn = document.getElementById('MenuBtn');
 let navLinks = document.querySelectorAll('nav ul li a');

 MenuBtn.addEventListener('click', function() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('fa-xmark');
 });

 // close menu when a nav link is clicked
 navLinks.forEach(link => {
       link.addEventListener('click', function () {
              document.querySelector('body').classList.remove('mobile-nav-active');
              MenuBtn.classList.remove('fa-xmark');
       });
 });

 // typing Effect

 let typed = new Typed('.auto-input', { // "Typed" should be capitalized 
        strings: ['Front-End Developer!', 'Cybersecurity!', 'UI Designer!', 'Youtuber!'], // Fixed syntax
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
});

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
