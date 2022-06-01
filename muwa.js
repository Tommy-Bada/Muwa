let priceBox = document.getElementsByClassName("pricing-box");
let firstPriceText = document.getElementsByClassName("pricing-box-text-1");
let secondPriceText = document.getElementsByClassName("pricing-box-text-2");
let thirdPriceText = document.getElementsByClassName("pricing-box-text-3");
let listPriceText = document.getElementsByClassName("pricing-list");

    for( let index = 0; index < 3; index++){
        priceBox[index].addEventListener("mouseover", function priceHover(){
            secondPriceText[index].style.color = "var(--white)";
        })

        priceBox[index].addEventListener("mouseout", function priceOut(){
            secondPriceText[index].style.color = "var(--purple)";
        })
    }
