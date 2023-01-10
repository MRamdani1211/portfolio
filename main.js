window.onload = () => {
    let svg = document.querySelectorAll('.social-img-container svg'),
        path = document.querySelectorAll('.social-img-container svg path'),
        floatingText = document.querySelectorAll('.floating-text'),
        navMobileLinksContainer = document.querySelector('.nav-mobile-links-container'),
        toTop = document.querySelector('.to-top'),
        hamBar = document.querySelectorAll('.ham-bar'),
        hamLogo = document.querySelector('.ham-logo'),
        hamClickBox = document.querySelectorAll('.click-box'),
        loadingScreen = document.querySelector('.loading-screen'),
        isClicked = false,
        isOpened = false,
        rellax = new Rellax('.rellax');

    document.body.classList.remove('no-scroll')
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 700)
    
    window.addEventListener('resize', () => {
        floatingText.forEach((i) => {
            if( window.innerWidth > 768 && window.innerWidth < 992) {
                i.setAttribute('data-rellax-speed', '-1');
            } else {
                i.setAttribute('data-rellax-speed', '-2');
            }
        })
    })

    window.addEventListener('scroll', () => {
        if(window.scrollY !== 0) {
            toTop.style.opacity = '100%';
        } else {
            toTop.style.opacity = '0%';
        }
    })

    window.addEventListener('scroll', () => {
        let width = window.innerWidth
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            toTop.style.marginBottom = '110px';
        } else {
            toTop.style.marginBottom = '50px';
        }
    })
    

    window.addEventListener('click', (e) => {
        if(isOpened === true && e.target !== hamClickBox) {
            navMobileLinksContainer.style.height = '0';
            isClicked = false;
            isOpened = false;
        }
    })
    

    hamLogo.addEventListener('click', () => {
        console.log('asd')
        if (!isClicked) {
            navMobileLinksContainer.style.height = '210px';
            isClicked = true;
            setTimeout(() => {
                isOpened = true;
            }, 300)
        } else {
            navMobileLinksContainer.style.height = '0';
            isClicked = false;
            isOpened = false;

        }
        hamBar.forEach((i, count) => {           
            i.style.animation = `ham-grow 0.3s ${0 + count * 0.1}s ease`;
            setTimeout(() => {
                i.style.animation = '';
            }, 500)
        })
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