
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}


function closeMenu() {
  const menu = document.getElementById('menu');
  menu.classList.remove('active');
}
const modal = document.getElementById('modal');

function showModal() {
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}


function showModal(projectId) {
  const modal = document.getElementById('modal');
  const swiperWrapper = document.getElementById('swiper-wrapper');

  modal.classList.add('active');
}



function showCategory(category) {
  const sections = document.querySelectorAll(".projects-container");
  sections.forEach(section => {
    section.style.display = "none";
  });

  const selectedSection = document.getElementById(category);
  if (selectedSection) {
    selectedSection.style.display = "flex";
  }
}

// ✅ تشغيل تلقائي لقسم الويب عند تحميل الصفحة
window.onload = function () {
  showCategory('web');
};

Fancybox.bind("[data-fancybox]", {
  Thumbs: {
    autoStart: true,
  },
  Toolbar: {
    display: ["zoom", "slideShow", "fullScreen", "close"],
  },
});



function loadCSS(href) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;

  link.media = 'only x';
  link.onload = function () {

    link.media = 'all';
  };
  document.head.appendChild(link);
}


function loadScript(src, callback) {
  var script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = function () {
    if (callback) callback();
  };
  document.body.appendChild(script);
}



loadCSS('./style.css');


loadScript('./script.js', function () {
  console.log('تم تحميل script.js بنجاح');
});
