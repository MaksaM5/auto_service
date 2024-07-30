// script.js
document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');

    const showServices = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        services.forEach(service => {
            const servicePosition = service.getBoundingClientRect().top + scrollY;
            const serviceHeight = service.offsetHeight;

            // Ako je servis u vidnom polju
            if (scrollY + windowHeight > servicePosition && scrollY < servicePosition + serviceHeight) {
                service.classList.add('visible');
            } else {
                service.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', showServices);
    showServices(); // Poziv prilikom učitavanja stranice
});
