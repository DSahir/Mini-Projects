var p1btn = document.querySelector('.p1')
var p2btn = document.querySelector('.p2')
var reset = document.querySelector('.reset')
var D1 = document.querySelector("#disp1") 
var D2 = document.querySelector("#disp2") 
var num = document.querySelector("input")
var span = document.querySelector("p span")
var p1Score = 0
var p2Score = 0
var gameover = false
var winat = 5
// span.textContent="dn"
console.log(span.textContent)
p1btn.addEventListener("click", function(){
    if(!gameover){
        p1Score++;
        if(p1Score === winat){
            gameover=true
            D1.classList.add("winner")
        }
        console.log(p1Score)
        D1.textContent = p1Score
    }
})
p2btn.addEventListener("click", function(){
    if(!gameover){
        p2Score++;
        if(p2Score === winat){
            gameover=true
            D2.classList.add("winner")
        }
        console.log(p2Score)
        D2.textContent = p2Score
    }
})

reset.addEventListener("click", function(){
    resetnow()
})
function resetnow (){
    p1Score=0
    p2Score=0
    D1.textContent =D2.textContent =0
    D1.classList.remove("winner")
    D2.classList.remove("winner")
    gameover = false
}

num.addEventListener("change" , function(){
    span.textContent= num.value
    winat= Number(num.value)
    resetnow()
})
