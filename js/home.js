let sec1 = document.querySelector('.sec1');
const items = [
   {Name: "Maggi", imgSrc: "https://newbox.in/wp-content/uploads/2021/07/Maggi-easy-peasy-recipe-noodles-70g.jpeg", quantity: "1 x 70g", price: "Rs. 10"},
   {Name: "Bingo Mad Angles", imgSrc: "https://m.media-amazon.com/images/I/81f9gLzqvJL._SL1500_.jpg", quantity: "1 x 72.5g", price: "Rs. 16"},
   {Name: "Haldiraam Aloo Bhujia", imgSrc: "https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/a/l/aloo_bhujia_1_2.jpg", quantity: "1 x 75g", price: "Rs. 30"},
   {Name: "Nestle Kitkat", imgSrc: "https://www.gortsa.com/cache/original/product/19491/YRqXrHtwfBbfYjyKJjoxqb4Auyq91ULmutyh8gKW.jpeg", quantity: "1 x 37.5g", price: "Rs. 20"},
   {Name: "Bru Instant Coffee", imgSrc: "https://cdn.grofers.com/app/images/products/full_screen/pro_13965.jpg?ts=1526443228", quantity: "1 x 50g", price: "Rs. 60"},
];


window.addEventListener('load', ()=> {
    for(ele of items){
        let div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <h3>${ele.Name}</h3>
            <div class="item-img"><img src="${ele.imgSrc}" alt="image"></div>
            <div class="item-details">
                <p class="quantity">${ele.quantity}</p>
                <p class="price">${ele.price}</p>
            </div>`
        sec1.appendChild(div);
    }
});


window.addEventListener('scroll' , () => {
    let header = document.querySelector('header');
    header.classList.toggle('scroll-active' , window.scrollY > 0);
});