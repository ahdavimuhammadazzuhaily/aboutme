if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
};

const languageButton = document.querySelector('.buttonlang');
const languageLabel = document.querySelector('#IDorEN');

languageButton.addEventListener('click', () => {
	const isEnglish = languageButton.classList.toggle('is-english');

	languageLabel.textContent = isEnglish ? 'EN' : 'ID';
	languageButton.setAttribute('aria-pressed', String(isEnglish));
});

const shortcutLinks = document.querySelectorAll('.help-shortcut .shc a');
const shortcutCover = document.querySelector('.cover-help-shortcut');
const shortcutSections = [...shortcutLinks].map((shortcutLink) => ({
    link: shortcutLink,
    section: document.querySelector(shortcutLink.getAttribute('href'))
}));
let shortcutHideTimer;


// Untuk menghilangkan shortcut setelah 5000ms atau 5 detik dan akan muncul jika function dieksekusi
const showShortcuts = () => {
    shortcutCover.classList.remove('is-hidden');
    clearTimeout(shortcutHideTimer);
    shortcutHideTimer = setTimeout(() => {
        shortcutCover.classList.add('is-hidden');
    }, 5000);
};

const setActiveShortcut = (activeLink) => {
    shortcutLinks.forEach((link) => link.classList.toggle('active', link === activeLink));
};

const updateActiveShortcut = () => {
    const viewportMiddle = window.innerHeight / 2;
    let currentSection = shortcutSections[0];

    shortcutSections.forEach((shortcutSection) => {
        if (shortcutSection.section.getBoundingClientRect().top <= viewportMiddle) {
            currentSection = shortcutSection;
        }
    });

    setActiveShortcut(currentSection.link);
};

shortcutLinks.forEach((shortcutLink) => {
    shortcutLink.addEventListener('click', () => {
        setActiveShortcut(shortcutLink);
        showShortcuts();
    });
});

window.addEventListener('scroll', () => {
    showShortcuts();
    updateActiveShortcut();
}, { passive: true });
updateActiveShortcut();
showShortcuts();

const herosection = document.getElementById('greeting');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll',()=> {
    const heroHeight = herosection.offsetHeight;
    if (window.scrollY > (heroHeight/4)) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
})

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    updateActiveShortcut();
});

const listproject = document.querySelectorAll(".listproject");
const isiproject = document.getElementById('isianlist');


function bukalist() {
    isiproject.style.transform = "translateX(calc(30% + 15px))";
    isiproject.style.gridTemplateColumns = "translateX(0)";
    listproject[1].style.filter = "blur(2px)";
    listproject[0].style.filter = "blur(0)";
}

function tutuplist() {
    isiproject.style.transform = "translateX(calc(-30% - 15px))";
    listproject[1].style.filter = "blur(0)";
    listproject[0].style.filter = "blur(2px)";
}

let isOpen = false;
const centercontact = document.querySelector('.centercontact');
const h3contact = document.querySelector('.centercontact h3');
const ig = document.querySelector('.ig');
const wa = document.querySelector('.wa');
const linked = document.querySelector('.linked');
const gmail = document.querySelector('.gmail');


function bukakontak(){
    if(isOpen === false){
        h3contact.style.transform = "rotate(0deg)";
        centercontact.style.transform = "rotate(360deg)";
        h3contact.style.animation = "none"; 
        h3contact.style.boxShadow = "0 0 6px 1px rgb(255, 100, 0)";
        wa.style.left = '-50%';
        ig.style.left = '150%';
        linked.style.top = '-50%';
        gmail.style.top = '150%';
        isOpen = true;
    } else{
        h3contact.style.transform = "rotate(360deg)";
        centercontact.style.transform = "rotate(0deg)";
        h3contact.style.boxShadow = "0 0 0px 0px rgb(255, 100, 0)";
        wa.style.left = '50%';
        ig.style.left = '50%';
        linked.style.top = '50%';
        gmail.style.top = '50%';
        clearTimeout(null);
        setTimeout(()=> {h3contact.style.animation = "blink 2s infinite linear";}, 3000);
        isOpen = false;
    }
}
