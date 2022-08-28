    var randomNumeber_1=Math.floor(Math.random()*6)+1;
    var s="images/dice"+randomNumeber_1+".png";
    document.querySelector("img").setAttribute("src",s);
    var randomNumeber_2=Math.floor(Math.random()*6)+1;
    var s1="images/dice"+randomNumeber_2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",s1);
    if(randomNumeber_1>randomNumeber_2){
        document.querySelector('h1').innerHTML="PLAYER 1 wins!";
    }
    else if(randomNumeber_1 === randomNumeber_2){
        document.querySelector('h1').innerHTML="Draw!";
    }
    else{
        document.querySelector('h1').innerHTML="PLAYER 2 wins!";
    }