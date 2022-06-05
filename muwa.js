// Price Box
let priceBox = document.getElementsByClassName("pricing-box");
let secondPriceText = document.getElementsByClassName("pricing-box-text-2");

    for( let index = 0; index < 3; index++){
        priceBox[index].addEventListener("mouseover", function priceHover(){
            secondPriceText[index].style.color = "var(--white)";
        })

        priceBox[index].addEventListener("mouseout", function priceOut(){
            secondPriceText[index].style.color = "var(--purple)";
        })
    }

// Hamburger
    let menuOpen = false;
    function hamburgerMenu(){
        let navBar = document.getElementById("navbar");
        navBar.classList.toggle("navBarOpen")
        let hamburgerIcon = document.getElementById("hamburger-menu")
        if(!menuOpen){
            hamburgerIcon.classList.add('open');
            menuOpen = true;
        }
        else{
            hamburgerIcon.classList.remove('open')
            menuOpen = false;
        }
    }
    let menuButton = document.getElementById("hamburger-menu");
    menuButton.addEventListener("click", hamburgerMenu);