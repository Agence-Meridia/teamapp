$(document).ready(function () {
  $('#identification').on('submit', function (e) {
    e.preventDefault();

    const user = $('#utl').val();
    const pass = $('#mdp').val();

    if (user === 'admin' && pass === 'team2024') {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'admin.html';
    } else {
      alert('Identifiants incorrects');
    }
  });
});
