const incheTofeet = document.querySelector("#iTf");
const userInche = document.querySelector("#userInches");
const feetEl = document.querySelector("#feet");

incheTofeet.addEventListener("submit", getFeet)


function getFeet(e){
    e.preventDefault()
    
        let feetans = userInche.value / 12;
        feetEl.innerHTML = feetans.toFixed(2);
    

}


const mileTokilo = document.querySelector("#mTk");
const userMileEl = document.querySelector("#userMile");
const kiloEl = document.querySelector("#kilo");

mileTokilo.addEventListener("submit", getKilo)


function getKilo(e){
    e.preventDefault()
    
        let kilomiters = userMileEl.value * 1.60934;
        kiloEl.innerHTML = kilomiters.toFixed(2);
    

}