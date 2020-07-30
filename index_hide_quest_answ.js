//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here

var newDiv = document.createElement('div');
var a1Div = document.getElementById('a-1');
a1Div.append(newDiv);

newDiv.className = 'square';
newDiv.innerText = 'x';

newDiv.addEventListener('click', () =>  {
    if (newDiv.innerText === 'x') {
        newDiv.innerText = 'o';
    } else {
        newDiv.innerText = 'x';
    }
});


//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'

// declare the variables
const colors = ['red' , 'white', 'black' , 'green' , 'orange'];
const select = document.createElement('select');
const a2Div = document.getElementById('a-2');

// using for loop create dropdown list
for (i = 0; i < colors.length; i++) {
    let optionValue = document.createElement('option');
    optionValue.value = colors[i];
    optionValue.innerText = colors[i];
    select.appendChild(optionValue);
}

// append the new list as a child of the element with the 'id = a-2'
a2Div.appendChild(select);

// create Remove button
const removeButton = document.createElement('button');
removeButton.innerText = 'Remove';

// removing elements bi the index in the colors list
removeButton.addEventListener('click', () => {
    select.options[select.selectedIndex].remove();
})

// append the button as a child of the element with the 'id = a-2'
a2Div.appendChild(removeButton);


//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

// declare the variables that is going to use in function
const radiusField = document.getElementById('radius');
const volumeField = document.getElementById('volume');
const areaField = document.getElementById('area');

const calculate_sphere = () => {

    // input the radius value 
    let radius = radiusField.value;

    // calculate the volume and area value
    let volume = ((4/3) * Math.PI * (radius^3));
    let area = (4 * Math.pow(radius.value, 2));
    
    // providing the results of calculation 
    volumeField.value = volume;
    areaField.value = area;

    // debugging purpose
    console.log(volume);
    console.log(area);

    // prevent from default browser settings
    return false
 }

document.getElementById('MyForm').onsubmit = calculate_sphere;

// this execute the volume_sphere function each time the calculate (submit) button is clicked



//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the respective question above with their aswer and if they are hidden then the click option should be display the question with their respective aswer
// append the 3 buttons to the element with the 'id = a-4' as childrens

// create variables
const question1 = document.createElement("button");
const question2 = document.createElement("button");
const question3 = document.createElement("button");
const a4div = document.getElementById("a-4");

question1.innerText = "Hide question 1";
question2.innerText = "Hide question 2";
question3.innerText = "Hide question 3";

a4div.appendChild(question1);
a4div.appendChild(question2);
a4div.appendChild(question3);

// function that hide question and answer the question #1
question1.addEventListener("click", (event) => {
  let question1 = document.querySelector(".question-item:nth-child(1)");
  if (question1.style.display === "block" || !question1.style.display) {
    question1.style.display = "none";
  } else {
    question1.style.display = "block";
  }
});
// function that hide question and answer the question #2
question2.addEventListener("click", (event) => {
  let question2 = document.querySelector(".question-item:nth-child(2)");
  if (question2.style.display === "block" || !question2.style.display) {
    question2.style.display = "none";
  } else {
    question2.style.display = "block";
  }
});
// function that hide question and answer the question #3
question3.addEventListener("click", (event) => {
    let question3 = document.querySelector(".question-item:nth-child(3)");
    if (question3.style.display === "block" || !question3.style.display) {
        question3.style.display = "none";
    } else {
        question3.style.display = "block";
    }
});
