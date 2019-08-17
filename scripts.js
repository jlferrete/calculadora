function getContentClick(event) {
  const value = event.target.innerHTML;
  filterAction(value);
}

const filterAction = value => {
  console.log("Estamos en filterAction");

  console.log(value);
};
