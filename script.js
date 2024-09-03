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

  const email = document.querySelector("#email").value;
  const textarea = document.querySelector("#message").value;

  Email.send({
    SecureToken: "c5f56292-4573-4566-b81a-5cc5371cc8fd", // Removed extra space
    To: email,
    From: "p.anant223@gmail.com",
    Subject: "Important",
    Body: textarea,
  })
    .then((message) => alert("Email sent successfully: " + message))
    .catch((error) => alert("Failed to send email: " + error));
}

const emailBtn = document.querySelector("#email-btn");
emailBtn.addEventListener("click", sendEmail);
