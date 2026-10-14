(function () {
    'use strict';

    /* =========================================================
       CONFIGURATION & UTILITIES
    ========================================================= */

    const $ = (selector) => document.querySelector(selector);

    const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    const SCRAMBLE_CHARS = '01<>/|+#';

    let scrollYPosition = 0;

    /* =========================================================
       TEXT SCRAMBLE ANIMATION
    ========================================================= */

    function scrambleText(element, text, duration, delay = 0) {
        if (!element) return;

        if (prefersReducedMotion) {
            element.textContent = text;
            return;
        }

        const startTime = performance.now() + delay;

        function animate(currentTime) {
            const progress = Math.min(
                Math.max((currentTime - startTime) / duration, 0),
                1
            );

            let output = '';

            for (let index = 0; index < text.length; index++) {
                if (text[index] === ' ' || index < text.length * progress) {
                    output += text[index];
                } else {
                    const randomIndex = Math.floor(
                        Math.random() * SCRAMBLE_CHARS.length
                    );

                    output += SCRAMBLE_CHARS[randomIndex];
                }
            }

            element.textContent = output;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    /* =========================================================
       LOADER
    ========================================================= */

    const loader = $('#ld');
    const loaderNumber = $('#ln');
    const loaderBar = $('#lb');
    const loaderTitle = $('#lt');

    let loaderProgress = 0;
    let loaderInterval = null;
    let loaderFinished = false;

    scrambleText(
        loaderTitle,
        'FEBRYO FIBONACCI AMADEO',
        900
    );

    function finishLoader() {
        if (loaderFinished) return;

        loaderFinished = true;

        if (loaderInterval !== null) {
            clearInterval(loaderInterval);
        }

        if (!loader) return;

        loader.classList.add('done');

        document.body.classList.remove('lock');
        document.body.classList.add('go');

        document.querySelectorAll('h1 span').forEach((element, index) => {
            scrambleText(
                element,
                element.dataset.t || element.textContent,
                900,
                350 + index * 180
            );
        });

        setTimeout(() => {
            loader.style.display = 'none';
        }, 1100);
    }

    if (prefersReducedMotion) {
        if (loaderNumber) loaderNumber.textContent = '100';
        if (loaderBar) loaderBar.style.width = '100%';

        finishLoader();
    } else if (loader && loaderNumber && loaderBar) {
        loaderInterval = setInterval(() => {
            loaderProgress += Math.random() * 7 + 2;

            if (loaderProgress >= 100) {
                loaderProgress = 100;

                clearInterval(loaderInterval);
                loaderInterval = null;

                setTimeout(finishLoader, 300);
            }

            loaderNumber.textContent = Math.floor(loaderProgress);
            loaderBar.style.width = `${loaderProgress}%`;
        }, 90);
    }

    /* =========================================================
       ROLE ROTATION
    ========================================================= */

    const roleList = $('#rl');

    if (roleList && roleList.children.length > 1) {
        const roleCount = roleList.children.length - 1;
        let roleIndex = 0;

        setInterval(() => {
            roleIndex++;

            roleList.style.transition =
                'transform 0.7s cubic-bezier(0.7, 0, 0.2, 1)';

            roleList.style.transform =
                `translateY(-${roleIndex * 1.5}em)`;

            if (roleIndex === roleCount) {
                setTimeout(() => {
                    roleList.style.transition = 'none';
                    roleList.style.transform = 'none';

                    roleIndex = 0;
                }, 750);
            }
        }, 2800);
    }

    /* =========================================================
       DIGITAL CLOCK — ASIA/JAKARTA
    ========================================================= */

    function updateClock() {
        const clock = $('#clk');

        if (!clock) return;

        const time = new Date().toLocaleTimeString('id-ID', {
            timeZone: 'Asia/Jakarta',
            hour12: false
        });

        clock.textContent = `${time} WIB`;
    }

    updateClock();
    setInterval(updateClock, 1000);

    /* =========================================================
       TEXT MARQUEE
    ========================================================= */

    document.querySelectorAll('.tr').forEach((element) => {
        const originalHTML = element.innerHTML;
        const originalWidth = element.scrollWidth;

        if (originalWidth <= 0) return;

        const repeatCount = Math.max(
            2,
            Math.ceil((window.innerWidth * 2) / originalWidth)
        );

        element.style.setProperty('--k', repeatCount);
        element.innerHTML = originalHTML.repeat(repeatCount);
    });

    /* =========================================================
       MOBILE MENU
    ========================================================= */

    const mobileMenu = $('#mm');
    const menuToggle = $('#mt');

    function openMobileMenu() {
        if (!mobileMenu || !menuToggle || mobileMenu.open) return;

        mobileMenu.showModal();

        document.body.classList.add('lock');
        menuToggle.setAttribute('aria-expanded', 'true');

        requestAnimationFrame(() => {
            mobileMenu.classList.add('in');
        });
    }

    function closeMobileMenu(callback) {
        if (!mobileMenu) return;

        mobileMenu.classList.remove('in');

        setTimeout(() => {
            if (mobileMenu.open) {
                mobileMenu.close();
            }

            if (typeof callback === 'function') {
                callback();
            }
        }, 300);
    }

    if (mobileMenu && menuToggle) {
        const menuCloseButton = mobileMenu.querySelector('.mx');

        menuToggle.addEventListener('click', openMobileMenu);

        if (menuCloseButton) {
            menuCloseButton.addEventListener('click', () => {
                closeMobileMenu();
            });
        }

        mobileMenu.addEventListener('close', () => {
            document.body.classList.remove('lock');

            menuToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('in');
        });

        mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                const target = $(link.getAttribute('href'));

                closeMobileMenu(() => {
                    if (target) {
                        target.scrollIntoView();
                    }
                });
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 860 && mobileMenu.open) {
                closeMobileMenu();
            }
        });
    }

    /* =========================================================
       WORD REVEAL
    ========================================================= */

    const stepText = $('#stp');
    let wordSpans = [];

    if (stepText) {
        const words = stepText.textContent.trim().split(/\s+/);

        stepText.innerHTML = words
            .map((word) => `<span>${word}</span>`)
            .join(' ');

        wordSpans = Array.from(stepText.children);
    }

    /* =========================================================
       SCROLL REVEAL — INTERSECTION OBSERVER
    ========================================================= */

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        document.querySelectorAll('[data-r], .ct').forEach((element) => {
            revealObserver.observe(element);
        });
    }

    /* =========================================================
       HORIZONTAL PIN — PROJECTS & OTHER SECTION
    ========================================================= */

    const projectSection = $('#pj');
    const projectTrack = $('#trk');
    const projectProgress = $('#pb');

    const otherSection = $('#og');
    const otherTrack = $('#otrk');
    const otherProgress = $('#opb');

    function resizeHorizontalSections() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (projectSection && projectTrack) {
            projectSection.style.height =
                `${projectTrack.scrollWidth - viewportWidth +
                    viewportHeight * 1.2}px`;
        }

        if (otherSection && otherTrack) {
            otherSection.style.height =
                `${otherTrack.scrollWidth - viewportWidth +
                    viewportHeight * 1.2}px`;
        }
    }

    resizeHorizontalSections();

    window.addEventListener('resize', resizeHorizontalSections);
    window.addEventListener('load', resizeHorizontalSections);

    /* =========================================================
       SCROLL PROGRESS, NAVIGATION & ANIMATIONS
    ========================================================= */

    const heroName = $('#hn');
    const stepContainer = $('#stp');
    const contactHeading = $('#cth');
    const pageProgress = $('#pg');

    const sectionIds = [
        'hero',
        'st',
        'tech',
        'pj',
        'exp',
        'ct'
    ];

    const sectionLabels = [
        'Beranda',
        'Tentang',
        'Keahlian',
        'Proyek',
        'Pengalaman',
        'Kontak'
    ];

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function updateScrollEffects() {
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        /* Page progress */

        if (pageProgress) {
            const maxScroll = Math.max(
                documentHeight - viewportHeight,
                1
            );

            pageProgress.style.transform =
                `scaleX(${clamp(scrollYPosition / maxScroll, 0, 1)})`;
        }

        /* Active navigation */

        let activeSectionIndex = 0;

        sectionIds.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);

            if (
                section &&
                section.getBoundingClientRect().top <= viewportHeight * 0.4
            ) {
                activeSectionIndex = index;
            }
        });

        document.querySelectorAll('nav a').forEach((link, index) => {
            link.classList.toggle(
                'on',
                index === activeSectionIndex
            );
        });

        const menuLabel = $('#ml');

        if (menuLabel) {
            menuLabel.textContent = sectionLabels[activeSectionIndex];
        }

        if (prefersReducedMotion) return;

        /* Hero parallax */

        if (heroName) {
            heroName.style.transform =
                `translateY(${scrollYPosition * 0.22}px)`;

            heroName.style.opacity = clamp(
                1 - scrollYPosition / (viewportHeight * 0.9),
                0,
                1
            );
        }

        /* Word reveal */

        if (stepContainer && wordSpans.length > 0) {
            const rect = stepContainer.getBoundingClientRect();

            const progress = clamp(
                (viewportHeight * 0.85 - rect.top) /
                    (rect.height + viewportHeight * 0.25),
                0,
                1
            );

            wordSpans.forEach((word, index) => {
                word.classList.toggle(
                    'on',
                    index / wordSpans.length < progress * 1.05
                );
            });
        }

        /* Horizontal project scrolling */

        if (projectSection && projectTrack) {
            const rect = projectSection.getBoundingClientRect();

            const maxHorizontalScroll = Math.max(
                projectTrack.scrollWidth - window.innerWidth,
                0
            );

            const maxVerticalScroll = Math.max(
                projectSection.offsetHeight - viewportHeight,
                1
            );

            const progress = clamp(
                -rect.top / maxVerticalScroll,
                0,
                1
            );

            projectTrack.style.transform =
                `translateX(${-progress * maxHorizontalScroll}px)`;

            if (projectProgress) {
                projectProgress.style.width = `${progress * 100}%`;
            }
        }

        /* Horizontal scrolling — other section */

        if (otherSection && otherTrack) {
            const rect = otherSection.getBoundingClientRect();

            const maxHorizontalScroll = Math.max(
                otherTrack.scrollWidth - window.innerWidth,
                0
            );

            const maxVerticalScroll = Math.max(
                otherSection.offsetHeight - viewportHeight,
                1
            );

            const progress = clamp(
                -rect.top / maxVerticalScroll,
                0,
                1
            );

            otherTrack.style.transform =
                `translateX(${-progress * maxHorizontalScroll}px)`;

            if (otherProgress) {
                otherProgress.style.width = `${progress * 100}%`;
            }
        }

        /* Contact heading parallax */

        if (contactHeading) {
            const rect = contactHeading.getBoundingClientRect();

            contactHeading.style.transform =
                `translateX(${(rect.top - viewportHeight * 0.5) * -0.12}px)`;
        }
    }

    let scrollFrameRequested = false;

    function handleScroll() {
        scrollYPosition = window.scrollY;

        if (scrollFrameRequested) return;

        scrollFrameRequested = true;

        requestAnimationFrame(() => {
            updateScrollEffects();
            scrollFrameRequested = false;
        });
    }

    window.addEventListener('scroll', handleScroll, {
        passive: true
    });

    updateScrollEffects();

    /* =========================================================
       DIGITAL GRID — CANVAS ANIMATION
    ========================================================= */

    const canvas = $('#grid');

    if (canvas) {
        const context = canvas.getContext('2d');

        if (context) {
            let canvasWidth = 0;
            let canvasHeight = 0;

            let pointerX = -999;
            let pointerY = -999;

            const gridSize = 36;

            let gridAnimationFrame = null;

            function resizeCanvas() {
                const pixelRatio = Math.min(
                    window.devicePixelRatio || 1,
                    2
                );

                canvasWidth = canvas.clientWidth;
                canvasHeight = canvas.clientHeight;

                canvas.width = canvasWidth * pixelRatio;
                canvas.height = canvasHeight * pixelRatio;

                context.setTransform(
                    pixelRatio,
                    0,
                    0,
                    pixelRatio,
                    0,
                    0
                );
            }

            function handlePointerMove(event) {
                const rect = canvas.getBoundingClientRect();

                pointerX = event.clientX - rect.left;
                pointerY = event.clientY - rect.top;
            }

            function drawGrid(timestamp) {
                context.clearRect(
                    0,
                    0,
                    canvasWidth,
                    canvasHeight
                );

                const scanPosition =
                    (timestamp / 14) % (canvasHeight + 300) - 150;

                for (
                    let x = gridSize / 2;
                    x < canvasWidth;
                    x += gridSize
                ) {
                    for (
                        let y = gridSize / 2;
                        y < canvasHeight;
                        y += gridSize
                    ) {
                        const distance = Math.hypot(
                            x - pointerX,
                            y - pointerY
                        );

                        const mouseEffect = Math.max(
                            1 - distance / 150,
                            0
                        );

                        const scanEffect = Math.max(
                            1 - Math.abs(y - scanPosition) / 70,
                            0
                        );

                        const alpha =
                            0.16 +
                            mouseEffect * 0.7 +
                            scanEffect * 0.5;

                        if (mouseEffect > 0.05 || scanEffect > 0.2) {
                            context.fillStyle =
                                `rgba(10, 107, 74, ${alpha})`;
                        } else {
                            context.fillStyle =
                                'rgba(5, 8, 7, 0.16)';
                        }

                        const size =
                            1 +
                            mouseEffect * 1.8 +
                            scanEffect * 0.8;

                        context.fillRect(
                            x - size / 2,
                            y - size / 2,
                            size,
                            size
                        );
                    }
                }

                if (!prefersReducedMotion) {
                    gridAnimationFrame =
                        requestAnimationFrame(drawGrid);
                }
            }

            resizeCanvas();

            window.addEventListener('resize', resizeCanvas);

            canvas.addEventListener(
                'pointermove',
                handlePointerMove
            );

            if (!prefersReducedMotion) {
                gridAnimationFrame =
                    requestAnimationFrame(drawGrid);
            } else {
                drawGrid(0);
            }
        }
    }
})();