//FUNCTIONS FOR ATR AND APND  
function set(elements, attributes) {
    for (let i = 0; i < elements.length; i++) 
        for (let j = 0; j < attributes.length; j += 2) 
            elements[i].setAttribute(attributes[j], attributes[j + 1]);
}
function append(element, childern) {
    for (let child of childern)
        element.appendChild(child);
}
//SCROLL ANIMATION
let sectionsOnScroll = document.querySelectorAll("body > main > section:not(#first, #second)");
let sectionsOnSLoad = document.querySelectorAll("#first, #second");

window.addEventListener("load", () => {fadeIn(sectionsOnSLoad)}); 
window.addEventListener("scroll", () => {fadeIn(sectionsOnScroll)}); 

function fadeIn(sections) {
    for (let i = 0; i < sections.length; i++) {
        var view = sections[i].getBoundingClientRect().top - window.innerHeight + 20;
        if (view < 0) 
            sections[i].classList.add("in-view");
        else 
            sections[i].classList.remove("in-view");
    }
}
//MENU
navigationMenu();

function navigationMenu() {

    const pages=["Home","Programs","About","Pricing","Testimonial","Contact"];
    const links=["index.html","#Programs","#About","#Pricing","#Testimonial","#Contact"];

    var navBar=document.querySelector(".navbar ul");//4.korak

    for(let i=0;i<pages.length;i++)
    {
        var li=document.createElement("li");
        li.setAttribute("class","nav-item")

        var a=document.createElement("a");
        set([a], ["href", links[i], "class", "nav-link"]);

        var aContent=document.createTextNode(pages[i]);

        a.appendChild(aContent);
        li.appendChild(a);
        navBar.appendChild(li);
    }
    const navId=document.querySelector("#nav-row");
    let hamburgerDiv = 
                    `<div class="hamburger">`;
                        for (let i = 0; i < 3; i++) 
                        {
                            hamburgerDiv += `<span class="bar"></span>`;
                        }
                        hamburgerDiv += "</div>";
    navId.innerHTML+=hamburgerDiv;
    const hamburger=document.querySelector(".hamburger")
    const menuList=document.querySelector("#nav-menu")

    hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
}))

}
//HERO SECTION
const slideContent =
[ 
    {
        title: "PUSH YOURSELF BECAUSE NO ONE ELSE IS GOING TO DO IT FOR YOU AND ONLY YOU.SKY IS THE LIMIT.",
        sentences : "Impossible just a word!"
    }, 
    {
        title : "FITNESS IS NOT ABOUT BEING BETTER THAN SOMEONE ELSE IT'S ABOUT BEING BETTER THAN YOU.",
        sentences : "What are you waiting for?"
    }, 
    {
        title: "STRENGTH DOES NOT COME FROM PHYSICAL CAPACITY. IT COMES FROM AN INDOMITABLE WILL.",
        sentences : "Believe you can and you will!"
    }
];
var banner=document.querySelector(".slide-show");

for(let i=0;i<slideContent.length;i++){

    var bannerDiv=document.createElement("div");
    bannerDiv.setAttribute("class", "slider fade");
    //header
    var quotesTitle=document.createElement("h1"); 
    var quotesContent=document.createTextNode(slideContent[i].title);
    quotesTitle.appendChild(quotesContent);
    bannerDiv.appendChild(quotesTitle);
    //paragraph
    var sentencesParagraph=document.createElement("p");
    var sentencesContent=document.createTextNode(slideContent[i].sentences);
    //button
    var button=document.createElement("button");
    button.setAttribute("class","button");
    button.innerHTML='<a href="#Contact">Book a Class</a>';
    
    sentencesParagraph.appendChild(sentencesContent);
    append(bannerDiv, [sentencesParagraph, button]);
    banner.appendChild(bannerDiv);
}
    let dots = 
        `<div id="dots">`;
             for (let i = 0; i < 3; i++) 
            {
                 dots += `<span class="dot"></span>`;
            }
    dots += "</div>";
banner.innerHTML+=dots;

//HERO SECTION SLIDER
var slideIndex=0;
showSlides();

function showSlides(){
    var i;
    var slides=document.getElementsByClassName("slider");
    var dots=document.getElementsByClassName("dot");

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length) {slideIndex=1};
    for(i=0;i<dots.length;i++)
    {
        dots[i].className=dots[i].className.replace("activeSlider","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " activeSlider";
    setTimeout(showSlides,3000)
}

//PROGRAMS SECTION
let programs = [
    {
        img:"cardio",
        title:"Cardio",
        text:"Cardio is defined as any type of exercise that gets your heart rate up and keeps it up for a prolonged period of time. Your respiratory system will start working harder as you begin to breathe faster and more deeply.The physical and mental benefits of this type of exercise are seemingly endless."
    },
    {
        img:"weightlift",
        title:"Weightlift",
        text:"Weight training is a type of strength training that uses weights for resistance. Weight training provides a stress to the muscles that causes them to adapt and get stronger, similar to the way aerobic conditioning strengthens your heart.Weightlifting is olympic sport since 1996"
    }, 
    {
        img:"bodybuilding",
        title:"Bodybuilding",
        text:"Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles (muscle building)by muscle hypertrophy for aesthetic purposes.It is distinct from similar activities such as powerlifting because it focuses on physical appearance instead of strength."
    }, 
    {
        img:"boxing",
        title:"Boxing",
        text:"Boxing is a combat sport that involves fighting with fists. Traditionally, boxing has also been referred to as pugilism, which literally means,fist fight Fights take place in an area called a ring, and consist of timed rounds. Winners are decided by points or by knocking out an opponent."
    }
];
var content = "";
for (let i = 0; i < programs.length; i++) {
    content += 
    `<div class = "col-lg-3 col-md-6 col-sm-12 about bg-transparent">
        <img src = "assets/img/${programs[i].img}.png" alt = "${programs[i].img}" />
        <h2>${programs[i].title}</h2>
        <p>${programs[i].text}</p>
    </div>`;
}

(document.querySelector("#programs")).innerHTML = content;

//SOCIAL SECTION 
let socialContent=[
    {
        img:"weightlifter",
        titleSocial:"Active members",
        textSocial:"We are very happy to growth with you",
        value:"1230"
    },
    {
        img:"heartrate",
        titleSocial:"Work days",
        textSocial:"We are here for you every day in a year",
        value:"365"
    },
    {
        img:"dumbbell",
        titleSocial:"Our Locations",
        textSocial:"Our gym works all around the world",
        value:"540"
    }
]
var social = "";
for (let i = 0; i < socialContent.length; i++) {
    social += 
    `<div class="col-lg-4 col-md-12 proof">
        <img src="assets/img/${socialContent[i].img}.png" alt="${socialContent[i].img}"/>
        <p><span class="number" value = "${socialContent[i].value}"></span></p>
        <h4>${socialContent[i].titleSocial}</h4>
        <p>${socialContent[i].textSocial}</p>
    </div>`;
}

(document.querySelector("#social")).innerHTML = social;


socialProofCounter();

function socialProofCounter() {
    let numbers = document.querySelectorAll(".number");
    numbers.forEach(number => {
        let animate = () => {
            let value = number.getAttribute("value");
            let data = + number.textContent;
            if (data < value) {
                number.textContent = Math.ceil(data + value / 100);
                setTimeout(animate, 60);
            }
            else 
                number.textContent = value;
        } 
        animate();
    });
}
//PRICING SECTION
var pricingSection=document.getElementById("pricing");
createPricing();
function createPricing() {
    let pricing =[
        {
            titleP: "Beginner", 
            price: "$49", 
            list : ["Personal Trainer", "Convienient Time", "Special Class","Group Traning","Free Fitness Traning"]
        },
        {
            titleP: "Improved", 
            price: "$59", 
            list : ["Personal Trainer", "Convienient Time", "Special Class","Group Traning","Free Fitness Traning"]
        }, 
        {
            titleP: "Advanced", 
            price: "$69", 
            list : ["Personal Trainer", "Convienient Time", "Special Class","Group Traning","Free Fitness Traning"]
        }, 
    ];
    for (let i = 0; i < pricing.length; i++) {
        var pricingDiv=document.createElement("div");
        pricingDiv.setAttribute("class", "col-lg-3 col-md-12 pricing text-center");
        var pricingTitle=document.createElement("h4");
        var pricingTitleContent =document.createTextNode(pricing[i].titleP);
        var pricingPrice=document.createElement("p");
        var pricingPriceContent =document.createTextNode(pricing[i].price);
        var pricingOffer=document.createElement("ul");
        let content = "";
        for (let j = 0; j < pricing[i].list.length; j++) {
            content += `<li><i class="fas fa-arrow-right"></i>${pricing[i].list[j]}</li>`;
        }
        pricingOffer.innerHTML = content;
        pricingTitle.appendChild(pricingTitleContent);
        pricingPrice.appendChild(pricingPriceContent);
        append(pricingDiv, [pricingTitle, pricingPrice, pricingOffer]);
        pricingSection.appendChild(pricingDiv);
    }
}
//TABLE TRAINING
const gymDiv=document.querySelector("#gymsRules");
const gymRules=["Every training is a new challenge",
                "You become good at many things, not just one",
                "No distractions, You are in the focus",
                "The only thing that counts is your training, your goals and your progress",
                "All progress takes place outside the comfort zone.",
                "Success usually comes to those who are too busy to be looking for it.",
                "Your body can stand almost anything,so we workout hard",
                "And least but not least important No pain No gain"
                ];

let divExpect=`<h4 class="text-center fw-bold rules">What to Expect in Our Gym?</h4>
            <table class='table mb-5' id='gymTable'>
                <tbody>`;

    for(let i=0;i<gymRules.length;i++){
        divExpect+=`<tr>
        <td class='text-center'>${gymRules[i]}</td>
        </tr>`;
    }
    divExpect+= "</tbody></table>";

gymDiv.innerHTML=divExpect;

//TESTIMONIAL SLIDE SECTION
const myslide = document.querySelectorAll('.myslides'),
dot = document.querySelectorAll('.dot2');

let section = document.getElementById("test-sect");

section.innerHTML = createSlides();
function createSlides() {
    const slide1 = 
    [
        {
            p: "I used to do Crossfit, but then the injury came so I had to opt for a different solution. I found the Functional Athlete program and I absolutely love it.",
            src: "customer1.jpg", 
            alt: "customer", 
            h5: "Matteo Justice"
        }, 
        {
            p: "I was a powerlifter back in High School so I have experience with other explosive programs. I can certainly tell You, this one is spot on me very hard.",
            src: "customer2.jpg",
            alt: "customer",
            h5: "Ronaldo Schneider"
        }, 
        {
            p: "The Condiitioned Athlete program said it would help me improve my Stamina. It sure did.I've shredded my 5k as well as 3k time by a huge margin",
            src: "customer3.jpg",
            alt: "customer",
            h5: "Lily-Anne Croft"
        }, 
        {
            p: "At first I was sceptical about their Flexible Athlete program, thinking it was just another one. But it sure chaged my mind when the results came very quickly",
            src: "customer4.jpg",
            alt: "customer",
            h5: "Chandler Goldsmith"
        }
    ];
    const slide2 = 
    [
        {
            p: "I've taken the Strong Athlete program. I'm currently in week 3. It is though, but trust me, You won't regret it,so my body will be unrecognizable for 2 weeks",
            src: "customer5.jpg",
            alt: "customer",
            h5: "Caitlin Kitti"
        }, 
        {
            p:"I was a 100m sprinter back in College, and I missed the track so much. I've taken the Fast Athlete program, it certainly delivers what it promises.",
            src: "customer6.jpg",
            alt: "customer",
            h5: "Taylor Elias"
        }, 
        {
            p: "The Condiitioned Athlete program said it would help me improve my Stamina. It sure did.I've shredded my 5k as well as 3k time by a huge margin",
            src: "customer7.jpg", 
            alt: "customer",
            h5: "Andrew Jak"
        }, 
        {
            p: "At first I was sceptical about their Flexible Athlete program, thinking it was just another one. But it sure chaged my mind when the results came very quickly",
            src: "customer8.jpg",
            alt: "customer",
            h5: "Brandon Jean"
        }
    ];
    const slides = [slide1, slide2];
    var content = "";
    for (let i = 0; i < slides.length; i++) {
        content += `<div class="row mt-5 myslides d-none" value = "${i}">`;
        for (let j = 0; j < slides[i].length; j++) 
            content +=
            `<div class=" col-lg-3 col-md-6 col-sm-12 testi">
                <div>
                    <h4><i class="fas fa-quote-left"></i></h4>
                    <p>${slides[i][j].p}</p>
                </div>
                <div>
                    <img src = "assets/img/${slides[i][j].src}" alt = "${slides[i][j].alt}" />
                    <h5 class = "w-100">${slides[i][j].h5}</h5>
                </div>
            </div>`;
        content += "</div>";
    }
    return content;
}

let slides = document.querySelectorAll(".myslides");
let dotsArray = document.querySelectorAll(".dot2");

// SLIDER FOR TESTIMONIAL SECTION
$(document).ready(function() {
    slides[0].classList.remove("d-none");
    slides[0].classList.add("active");

    for (let i = 0; i < dotsArray.length; i++) {
        dotsArray[i].addEventListener("click", () => {
            let change;
            let dotsvalue = dotsArray[i].getAttribute("value");
    
            for (let j = 0; j < slides.length; j++) {
                let slideValue = slides[j].getAttribute("value");
                if (slides[j].classList.contains("active") == true && slideValue == dotsvalue)
                    continue;
                else if (slides[j].classList.contains("active") == false && slideValue == dotsvalue) {
                    slides[j].classList.remove("d-none");
                    change = true;
                }
                else if (slides[j].classList.contains("active") && slideValue != dotsvalue) {
                    slides[j].classList.add("d-none");
                    slides[j].classList.remove("active");
                }
            }
            if (change) {
                slides[dotsvalue].classList.add("active");
            }
    
        })
    }
})
//FORMS DDL LIST AND FORMCHECK
var optionValueAndContent=["Cardio","WeightLift","Bodybulding","Boxing",];

var tagSelect=document.createElement("select");
set([tagSelect], ["id", "ddlprograms", "class", "form-group"]);
tagSelect.classList.add("w-100");
var tagOptionFirst=document.createElement("option");
tagOptionFirst.setAttribute("value","0");
var tagOptionFirstContent=document.createTextNode("Choose your program");

tagOptionFirst.appendChild(tagOptionFirstContent);
tagSelect.appendChild(tagOptionFirst);

for(let i=0;i<optionValueAndContent.length;i++){
    var tagOption=document.createElement("option");
    tagOption.setAttribute("value",optionValueAndContent[i]);
    var tagOptionContent=document.createTextNode(optionValueAndContent[i]);

    tagOption.appendChild(tagOptionContent);
    tagSelect.appendChild(tagOption);
}


document.querySelector("#program-list").appendChild(tagSelect);
var programs1=document.querySelector("#program-list");
programs1.innerHTML+=`<p class="textWarning" id="listError"></p>`


//FORM CHECK
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var programSelect = document.getElementById("ddlprograms");
var thankYouBtn=document.getElementById("thankYouMssg");
var errorBtn=document.getElementById("errorBtn");
var noErrors;
var birth = document.getElementById("birthBox");

var regexName = /^[A-Z][a-z]{2,15}$/;
var regexEmail =/^[\w\.\-]+\@[\a-z0-9-]+\.+[a-z]{2,3}$/;

firstName.addEventListener("keyup",checkFirstName);
lastName.addEventListener("keyup",checkLastName);
email.addEventListener("keyup",checkEmail);
programSelect.addEventListener("blur",checkPrograms);
birth.addEventListener("blur",checkBirth);

function checkFirstName() {

    var nameError = document.getElementById("firstNameError");
    var firstNameValue = document.getElementById("firstName").value.trim();    

    if(firstNameValue=="")
    {
        nameError.innerHTML = "Name is required!";
        noErrors=false;
    }
    else if(!regexName.test(firstNameValue))
    {
        nameError.innerHTML = "Enter valid name!";
        noErrors=false;
    }
    else
    {
        nameError.innerHTML = `<i class="fas fa-check success"></i>`;
    }

}
function checkLastName() {

    var lastNameError = document.getElementById("lastNameError");
    var lastNameValue = document.getElementById("lastName").value.trim(); 

    if(lastNameValue=="")
    {
        lastNameError.innerHTML = "Surname is required!";
        noErrors=false;
    }
    else if(!regexName.test(lastNameValue))
    {
        lastNameError.innerHTML = "Enter valid surname!";
        noErrors=false;
    }
    else
    {
        lastNameError.innerHTML = `<i class="fas fa-check success"></i>`;
    }

}
function checkEmail() {

    var emailError = document.getElementById("emailError");
    var emailValue = document.getElementById("email").value.trim();

    if(emailValue==""){
        emailError.innerHTML = "E-mail field is required!";
        noErrors=false;
    }
    else if(!regexEmail.test(emailValue))
    {
        emailError.innerHTML = "Enter valid e-mail!";
        noErrors=false;
    }
    else
    {
        emailError.innerHTML = `<i class="fas fa-check success"></i>`;
    }
}
function checkPrograms() {

    var programsError = document.getElementById("listError");

    if(programSelect.options[programSelect.options.selectedIndex].value=="0")
    {
        programsError.innerHTML = "Choose one of our programs!";
        noErrors=false;
    }
    else{
        programsError.innerHTML=`<i class="fas fa-check success"></i>`;
    }
 
}
function checkBirth(){

    var checkError = document.getElementById("checkError");
       
    if(birth.checked)
    {
        checkError.innerHTML = `<i class="fas fa-check success"></i>`; 
    }
    else
    {
        checkError.innerHTML = "Please confirm your age";
    }
}
document.querySelector("#submitForm").addEventListener("click",function() {
    noErrors=true;
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPrograms();
    checkBirth();
    if(noErrors && (birth.checked)) 
    {
        thankYouBtn.innerHTML="Thank you for contacting Us about your free first training";
        errorBtn.innerHTML="";
    }
    else
    {
        errorBtn.innerHTML="Please fill in all required field with your personal information";
        thankYouBtn.innerHTML="";
    }
});
    
//INSTAGRAM GALLERY FOR FOOTER
const imgSrc=["pic1","pic2","pic3","pic4","pic5","pic6"]

let gallery=document.querySelector("#gallery")

for(let i=0;i<imgSrc.length;i++){
    var aTag=document.createElement("a");
    aTag.setAttribute("href",`assets/img/${imgSrc[i]}.jpg`);
    
    var imgTag=document.createElement("img");
    set([imgTag],["src",`assets/img/${imgSrc[i]}.jpg`,"alt",`${imgSrc[i]}`])
    aTag.appendChild(imgTag)
    gallery.appendChild(aTag)
}
//JQUERY 
$(document).ready(function(){

    //TABLE ODD TR CHANGE COLOR
    $("#gymTable tr:nth-child(odd)").css({
        backgroundColor: "#1E1E1E",
        border:"1px solid #1E1E1E",
        color: "#FFFFFF",
        fontSize:"14px",
    }); 
    //HOVER PRICING SECTION
    $('.pricing').hover(
        function(){$(this).addClass('pricingHover');},
         function(){$(this).removeClass('pricingHover');}
         );
    //PLUGIN
    lightGallery(document.querySelector("#gallery"))
});




