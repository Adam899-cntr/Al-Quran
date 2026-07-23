document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform="scale(.96)";

setTimeout(()=>{
card.style.transform="scale(1)";
},150);

});

});