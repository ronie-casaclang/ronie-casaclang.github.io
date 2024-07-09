
/* Scroll page body
1. Hide header when scroll down
2. Display header when scroll up
*/
var lastScrollY = scrollY;
document.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    var currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) header.style.display = "none";
    else header.style.display = "flex";
    lastScrollY = currentScrollY;
});
