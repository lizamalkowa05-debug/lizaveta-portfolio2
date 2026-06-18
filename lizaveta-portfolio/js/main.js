const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }

        });
    },
    {
        threshold: 0.15
    }
);

fadeElements.forEach(element => {
    observer.observe(element);
});


/* PARALLAX */

const parallaxItems = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {

    const scrollY = window.pageYOffset;

    parallaxItems.forEach((item, index) => {

        const speed = 0.04 + (index * 0.008);

        item.style.transform =
            `translateY(${scrollY * speed}px)`;

    });

});


/* SMOOTH IMAGE APPEAR */

const images = document.querySelectorAll('img');

images.forEach(image => {

    image.onload = () => {

        image.style.opacity = '1';

    };

});


/* SMALL FLOAT EFFECT */

parallaxItems.forEach((item, index) => {

    let direction = index % 2 === 0 ? 1 : -1;

    setInterval(() => {

        item.animate(
            [
                {
                    transform:
                        `translateY(0px)`
                },
                {
                    transform:
                        `translateY(${direction * 8}px)`
                },
                {
                    transform:
                        `translateY(0px)`
                }
            ],
            {
                duration: 6000 + index * 700,
                iterations: 1,
                easing: 'ease-in-out'
            }
        );

    }, 6000);

});