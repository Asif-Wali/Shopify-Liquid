var swiper = new Swiper(".heardSwiper", {
    
    slidesPerView: 1,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
   
   1024: {
     slidesPerView: 4,
     spaceBetween: 15,
   },

}
});

var swiper = new Swiper(".myTimelessSwiper", {
    slidesPerView: 1,
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
   
   1023: {
     slidesPerView: 3,
     spaceBetween: 20,
   },  
 }
});

var swiper = new Swiper(".ingredientsSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },

    breakpoints: {
    1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },

    },
    }
});

 var swiper = new Swiper(".BuySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
});


// Disclaimer section
{function toggleDisclaimer1() {
    let Disclaimer1content = document.getElementById("Disclaimer1content");

    if(Disclaimer1content.style.display === "none" || Disclaimer1content.style.display === ""){
      Disclaimer1content.style.display = "block";
      let button = document.getElementById("Disclaimer1Toggle");
      button.innerText="-" 
      document.getElementById("Disclaimer2content").style.display="none"
      document.getElementById("Disclaimer2Toggle").innerText="+"
      document.getElementById("Disclaimer3content").style.display="none"
      document.getElementById("Disclaimer3Toggle").innerText="+"
      document.getElementById("Disclaimer4content").style.display="none"
      document.getElementById("Disclaimer4Toggle").innerText="+"
      
    } else {
        Disclaimer1content.style.display = "none";
      let button = document.getElementById("Disclaimer1Toggle");
      button.innerText = "+";
     
    }
   
  }

let Disclaimer1ToggleButton=document.getElementById("Disclaimer1Toggle");
Disclaimer1ToggleButton.addEventListener("click", toggleDisclaimer1)

function toggleDisclaimer2() {
    let Disclaimer2content = document.getElementById("Disclaimer2content"); 
    if(Disclaimer2content.style.display === "none" || Disclaimer2content.style.display === ""){
      Disclaimer2content.style.display = "block";
      let button = document.getElementById("Disclaimer2Toggle");
      button.innerText="-" 
      
      document.getElementById("Disclaimer1content").style.display="none"
      document.getElementById("Disclaimer1Toggle").innerText="+"
      document.getElementById("Disclaimer3content").style.display="none"
      document.getElementById("Disclaimer3Toggle").innerText="+"
      document.getElementById("Disclaimer4content").style.display="none"
      document.getElementById("Disclaimer4Toggle").innerText="+"
      
    } else {
        Disclaimer2content.style.display = "none";
      let button = document.getElementById("Disclaimer2Toggle");
      button.innerText = "+";
     
    }
  }

let Disclaimer2ToggleButton=document.getElementById("Disclaimer2Toggle");
Disclaimer2ToggleButton.addEventListener("click", toggleDisclaimer2) 



function toggleDisclaimer3() {
    let Disclaimer3content = document.getElementById("Disclaimer3content");

    if(Disclaimer3content.style.display === "none" || Disclaimer3content.style.display === ""){
      Disclaimer3content.style.display = "block";
      let button = document.getElementById("Disclaimer3Toggle");
      button.innerText="-" 
      
      document.getElementById("Disclaimer1content").style.display="none"
      document.getElementById("Disclaimer1Toggle").innerText="+"
      document.getElementById("Disclaimer2content").style.display="none"
      document.getElementById("Disclaimer2Toggle").innerText="+"
      document.getElementById("Disclaimer4content").style.display="none"
      document.getElementById("Disclaimer4Toggle").innerText="+"
      
    } else {
        Disclaimer3content.style.display = "none";
      let button = document.getElementById("Disclaimer3Toggle");
      button.innerText = "+";
     
    }
  }

let Disclaimer3ToggleButton=document.getElementById("Disclaimer3Toggle");
Disclaimer3ToggleButton.addEventListener("click", toggleDisclaimer3);



function toggleDisclaimer4() {
    let Disclaimer4content = document.getElementById("Disclaimer4content");

    if(Disclaimer4content.style.display === "none" || Disclaimer4content.style.display === ""){
      Disclaimer4content.style.display = "block";
      let button = document.getElementById("Disclaimer4Toggle");
      button.innerText="-" 
      
      document.getElementById("Disclaimer1content").style.display="none"
      document.getElementById("Disclaimer1Toggle").innerText="+"
      document.getElementById("Disclaimer2content").style.display="none"
      document.getElementById("Disclaimer2Toggle").innerText="+"
      document.getElementById("Disclaimer3content").style.display="none"
      document.getElementById("Disclaimer3Toggle").innerText="+"
      
    } else {
        Disclaimer4content.style.display = "none";
      let button = document.getElementById("Disclaimer4Toggle");
      button.innerText = "+";
     
    }
  }

let Disclaimer4ToggleButton=document.getElementById("Disclaimer4Toggle");
Disclaimer4ToggleButton.addEventListener("click", toggleDisclaimer4);
}


// Ask Disclaimer section
{
    function toggleAskDisclaimer1() {
    let AskDisclaimer1content = document.getElementById("AskDisclaimer1content");

    if(AskDisclaimer1content.style.display === "none" || AskDisclaimer1content.style.display === ""){
      AskDisclaimer1content.style.display = "block";
      let button = document.getElementById("AskDisclaimer1Toggle");
      button.innerText="-" 
      document.getElementById("AskDisclaimer2content").style.display="none"
      document.getElementById("AskDisclaimer2Toggle").innerText="+"
      document.getElementById("AskDisclaimer3content").style.display="none"
      document.getElementById("AskDisclaimer3Toggle").innerText="+"
      document.getElementById("AskDisclaimer4content").style.display="none"
      document.getElementById("AskDisclaimer4Toggle").innerText="+"
      
    } else {
      AskDisclaimer1content.style.display = "none";
      let button = document.getElementById("AskDisclaimer1Toggle");
      button.innerText = "+";
     
    }
  }

let AskDisclaimer1ToggleButton=document.getElementById("AskDisclaimer1Toggle");
AskDisclaimer1ToggleButton.addEventListener("click", toggleAskDisclaimer1);


function toggleAskDisclaimer2() {
    let AskDisclaimer2content = document.getElementById("AskDisclaimer2content");

   if(AskDisclaimer2content.style.display === "none" || AskDisclaimer2content.style.display === ""){
      AskDisclaimer2content.style.display = "block";
      let button = document.getElementById("AskDisclaimer2Toggle");
      button.innerText="-" 
      document.getElementById("AskDisclaimer1content").style.display="none"
      document.getElementById("AskDisclaimer1Toggle").innerText="+"
      document.getElementById("AskDisclaimer3content").style.display="none"
      document.getElementById("AskDisclaimer3Toggle").innerText="+"
      document.getElementById("AskDisclaimer4content").style.display="none"
      document.getElementById("AskDisclaimer4Toggle").innerText="+"
      
    } else {
      AskDisclaimer2content.style.display = "none";
      let button = document.getElementById("AskDisclaimer2Toggle");
      button.innerText = "+";
     
    }
  }

let AskDisclaimer2ToggleButton=document.getElementById("AskDisclaimer2Toggle");
AskDisclaimer2ToggleButton.addEventListener("click", toggleAskDisclaimer2);

function toggleAskDisclaimer3() {
    let AskDisclaimer3content = document.getElementById("AskDisclaimer3content");

    if(AskDisclaimer3content.style.display === "none" || AskDisclaimer3content.style.display === ""){
      AskDisclaimer3content.style.display = "block";
      let button = document.getElementById("AskDisclaimer3Toggle");
      button.innerText="-" 
      document.getElementById("AskDisclaimer2content").style.display="none"
      document.getElementById("AskDisclaimer2Toggle").innerText="+"
      document.getElementById("AskDisclaimer1content").style.display="none"
      document.getElementById("AskDisclaimer1Toggle").innerText="+"
      document.getElementById("AskDisclaimer4content").style.display="none"
      document.getElementById("AskDisclaimer4Toggle").innerText="+"
      
    } else {
      AskDisclaimer3content.style.display = "none";
      let button = document.getElementById("AskDisclaimer3Toggle");
      button.innerText = "+";
     
    }
  }

let AskDisclaimer3ToggleButton=document.getElementById("AskDisclaimer3Toggle");
AskDisclaimer3ToggleButton.addEventListener("click", toggleAskDisclaimer3); 


function toggleAskDisclaimer4() {
    let AskDisclaimer4content = document.getElementById("AskDisclaimer4content");

    if(AskDisclaimer4content.style.display === "none" || AskDisclaimer4content.style.display === ""){
      AskDisclaimer4content.style.display = "block";
      let button = document.getElementById("AskDisclaimer4Toggle");
      button.innerText="-" 
      document.getElementById("AskDisclaimer2content").style.display="none"
      document.getElementById("AskDisclaimer2Toggle").innerText="+"
      document.getElementById("AskDisclaimer3content").style.display="none"
      document.getElementById("AskDisclaimer3Toggle").innerText="+"
      document.getElementById("AskDisclaimer1content").style.display="none"
      document.getElementById("AskDisclaimer1Toggle").innerText="+"
      
    } else {
      AskDisclaimer4content.style.display = "none";
      let button = document.getElementById("AskDisclaimer4Toggle");
      button.innerText = "+";
     
    }
  }

let AskDisclaimer4ToggleButton=document.getElementById("AskDisclaimer4Toggle");
AskDisclaimer4ToggleButton.addEventListener("click", toggleAskDisclaimer4);
}


var formatMoney = function(cents, format) {
  if (typeof cents == 'string') { cents = cents.replace('.',''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = (format || this.money_format);

  function defaultOption(opt, def) {
     return (typeof opt == 'undefined' ? def : opt);
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal   = defaultOption(decimal, '.');

    if (isNaN(number) || number == null) { return 0; }

    number = (number/100.0).toFixed(precision);

    var parts   = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents   = parts[1] ? (decimal + parts[1]) : '';

    return dollars + cents;
  }

  switch(formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
};
