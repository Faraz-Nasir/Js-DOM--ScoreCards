const btn1=document.querySelector("#player1-btn")
const btn2=document.querySelector("#player2-btn")
const resetbtn=document.querySelector("#reset-btn")
const player1_score=document.querySelector("#player1")
const player2_score=document.querySelector("#player2")
const drop_down=document.querySelector("#score-max")
let max_score=0
function checkwin(player1_score,player2_score,max_score){
    if(player1_score===max_score){
        console.log("Player1 Wins")
        return 1
    }
    else if(player2_score===max_score){
        console.log("player2 wins")
        return 2
    }
}

function increment(max_score,btn_value){
    if(btn_value>=max_score){
        return false;
    }
    else{
        return true
    }
}
drop_down.addEventListener("change",function(){
    //used ("this") here because in a regular function
    //if arrow function then use event(e)
    max_score=this.value
    console.log(max_score)    
})
console.log(btn1.style.background)
btn1.addEventListener("click",function(){
    
    if(increment(max_score,player1_score.textContent)!=false)
    {
        player1_score.textContent++
    }
    if(checkwin(player1_score.textContent,player2_score.textContent,max_score)===1){
        console.log(1)
        btn1.disabled=true
        btn2.disabled=true
    }
})
btn2.addEventListener("click",()=>{
    
    if(increment(max_score,player2_score.textContent)!=false)
    {
        player2_score.textContent++
        
    }
    if(checkwin(player1_score.textContent,player2_score.textContent,max_score)===2){
        console.log(2)
        btn1.disabled=true
        btn2.disabled=true
    }
})


resetbtn.addEventListener("click",()=>{
    btn1.disabled=false
    btn2.disabled=false
    player1_score.textContent=0
    player2_score.textContent=0
    max_score=0
    drop_down.value="Select One"
})

