

// document.addEventListener("DOMContentLoaded", function() {
//     var img = document.createElement("img");
//     img.src = "./backgrounf.jpg";
//     document.body.appendChild(img);
// });


const Quotes = ['“Believe you can and you’re halfway there.” – Theodore Roosevelt',

'“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill',

'“We can’t help everyone, but everyone can help someone.” – Ronald Reagan',

'“The only way to do great work is to love what you do.” ',

'“It does not matter how slowly you go as long as you do not stop.” – Confucius',

'“The only true wisdom is in knowing you know nothing.” – Socrates',

'“The unexamined life is not worth living.” – Socrates',

'“If you want to go fast, go alone. If you want to go far, go together.” – African Proverb',


];


let changequote = document.getElementById('btn');
let quote_div = document.getElementsByClassName('quote-container');
let para = document.querySelector('p');

changequote.addEventListener("click", ()=>{

    para.innerHTML= Quotes[ Math.floor(Math.random() * Quotes.length)];

})
