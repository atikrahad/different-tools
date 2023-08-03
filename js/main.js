
/*======inches tp feet==========*/

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


/*=============Miles to kilomiters+==============*/


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


/* ==============factorial function=========*/


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



/*=============lepear cheker========*/

const leoearCheker = document.querySelector("#lepearForm");
const userYearEl = document.querySelector("#userYear");
const yearEl = document.querySelector("#year");
const leapearEl = document.querySelector("#cheker");



leoearCheker.addEventListener("submit", getLepear)


function getLepear(e){
    e.preventDefault()
        if(userYearEl.value%4===0){
            yearEl.innerHTML = userYearEl.value;
            leapearEl.innerHTML = "Lepear Year &#128525"
        }
        else{
            yearEl.innerHTML = userYearEl.value;
            leapearEl.innerHTML = "Non Lepear Year &#128546"

        }

}

