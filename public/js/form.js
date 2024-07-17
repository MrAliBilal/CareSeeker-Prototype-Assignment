// form loading animation

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})

window.onload = () => {
    if(sessionStorage.name){
        location.href = '/';
    }
}

// form validation

const firstname = document.querySelector('.firstname') || null;
const lastname = document.querySelector('.lastname');
const mobileno = document.querySelector('.mobileno');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const image = document.querySelector('.image');
const qualification = document.querySelector('.qualification');
const experience = document.querySelector('.experience');
const hourlyRate = document.querySelector('.hourlyRate');
const Bio = document.querySelector('.bio');
const submitBtn = document.querySelector('.submit-btn');

if(firstname == null){ // means login page is open
    submitBtn.addEventListener('click', () => {
        fetch('/login-user',{
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })
} else{ // means register page is open

    submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                firstname: firstname.value,
                lastname: lastname.value,
                mobileno: mobileno.value,
                email: email.value,
                password: password.value,
                image: image.value,
                qualification: qualification.value,
                experience: experience.value,
                hourlyRate: hourlyRate.value,
                bio: bio.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })

}

const validateData = (data) => {
    if(!data.name){
        alertBox(data);
    } else{
        sessionStorage.name = data.name;
        sessionStorage.email = data.email;
        location.href = '/';
    }
}

const alertBox = (data) => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.innerHTML = data;

    alertContainer.style.top = `5%`;
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
}