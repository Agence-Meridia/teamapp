$(document).ready(function () {

  var rowCount = $('.table tbody tr').length;

  if (rowCount >= 1) {

    $(".table").tablesorter({
      headers: {7: {sorter: false}},
      dateFormat: 'uk',
      sortList: [[6, 0]]
    });

    function initialiseOrdre() {
      $('.ordre').each(function () {
        $(this).html($(this).parent().index());
      });
      $(".table").trigger("update");
    }

    initialiseOrdre();

    $('td, th', '#sortlist').each(function () {
      var cell = $(this);
      cell.width(cell.width());
    });

    $("#sortlist tbody.content").sortable({
      placeholder: 'fantome',
      items: '> tr',
      forcePlaceholderSize: true,
      update: function () {
        alert("⚠️ Le tri est désactivé en version statique (Netlify)");
        $(this).sortable("cancel");
      }
    });
  }

  $("#sortlist tbody.content").disableSelection();
});
