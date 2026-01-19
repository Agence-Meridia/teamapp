$(document).ready(function () {

  $('#identification').on('submit', function (e) {
    e.preventDefault(); // empêche le rechargement

    const user = $('#utl').val();
    const pass = $('#mdp').val();

    if (user === '' || pass === '') {
      alert('Veuillez remplir les champs');
      return;
    }

    // FAKE LOGIN OK
    localStorage.setItem('loggedIn', 'true');

    // redirection vers la page admin
    window.location.href = 'admin.html';
  });

});
