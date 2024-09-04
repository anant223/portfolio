const header = document.querySelector(".site-header");
const scrollWatch = document.createElement("div");
const hireBtn = document.querySelector('.btn');
const contact = document.querySelector(".contact")
const closeBtn = document.querySelector(".close-btn")
const overaly = document.querySelector(".overlay");




scrollWatch.setAttribute("data-scroll-watch", '');
header.before(scrollWatch);

const newObserver = new IntersectionObserver((entries) =>{
   header.classList.toggle("sticking", !entries[0].isIntersecting)
}, {rootMargin: "0px 0px 0px 100px"})

newObserver.observe(scrollWatch)
function showModel(){
   contact.classList.remove("hidden"); 
   overaly.classList.remove("hidden");
}

function closeModel(){
   contact.classList.add('hidden');
   overaly.classList.add("hidden");
}

hireBtn.addEventListener('click', showModel); 
closeBtn.addEventListener("click", closeModel); 


function sendEmail(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const textarea = document.getElementById("message").value;
 console.log(email, textarea);
      
      
   Email.send({
     Host: "smtp.gmail.com",
     Username: "p.anant223@gmail.com",
     Password: "password",
     To: "p.anant223@gmail.com",
     From: email,
     Subject: "New Message",
     Body: textarea,
   })
     .then((message) => alert(message))
     .catch((error) => alert("Failed to send email: " + error));
}

const emailBtn = document.querySelector("#email-btn");
emailBtn.addEventListener("click", sendEmail);
