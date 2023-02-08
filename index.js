function makeSound(variable){

    document.querySelector("."+variable).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+variable).classList.remove("pressed");   
    },100);

    switch (variable){
        case "w":
            const audio1=new Audio("sounds/tom-1.mp3");
            audio1.play();
        break;
        case "a":
            const audio2=new Audio("sounds/tom-2.mp3");
            audio2.play();
        break;
        case "s":
            const audio3=new Audio("sounds/tom-3.mp3");
            audio3.play();
        break;
        case "d":
            const audio4=new Audio("sounds/tom-4.mp3");
            audio4.play();
        break;  
        
        case "j":   
        const  audio5=new Audio("sounds/snare.mp3");
            audio5.play();
        break;
        
        case "k":   
        const   audio6=new Audio("sounds/crash.mp3");
            audio6.play();
        break;
        
        
        case "l":
            const audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
    }
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
});


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 const buttonInnerHTML=this.innerHTML;
 makeSound(buttonInnerHTML);
 });
}

