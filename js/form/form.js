function sendMail(){

  // e.preventDefault();

  var params = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  message: document.getElementById("message").value,
  
  };

  const serviceID = "service_poor44p";
  const templateID = "template_tzfimpw";

  emailjs.send(serviceID, templateID, params).then((response) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(response);
    alert("Ваше повідомлення успішно відправлено!")
  }).catch(error => console.log(error));
}