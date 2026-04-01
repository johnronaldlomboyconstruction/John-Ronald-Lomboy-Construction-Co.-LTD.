const STORAGE_KEY = "jrlConstructionContentV1";
const INQUIRIES_KEY = "jrlConstructionInquiriesV1";
const THEME_KEY = "jrlConstructionThemeV1";

const defaults = {
  businessName: "John Ronald Lomboy Construction Co. LTD.",
  industryShort: "Construction • Glass • Aluminum • Steel • Roofing",
  heroTitle: "Trusted Construction, Glass, Aluminum, Steel, and Roofing Solutions",
  heroSubtitle: "Upgrade your home or business with modern, sleek, durable, and space-saving workmanship by trusted professionals.",
  heroBtn1: "Free Estimate",
  heroBtn1Alt: "Message Us Now",
  heroBtn2: "Get Free Estimate",
  aboutTitle: "Professional Design, Construction, and Fabrication Solutions",
  aboutText: "From architectural design to renovation, aluminum cabinets, glass works, steel fabrication, roofing installation, and roll-up works, our company handles each project with precision, honest service, and attention to detail. We focus on creating results that are modern, long-lasting, and built around our clients’ needs.",
  missionText: "To deliver strong, stylish, and long-lasting construction and fabrication solutions with honest service and quality workmanship.",
  visionText: "To become one of the most trusted names in construction and fabrication services in Cavite and nearby areas.",
  featuredProjectText: "Supply and installation of Aluminum Wardrobe Cabinet with sliding door mirror glass and built-in drawers — designed for style, durability, and space-saving functionality.",
  locationText: "B6 L1 California Extension North 1, San Marino, Brgy. Salawag, Dasmariñas City, Cavite",
  contactPerson1: "Ronald Lomboy: 0999-7290-460 / 0945-7395-885",
  contactPerson2: "John Ronald Lomboy: 0970-3269-291",
  emailText: "JRLomboyConstruction@gmail.com",
  facebookText: "John Ronald Lomboy Construction Co. LTD.",
  gallery1: "Aluminum Wardrobe Cabinet",
  gallery2: "Sliding Windows",
  gallery3: "Roofing Installation",
  gallery4: "Modular Cabinets",
  gallery5: "Steel Fabrication",
  gallery6: "Store Front Installation",
  footerSummary: "John Ronald Lomboy Construction Co. LTD. delivers trusted construction, glass, aluminum, steel, roofing, and roll-up services with professionalism, durability, and modern workmanship for residential and commercial projects.",
  footerBusinessName: "John Ronald Lomboy Construction Co. LTD.",
  footerAddress: "B6 L1 California Extension North 1, San Marino, Brgy. Salawag, Dasmariñas City, Cavite",
  footerEmail: "JRLomboyConstruction@gmail.com",
  footerFacebook: "John Ronald Lomboy Construction Co. LTD.",
  footerPhone: "Ronald Lomboy: 0999-7290-460 / 0945-7395-885",
  footerPhoneTwo: "John Ronald Lomboy: 0970-3269-291",
  sideBusinessName: "John Ronald Lomboy Construction Co. LTD.",
  sideAddress: "B6 L1 California Extension North 1, San Marino, Brgy. Salawag, Dasmariñas City, Cavite",
  sideEmail: "JRLomboyConstruction@gmail.com",
  sidePhones: "Ronald Lomboy: 0999-7290-460 / 0945-7395-885<br />John Ronald Lomboy: 0970-3269-291",
  sideFacebook: "John Ronald Lomboy Construction Co. LTD."
};

function safeParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

let content = { ...defaults, ...safeParse(localStorage.getItem(STORAGE_KEY), {}) };
let editMode = false;

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

function applyContent() {
  setText("brandName", content.businessName);
  setText("brandTag", content.industryShort);
  setText("heroTitle", content.heroTitle);
  setText("heroSubtitle", content.heroSubtitle);
  setText("ctaNav", content.heroBtn1);
  setText("heroBtnPrimary", content.heroBtn1Alt);
  setText("heroBtnSecondary", content.heroBtn2);
  setText("aboutTitle", content.aboutTitle);
  setText("aboutText", content.aboutText);
  setText("missionText", content.missionText);
  setText("visionText", content.visionText);
  setText("featuredProjectText", content.featuredProjectText);
  setText("locationText", content.locationText);
  setText("contactPerson1", content.contactPerson1);
  setText("contactPerson2", content.contactPerson2);
  setText("emailText", content.emailText);
  setText("facebookText", content.facebookText);
  setText("footerSummary", content.footerSummary);
  setText("footerBusinessName", content.footerBusinessName);
  setText("footerAddress", content.footerAddress);
  setText("footerEmail", content.footerEmail);
  setText("footerFacebook", content.footerFacebook);
  setText("footerPhone", content.footerPhone);
  setText("footerPhoneTwo", content.footerPhoneTwo);
  setText("sideBusinessName", content.sideBusinessName);
  setText("sideAddress", content.sideAddress);
  setText("sideEmail", content.sideEmail);
  setHTML("sidePhones", content.sidePhones);
  setText("sideFacebook", content.sideFacebook);

  document.querySelectorAll(".gallery-card").forEach((card, index) => {
    const labelKey = `gallery${index + 1}`;
    const span = card.querySelector("span");
    if (span && content[labelKey]) {
      span.textContent = content[labelKey];
      card.dataset.label = content[labelKey];
    }
  });

  const firstLetters = (content.businessName || "JR").split(" ").slice(0, 2).map(x => x[0] || "").join("").toUpperCase();
  const brandMark = document.querySelector(".brand-mark");
  if (brandMark) brandMark.textContent = firstLetters || "JR";

  fillAdminInputs();
}

function fillAdminInputs() {
  const map = {
    adminBusinessName: content.businessName,
    adminBrandTag: content.industryShort,
    adminHeroTitle: content.heroTitle,
    adminHeroSubtitle: content.heroSubtitle,
    adminAboutText: content.aboutText,
    adminLocation: content.locationText,
    adminEmail: content.emailText,
    adminContact1: content.contactPerson1,
    adminContact2: content.contactPerson2,
    adminGallery1: content.gallery1,
    adminGallery2: content.gallery2,
    adminGallery3: content.gallery3,
    adminGallery4: content.gallery4,
    adminGallery5: content.gallery5,
    adminGallery6: content.gallery6
  };

  Object.entries(map).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
  });
}

function persistContent() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

function showToast(message) {
  const stack = document.getElementById("toastStack");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  stack.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(16px)";
    setTimeout(() => toast.remove(), 280);
  }, 2600);
}

function renderInquiries() {
  const container = document.getElementById("recentInquiries");
  const items = safeParse(localStorage.getItem(INQUIRIES_KEY), []);

  if (!items.length) {
    container.innerHTML = '<div class="recent-item empty">New submissions saved with localStorage will appear here.</div>';
    return;
  }

  container.innerHTML = items.slice().reverse().slice(0, 5).map(item => `
    <div class="recent-item">
      <strong>${escapeHtml(item.name)} • ${escapeHtml(item.service)}</strong>
      <div>${escapeHtml(item.phone)} • ${escapeHtml(item.email)}</div>
      <div>${escapeHtml(item.message)}</div>
      <small>${escapeHtml(item.date)}</small>
    </div>
  `).join("");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toggleTheme() {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
  document.getElementById("themeToggle").textContent = isLight ? "☾" : "☀";
}

function loadTheme() {
  const theme = localStorage.getItem(THEME_KEY) || "dark";
  if (theme === "light") document.body.classList.add("light");
  document.getElementById("themeToggle").textContent = document.body.classList.contains("light") ? "☾" : "☀";
}

function openAdmin() {
  document.getElementById("adminPanel").classList.add("show");
  document.getElementById("adminBackdrop").classList.add("show");
}

function closeAdmin() {
  document.getElementById("adminPanel").classList.remove("show");
  document.getElementById("adminBackdrop").classList.remove("show");
}

function saveAdmin() {
  content.businessName = document.getElementById("adminBusinessName").value.trim() || defaults.businessName;
  content.industryShort = document.getElementById("adminBrandTag").value.trim() || defaults.industryShort;
  content.heroTitle = document.getElementById("adminHeroTitle").value.trim() || defaults.heroTitle;
  content.heroSubtitle = document.getElementById("adminHeroSubtitle").value.trim() || defaults.heroSubtitle;
  content.aboutText = document.getElementById("adminAboutText").value.trim() || defaults.aboutText;
  content.locationText = document.getElementById("adminLocation").value.trim() || defaults.locationText;
  content.emailText = document.getElementById("adminEmail").value.trim() || defaults.emailText;
  content.contactPerson1 = document.getElementById("adminContact1").value.trim() || defaults.contactPerson1;
  content.contactPerson2 = document.getElementById("adminContact2").value.trim() || defaults.contactPerson2;
  content.gallery1 = document.getElementById("adminGallery1").value.trim() || defaults.gallery1;
  content.gallery2 = document.getElementById("adminGallery2").value.trim() || defaults.gallery2;
  content.gallery3 = document.getElementById("adminGallery3").value.trim() || defaults.gallery3;
  content.gallery4 = document.getElementById("adminGallery4").value.trim() || defaults.gallery4;
  content.gallery5 = document.getElementById("adminGallery5").value.trim() || defaults.gallery5;
  content.gallery6 = document.getElementById("adminGallery6").value.trim() || defaults.gallery6;

  content.facebookText = defaults.facebookText;
  content.footerBusinessName = content.businessName;
  content.footerAddress = content.locationText;
  content.footerEmail = content.emailText;
  content.footerFacebook = content.facebookText;
  content.footerPhone = content.contactPerson1;
  content.footerPhoneTwo = content.contactPerson2;
  content.sideBusinessName = content.businessName;
  content.sideAddress = content.locationText;
  content.sideEmail = content.emailText;
  content.sidePhones = `${content.contactPerson1}<br />${content.contactPerson2}`;
  content.sideFacebook = content.facebookText;

  persistContent();
  applyContent();
  showToast("Admin changes saved.");
}

function toggleInlineEdit() {
  editMode = !editMode;
  document.querySelectorAll("[id][contenteditable]").forEach(node => {
    node.contentEditable = editMode ? "true" : "false";
  });
  document.getElementById("toggleEditMode").textContent = editMode ? "Disable Edit Mode" : "Enable Edit Mode";

  if (!editMode) {
    [
      "heroTitle","heroSubtitle","aboutTitle","aboutText","missionText","visionText","featuredProjectText",
      "locationText","contactPerson1","contactPerson2","emailText","facebookText","footerSummary",
      "footerBusinessName","footerAddress","footerEmail","footerFacebook","footerPhone","footerPhoneTwo"
    ].forEach(id => {
      const el = document.getElementById(id);
      if (el) content[id] = el.textContent.trim();
    });
    persistContent();
    applyContent();
    showToast("Inline content saved.");
  } else {
    showToast("Edit mode enabled.");
  }
}

function resetContent() {
  if (!confirm("Reset all saved website content to default?")) return;
  localStorage.removeItem(STORAGE_KEY);
  content = { ...defaults };
  applyContent();
  showToast("Content reset to default.");
}

function setupFAQ() {
  document.querySelectorAll(".faq-item").forEach(item => {
    const button = item.querySelector(".faq-question");
    button.addEventListener("click", () => {
      item.classList.toggle("active");
      button.querySelector("span:last-child").textContent = item.classList.contains("active") ? "−" : "+";
    });
  });
}

function setupGallery() {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");

  document.querySelectorAll(".gallery-card").forEach(card => {
    card.addEventListener("click", () => {
      image.src = card.dataset.image;
      image.alt = card.dataset.label;
      caption.textContent = card.dataset.label;
      lightbox.classList.add("show");
    });
  });

  document.getElementById("lightboxClose").addEventListener("click", () => lightbox.classList.remove("show"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("show");
  });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupAdminShortcut() {
  let clicks = 0;
  let timer = null;
  document.getElementById("adminTrigger").addEventListener("click", () => {
    clicks += 1;
    clearTimeout(timer);
    timer = setTimeout(() => clicks = 0, 600);
    if (clicks >= 3) {
      clicks = 0;
      openAdmin();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
      e.preventDefault();
      openAdmin();
    }
    if (e.key === "Escape") {
      closeAdmin();
      document.getElementById("lightbox").classList.remove("show");
    }
  });
}

function setupForm() {
  document.getElementById("inquiryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const item = Object.fromEntries(fd.entries());

    if (!item.name || !item.phone || !item.email || !item.service || !item.message) {
      showToast("Please complete all required fields.");
      return;
    }

    const inquiries = safeParse(localStorage.getItem(INQUIRIES_KEY), []);
    inquiries.push({ ...item, date: new Date().toLocaleDateString() });
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
    e.currentTarget.reset();
    renderInquiries();
    showToast("Inquiry submitted successfully.");
  });
}

function init() {
  loadTheme();
  applyContent();
  renderInquiries();
  setupReveal();
  setupFAQ();
  setupGallery();
  setupForm();
  setupMenu();
  setupAdminShortcut();

  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("closeAdmin").addEventListener("click", closeAdmin);
  document.getElementById("adminBackdrop").addEventListener("click", closeAdmin);
  document.getElementById("saveAdmin").addEventListener("click", saveAdmin);
  document.getElementById("toggleEditMode").addEventListener("click", toggleInlineEdit);
  document.getElementById("resetContent").addEventListener("click", resetContent);
}

document.addEventListener("DOMContentLoaded", init);
