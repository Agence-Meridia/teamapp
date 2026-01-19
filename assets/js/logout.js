<script>
function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}
</script>
