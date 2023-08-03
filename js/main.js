const incheTofeet = document.querySelector("#iTf");
const userInche = document.querySelector("#userInches");
const feetEl = document.querySelector("#feet");

incheTofeet.addEventListener("submit", getFeet)


function getFeet(e){
    e.preventDefault()
    
        let feetans = userInche.value / 12;
        feetEl.innerHTML = feetans;
    

}