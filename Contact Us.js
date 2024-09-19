let loginButton = document.getElementById('login')

loginButton.addEventListener('click', () =>{
    let fullname = document.getElementById('full-name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value

    // if(fullname == '' || email == '' || phone == '' || message == ''){
    //     alert('Please input all or the rest of the form!')
    //     return
    // }

    if(fullname == ''){
        alert('Please insert your name!')
        return
    }

    if(fullname.length < 5){
        alert('Please input Full Name atleast 5 characters!')
        return
    }

    if(email == ''){
        alert('Please insert your email!')
        return
    }

    let x = -23
        for(let i = 0; i < email.length; i++){
            if(email[i] == '@') x = i
        }
    
        if(x == -23){
            alert('Email Invalid!')
            return
        }
    
        let y = email.length
        let ends= email.substring(x, y)
        if(ends !== '@gmail.com'){
            alert('Please use @gmail.com')
            return
        }
    
    
    if(phone == ''){
        alert('Please insert your phone number!')
        return
    }
    
    if(phone.length !== 12){
        alert('Please input number phone atleast 12 characters!')
        return
    }

    if(message == ''){
        alert('Please insert your message!')
        return
    }

    if(message.length < 5){
        alert('Please input message atleast 5 characters!')
        return
    }

    alert('Your message has been sent. Thank you for the response you have given')
})