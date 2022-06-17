function sendEmail(){
    var nombre= document.getElementById("name").value
    var correo= document.getElementById("email").value
    var mensaje= document.getElementById("message").value

    Email.send({
        Host: "smtp.gmail.com",
        Username: "kruxicamusic@gmail.com",
        Password: "samanta12$",
        SecureToken: "Generate token here",
        From: "kruxicamusic@gmail.com",
        to: correo,
        Subject: nombre,
        Body: mensaje
    })
}