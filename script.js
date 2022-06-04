//Declaring constants
const $API_URL = "https://api.adviceslip.com/advice";
const $ADVICE_ID = document.querySelector(".id");
const $ADVICE_CONTENT = document.querySelector(".advice-text");
const $DICE_ROLL_GENERATOR = document.querySelector(".dice-roll");
const $LOADING_SCREEN = document.querySelector(".loading-buffer");

//Executing functions
$DICE_ROLL_GENERATOR.addEventListener("click", displayLoadScreen);
$DICE_ROLL_GENERATOR.addEventListener("click", retrieveAdvice);

//Function
function retrieveAdvice() {
    fetch($API_URL)
    .then(response => response.json())
    .then(data => {
        const $ID = data.slip.id
        const $ADVICE = data.slip.advice
        
        $ADVICE_ID.textContent = $ID
        $ADVICE_CONTENT.textContent = $ADVICE
    })
}

function displayLoadScreen() {
    $LOADING_SCREEN.style.display = "flex";

    setTimeout(() => {
        $LOADING_SCREEN.style.display = "none";
    }, 1000);
}
