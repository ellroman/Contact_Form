/*console.log('it works')*/

$(document).ready(function () {
    $('.submit').click(function (event) {
        //console.log('clicked button')
        var name = $('.name').val()
        //var number = $('.number').val()
        var email = $('.email').val()
        var message = $('.message').val()
        var statusElement = $('.status')
        statusElement.empty()
        
        if(email.length >= 5 && email.includes('@') && email.includes('.')) {
            statusElement.append('<div>email is valid</div>')
        }else{
            event.preventDefault();
            statusElement.append('<div>email is not valid</div>')
        }
        
        if(name.length >= 2) {
            statusElement.append('<div>name is valid</div>')
        }else{
            event.preventDefault();
            statusElement.append('<div>name is not valid</div>')
        }

       /* if(number.length >= 10) {
            statusElement.append('<div>number is valid</div>')
        }else{
            event.preventDefault();
            statusElement.append('<div>number is not valid</div>')
        }
*/

        if(message.length >= 1) {
            statusElement.append('<div>message is valid</div>')
        }else{
            event.preventDefault();
            statusElement.append('<div>Please Type Your Size</div>')
        }

        // Email.send({
        //     SecureToken : "smtp",
        //     To: '@gmail',
        //     From: email,
        //     Subject: "New Contact Form",
        //     Body: "Name: " + document.getElementById("name").value 
        //      + "<br> Email: " + document.getElementById("email").value
        //     + "<br> Message: " + document.getElementById("message").value
        //     }).then(
        //         message => alert("Sent Successfully!")
        // );
    })  
})



/*  <div class="input-group">
<label for="number" class="number">
<i class="fa-solid fa-phone-plus"></i>
Phone Number
<input type="text" id="number" required>
</label>
</div>
*/