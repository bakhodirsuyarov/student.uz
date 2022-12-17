const btn = document.querySelector(".register__btn");
const Name = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confrm = document.querySelector(".confirm");

const message = document.querySelector(".span-message");
let data = [];

// Click btn


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (Name.value && password.value && confrm.value){
        if(password.value == confrm.value){
            data.push(Name.value, password.value);
            localStorage.setItem("userdata", JSON.stringify(data));
            window.location.href ="./main.html";
        }else{
            message.innerHTML=`
            <span>Parollar mos emas 🤔</span>
            `
            setInterval(()=>{
                message.innerHTML = `
                <span> </span>
                `
            },4300)
        }
    }else {
        message.innerHTML=`
        <span>Iltimos Malmotlarni tuliq tuldiring 🤔</span>
        `
        setInterval(()=>{
            message.innerHTML = `
            <span> </span>
            `
        },4300)

    }
})