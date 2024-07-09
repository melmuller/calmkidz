async function getUser () {

    const data = {email: 'email@email.com', password: '123'}

    const response = await fetch('http://localhost:3005/api/login',{
    method: "POST",
    headers: {"Content-Type": "aplication/js"},
    body: JSON.stringify(data)

    });

    const result = await response.json();

    if(result.success) {
        console.log(result.data);
        alert(result.message);
    } else {
        alert(result.message);
    }
}

let call = getUser();

// var formSignin = document.querySelector('#signin')
//var formSignup = document.querySelector('#signup')
//var btnColor = document.querySelector('.btnColor')

//document.querySelector('#btnSignin')
  //.addEventListener('click', () => {
    //formSignin.style.left = "25px"
    //formSignup.style.left = "450px"
    //btnColor.style.left = "0px"
//})

//document.querySelector('#btnSignup')
  //.addEventListener('click', () => {
   // formSignin.style.left = "-450px"
    //formSignup.style.left = "25px"
    //btnColor.style.left = "110px"
//}) 