const letDisplay = document.getElementById("display")
let clearDisplay;
let calculate;
let showToDisplay;

showToDisplay = (input) => {
    letDisplay.value += input;
};

clearDisplay = () => {
    letDisplay.value = " ";
};

calculate = () => {
    try {
        letDisplay.value = eval(letDisplay.value);
    } catch (error) {
      letDisplay.value = "Error!!"
    }
    
}

