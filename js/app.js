// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

let alertBox = document.querySelector('#details');
alertBox.addEventListener('click', showAlert);

function showAlert() {
    alert('Not Available in Hawaii.');
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

let showHideBox = document.querySelector('#name1');
showHideBox.addEventListener('mouseover', showHide);

function showHide() {
    if (descrip1.style.display === 'none') {
        descrip1.style.display = 'block';
    } else {
        descrip1.style.display = 'none';
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

let divElem = document.createElement('div');
divElem.id = 'descrip2';
divElem.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";
name2.appendChild(divElem);

let showHideBox2 = document.querySelector('#name2');
showHideBox2.addEventListener('click', showHide2);

function showHide2() {
    if (descrip2.style.display === 'none') {
        descrip2.style.display = 'block';
    } else {
        descrip2.style.display = 'none';
    }
}

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

let counter = document.getElementsByClassName('far fa-thumbs-up');
// console.log(counter);
for (let i = 0; i < counter.length; i++) {
    // console.log(counter[i]);
    // counter[i].innerHTML = '0';
    counter[i].addEventListener('click', countUp);
    let counterBox = document.createElement('div');
    counterBox.className = 'count1';
    counter[i].appendChild(counterBox);
}

function countUp() {
    let finalCount = this.querySelector('.count1');
    finalCount.innerHTML++;
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

let price = document.getElementById('increase');
price.addEventListener('click', increasePrice);

function increasePrice() {
    let jordanCounter = document.getElementById('price4');
    // console.log('price4', jordanCounter.childNodes)
    jordanCounter.childNodes[0].textContent++;
}

// TO ADD BY X AMOUNT, CHANGE STRING INTO A NUMBER USING PARSEFLOAT
// LET [VAR NAME] = PARSEFLOAT(JORDANCOUNTER.CHILDNODES[0].DATA + 1000)

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

let price2 = document.getElementById('decrease');
price2.addEventListener('click', decreasePrice);

function decreasePrice() {
    let jCounter = document.getElementById('price5');
    jCounter.childNodes[0].textContent--;
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

let jBlock = document.getElementsByClassName('block3');
// console.log(jColor);

let jImage = jBlock[1].querySelector('img');
// console.log(jImage);

jImage.addEventListener('mouseover', changeColor);

function changeColor() {
    if (jImage.style.filter === 'hue-rotate(0deg)'){
        jImage.style.filter = 'hue-rotate(70deg)';
    } else {
        jImage.style.filter = 'hue-rotate(0deg)';
    }
}

// ^ STILL NEED TO FIGURE OUT HOW TO CHANGE COLOR ONLY DURING HOVER

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

let xBlock = document.querySelectorAll('.block1');
// console.log(xBlock);

let xImage = xBlock[2].querySelector('img');
// console.log(xImage);

xImage.addEventListener('click', enlargePic);

function enlargePic(){
xImage.style.width = this.width + this.height * 0.5 + 'px';
xImage.style.height = this.height + this.width * 0.5 + 'px'; 
}

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

let addBox = document.querySelector('#oneUp');
addBox.addEventListener('click', addDolla);

function addDolla(){
    let upCounter = document.getElementById('price8');
    upCounter.childNodes[0].textContent++;
}

let minusBox = document.querySelector('#oneDown');
minusBox.addEventListener('click', minusDolla);

function minusDolla(){
    let downCounter = document.getElementById('price8');
    downCounter.childNodes[0].textContent--;
}

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.

let showMichael = document.querySelectorAll('.block3');
// console.log(showMichael);

let showMImage = showMichael[2].querySelector('img');
// console.log(showMImage);

showMImage.addEventListener('click', MikeMeme);

function MikeMeme(){
    if (Img.src === 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-28-photo-blue-white-black-011977_1.jpg')
}