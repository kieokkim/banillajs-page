//2.7 function #1
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

//2.8 function #2
function plus(a, b){
    console.log(a + b);
}
function divide(a, b){
    console.log(a / b);
}
plus(8, 60);
divide(8, 60);

function sayHello(){


}

const player1 = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("Hello! " + otherPersonsName + " nice to meet you")
    },
};

player.sayHello('lynn');
player.sayHello('nico');

//object에 대해서
const player2 = {
    name: "nico",
    age: 98,
};
console.log(player)
player.name = "nicolas"
console.log(player)
player.sexy = "soon"
console.log(player)

// 계산기 만들기
const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    power: function(a, b){
        console.log(a ** b);
    }
    
};

calculator.add(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.power(5, 2);

//계산기 2 만들기
const calculator2 = {
    add: function(a, b){
        alert(a + b);
    },
    minus: function(a, b){
        alert(a - b);
    },
    divide: function(a, b){
        alert(a / b);
    },
    power: function(a, b){
        alert(a ** b);
    }
    
};

calculator.add(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.power(5, 2);

//
const calculator3 = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    time: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    }
    
};


const plusResult = calculator2.add(2,4);
const minusResult = calculator2.minus(plusResult, 10);
const timeResult = calculator2.time(10, minusResult);
const divideResult = calculator2.divide(timeResult, plusResult);
const powerResult = calculator2.power(divideResult, minusResult);


//
const age = parseInt(prompt( "how old are you?"));

//age가 NaN인가?
if(isNaN(age) || age < 0){  
    console.log("Please write a positive number"); // 숫자가 아니거나, 음수일 경우
} else if(age < 18) {
    console.log("You are too young"); // 18 미만일 경우
} else if(age >= 18 && age <= 50) {
    console.log("You can drink");  // 18-50 사이 수 일 경우
} else if(age >= 51 && age <= 80) {
    console.log("You should exercise");  // 51-80 사이 수 일 경우
} else if (age === 100) {
    console.log("wow you are wise");  // 정확히 100일 경우 (순서가 중요)
} else if(age > 80){
    console.log("You can do whatever you want");   // 그 외의 수 일 경우
} 


// 이벤트 리스너
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick2(){
    h1.style.color = "Blue"  // 제목을 클릭하면 색이 블루로 변함!
}
function handleMouseEnter(){
    h1.innerText = "Mouse is Here!"
}
function handleMouseLeave(){
    h1.innerText = "Mouse is Gone!"
}
function handleTitleClick1(){
    console.log("title was clicked!")  // 제목을 클릭하면 로그에 문구가 뜸!
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS no wifi")
}
function handleWindowOnline(){
    alert("wifi connected!")
}
h1.addEventListener("click", handleTitleClick2);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)


const h11 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor = h11.style.color;
    let newColor;
    if(currentColor === "blue"){  //만약 현재 h1의 색이 블루라면
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h11.style.color = newColor;
}
function handleMouseEnter(){
    h11.innerText = "Mouse is Here!"
}
h11.addEventListener("click", handleTitleClick);

const h12 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h12.classList.toggle("active");
    // const clickedClass ="active";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else{
    //     h1.classList.add(clickedClass);
    // } toggle로 구현 가능한 코드
}

h12.addEventListener("click", handleTitleClick);