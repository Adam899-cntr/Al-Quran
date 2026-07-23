document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.animate([
{transform:"scale(1)"},
{transform:"scale(.96)"},
{transform:"scale(1)"}
],{
duration:180
});

});

});
