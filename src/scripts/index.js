
document.addEventListener('DOMContentLoaded', function () {
    // Gestion du menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    closeBtn.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', toggleMobileMenu);

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Système de traduction
    const translations = {
        en: {
            home: "Home",
            about: "About",
            skills: "Skills",
            portfolio: "Portfolio",
            experience: "Experience",
            contact: "Contact",
            cv: "View my CV",
            heroTitle: "Loïc Etoundi<br><span>Fullstack Developer</span><br>& Spotify Expert",
            heroDesc: "I create exceptional digital experiences and memorable sound designs for leading brands.",
            viewProjects: "View my projects",
            viewCV: "View my CV",
            aboutTitle: "About Me",
            aboutSubtitle: "Passionate about technological innovation and user experience",
            aboutText1: "Hello, I'm Loïc Etoundi, a fullstack developer and Spotify designer with over 8 years of experience in creating innovative digital solutions.",
            aboutText2: "Specialist in modern technologies (React, Node.js, Python) and expert in designing immersive audio experiences on Spotify, I combine technical development and creative design to deliver exceptional products.",
            aboutText3: "My rigorous and user-centered approach allows me to deliver projects that combine technical performance and impactful design, meeting the requirements of the most demanding clients.",
            contactMe: "Contact me",
            spotifyBadge: "Certified Spotify Designer",
            skillsTitle: "My Skills",
            skill1Title: "Fullstack Development",
            skill1Item1: "JavaScript (ES6+) / TypeScript",
            skill1Item2: "React.js / Next.js / Vue.js",
            skill1Item3: "Node.js / Express / NestJS",
            skill1Item4: "Python / Django / Flask",
            skill1Item5: "Databases (SQL/NoSQL)",
            skill1Item6: "REST & GraphQL Architecture",
            skill2Title: "Spotify Design",
            skill2Item1: "Canvas Design",
            skill2Item2: "Animated Playlist Creation",
            skill2Item3: "Audio Branding Strategy",
            skill2Item4: "Interactive Experiences",
            skill2Item5: "Discovery Optimization",
            skill2Item6: "Listening Data Analysis",
            skill3Title: "Design & UX/UI",
            skill3Item1: "Interface Design (UI)",
            skill3Item2: "User Experience (UX)",
            skill3Item3: "Prototyping (Figma, Adobe XD)",
            skill3Item4: "Responsive Design",
            skill3Item5: "Design System",
            skill3Item6: "User Testing",
            portfolioTitle: "My Portfolio",
            project1Title: "Interactive Audio Experience",
            project1Desc: "Launch campaign for an emerging artist",
            project2Title: "E-commerce Platform",
            project2Desc: "Complete solution with AI recommendation system",
            project3Title: "Corporate Sound Branding",
            project3Desc: "Complete audio identity for a luxury brand",
            project4Title: "Music Streaming Service",
            project4Desc: "Cross-platform mobile app with social features",
            experienceTitle: "My Experience",
            job1Title: "Lead Developer & Spotify Designer",
            job1Company: "Harmonie Numérique",
            job1Desc: "Technical direction of complex web projects and creation of innovative audio experiences for clients in the music and luxury industries.",
            job2Title: "Senior Fullstack Developer",
            job2Company: "Sonora Tech",
            job2Desc: "Design and development of web and mobile applications with integration of advanced audio features.",
            job3Title: "Frontend Developer",
            job3Company: "Digital Waves",
            job3Desc: "Creation of innovative user interfaces for music and streaming platforms.",
            job4Title: "Web & Sound Designer",
            job4Company: "Studio Mélodie",
            job4Desc: "Design of sound identities and user interfaces for music applications.",
            contactTitle: "Contact Me",
            contactSubtitle: "Let's talk about your project",
            contactDesc: "Whether you have a web development project, an idea for a unique Spotify experience, or just a question, feel free to contact me.",
            location: "Yaounde, Cameroon",
            formName: "Name",
            formEmail: "Email",
            formSubject: "Subject",
            formMessage: "Message",
            formSubmit: "Send message",
            rights: "All rights reserved."
        },
        fr: {
            home: "Accueil",
            about: "À Propos",
            skills: "Compétences",
            portfolio: "Portfolio",
            experience: "Expérience",
            contact: "Contact",
            cv: "Voir mon CV",
            heroTitle: "Loïc Etoundi<br><span>Développeur Fullstack</span><br>& Expert Spotify",
            heroDesc: "Je crée des expériences numériques exceptionnelles et des designs sonores mémorables pour des marques de premier plan.",
            viewProjects: "Voir mes projets",
            viewCV: "Voir mon CV",
            aboutTitle: "À Propos de Moi",
            aboutSubtitle: "Passionné par l'innovation technologique et l'expérience utilisateur",
            aboutText1: "Bonjour, je suis Loïc Etoundi, un développeur fullstack et designer Spotify avec plus de 8 ans d'expérience dans la création de solutions digitales innovantes.",
            aboutText2: "Spécialiste des technologies modernes (React, Node.js, Python) et expert dans la conception d'expériences audio immersives sur Spotify, je combine développement technique et design créatif pour offrir des produits exceptionnels.",
            aboutText3: "Mon approche rigoureuse et centrée sur l'utilisateur me permet de livrer des projets qui allient performance technique et design impactant, répondant aux exigences des clients les plus pointilleux.",
            contactMe: "Contactez-moi",
            spotifyBadge: "Designer Spotify Certifié",
            skillsTitle: "Mes Compétences",
            skill1Title: "Développement Fullstack",
            skill1Item1: "JavaScript (ES6+) / TypeScript",
            skill1Item2: "React.js / Next.js / Vue.js",
            skill1Item3: "Node.js / Express / NestJS",
            skill1Item4: "Python / Django / Flask",
            skill1Item5: "Bases de données (SQL/NoSQL)",
            skill1Item6: "Architecture REST & GraphQL",
            skill2Title: "Design Spotify",
            skill2Item1: "Conception de Canvas",
            skill2Item2: "Création de Playlists animées",
            skill2Item3: "Stratégie de branding audio",
            skill2Item4: "Expériences interactives",
            skill2Item5: "Optimisation de découvertes",
            skill2Item6: "Analyse de données d'écoute",
            skill3Title: "Design & UX/UI",
            skill3Item1: "Design d'interface (UI)",
            skill3Item2: "Expérience utilisateur (UX)",
            skill3Item3: "Prototypage (Figma, Adobe XD)",
            skill3Item4: "Design responsive",
            skill3Item5: "Design système",
            skill3Item6: "Tests utilisateurs",
            portfolioTitle: "Mon Portfolio",
            project1Title: "Expérience Audio Interactive",
            project1Desc: "Campagne de lancement pour un artiste émergent",
            project2Title: "Plateforme E-commerce",
            project2Desc: "Solution complète avec système de recommandation IA",
            project3Title: "Marque Sonore d'Entreprise",
            project3Desc: "Identité audio complète pour une marque de luxe",
            project4Title: "Service de Streaming Musical",
            project4Desc: "Application mobile cross-platform avec fonctionnalités sociales",
            experienceTitle: "Mon Expérience",
            job1Title: "Lead Developer & Spotify Designer",
            job1Company: "Harmonie Numérique",
            job1Desc: "Direction technique de projets web complexes et création d'expériences audio innovantes pour des clients de l'industrie musicale et du luxe.",
            job2Title: "Développeur Fullstack Senior",
            job2Company: "Sonora Tech",
            job2Desc: "Conception et développement d'applications web et mobiles avec intégration de fonctionnalités audio avancées.",
            job3Title: "Développeur Frontend",
            job3Company: "Digital Waves",
            job3Desc: "Création d'interfaces utilisateur innovantes pour des plateformes musicales et de streaming.",
            job4Title: "Designer Web & Sonore",
            job4Company: "Studio Mélodie",
            job4Desc: "Conception d'identités sonores et d'interfaces utilisateur pour des applications musicales.",
            contactTitle: "Contactez-moi",
            contactSubtitle: "Parlons de votre projet",
            contactDesc: "Que vous ayez un projet de développement web, une idée pour une expérience Spotify unique, ou simplement une question, n'hésitez pas à me contacter.",
            location: "Yaounde, Cameroon",
            formName: "Nom",
            formEmail: "Email",
            formSubject: "Sujet",
            formMessage: "Message",
            formSubmit: "Envoyer le message",
            rights: "Tous droits réservés."
        }
    };

    // Fonction de changement de langue
    function changeLanguage(lang) {
        // Mettre à jour l'attribut lang de la page
        document.documentElement.lang = lang;

        // Désactiver tous les boutons de langue
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Activer le bouton de la langue courante
        document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(btn => {
            btn.classList.add('active');
        });

        // Mettre à jour le contenu textuel
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName === 'LABEL') {
                    element.textContent = translations[lang][key];
                } else if (element.tagName === 'H1') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Stocker la préférence de langue
        localStorage.setItem('preferredLanguage', lang);
    }

    // Écouteurs d'événements pour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Déterminer la langue par défaut
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.substring(0, 2);
    const defaultLang = savedLang || (browserLang === 'fr' ? 'fr' : 'en');

    // Appliquer la langue par défaut
    changeLanguage(defaultLang);
});


// Initialisation d'EmailJS
(function () {
    emailjs.init("zNpk164s0vsSQH5dW");
})();

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const submitBtn = document.getElementById('submitBtn');

    // Fonction pour valider le formulaire
    function validateForm() {
        let isValid = true;

        // Validation du nom
        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('nameError');
        if (name === '') {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Validation de l'email
        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validation du sujet
        const subject = document.getElementById('subject').value.trim();
        const subjectError = document.getElementById('subjectError');
        if (subject === '') {
            subjectError.style.display = 'block';
            isValid = false;
        } else {
            subjectError.style.display = 'none';
        }

        // Validation du message
        const message = document.getElementById('message').value.trim();
        const messageError = document.getElementById('messageError');
        if (message === '') {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }

        return isValid;
    }

    // Envoi du formulaire
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validateForm()) return;

        // Afficher l'animation de chargement
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;

        // Récupération des données du formulaire
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Envoi via EmailJS
        emailjs.send("service_a4b4bz9", "template_eap9i0g", formData)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);

                // Affichage du message de confirmation
                confirmationMessage.style.display = 'block';

                // Réinitialisation du formulaire
                contactForm.reset();

                // Réinitialisation du bouton
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
                    submitBtn.disabled = false;

                    // Cacher le message après 5 secondes
                    setTimeout(() => {
                        confirmationMessage.style.display = 'none';
                    }, 5000);
                }, 2000);
            }, function (error) {
                console.log('FAILED...', error);
                alert('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.');
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
                submitBtn.disabled = false;
            });
    });
});