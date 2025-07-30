// Language Toggle
        document.addEventListener('DOMContentLoaded', function() {
            const langBtns = document.querySelectorAll('.lang-btn');
            const frContent = document.getElementById('fr-content');
            const enContent = document.getElementById('en-content');
            
            langBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Update active button
                    langBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show selected language content
                    if (this.dataset.lang === 'fr') {
                        frContent.classList.add('active');
                        enContent.classList.remove('active');
                    } else {
                        frContent.classList.remove('active');
                        enContent.classList.add('active');
                    }
                });
            });
            
            // Animation des barres de compétences
            const skillBars = document.querySelectorAll('.skill-level');
            
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s ease-in-out';
                    bar.style.width = width;
                }, 500);
            });
            
            // Animation au défilement
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.animate');
                
                elements.forEach(el => {
                    const elementTop = el.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 50) {
                        el.style.opacity = 1;
                        el.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Initialisation
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Appeler au chargement pour les éléments déjà visibles
        });