//////////////////////////////////////////////////////////////*/
/ Extended Bmi calculator /;
//////////////////////////////////////////////////////////////*/

const inputHeight = document.getElementById("inputHeight");
const inputWeight = document.getElementById("inputWeight");
const bmiButton = document.getElementById("bmiButton");
const bmiResult = document.getElementById("bmiResult");

bmiButton.addEventListener("click", calculateBmi);

function calculateBmi() {
  let result = (
    inputWeight.value /
    (inputHeight.value * inputHeight.value)
  ).toFixed(2);
  if (result <= 18.5) {
    result = result + " BMI = " + "Underweight";
  } else if (result <= 25) {
    result = result + " BMI = " + "Normal";
  } else if (result <= 30) {
    result = result + " BMI = " + "Overweight";
  } else if (result <= 35) {
    result = result + " BMI = " + "Obese";
  } else if (result <= 40) {
    result = result + " BMI. My gawd you fat";
  } else if (result <= 45) {
    result = result + " BMI. Wtf you eating?";
  } else if (result <= 50) {
    result =
      result + " BMI. Are you ok? Maybe you should stop eating so much...";
  } else if (result <= 55) {
    result = result + " BMI. Dude! STOP EATING!";
  } else if (result <= 60) {
    result =
      result +
      " BMI. OMG! You are the size of two people. How many seatspaces do you have to pay for?";
  } else if (result <= 65) {
    result =
      result +
      " BMI. This is getting ridiculous! How many cheeseburger are you eating in a single sitting?";
  } else if (result <= 70) {
    result = result + "...Are you for real?";
  } else if (result <= 80) {
    result = result + " BMI. You are the reason people are starving in Africa";
  } else if (result > 80) {
    result =
      result +
      " BMI. You are the incarnation of Famine, horseman of the apocolyse...because you ate all the food and left nothing for the rest of the world";
  }

  bmiResult.textContent = result;
}
