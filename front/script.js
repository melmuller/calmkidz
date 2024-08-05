async function getUser (data) {

    const response = await fetch('http://localhost:3003/api/login',{
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data)

    });

    const result = await response.json();

    if(result.success) {
        console.log(result.data);
        alert(result.message);
        window.location.href = "home.html"
    } else {
        alert(result.message);
    }
}



let button = document.getElementById("handleSubmit");

button.onclick = async function(event) {
  event.preventDefault();


  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;


  let data = {
    email,
    senha
  };

  getUser(data);

}


 var formSignin = document.querySelector('#signin')
 var formSignup = document.querySelector('#signup')
 var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
}) 