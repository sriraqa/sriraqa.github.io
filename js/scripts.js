
  window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
  })

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const scrollTracker = document.querySelector('.scroll-tracker');

let body = document.body;
let html = document.documentElement;

window.addEventListener('DOMContentLoaded', () => {
    adjustScrollTracker();
})


window.addEventListener('resize', () => {
   adjustScrollTracker();
})

window.onload = () => {
  // (A) GET LIGHTBOX & ALL .ZOOMD IMAGES
  let all = document.getElementsByClassName("zoomD"),
      lightbox = document.getElementById("lightbox");
 
  // (B) CLICK TO SHOW IMAGE IN LIGHTBOX
  // * SIMPLY CLONE INTO LIGHTBOX & SHOW
  if (all.length>0) { for (let i of all) {
    i.onclick = () => {
      let clone = i.cloneNode();
      clone.className = "";
      lightbox.innerHTML = "";
      lightbox.appendChild(clone);
      lightbox.className = "show";
    };
  }}
 
  // (C) CLICK TO CLOSE LIGHTBOX
  lightbox.onclick = () => {
    lightbox.className = "";
  };
};


const adjustScrollTracker = () => {
    let totalDocHeight = Math.max(
        body.scrollHeight, html.scrollHeight,
        body.offsetHeight, html.offsetHeight,
        body.clientHeight, html.clientHeight
      );
    let clientHeight = html.clientHeight;
    heightToScroll = totalDocHeight - clientHeight;

    window.addEventListener('scroll', () => {
        let scrolledFromTop = html.scrollTop;
        let heightLeftToScroll = heightToScroll - scrolledFromTop;
        
        let rawScrolledPercentage = 100 - ((heightLeftToScroll/heightToScroll)*100);
        let ceiledScrollPercentage = Math.round(rawScrolledPercentage);
      
        scrollTracker.style.width=`${ceiledScrollPercentage}%`
    });
}

// $(function() {
//     $('.scroll-down').click (function() {
//       $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
//       return false;
//     });
//   });

//   $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".navbar-colour-change");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });
