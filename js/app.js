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
  const gender = event.target.gender.value
  const payment = event.target.payment.value
  const date = event.target.date.value

  paragraphResult.textContent = `First Name: ${firstName} Last Name: ${lastName}
  Country: ${country} Age: ${age} Gender: ${gender} Payment: ${payment} Date ${date};`
  const added = document.querySelector('#added');
  added.appendChild(paragraphResult);
  document.querySelector('#new-visitor-form');

}
const handleDelleteButtonClick = function(){
  const para = document.querySelector('#added');
  para.textContent = "";
}
