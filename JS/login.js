const btn = document.querySelector(".login__btn");
const Name = document.querySelector(".login__username");
const password = document.querySelector(".login__password");
const message = document.querySelector(".span-message")

// btn
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const getUserData = JSON.parse(localStorage.getItem("userdata"));
    if (!getUserData) return alert("siz ro'yhatdan o'tmagansiz !");

    if (Name.value && password.value) {
  
      if (Name.value == getUserData[0] && password.value == getUserData[1]) {
        window.location.href = "./main.html";
      } else{
        message.innerHTML=`
        <span>Parol yoki username xato 🤔</span>
        `
        setInterval(()=>{
            message.innerHTML = `
            <span> </span>
            `
        },4300)

      };
  
    } else{
        message.innerHTML=`
        <span>Iltimos Malmotlarni tuliq tuldiring 🤔</span>
        `
        setInterval(()=>{
            message.innerHTML = `
            <span> </span>
            `
        },4300)

    };
});
  