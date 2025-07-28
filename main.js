// Hero animation
document.addEventListener('mousemove', function (e) {
  const canvas = document.getElementById('hero-animation');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = 320;
  ctx.clearRect(0, 0, w, h);
  let cx = e.clientX / w, cy = e.clientY / h;
  for (let i = 0; i < 15; i++) {
    ctx.beginPath();
    ctx.arc(
      w / 2 + Math.sin(cx * 6 + i) * 70,
      h / 2 + Math.cos(cy * 5 + i) * 60,
      18 + i * 2,
      0,
      Math.PI * 2
    );
    ctx.strokeStyle = `rgba(15,145,232,${0.09 + i / 140})`;
    ctx.lineWidth = 2 + i / 4;
    ctx.stroke();
  }
});

window.addEventListener('resize', function () {
  const canvas = document.getElementById('hero-animation');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = 320;
  }
});

// Navbar toggle for mobile & dropdown logic
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navMain = document.querySelector('.nav-main');
  const allDropdownToggles = document.querySelectorAll('.nav-dropdown > .nav-link, .nav-dropdown > button.nav-btn');

  allDropdownToggles.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // Close other open dropdowns
      document.querySelectorAll('.dropdown-menu.show').forEach(function (d) {
        if (d !== btn.nextElementSibling) d.classList.remove('show');
      });
      // Toggle clicked dropdown
      btn.nextElementSibling.classList.toggle('show');
    });
  });

  document.body.addEventListener('click', function (e) {
    // Hide all open dropdowns if clicking outside
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.dropdown-menu.show').forEach(function (d) {
        d.classList.remove('show');
      });
    }
  });

  if (toggle && navMain) {
    toggle.onclick = function () {
      navMain.classList.toggle('open');
    };
  }
});
