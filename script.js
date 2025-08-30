
if (!localStorage.getItem('cookiesAccepted')) {
  document.getElementById('cookie-banner').style.display = 'flex';
}

document.getElementById('accept-btn').addEventListener('click', function() {
  localStorage.setItem('cookiesAccepted', 'true'); 
  document.getElementById('cookie-banner').style.display = 'none'; 
});
