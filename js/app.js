document.addEventListener('DOMContentLoaded', () => {
  const newVisitorForm = document.querySelector('#new-visitor-form');
  newVisitorForm.addEventListener('submit', handleNewVisitorFormSubmit);
  // console.log('JavaScript loaded');
  const button = document.querySelector('#dellete');
  button.addEventListener('click', handleDelleteButtonClick);
})

const handleNewVisitorFormSubmit = function (event) {
  event.preventDefault();
  let paragraphResult = document.createElement('added');
  const firstName = event.target.first_name.value
  const lastName = event.target.last_name.value
  const country = event.target.country.value
  const age = event.target.age.value

  paragraphResult.textContent = `First Name: ${firstName} Last Name: ${lastName}
  Country: ${country} Age: ${age}`;
  const added = document.querySelector('#added');
  added.appendChild(paragraphResult);
  document.querySelector('#new-visitor-form');

}
const handleDelleteButtonClick = function(){
  const para = document.querySelector('#added');
  para.textContent = "";
}
