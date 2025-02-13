document.addEventListener("DOMContentLoaded", function(){

    const button2 = document.getElementById("no");


    button2.addEventListener("click", function () {

        let margin = 50;
        let maxX = window.innerWidth - button2.offsetWidth - margin;
        let maxY = window.innerHeight - button2.offsetHeight - margin;
        let minX = margin;
        let minY = margin;

        button2.style.position = "absolute";
        button2.style.top = Math.random() * (maxY - minY) + minY + "px";
        button2.style.left = Math.random() * (maxX - minX) + minX + "px";

    });

    document.getElementById('yes').addEventListener('click', function() {
        document.querySelector('.typewriter').style.display = 'none';
        document.querySelector('.btn').style.display = 'none';
        document.querySelector('.yay h1').style.display = 'block';
        document.getElementById('gif').style.display = 'block';
        document.querySelector('.yay .btn2').style.display = 'block';



    });

    let noPressCount = 0;

    document.getElementById('no2').addEventListener('click', function() {
        document.getElementById('gif').src = 'main/sad-wher.gif';  // Change to a second GIF
        document.getElementById('sad').style.display = 'block';  // Show more text
       
        noPressCount++; 
        const yesButton = document.getElementById('yes2');
        const additionalText = document.getElementById('sad');


        let newFontSize = 15 + noPressCount * 5;  // Increase font size by 5px for each "No"
        let newPadding = 10 + noPressCount * 10;  // Increase padding for each "No"
        let newWidth = Math.min(50 + noPressCount * 10, 50);  // Increase width up to 100%
        let newHeight = Math.min(50 + noPressCount * 10, 20);  // Increase height up to 100%
    

        if (noPressCount > 1) {
            yesButton.style.fontSize = `${newFontSize}px`;
            yesButton.style.padding = `${newPadding}px ${newPadding * 2}px`; // Increase both sides
            yesButton.style.width = `${newWidth}vw`;  // Width as a percentage of the viewport
            yesButton.style.height = `${newHeight}vh`;  // Height as a percentage of the viewport      
            
            if (noPressCount === 1) {
                additionalText.textContent = "You're not giving up, are you?"; // Change text after first "No"
            } else if (noPressCount === 3) {
                additionalText.textContent = "It seems like you really want me to grow, huh?"; // Change text after third "No"
            } else if (noPressCount === 5) {
                additionalText.textContent = "This is getting fun!"; // Change text after fifth "No"
            }
        }        
    });
    
    document.getElementById('yes2').addEventListener('click', function() {

        const yaaaay = document.querySelector('.yay h1');

        document.getElementById('gif').src = 'main/dancing.gif';

        document.body.style.backgroundImage = "url('main/confetti.gif')";        
        document.getElementById('sad').style.display = 'none';  // Show more text
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";


        document.querySelector(".yay .btn2").style.display = "none";
        yaaaay.textContent = "YAAAAAY I LOVE YOU<3<3<3";



    });


});

