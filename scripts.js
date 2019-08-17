function getContentClick(event) {
  const value = event.target.innerHTML;
  filterAction(value);
}

const filterAction = value => {
  value === "0" ? addNumberInput(0) : null;
}

function addNumberInput(value) {

  console.log(value);
  const inputScreen = document.getElementsByClassName('calculator__screen')[0];

  inputScreen.value = value;
}
