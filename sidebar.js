const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('toggleSidebar');
const mobileToggleBtn = document.getElementById('mobileToggle');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  feather.replace();
});

mobileToggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  feather.replace();
});
