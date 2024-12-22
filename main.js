let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function () {
  document.querySelector('body').classList.toggle('movile-nav-active');
  this.classList.toggle('fa-xmark');
});
/*typing effect */

  let typed = new Typed('#auto-input', {
    strings: ['Java-Backend Developer', 'Web Developer','Full-stack Webdeveloper'], 
    typeSpeed: 90,
 
    backDelay: 100,
    loop: true,
  });

