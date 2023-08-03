const incheTofeet = document.querySelector("#iTf");
const userInche = document.querySelector("#userInches");
const feetEl = document.querySelector("#feet");
const incheEl = document.querySelector("#inche");

incheTofeet.addEventListener("submit", getFeet)


function getFeet(e){
    e.preventDefault()
    
        let feetans = userInche.value / 12;
        incheEl.innerHTML = userInche.value;
        feetEl.innerHTML = feetans.toFixed(2);
    

}


const mileTokilo = document.querySelector("#mTk");
const userMileEl = document.querySelector("#userMile");
const kiloEl = document.querySelector("#kilo");
const mileEl = document.querySelector("#mile");

mileTokilo.addEventListener("submit", getKilo)


function getKilo(e){
    e.preventDefault()
    
        let kilomiters = userMileEl.value * 1.60934;
        mileEl.innerHTML = userMileEl.value;
        kiloEl.innerHTML = kilomiters.toFixed(2);
    

}
const factorEl = document.querySelector("#factor");
const userNumberEl = document.querySelector("#userNumber");
const factorialEl = document.querySelector("#factorial");
const factoriaEl = document.querySelector("#factoria");



factorEl.addEventListener("submit", getFactor)


function getFactor(e){
    e.preventDefault()
        let myFactor = 1;
        for(i=1 ; i<=userNumberEl.value; i++){
            myFactor = myFactor * i;
        }
        factoriaEl.innerHTML = userNumberEl.value;
    factorialEl.innerHTML=  `= ${myFactor}`;

}

