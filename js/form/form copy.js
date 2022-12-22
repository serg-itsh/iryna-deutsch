
// let submit = document.querySelector('.btn');

// submit.addEventListener('click', e => {
//   e.preventDefault();

//   if (name.value === '' || email.value === '' || message.value === '') {
//     alert('Будь ласка, заповніть усі поля');
//   } else {
//     sendMail()
//   }
// });

// function sendMail() {
 

//   var params = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     message: document.getElementById('message').value,
//   };

//   const serviceID = 'service_poor44p';
//   const templateID = 'template_tzfimpw';

//   emailjs
//     .send(serviceID, templateID, params)
//     .then(response => {
//       document.getElementById('name').value = '';
//       document.getElementById('email').value = '';
//       document.getElementById('message').value = '';
//       console.log(response);
//       alert('Ваше повідомлення успішно відправлено!');
//     })
//     .catch(error => console.log(error));
// }









// function sendMail(){

//   // e.preventDefault();
//   let submit = document.getElementById("submit")

//   var params = {
//   name: document.getElementById("name").value,
//   email: document.getElementById("email").value,
//   message: document.getElementById("message").value
  
  
//   };

//   const serviceID = "service_poor44p";
//   const templateID = "template_tzfimpw";

//   submit.addEventListener("click", (e) => {
//     e.preventDefault();

//     if(name.value === "" || email.value === "" || message.value === ""){
//       alert("Будь ласка, заповніть усі поля");
//     }else{
//       emailjs.send(serviceID, templateID, params).then((response) => {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(response);
//         alert("Ваше повідомлення успішно відправлено!")
//       }).catch(error => console.log(error));
//     }

//   })

  
// }

// function sendMail(){

//   // e.preventDefault();

//   var params = {
//   name: document.getElementById("name").value,
//   email: document.getElementById("email").value,
//   message: document.getElementById("message").value,
  
//   };

//   const serviceID = "service_poor44p";
//   const templateID = "template_tzfimpw";

//   emailjs.send(serviceID, templateID, params).then((response) => {
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("message").value = "";
//     console.log(response);
//     alert("Ваше повідомлення успішно відправлено!")
//   }).catch(error => console.log(error));
// }