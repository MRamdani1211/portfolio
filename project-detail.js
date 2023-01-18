window.onload = () => {
    let svg = document.querySelectorAll('.social-img-container svg'),
        path = document.querySelectorAll('.social-img-container svg path'),
        toTop = document.querySelector('.to-top'),
        navButton = document.querySelector('.back-button button'),
        navArrow = document.querySelector('.back-arrow');
    

    navButton.addEventListener('mouseover', () => {
        navArrow.style.transform = 'translateX(-8px)';
    })

    navButton.addEventListener('mouseout', () => {
        navArrow.style.transform = 'translateX(0px)';
    })

    window.addEventListener('scroll', () => {
        if(window.scrollY !== 0) {
            toTop.style.opacity = '100%';
        } else {
            toTop.style.opacity = '0%';
        }
    })

    window.addEventListener('scroll', () => {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            toTop.style.marginBottom = '70px';
        } else {
            toTop.style.marginBottom = '50px';
        }
    })

    svg.forEach((img, i) => {
        img.addEventListener('mouseover', () => {
            path[i].style.fill = '#32C37C';
        })
        img.addEventListener('mouseout', () => {
            path[i].style.fill = '#fff';
        })
    })
}