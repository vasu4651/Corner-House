let sec1 = document.querySelector('.sec1');
const items = [
   {Name: "Maggi", imgSrc: "https://newbox.in/wp-content/uploads/2021/07/Maggi-easy-peasy-recipe-noodles-70g.jpeg", quantity: "1 x 70g", price: "Rs. 10"},
   {Name: "Bingo Mad Angles", imgSrc: "https://m.media-amazon.com/images/I/81f9gLzqvJL._SL1500_.jpg", quantity: "1 x 72.5g", price: "Rs. 16"},
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