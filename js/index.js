const accBtn = document.querySelector('#access-btn');
const form = document.querySelector('form');
const pin = document.querySelector('#pin');
const pinBtn = document.querySelector('#pin-btn');
const tryAgain = document.querySelector('.try');
var wrCnt = 0;

function granted(){
    form.style.display = "none";
    document.querySelector('.granted').style.display = 'flex';
    window.location = "/htmls/home.html";
}

function notGranted(){
    form.style.display = "none";
    tryAgain.style.display = "none";
    document.querySelector('.not-granted').style.display = 'block';        
}

accBtn.addEventListener('click', () =>{
    accBtn.style.display = "none";
    form.style.display = "flex";
})


pinBtn.addEventListener('click', () =>{
    if(pin.value == 7889){
        granted();
    }
    else{
        wrCnt++;
        if(wrCnt==3){
            notGranted();
        }
        else{
            tryAgain.style.display = "block";
            tryAgain.innerHTML = "Attempts Remaining : " + (3 - wrCnt);
        }
    }
})