const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let timeClicked = 0;

const length = images.length;


for(let i = 0; i < length; i++)
{
    const div = document.createElement('div')
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";


//Reset the background of the white(active) button to transparent 
const resetBg = () =>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = "transparent"
    })
};


//Change the image to the corresponding  button
buttons.forEach((button,i)=>{
    button.addEventListener("click", ()=>{
        resetBg();
        slider.style.transform = `translateX(-${i * 800}px)`;
        timeClicked = i + 1;
        button.style.backgroundColor = "white";
    })
})

//initial Image
const firstSlide = () =>{
    slider.style.transform = `translateX(0px)`;
    timeClicked = 1;
}

//next Image for moving to the right
const getNextSlide = () =>{
    slider.style.transform = `translateX(-${timeClicked * 800}px)`;
    timeClicked++;
}


//first Image for moving to the left
const prevSlide  = () =>{
    slider.style.transform = `translateX(-${(timeClicked - 2) * 800}px)`;
    timeClicked--;
}

//next Image for moving to the left
const getLastSlide = () =>{
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    timeClicked = length;
}

//Change the button color while clicking left or right
const changeColor = () =>{
    resetBg();
    buttons[timeClicked-1].style.backgroundColor = "white";
}




right.addEventListener("click", ()=>{
    timeClicked < length ? getNextSlide() : firstSlide();
    changeColor();
})

left.addEventListener("click", ()=>{
    timeClicked > 1 ? prevSlide() : getLastSlide();
    changeColor();
})


