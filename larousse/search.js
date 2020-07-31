$(document).ready(function () {
    $('#search').keyup(mainSearch);
    const searchField = $('#search');
  
    function mainSearch() {
      $('#result').html('');
      const expression = new RegExp(searchField.val(), 'i');
      // console.log(expression);
      $.getJSON("data.json", function(data){
      $.each(data, function (key, value) {
        const node = value.node;
        if (searchField.val() != '' && node.title.search(expression) != -1) {
          var defTotalCount = 0;
          $.each(node.defs.items, function (i, def) {
            defTotalCount++;
          });
  
          var cardHTML = `<div class="card mb-2 bg-white"><div class="card-body"><h4 class="card-title h5 text-primary"><b>${node.title}</b></h4>`;
          var defCount = 1;
          $.each(node.defs.items, function (i, def) {
            if (defTotalCount == 1) {
              defCountHTML = ``;
            } else {
              defCountHTML = `<span class="defcount bg-light">${defCount}</span>`;
            }
            var disable = null;
            var disableSpan = ''
            var seeHTML = '';
            if (def.deprecated == true) {
              disable = 'deprecated';
              disableSpan = `<h5 class="text-danger h6" style="opacity:1"><i style="opacity:.6">Obsolète</i></h5>`;
              if (def.referto != null) {
                    seeHTML += `<span class="val_see">`;
                  $.each((def.referto), function(i,ref) {
                    var see = data.find( (value) => value.node.databaseId === (def.referto[i].databaseId) ).node;
                    // console.log(see.title);
                    seeHTML += `<i class="card-text val_see_value text-warning mr-3" data-value="${see.title}">Voir ${see.title}</i>`
                });
                seeHTML += `</span>`;
                // console.log(see);
              }
            }
            if (defCount > 1) {
              cardHTML += `<hr />`;
            }
            var fullname = '';
            if (def.fullname){fullname = def.fullname};
            var definition = '<i>aucune définition</i>';
            if (def.definition){definition = def.definition};
            cardHTML += `
                <div class="mt-2 ${disable}">
                    ${disableSpan}
                  <h5 class="h6 ard-text val_fullname text-dark font-weight-bold">${defCountHTML}${fullname} <span class="card-subtitle val_type small font-weight-light text-secondary"> —&nbsp;${def.type}</span></h5>
                  <p class="card-text val_desc text-secondary">${definition} ${seeHTML}</p>
                  <div class="more">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                </div>`;
            defCount++;
          });
          cardHTML += `</div></div>`;
          $('#result').append(cardHTML);
        }
      });
      totalResult();
      referTo();
    });
    }
  
    function totalResult(){
      var totalResult = $('.card').length;
      if (totalResult == 0 && searchField.val() == '') {
        $('#count').html(
          '<span class="mt-5 pt-5"> <br /></span><br /><b>Commencez à taper votre recherche dans le champ ci-dessus pour parcourir le Larouse PRO BTP !</b><br />Pour toute demande d’évolution ou d’ajout de notion, cliquez sur le bouton “contact” en bas à droite.'
        );
      } else if (totalResult == 0 && searchField.val() != '') {
        $('#count').html(
          '<span class="display-4">:(</span><br /><br />Aucun résultat...'
        );
      } else if (totalResult == 1) {
        $('#count').html(totalResult + ' résultat');
      } else {
        $('#count').html(totalResult + ' résultats');
      }
    };
  
    function referTo() {
      var searchField = $('#search');
      $( ".val_see_value" ).click(function() {
        var target = $(this).data('value');
  
        searchField.val(target);
        searchField.html(target);
        $('#search').keyup(mainSearch());
      });
    };
  
  });
  