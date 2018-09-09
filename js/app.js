document.addEventListener('DOMContentLoaded', () => {
  const newVisitorForm = document.querySelector('#new-visitor-form');
  newVisitorForm.addEventListener('submit', handleNewVisitorFormSubmit);
  // console.log('JavaScript loaded');
  const button = document.querySelector('#delete');
  button.addEventListener('click', handleDelleteButtonClick);
})

const handleNewVisitorFormSubmit = function (event) {
  event.preventDefault();
  let paragraphResult = document.createElement('added');
  const firstName = event.target.first_name.value
  const lastName = event.target.last_name.value
  const country = event.target.country.value
  const age = event.target.age.value
  const transport = event.target.transport.value
  const gender = event.target.gender.value
  const payment = event.target.payment.value
  const date = event.target.date.value
  // const time = event.target.txt.value


  paragraphResult.textContent = `Name: ${firstName} ${lastName} |
  Country: ${country} | Age: ${age} | Transport: ${transport} | Gender: ${gender} | Payment: ${payment} | Date: ${date};`
  const added = document.querySelector('#added');
  added.appendChild(paragraphResult);
  document.querySelector('#new-visitor-form');

}
const handleDelleteButtonClick = function(){
  const para = document.querySelector('#added');
  para.textContent = "";
}
const startTime = function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//  $(function(){
//     $('#date').combodate();
// });
