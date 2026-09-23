const DATA = {
    name: "Febryo Fibonacci Amadeo, S.T",
    photo: "/Foto_Profesional.png",
    kicker: "Available for new opportunities",
    role: "From technology to the future of humanity",
    heroLinks: [
        { label: "Get in Touch", target: "contact", primary: true },
        { label: "Portofolio", target: "projects", primary: false },
    ],
    about: {
        meta: "IDENTITY",
        paragraphs: [
            "Fresh graduate Software and AI Engineer (GPA 3.65) with internship and production experience building web and mobile business applications using Laravel, React, and React Native.",
            "Developed enterprise information systems and Point of Sale (POS) platforms supporting digital transformation in the retail sector, including REST API integrations, automated testing, and deployment pipelines.\
            Digitized operational workflows to reduce manual reporting time.\
            Earned 2 Gold Medals at IICYMS for a Speech-to-Text Qur'an memorization verification project (LSTM & BERT) in 2024, and a WebGIS big-data philanthropy platform in 2025."
        ]
    },
    experience: {
        meta: "CHRONOLOGICAL",
        jobs: [
            { period: "2023 — Present", role: "CTO - Software Engineer (Self-employed)", company: "PT. Think Fast Solution",
                bullets: [
                    "Developed web and mobile Point-of-Sale applications with React Native and Laravel, enabling retail users to manage core sales and operational workflows through a unified platform.", 
                    "Integrated REST APIs with application databases to support core retail workflows, improving data flow between the POS interface and backend services.",
                    "Tested and supported deployment of a Laravel and React management panel, helping internal users adopt digitized operational and funding reporting workflows. "
                ] 
            },
            { period: "May 2025 — Sept 2026", role: "Staff - Software Engineer (Internship)", company: "Lazis Daarul Hikam  ",
                bullets: [
                    "Digitized operational workflows and funding reporting processes with a Laravel and React management panel, reducing manual reporting steps for internal users.", 
                    "Tested and supported deployment of a Laravel and React management panel for digitized operational and funding reporting workflows used by internal teams."
                ] 
            }
        ]
    },
    projects: {
        meta: "8 SELECTED PROJECT",
        // urutan size mengikuti pola otomatis di script; cukup isi title/blurb/stack
        items: [
            { title: "Web Company Profile", year: "2019", blurb: "Build web company profile with Laravel at our company.", stack: ["Laravel"], url: "https://thinkfast.co.id" },
            { title: "Pos Logmart", year: "2022", blurb: "Developed a Web Based Point of Sale (POS) Application with Microsoft SQL Server Database Integration on Microsoft Azure Cloud to Support Retail Operations at Logmart.", stack: ["Point of Sales", "Laravel", "SQL"], url: "https://poslogmart.com/login" },
            { title: "PosRitel.com", year: "2023", blurb: "Developed a Web Based Point of Sale (POS) Application with Microsoft SQL Server Database Integration on Microsoft Azure Cloud to Support Retail Operations at our Company.", stack: ["Point of Sales", "Laravel", "SQL"], url: "https://posritel.com/" },
            { title: "PosRitel Dashboard", year: "2025", blurb: "Developed a Mobile Sales Reporting Dashboard Application using React Native with Microsoft SQL Server Database Integration with RESTful API.", stack: ["Sales Reporting", "Mobile", "React Native", "RESTful API", "SQL"], url: "https://play.google.com/store/apps/details?id=com.febryofibonacci.PosRitelDashboard&hl=id" },
            { title: "PosRitel Mobile", year: "2025", blurb: "Developed a Mobile Point of Sale (POS) Application with using React Native Microsoft SQL Server Database Integration with RESTful API.", stack: ["Point of Sales", "Mobile", "React Native", "RESTful API", "SQL"], url: "https://play.google.com/store/apps/details?id=com.posritel.mobile&hl=id" },
            { title: "Speech-to-Text Al-Qur’an Memorization Verification With Long-Short Term Memory (LSTM) and Bidirectional Encoder Representations from Transformers (BERT)", year: "2024", blurb: "Developed a verification tool using LSTM and BERT.", stack: ["Python", "Machine Learning", "Artificial Intelligence", "Deep Learning", "Natural Language Processing (NLP)", "Long Short Term Memory (LSTM)", "Bidirectional Encoder Representations from Transfomers (BERT)"], url: "https://colab.research.google.com/drive/1N3WEjj3QxCtW59_uwr9EOei5HYtfafb1?usp=sharing" },
            { title: "Comparative Sentiment Analysis of Mobile Legends Play Store Reviews Using Logistic Regression, SVM, and Random Forest with TF-IDF and Word2Vec", year: "2026", blurb: "Developed a sentiment analysis model for Mobile Legends Play Store reviews by comparing Logistic Regression, SVM, and Random Forest using TF-IDF and Word2Vec feature representations", stack: ["Python", "Machine Learning", "Artificial Intelligence", "Deep Learning", "Natural Language Processing (NLP)", "Wod2Vec", "Term Frequency-Inverse Document Frequency (TF-IDF)", "Logistics Regression", "Super Vector Machine (SVM)", "Random Forest"], url: "https://colab.research.google.com/drive/1N3WEjj3QxCtW59_uwr9EOei5HYtfafb1?usp=sharing" },
            { title: "Implementation of a Convolutional Neural Network for Classifying Generative AI-Generated Images and Human-Made Paintings", year: "2025", blurb: "Build and Fine Tunning CNN VGG-16 Model for Classifying Generative AI-Generated Images and Human-made Paintings.", stack: ["Python", "Machine Learning", "Deep Learning", "Artificial Intelligence", "Computer Vision", "Convolutional Neural Netwrok (CNN)", "Visual Geometry Group-16 (VGG-16)"], url: "https://colab.research.google.com/drive/1eCRKnoJe4Z5N-ceZC6voAFBXQUOUsqbL?usp=sharing" },
            { title: "Facial Skin Ageing Image Classification with Convolutional Neural Netwrok (CNN)", year: "2026", blurb: "Deskripsi singkat.", stack: ["Python", "Machine Learning", "Deep Learning", "Artificial Intelligence", "Computer Vision", "Convolutional Neural Netwrok (CNN)"], url: "https://github.com/febryofibonacciamadeo/Facial_Skin_Ageing_Image_Classification_with_Convolutional_Neural_Network-CNN-" }
        ]
    },
    certifications: {
        meta: "12 ITEM",
        items: [
            { title: "Basic Data Visualization", issuer: "Dicoding Indonesia", year: "2023", type: "Certification", url: "https://drive.google.com/file/d/1TQE2WTe1bH9XiiPWe1NXlVyyn9Q3mkGN/view?usp=sharing" },
            { title: "React Learning Path", issuer: "Dicoding Indonesia", year: "2023", type: "Bootcamp Certification", url: "https://drive.google.com/file/d/1tmJ69cNP1K_adHdA5J73LTcFoO65eyxC/view?usp=sharing" },
            { title: "Partner: NGD Linux Essentials", issuer: "Cisco Netwroking Academy", year: "2024", type: "Certification", url: "https://drive.google.com/file/d/1PVqqetujHQVDoe_-xBlGPjHsuBq21Pod/view?usp=sharing" },
            { title: "Gold Medal </br> International Invention Competition for Young Moslem Scientist (IICYMS)", issuer: "Indonesian Young Scientist Association (IYSA)", year: "2024", type: "Computer Science Competition", url: "https://drive.google.com/file/d/169F1m3YfLcoiR1U7urSDzbXWGBLd2xfI/view?usp=sharing" },
            { title: "Gold Medal </br> International Invention Competition for Young Moslem Scientist (IICYMS)", issuer: "Indonesian Young Scientist Association (IYSA)", year: "2025", type: "Science in Islam Competition", url: "https://drive.google.com/file/d/1_AqjSozqHX26KLORHyCgTEXLIDAbOfa2/view?usp=sharing" },
            { title: "CCNA: Introduction to Network", issuer: "Cisco Netwroking Academy", year: "2025", type: "Certification", url: "https://drive.google.com/file/d/1KH-kSlz4svPt_AFn4my3BJhxcroYntss/view?usp=sharing" },
            { title: "Microsoft Office Specialist Excel 2016", issuer: "Certiport 'a Pearson VUE business'", year: "2025", type: "Certification", url: "https://drive.google.com/file/d/1H5XzQVHy3gGMb-h58oOrS8FmLBDMNcCJ/view?usp=sharing" },
            { title: "AI Eengineer Learning Path", issuer: "Dicoding Indonesia", year: "2025-2026", type: "Certification", url: "https://drive.google.com/file/d/15ZtqhjXurb-2qD8lEfBxaTqL1qZjkLub/view?usp=sharing" },
            { title: "MLOps Engineer Learning Path", issuer: "Dicoding Indonesia", year: "2025-2026", type: "Bootcamp Certification", url: "https://drive.google.com/file/d/15nGNXKb1LL0C2Ee4W6SnjC9stDwcJcUs/view?usp=sharing" },
            { title: "S.O.L.I.D Programming Principles", issuer: "Dicoding Indonesia", year: "2026", type: "Certification", url: "https://drive.google.com/file/d/1JSVjyLsVjj_Om-otvgcfeCI6UjswIi7E/view?usp=sharing" },
            { title: "Reinforcement Learning with Python Projects", issuer: "Udemy", year: "2026", type: "Bootcamp Certification", url: "https://drive.google.com/file/d/1-LpFXmN-gxUt3G0CUx7tvtfjIvbYrXuT/view?usp=sharing" },
            { title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp", issuer: "Udemy", year: "2026", type: "Bootcamp Certification", url: "#" }
        ]
    },
    skills: {
        meta: "BY CATEGORY",
        groups: [
            { title: "Frontend", items: ["React", "TypeScript", "HTML", "TailwindCSS"] },
            { title: "Backend", items: ["Laravel", "Python", "Microsoft SQL Server", "RESTful API"] },
            { title: "Machine Learning & Artificial Intelligence", items: ["Data Visualization", "TensorFlow", "Natural Language Processing", "Computer Vision", "System Recomender", "Predictive Analysis"] },
            { title: "Mobile", items: ["React Native", "Expo Go"] },
            { title: "DevOps & Tools", items: ["Git", "GitHub", "Postman", "Microsoft Azure"] },
            { title: "Softskills", items: ["Critical Thinking", "Problem Solving", "Project Management", "Leadership"] }
        ]
    },
    blog: {
        meta: "FROM MEDIUM",
        mediumUrl: "https://medium.com/@febryofibonacciamadeo",
        moreLabel: "See all in Medium",
        posts: [
            { title: "Cooming Soon", excerpt: "Summary.", date: "Jan 2026", url: "#" }
        ]
    },
    contact: {
        meta: "CHANNEL",
        statusText: "Be open to job opportunities",
        coordLines: ["Komplek Permata Biru, Bandung, West Java, Indonesian - 40624", "RESPONSE — < 24 hour"],
        links: [
            { label: "Email", href: "mailto:febryofibonacciamadeo@gmail.com" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/febryofibonaccia" },
            { label: "GitHub", href: "https://www.github.com/febryofibonacciamadeo" },
            { label: "Instagram", href: "https://www.instagram.com/ffibonaccia" },
            { label: "WhatsApp", href: "https://wa.me/+6282111949075" }
        ]
    },
    footer: { left: "© 2026 Febryo Fibonacci Amadeo", right: "All righst reserved" }
};

// Inisial otomatis dari DATA.name — dipakai di boot screen dan placeholder foto.
const INITIALS = DATA.name.trim().split(/\s+/).filter(Boolean)
    .map(w => w[0]).slice(0, 2).join('').toUpperCase() || '••';

/* ---------------- parallax per-section (gaya scrollytelling) ---------------- */
(function(){
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduceMotion) return;

    const speeds = [0.10, 0.16, 0.12, 0.18, 0.13, 0.17, 0.11];
    const layers = [...document.querySelectorAll('.section-bg')].map((el, i) => ({
        el, speed: speeds[i % speeds.length]
    }));

    let ticking = false;
    function apply(){
        const vh = window.innerHeight;
        for(const layer of layers){
        const rect = layer.el.parentElement.getBoundingClientRect();
        const centerOffset = (rect.top + rect.height / 2) - vh / 2;
        layer.el.style.transform = `translateY(${centerOffset * layer.speed}px)`;
        }
        ticking = false;
    }
    function onScroll(){
        if(!ticking){ requestAnimationFrame(apply); ticking = true; }
    }
    window.addEventListener('scroll', onScroll, { passive:true });
    window.addEventListener('resize', onScroll);
    apply();
})();

/* ---------------- background parallax saat scroll ---------------- */
(function(){
    const bgParallax = document.getElementById('bgParallax');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduceMotion) return; // latar tetap statis, animasi CSS juga sudah dinonaktifkan global

    let ticking = false;
    function apply(){
        const y = window.scrollY || 0;
        bgParallax.style.transform = `translateY(${y * 0.18}px)`;
        ticking = false;
    }
    function onScroll(){
        if(!ticking){ requestAnimationFrame(apply); ticking = true; }
    }
    window.addEventListener('scroll', onScroll, { passive:true });
    apply();
})();

/* ---------------- efek glow pada cursor ------------------ */
(function(){
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!hasFinePointer || reduceMotion) return; // hanya desktop + mouse, hormati reduce-motion

    const glow = document.getElementById('cursorGlow');
    let raf = null;

    function move(e){
        if(raf) return;
        raf = requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX - 180}px, ${e.clientY - 180}px)`;
        glow.style.opacity = '1';
        raf = null;
        });
    }
    window.addEventListener('mousemove', move, { passive:true });
    window.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
})();
/* ---------------- boot screen: layar loading gaya booting laptop ---------------- */
(function(){
    const screenEl = document.getElementById('bootScreen');
    const markEl = document.getElementById('bootMark');
    const barEl = document.getElementById('bootBarFill');
    const statusEl = document.getElementById('bootStatus');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    markEl.textContent = INITIALS;

    document.documentElement.style.overflow = 'hidden';

    function finishBoot(){
        document.documentElement.style.overflow = '';
        screenEl.classList.add('hide');
        setTimeout(() => screenEl.remove(), 650);
    }

    if(reduceMotion){
        screenEl.classList.add('show-mark');
        barEl.style.width = '100%';
        statusEl.textContent = 'Loading…';
        setTimeout(finishBoot, 500);
        return;
    }

    requestAnimationFrame(() => screenEl.classList.add('show-mark'));

    const statuses = ['Assembling the interface', 'Loading profile data', 'Preparing connection', 'Almost Done...'];
    let progress = 0;
    let statusIndex = 0;
    statusEl.textContent = statuses[0];

    function tick(){
        progress += 10;
        if(progress >= 100){
            progress = 100;
            barEl.style.width = '100%';
            statusEl.textContent = 'Done';
            setTimeout(finishBoot, 400);
            return;
        }
        barEl.style.width = progress + '%';
        const nextStatus = Math.min(statuses.length - 1, Math.floor((progress / 100) * statuses.length));
        if(nextStatus !== statusIndex){ statusIndex = nextStatus; statusEl.textContent = statuses[statusIndex]; }
        setTimeout(tick, 180 + Math.random() * 160);
    }
    setTimeout(tick, 350);
})();

/* ---------------- render dari DATA ---------------- */
document.getElementById('heroKicker').textContent = DATA.kicker;
document.getElementById('heroName').textContent = DATA.name;
document.getElementById('heroRole').textContent = DATA.role;
document.getElementById('heroCta').innerHTML = DATA.heroLinks
  .map(l => `<a class="${l.primary ? 'primary' : ''}" href="#${l.target}">${l.label}</a>`).join('');

document.getElementById('aboutMeta').textContent = DATA.about.meta;
document.getElementById('aboutBody').innerHTML += DATA.about.paragraphs.map(p => `<p>${p}</p>`).join('');
document.getElementById('photoFrame').innerHTML = DATA.photo
  ? `<img src="${DATA.photo}" alt="Foto ${DATA.name}"><span class="tint"></span>`
  : `<div class="placeholder">${INITIALS}</div>`;

document.getElementById('expMeta').textContent = DATA.experience.meta;
document.getElementById('timeline').innerHTML = DATA.experience.jobs.map(j => `
  <div class="job">
    <div class="period mono">${j.period}</div>
    <div>
      <h3>${j.role}</h3>
      <div class="company">${j.company}</div>
      <ul>${j.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>
  </div>`).join('');

// Pola ukuran kartu proyek berulang otomatis agar rapi untuk 5–10 item
const PROJECT_SIZE_PATTERN = ['feature','small','wide','small','small','feature','wide','small','small','small'];
document.getElementById('projMeta').textContent = DATA.projects.meta;
document.getElementById('gallery').innerHTML = DATA.projects.items.map((p, i) => {
  const size = PROJECT_SIZE_PATTERN[i % PROJECT_SIZE_PATTERN.length];
  return `
  <a class="project ${size}" href="${p.url}" target="_blank" rel="noopener">
    <span class="year mono">${p.year}</span>
    <div>
      <h3>${p.title}</h3>
      <p>${p.blurb}</p>
      <div class="stack">${p.stack.map(s => `<span class="mono">${s}</span>`).join('')}</div>
    </div>
  </a>`;
}).join('');

const SEAL_SVG = `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="18" stroke="#34C77B" stroke-width="1.4"/>
  <circle cx="20" cy="20" r="12.5" stroke="#34C77B" stroke-width="1" stroke-dasharray="2 3"/>
  <path d="M14 20.5l4 4 8-9" stroke="#34C77B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
document.getElementById('certMeta').textContent = DATA.certifications.meta;
document.getElementById('certGrid').innerHTML = DATA.certifications.items.map(c => `
    <a class="cert" href="${c.url}" target="_blank" rel="noopener">
        <span class="seal">${SEAL_SVG}</span>
        <div>
            <h3>${c.title}</h3>
            <div class="issuer mono">${c.issuer} · ${c.year}</div>
            <span class="tag">${c.type}</span>
        </div>
    </a>`
).join('');

document.getElementById('skillMeta').textContent = DATA.skills.meta;
document.getElementById('skillGroups').innerHTML = DATA.skills.groups.map(g => `
    <div class="skill-group">
        <h3>${g.title}</h3>
        <ul>${g.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`
).join('');

document.getElementById('blogMeta').textContent = DATA.blog.meta;
document.getElementById('blogGrid').innerHTML = DATA.blog.posts.map(p => `
    <a class="blog-card" href="${p.url}" target="_blank" rel="noopener">
        <div>
            <span class="date mono">${p.date}</span>
            <h3>${p.title}</h3>
            <p>${p.excerpt}</p>
        </div>
        <span class="read mono">Baca tulisan</span>
  </a>`
).join('');
const blogMoreLink = document.getElementById('blogMoreLink');
blogMoreLink.href = DATA.blog.mediumUrl;
blogMoreLink.textContent = DATA.blog.moreLabel;

document.getElementById('contactMeta').textContent = DATA.contact.meta;
document.getElementById('statusText').textContent = DATA.contact.statusText;
document.getElementById('coordBlock').innerHTML = DATA.contact.coordLines.map(c => `<div>${c}</div>`).join('');
document.getElementById('contactLinks').innerHTML = DATA.contact.links
    .map(l => `<a href="${l.href}">${l.label}</a>`).join('');

document.getElementById('footerLeft').textContent = DATA.footer.left;
document.getElementById('footerRight').textContent = DATA.footer.right;

/* ---------------- side index: active state + scroll progress rail ---------------- */
const navButtons = document.querySelectorAll('nav.index button');
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById(btn.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
    });
});
const sections = [...navButtons].map(b => document.getElementById(b.dataset.target)).filter(Boolean);
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) navButtons.forEach(b => b.classList.toggle('active', b.dataset.target === e.target.id));
    });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => io.observe(s));

const railFill = document.getElementById('railFill');
function updateRail(){
    const doc = document.documentElement;
    const scrolled = (doc.scrollTop) / (doc.scrollHeight - doc.clientHeight);
    railFill.style.height = Math.min(100, Math.max(0, scrolled * 100)) + '%';
}
document.addEventListener('scroll', updateRail, { passive:true });
window.addEventListener('resize', updateRail);
updateRail();

/* ---------------- hero: rotating wireframe data-sphere ---------------- */
(function(){
    const canvas = document.getElementById('heroCanvas');
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w, h, dpr = Math.min(devicePixelRatio, 2);
    let points = [];
    let angle = 0;

    function buildSphere(n, radius){
        const pts = [];
        const golden = Math.PI * (3 - Math.sqrt(5));
        for(let i=0;i<n;i++){
        const y = 1 - (i / (n-1)) * 2;
        const r = Math.sqrt(1 - y*y);
        const theta = golden * i;
        pts.push({ x: Math.cos(theta)*r*radius, y: y*radius, z: Math.sin(theta)*r*radius });
        }
        return pts;
    }

    function resize(){
        const rect = canvas.getBoundingClientRect();
        w = canvas.width = rect.width * dpr;
        h = canvas.height = rect.height * dpr;
        const radius = Math.min(w,h) * 0.30;
        points = buildSphere(70, radius);
    }

    function draw(){
        ctx.clearRect(0,0,w,h);
        const cx = w/2, cy = h/2;
        const cosA = Math.cos(angle), sinA = Math.sin(angle);
        const projected = points.map(p => {
        const x = p.x*cosA - p.z*sinA;
        const z = p.x*sinA + p.z*cosA;
        const scale = 900 / (900 + z);
        return { x: cx + x*scale, y: cy + p.y*scale, z, scale };
        });

        const linkDist = Math.min(w,h) * 0.16;
        for(let i=0;i<projected.length;i++){
        for(let j=i+1;j<projected.length;j++){
            const a = projected[i], b = projected[j];
            const dx=a.x-b.x, dy=a.y-b.y;
            const d = Math.sqrt(dx*dx+dy*dy);
            if(d < linkDist){
            const avgZ = (a.z+b.z)/2;
            const alpha = Math.max(0, 0.35 - avgZ/2400);
            ctx.strokeStyle = `rgba(52,199,123,${alpha})`;
            ctx.lineWidth = 1 * dpr;
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
            }
        }
        }
        projected.sort((a,b)=>a.z-b.z);
        for(const p of projected){
        const alpha = 0.4 + (1 - (p.z+400)/900) * 0.4;
        ctx.fillStyle = `rgba(236,241,234,${Math.max(0.15,Math.min(1,alpha))})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, 2*p.scale*dpr*0.5, 0, Math.PI*2); ctx.fill();
        }

        if(!reduceMotion){ angle += 0.0022; requestAnimationFrame(draw); }
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
})();