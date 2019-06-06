'use strict';

function changeNumbers() {
    let fieldNumber = document.querySelector(".field__numbers");
    let fieldAdults = document.querySelector(".field__adults");
    let fieldChildren = document.querySelector(".field__children");
    let arrowUpNumber = document.querySelector(".up__numbers");
    let arrowUpAdults = document.querySelector(".up__adults");
    let arrowUpChildren = document.querySelector(".up__children");
    let arrowDownNumber = document.querySelector(".down__numbers");
    let arrowDownAdults = document.querySelector(".down__adults");
    let arrowDownChildren = document.querySelector(".down__children");

    
    let minValue = 0;
    let maxValue = 10;

    function setUpNumber(block, valueUp) {
        block.addEventListener('click', ()=> {
            valueUp.textContent ++;

            if(valueUp.textContent > 10) {
                valueUp.textContent = maxValue;
            }

            return valueUp.textContent;
        })
    }
    
    function setDownNumber(block, valueDown) {
        block.addEventListener('click', () => {
            valueDown.textContent --;

            if(valueDown.textContent <= 0) {
                valueDown.textContent = minValue;
            }

            return valueDown.textContent;
        })
    }

    setUpNumber(arrowUpNumber, fieldNumber);
    setDownNumber(arrowDownNumber, fieldNumber);
    setUpNumber(arrowUpAdults, fieldAdults);
    setDownNumber(arrowDownAdults, fieldAdults);
    setUpNumber(arrowUpChildren, fieldChildren);
    setDownNumber(arrowDownChildren, fieldChildren);

  }
  
changeNumbers();
