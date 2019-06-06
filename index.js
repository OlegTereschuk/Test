'use strict';
// var date = new Date($('input[type="date"]').val());

// var options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
// };

// let mask = document.querySelector(".mask").textContent;
// console.log(mask);
// console.log(month);

// if ()

// var date = new Date($('input[type="date"]').val());
// var options = {
// year: 'numeric',
// month: 'long',
// day: 'numeric'
// };
// var dateStr = date.toLocaleString('ru', options);


// $(document).ready(function(){
//     var date = new Date($('input[type="date"]').val());
//     var options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//     };
//     var dateStr = date.toLocaleString('ru', options);
//     dateStr = dateStr.replace(' [2 г.]',''); // если нужно обрезать ' г.' на конце
//     console.log(dateStr);
// });

    



/* var elems = document.querySelectorAll('form,div,p');

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", highlightThis, true);
}

function highlightThis() {
  this.style.backgroundColor = 'yellow';
  alert(this.tagName);
  this.style.backgroundColor = '';
} */

// function checkDate() {
//     let dateInput = document.querySelector(".date-container__input");
//     dateInput.value =  3.3;
//     console.log(dateInput.value);
// }

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

    // let field = document.querySelector(".field");
    // let arrowUp = document.querySelector(".up");
    // let arrowDown = document.querySelector(".down");

    // for (var i = 0; i < field.length; i++) {
        
    // }

    // for (var i = 0; i < arrowUp.length; i++) {
    //     arrowUp[i].addEventListener("click", setUpNumber, true);
    // }

    // for (var i = 0; i < arrowDown.length; i++) {
    //     arrowDown[i].addEventListener("click", valueDown, true);
    // }

    /* function highlightThis() {
        this.style.backgroundColor = 'yellow';
    } */

    /* field[0].textContent = 1;
    field[1].textContent = 1;
    field[2].textContent = 1; */
    /* let value = field[0].textContent; */
    let minValue = 0;
    let maxValue = 10;

    // function setUpNumber(a) {
    //     arrowUp`${a}`.addEventListener('click', ()=> {
    //         fieldNumber.textContent ++;

    //         if(fieldNumber.textContent > 10) {
    //             fieldNumber.textContent = maxValue;
    //         }

    //         return fieldNumber.textContent;
    //     })
    // }

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

    // //----------------------------------------
    // function setUpAdults() {
    //     arrowUpAdults.addEventListener('click', ()=> {
    //         fieldAdults.textContent++;

    //         if(fieldAdults.textContent > 10) {
    //             fieldAdults.textContent = maxValue;
    //         }

    //         return fieldAdults.textContent;
    //     })
    // }
    
    // function setDownAdults() {
    //     arrowDownAdults.addEventListener('click', () => {
    //     /* console.log(field[i].textContent); */
    //         fieldAdults.textContent --;

    //         if(fieldAdults.textContent <= 0) {
    //             fieldAdults.textContent = minValue;
    //         }

    //         return fieldAdults.textContent;
    //     })
    // }

    // //------------------------

    // function setUpChildren() {
    //     arrowUpChildren.addEventListener('click', ()=> {
    //         fieldChildren.textContent++;

    //         if(fieldChildren.textContent > 10) {
    //             fieldChildren.textContent = maxValue;
    //         }

    //         return fieldChildren.textContent;
    //     })
    // }
    
    // function setDownChildren() {
    //     arrowDownChildren.addEventListener('click', () => {
    //     /* console.log(field[i].textContent); */
    //         fieldChildren.textContent --;

    //         if(fieldChildren.textContent <= 0) {
    //             fieldChildren.textContent = minValue;
    //         }

    //         return fieldChildren.textContent;
    //     })
    // }
    

//   arrowUpNumber.addEventListener('click', ()=> {
//         fieldNumber.textContent ++;

//         if(fieldNumber.textContent > 10) {
//             fieldNumber.textContent = maxValue;
//         }
//         return fieldNumber.textContent;
//     })

//     arrowDownNumber.addEventListener('click', () => {
//         /* console.log(field[i].textContent); */
//         fieldNumber.textContent --;

//         if(fieldNumber.textContent <= 0) {
//             fieldNumber.textContent = minValue;
//         }
//         return fieldNumber.textContent;
//     })

    // console.log(fieldNumber.textContent);
    setUpNumber(arrowUpNumber, fieldNumber);
    setDownNumber(arrowDownNumber, fieldNumber);
    setUpNumber(arrowUpAdults, fieldAdults);
    setDownNumber(arrowDownAdults, fieldAdults);
    setUpNumber(arrowUpChildren, fieldChildren);
    setDownNumber(arrowDownChildren, fieldChildren);

    }
  
changeNumbers();
