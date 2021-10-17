//HEADER STICKY
window.onscroll = function() {stickyHeaderFunction()};
var header = document.querySelector("#nav-header");
var sticky = header.offsetTop;
function stickyHeaderFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}
//back to top
let backTopBtn = document.querySelector('.back-top')
window.addEventListener('scroll',() =>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTopBtn.style.opacity = "1";
  } else {
    backTopBtn.style.opacity = "0";
  }
})
//QUESTIONS
let quickBtns = [...document.querySelectorAll('.question-wrap-a-icon .plusImg')]

function displayBdiv(){
  if(this.className.includes('plusImg')){
    this.classList.remove('plusImg');
    this.classList.add('minusImg')
    this.src="images/Home/minus.png";
    this.parentNode.previousElementSibling.querySelector('.question-wrap-b').style.display = 'block';
  }
  else if(this.className.includes('minusImg')){
    this.classList.remove('minusImg');
    this.classList.add('plusImg')
    this.src="images/Home/plus (1).png";
    this.parentNode.previousElementSibling.querySelector('.question-wrap-b').style.display = 'none';
  }
}

quickBtns.forEach(quickBtn => quickBtn.addEventListener('click', displayBdiv))

//PARENTS CAROUSEL
$(document).ready(function(){

  $('#testimonial .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    
  });
  $('#testimonial .slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    arrows:false,
    focusOnSelect: true,
    variableWidth:true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:true
  });
});

//CLASS DETAILS CAROUSEL
$(document).ready(function(){

  $('#classes-details .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    
  });
  $('#classes-details .slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    arrows:false,
    focusOnSelect: true,
  });
});
//TEACHERS
let quickBtnsTeachers = [...document.querySelectorAll('.teachers-icon-plus .plusImg')]

function displayMediaIcons(){
  if(this.className.includes('plusImg')){
    this.classList.remove('plusImg');
    this.classList.add('minusImg')
    this.src="images/Home/minus.png";
    this.previousElementSibling.style.display = 'flex';
    this.parentNode.style.borderRadius='20px';
  }
  else if(this.className.includes('minusImg')){
    this.classList.remove('minusImg');
    this.classList.add('plusImg')
    this.src="images/Home/plus (1).png";
    this.parentNode.style.borderRadius='50%';
    this.previousElementSibling.style.display = 'none';
  }
}

quickBtnsTeachers.forEach(quickBtn2 => quickBtn2.addEventListener('click', displayMediaIcons))