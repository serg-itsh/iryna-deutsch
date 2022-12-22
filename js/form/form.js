// window.onload=function(){
//   -- put your code here
// }




document.addEventListener('DOMContentLoaded', function () {

  const submit = document.getElementById('submit');

  submit.addEventListener('click', (e) =>{

    e.preventDefault();
  
    if (name.value == "" || email.value == "" || message.value == "") {
      alert('Будь ласка, заповніть усі поля');
      return false;
    } else {
      sendMail();
    }
  
  
  })

})





function sendMail() {

  // e.preventDefault();
 

  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = 'service_poor44p';
  const templateID = 'template_tzfimpw';

  emailjs
    .send(serviceID, templateID, params)
    .then(response => {

      // if (name.value == "" || email.value == "") {
      //        alert('Будь ласка, заповніть усі поля');
      //        return false;
      //      } else {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            console.log(response);
            alert('Ваше повідомлення успішно відправлено!');
           }

          //  return true ;


      
 
    // }
    )
    .catch(error => console.log(error));
}
