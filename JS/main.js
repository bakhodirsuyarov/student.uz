
const logout = document.querySelector(".logout");
const deleted = document.querySelector(".deleted");
const mycards = document.querySelector(".cards");
const create = document.querySelector(".create");
const close = document.querySelector(".close");
const plu = document.querySelector(".All-pl")
// Logout
logout.addEventListener("click", () => {
    window.location.href = "./index.html";
});
  
// Account och

deleted.addEventListener("click", ()=>{
    localStorage.clear();
    window.location.href = "./index.html"
})


// close btn event
close.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".modal").style.display = "none";
});
  

// create btn event
plu.addEventListener("click", () => {
    document.querySelector(".modal").style.display = "flex";
  
    const name = document.querySelector(".modalName");
    const age = document.querySelector(".modalAge");
    const avatar = document.querySelector(".modalAvatar");
    const modalSubmit = document.querySelector(".submit");
    const message = document.querySelector(".span-message")
    let data = [];
    
    modalSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        
        if (name.value && age.value && avatar.value){
            data.push(name.value, age.value);
            localStorage.setItem("userdata2", JSON.stringify(data));

            let project = document.createElement("div");
            project.className= 'dvappen';

            project.innerHTML += `
            <h2>${"Name: "+ name.value}</h2>
            <h2>${"Age: "+age.value}</h2>
            <h2>${"Avatar: "+avatar.value}</h2>
            ` 
            plu.appendChild(project);
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
      
    });
  });

