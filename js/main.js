
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




/*=============Square Creator========*/



const squareFormEl = document.querySelector("#squereForm");
const usernumberEl = document.querySelector("#useranyNumber");
const putEl = document.querySelector("#userput");
const ansSquareEl = document.querySelector("#ansSquare");



squareFormEl.addEventListener("submit", getSquare)


function getSquare(e){
    e.preventDefault()
        let square = usernumberEl.value * usernumberEl.value;
        putEl.innerHTML = usernumberEl.value;
        ansSquareEl.innerHTML = square;

}



/*=============Root Creator========*/



const rootFormEl = document.querySelector("#rootForm");
const userRootnumberEl = document.querySelector("#usersquareNumber");
const putREl = document.querySelector("#userSput");
const ansRootEl = document.querySelector("#ansRoot");



rootFormEl.addEventListener("submit", getRoot)


function getRoot(e){
    e.preventDefault()
        let root = Math.sqrt(userRootnumberEl.value);
        putREl.innerHTML = userRootnumberEl.value;
        ansRootEl.innerHTML = root;
}




const hourEL = document.querySelector("#h");
const minuteEL = document.querySelector("#m");
const secondEL = document.querySelector("#s");


function getTime(){
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    hourEL.innerHTML = h;
    minuteEL.innerHTML = m;
    secondEL.innerHTML = s;
    setTimeout(()=>{
        getTime();
    },1000)
}
getTime();



const form = document.querySelector("#triangal");
const userInput = document.querySelector("#triNumber");
const an = document.querySelector("#usertri");
const ans = document.querySelector("#anstri");


form.addEventListener('submit', getTri);

function getTri(e){
    e.preventDefault();
    let us = userInput.value
    let getresult = (us * (us+1)) / 2;
    an.innerHTML = us;
    ans.innerHTML = getresult;
}
getTri()