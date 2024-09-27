var cursor = document.querySelector('#cursor');
var cursorBlur = document.querySelector('#cursor-blur');

document.addEventListener('mousemove', function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
    cursorBlur.style.left = dets.x - 200 +"px"
    cursorBlur.style.top = dets.y- 200 +"px"
})


const container = document.getElementById('cards-container');
const cards = document.querySelectorAll('.cards');

container.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    
    // Get mouse position relative to the container
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;
    
    // Calculate rotation based on cursor position (relative to the container center)
    const rotateX = (mouseY / containerRect.height - 0.5) * -30; // Y-axis (up/down)
    const rotateY = (mouseX / containerRect.width - 0.5) * -30; // X-axis (left/right)
    
    // Apply transformation to each card
    cards.forEach(card => {
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

// Reset transformation when mouse leaves container
container.addEventListener('mouseleave', () => {
    cards.forEach(card => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


gsap.to('#nav', {
    backgroundColor : "#000",
    height:"95px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})


gsap.to("#main", {
    backgroundColor:'rgba(0, 0, 0, 0.37)',
    scrollTrigger:{
        trigger:"#main",
        scroller:'body',
        // markers:true,
        start:'top 0%',
        end:"top 0%",
        scrub:2
    }
})

gsap.to("#main", {
    backgroundColor:'#000',
    scrollTrigger:{
        trigger:"#main",
        scroller:'body',
        // markers:true,
        start:'top -25%',
        end:"top -70%",
        scrub:2
    }
})


