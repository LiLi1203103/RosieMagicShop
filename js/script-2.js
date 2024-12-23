// JavaScript Document
const sections = document.querySelectorAll('.hidden-section');

const options = {
    root: null,
    threshold: 0,
};

const callback = (entries, intersectionObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible-section');
            intersectionObserver.unobserve(entry.target);
        }
    });
};

const intersectionObserver = new IntersectionObserver(callback, options);

sections.forEach(section => intersectionObserver.observe(section));
