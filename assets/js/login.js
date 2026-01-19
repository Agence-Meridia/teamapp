$(document).ready(function () {

  $('#identification').on('submit', function (e) {
    e.preventDefault();

    const user = $('#utl').val().trim();
    const pass = $('#mdp').val().trim();

    if (user === '' || pass === '') {
      alert('Veuillez remplir les champs');
      return;
    }

    // IDENTIFIANTS FAKE
    if (user === 'admin' && pass === 'team2024') {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'admin.html';
    } else {
      alert('Identifiants incorrects');
    }
  });

});
