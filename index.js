const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__burger-menu");

burger.addEventListener('click', appearBurgerMenu);

function appearBurgerMenu(event){
  console.log('click');
  if(!burgerMenu.classList.contains("visible")){
    console.log(true);
    burgerMenu.classList.remove("hidden");
    burgerMenu.classList.add("visible");
    document.body.style.overflow='hidden';
  } else{
    burgerMenu.classList.remove("visible");
    burgerMenu.classList.add("hidden");
    document.body.style.overflow='visible';
  }
}