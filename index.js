let nameSubmit = document.getElementById('nameSubmit');
let getName = document.getElementById('getName');
let nameSubmit2 = document.getElementById('nameSubmit2');
let getName2 = document.getElementById('getName2');



document.getElementById('playerName').innerHTML = "Player 'X' turn";
nameSubmit.addEventListener('click', () => {

    if(getName.value === "")
    document.getElementById('playerName').innerHTML = "Player 'X' turn";
    else{
        document.getElementById('playerName').innerHTML = getName.value + " your turn";
    }
})



let i=0;
let box1 = document.getElementById('box1');
box1.addEventListener('click', () => {
    i++;
 
        box1.value = playg();
       document.getElementById('box1').disabled = true;
        check();
})
let box2 = document.getElementById('box2');
box2.addEventListener('click', () => {
    i++;
 
        box2.value = playg();
        document.getElementById('box2').disabled = true;
        check(); 
})
let box3 = document.getElementById('box3');
box3.addEventListener('click', () => {
    i++;
 
        box3.value = playg();
        document.getElementById('box3').disabled = true;
        check();
})
let box4 = document.getElementById('box4');
box4.addEventListener('click', () => {
    i++;
        box4.value = playg();
        document.getElementById('box4').disabled = true;
        check();
})
let box5 = document.getElementById('box5');
box5.addEventListener('click', () => {
    i++;
        box5.value = playg();
        document.getElementById('box5').disabled = true;
      check();
})
let box6 = document.getElementById('box6');
box6.addEventListener('click', () => {
    i++;
        box6.value = playg();
        document.getElementById('box6').disabled = true;
        check();  
})
let box7 = document.getElementById('box7');
box7.addEventListener('click', () => {
    i++;
        box7.value = playg();
        document.getElementById('box7').disabled = true;
        check(); 
})
let box8 = document.getElementById('box8');
box8.addEventListener('click', () => {
    i++;
        box8.value = playg();
        document.getElementById('box8').disabled = true;
        check(); 
})
let box9 = document.getElementById('box9');
box9.addEventListener('click', () => {
    i++;
        box9.value = playg();
        document.getElementById('box9').disabled = true;


        check();
})

function playg(){

        if(i===2 || i===4 || i===6|| i===8 ){
            if(getName.value === "")
            document.getElementById('playerName').innerHTML = "Player 'X' turn";
            else{
                document.getElementById('playerName').innerHTML = getName.value + " your turn";
            }
            return '0';
        }
        else if(i===1 || i===3|| i===5|| i===7|| i===9){
            if(getName2.value === "")
            document.getElementById('playerName').innerHTML = "Player '0' turn";
            else{
                document.getElementById('playerName').innerHTML = getName2.value + " your turn";
            }
            return 'x';
        
    }
}
let clear = document.getElementById('clear');
clear.addEventListener('click', ()=> {
    box1.value = '';
    document.getElementById('box1').disabled = false;
    box2.value = '';
    document.getElementById('box2').disabled = false;
    box3.value = '';
    document.getElementById('box3').disabled = false;
    box4.value = '';
    document.getElementById('box4').disabled = false;
    box5.value = '';
    document.getElementById('box5').disabled = false;
    box6.value = '';
    document.getElementById('box6').disabled = false;
    box7.value = '';
    document.getElementById('box7').disabled = false;
    box8.value = '';
    document.getElementById('box8').disabled = false;
    box9.value = '';
    document.getElementById('box9').disabled = false;
    i=0;
    document.getElementById('win').textContent = "";
    if(getName.value === "")
    document.getElementById('playerName').innerHTML = "Player 'X' turn";
    else{
        document.getElementById('playerName').innerHTML = getName.value + " your turn";
    }

})
function check(){
    if(box1.value==='x' && box2.value==='x' && box3.value==='x'){
        document.getElementById('win').textContent = "Player 1 won the match";
   
    }
    else if(box1.value==='0' && box2.value==='0' && box3.value==='0'){
        document.getElementById('win').textContent = "Player 2 won the match";
    }
    else if(box4.value==='x' && box5.value==='x' && box6.value==='x'){
        document.getElementById('win').textContent = "Player 1 won the match";
    }
    else if(box4.value==='0' && box5.value==='0' && box6.value==='0'){
        document.getElementById('win').textContent = "Player 2 won the match";
    }
    else if(box7.value==='x' && box8.value==='x' && box9.value==='x'){
        document.getElementById('win').textContent = "Player 1 won the match";
    }
    else if(box7.value==='0' && box8.value==='0' && box9.value==='0'){
        document.getElementById('win').textContent = "Player 2 won the match";
    }

    else if(box1.value==='x' && box4.value==='x' && box7.value==='x'){
        document.getElementById('win').textContent = "Player 1 won the match";
    }
    else if(box1.value==='0' && box4.value==='0' && box7.value==='0'){
        document.getElementById('win').textContent = "Player 2 won the match";
    }
    else if(box2.value==='x' && box5.value==='x' && box8.value==='x'){
        document.getElementById('win').textContent = "Player 1 won the match";
    }
    else if(box2.value==='0' && box5.value==='0' && box8.value==='0'){
        document.getElementById('win').textContent = "Player 2 won the match";
    }
    else if(box3.value==='x' && box6.value==='x' && box9.value==='x'){
        document.getElementById('win').textContent = "Player 1 won the match";
    }
    else if(box3.value==='0' && box6.value==='0' && box9.value==='0'){
        document.getElementById('win').textContent = "Player 2 won the match";
    }

    else if(box1.value==='x' && box5.value==='x' && box9.value==='x'){
        document.getElementById('win').textContent = "Player 1 won the match";
    }
    else if(box1.value==='0' && box5.value==='0' && box9.value==='0'){
        document.getElementById('win').textContent = "Player 2 won the match";
    }

    else if(box3.value==='x' && box5.value==='x' && box7.value==='x'){
        document.getElementById('win').textContent = "Player 1 won the match";
    }
    else if(box3.value==='0' && box5.value==='0' && box7.value==='0'){
        document.getElementById('win').textContent = "Player 2 won the match";
    }
    else if(i===9){
        document.getElementById('win').textContent = "Match Draw";
    }
}

