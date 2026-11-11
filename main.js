(() => {
  "use strict";

  const config = window.TFS_CONFIG || {};
  const root = document.documentElement;
  const loader = document.getElementById("loader");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("primaryNav");
  const languageToggle = document.getElementById("languageToggle");
  const themeToggle = document.getElementById("themeToggle");
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  const translations = {
    id: {
      navAbout:"Tentang", navPhilosophy:"Filosofi", navLearning:"Area Belajar", navFaq:"FAQ", navContact:"Hubungi Kami",
      heroEyebrow:"A LEARNING COMMUNITY FOR THE NEXT GENERATION", heroLine1:"THE FIRST STEP", heroLine2:"menuju masa depan.", heroDescription:"Membangun pola pikir yang lebih tajam melalui literasi finansial, pemahaman pasar, dan keberanian untuk menciptakan masa depan.", discover:"Jelajahi lebih jauh",
      aboutKicker:"WHO WE ARE", aboutOverline:"BUKAN SEKADAR TENTANG MEMULAI.", aboutTitle:"Setiap langkah pertama adalah awal dari <span>kemungkinan besar.</span>", aboutText:"THE F1RST STEP adalah komunitas pembelajaran yang mendorong individu untuk memahami dunia finansial, mengeksplorasi peluang bisnis, dan mengembangkan kapasitas diri.", aboutText2:"Kami percaya kemajuan dibangun melalui pengetahuan, disiplin, dan keputusan yang dipertimbangkan dengan baik.",
      philosophyKicker:"OUR PHILOSOPHY", philosophyLead:"Kemajuan bukan tentang bergerak paling cepat, tetapi bergerak dengan arah yang tepat.", principleLabel:"OUR POINT OF VIEW", philosophyTitle:"Think forward.<br><em>Build with purpose.</em>", philosophyText:"Berpikir jangka panjang. Memahami risiko. Mengubah wawasan menjadi tindakan yang memiliki tujuan.",
      principlesKicker:"CORE PRINCIPLES", principlesTitle:"Prinsip yang membentuk <span>cara kami bertumbuh.</span>", p1Title:"Data Over Opinion", p1Text:"Mengutamakan fakta, riset, dan analisis dibanding asumsi atau spekulasi.", p2Title:"Risk Before Profit", p2Text:"Memahami risiko dan menjaga proses sebelum mengejar hasil.", p3Title:"Growth Together", p3Text:"Belajar, berbagi perspektif, dan berkembang melalui kolaborasi.",
      learningKicker:"LEARNING AREAS", learningTitle:"Knowledge for <span>real-world growth.</span>", learningLead:"Tiga ruang eksplorasi untuk memperluas wawasan dan membangun kapasitas.", l1Title:"Financial Market", l1Text:"Mengenal instrumen, mekanisme pasar, manajemen risiko, dan pengambilan keputusan berbasis analisis.", l2Title:"Business & Entrepreneurship", l2Text:"Memahami model bisnis, strategi, inovasi, dan proses membangun sesuatu yang bernilai.", l3Title:"Personal Development", l3Text:"Mengembangkan disiplin, kemampuan berpikir kritis, komunikasi, dan kepemimpinan.",
      whyKicker:"WHY THE F1RST STEP", whyTitle:"Clarity is a <span>competitive advantage.</span>", why1Title:"Structured Learning", why1Text:"Belajar dengan kerangka yang jelas, bertahap, dan relevan.", why2Title:"Critical Perspective", why2Text:"Mendorong pertanyaan yang tepat, bukan sekadar menerima informasi.", why3Title:"Long-term Mindset", why3Text:"Berorientasi pada proses, konsistensi, dan pertumbuhan berkelanjutan.",
      faqTitle:"Questions, <span>answered.</span>", faqLead:"Informasi singkat untuk mengenal THE F1RST STEP lebih jauh.", faq1Q:"Apa itu THE F1RST STEP?", faq1A:"THE F1RST STEP adalah komunitas pembelajaran yang berfokus pada literasi finansial, financial market, bisnis, dan pengembangan diri.", faq2Q:"Apakah komunitas ini cocok untuk pemula?", faq2A:"Ya. Materi dan diskusi dirancang untuk membantu proses belajar dari fondasi, dengan tetap mendorong riset mandiri dan pemikiran kritis.", faq3Q:"Apakah ini merupakan layanan investasi?", faq3A:"Tidak. Konten edukasi bukan rekomendasi atau ajakan transaksi keuangan. Setiap keputusan finansial tetap menjadi tanggung jawab masing-masing individu.", faq4Q:"Bagaimana cara bergabung?", faq4A:"Hubungi kami melalui kanal komunitas resmi yang akan dicantumkan pada bagian kontak website ini.",
      contactKicker:"TAKE THE FIRST STEP", contactOverline:"YOUR NEXT CHAPTER STARTS HERE.", contactTitle:"Mulai dengan pertanyaan.<br><em>Lanjutkan dengan tujuan.</em>", contactText:"Punya pertanyaan atau ingin mengenal komunitas kami? Kirim pesan melalui formulir berikut.", formName:"Nama", formMessage:"Pesan", formNotice:"Form siap digunakan setelah alamat email tujuan dikonfigurasi di js/config.js.", sendMessage:"Kirim Pesan",
      footerTagline:"Think forward. Build with purpose.", rights:"ALL RIGHTS RESERVED.", footerNote:"EDUCATION • PERSPECTIVE • GROWTH", backTop:"Kembali ke atas ↑"
    },
    en: {
      navAbout:"About", navPhilosophy:"Philosophy", navLearning:"Learning Areas", navFaq:"FAQ", navContact:"Contact Us",
      heroEyebrow:"A LEARNING COMMUNITY FOR THE NEXT GENERATION", heroLine1:"THE FIRST STEP", heroLine2:"towards what’s next.", heroDescription:"Building sharper perspectives through financial literacy, market understanding, and the courage to shape what comes next.", discover:"Discover more",
      aboutKicker:"WHO WE ARE", aboutOverline:"MORE THAN JUST GETTING STARTED.", aboutTitle:"Every first step is the beginning of <span>greater possibilities.</span>", aboutText:"THE F1RST STEP is a learning community that encourages individuals to understand finance, explore business opportunities, and develop their capabilities.", aboutText2:"We believe progress is built through knowledge, discipline, and well-considered decisions.",
      philosophyKicker:"OUR PHILOSOPHY", philosophyLead:"Progress is not about moving the fastest, but moving in the right direction.", principleLabel:"OUR POINT OF VIEW", philosophyTitle:"Think forward.<br><em>Build with purpose.</em>", philosophyText:"Think long-term. Understand risk. Turn insight into purposeful action.",
      principlesKicker:"CORE PRINCIPLES", principlesTitle:"Principles that shape <span>how we grow.</span>", p1Title:"Data Over Opinion", p1Text:"Prioritizing facts, research, and analysis over assumptions or speculation.", p2Title:"Risk Before Profit", p2Text:"Understanding risk and protecting the process before pursuing outcomes.", p3Title:"Growth Together", p3Text:"Learning, sharing perspectives, and progressing through collaboration.",
      learningKicker:"LEARNING AREAS", learningTitle:"Knowledge for <span>real-world growth.</span>", learningLead:"Three areas of exploration to expand perspectives and build capability.", l1Title:"Financial Market", l1Text:"Explore instruments, market mechanics, risk management, and analysis-driven decisions.", l2Title:"Business & Entrepreneurship", l2Text:"Understand business models, strategy, innovation, and the process of building value.", l3Title:"Personal Development", l3Text:"Develop discipline, critical thinking, communication, and leadership.",
      whyKicker:"WHY THE F1RST STEP", whyTitle:"Clarity is a <span>competitive advantage.</span>", why1Title:"Structured Learning", why1Text:"Learn through a clear, progressive, and relevant framework.", why2Title:"Critical Perspective", why2Text:"Ask better questions instead of passively accepting information.", why3Title:"Long-term Mindset", why3Text:"Focus on process, consistency, and sustainable growth.",
      faqTitle:"Questions, <span>answered.</span>", faqLead:"A few quick answers to help you get to know THE F1RST STEP.", faq1Q:"What is THE F1RST STEP?", faq1A:"THE F1RST STEP is a learning community focused on financial literacy, financial markets, business, and personal development.", faq2Q:"Is this community suitable for beginners?", faq2A:"Yes. Learning materials and discussions support foundational learning while encouraging independent research and critical thinking.", faq3Q:"Is this an investment service?", faq3A:"No. Educational content is not financial advice or a solicitation to trade. Every financial decision remains the individual's responsibility.", faq4Q:"How can I join?", faq4A:"Contact us through the official community channels that will be added to this website's contact section.",
      contactKicker:"TAKE THE FIRST STEP", contactOverline:"YOUR NEXT CHAPTER STARTS HERE.", contactTitle:"Start with a question.<br><em>Move with intention.</em>", contactText:"Have a question or want to learn more about our community? Send us a message using the form below.", formName:"Name", formMessage:"Message", formNotice:"The form is ready once a recipient email is configured in js/config.js.", sendMessage:"Send Message",
      footerTagline:"Think forward. Build with purpose.", rights:"ALL RIGHTS RESERVED.", footerNote:"EDUCATION • PERSPECTIVE • GROWTH", backTop:"Back to top ↑"
    }
  };

  // Loading overlay
  window.addEventListener("load", () => {
    window.setTimeout(() => loader?.classList.add("is-hidden"), 350);
  });
  window.setTimeout(() => loader?.classList.add("is-hidden"), 2500);

  // Mobile navigation
  function closeMenu() {
    nav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Buka navigasi");
  }
  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    nav?.classList.toggle("is-open", !isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Buka navigasi" : "Tutup navigasi");
  });
  nav?.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => { if (window.innerWidth > 700) closeMenu(); });

  // Theme toggle with local preference
  const savedTheme = localStorage.getItem("tfs-theme");
  if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;
  themeToggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("tfs-theme", next);
    themeToggle.textContent = next === "light" ? "☾" : "☼";
  });
  themeToggle.textContent = root.dataset.theme === "light" ? "☾" : "☼";

  // Language toggle. Updates only elements with a known translation key.
  let language = localStorage.getItem("tfs-language") === "en" ? "en" : "id";
  function setLanguage(next) {
    language = next;
    root.lang = next;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const value = translations[next][element.dataset.i18n];
      if (typeof value === "string") element.innerHTML = value;
    });
    languageToggle.textContent = next === "id" ? "EN" : "ID";
    localStorage.setItem("tfs-language", next);
  }
  languageToggle?.addEventListener("click", () => setLanguage(language === "id" ? "en" : "id"));
  setLanguage(language);

  // Reveal on scroll and active navigation state
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = nav?.querySelectorAll('a[href^="#"]') || [];
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => sectionObserver.observe(section));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Configure social links only when real URLs are supplied.
  document.querySelectorAll("[data-social]").forEach(link => {
    const key = link.dataset.social;
    const url = config.social?.[key] || (key === "whatsapp" && config.whatsappNumber
      ? `https://wa.me/${String(config.whatsappNumber).replace(/\D/g, "")}` : "");
    if (url && /^https:\/\/(www\.)?(instagram\.com|linkedin\.com|wa\.me|whatsapp\.com)\//i.test(url)) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.hidden = true;
    }
  });

  // Contact form: uses the user's configured email client (mailto), no data is sent to this site.
  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const recipient = String(config.contactEmail || "").trim();
    if (!recipient || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
      formStatus.textContent = language === "id"
        ? "Alamat email tujuan belum diatur. Isi contactEmail di js/config.js terlebih dahulu."
        : "Recipient email is not configured. Set contactEmail in js/config.js first.";
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent("Website enquiry — THE F1RST STEP");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    formStatus.textContent = language === "id"
      ? "Aplikasi email akan dibuka untuk mengirim pesan Anda."
      : "Your email application will open so you can send your message.";
  });

  // Optional GA4 loader. Configure only after publishing an appropriate privacy notice/consent flow.
  const analyticsId = String(config.googleAnalyticsId || "").trim();
  if (/^G-[A-Z0-9]+$/i.test(analyticsId)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", analyticsId, { anonymize_ip: true });
  }
})();
