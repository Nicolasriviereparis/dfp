var typingTimer;
var doneTypingInterval = 3000;
var moreContainer = document.querySelector('#more');
const searchField = $('#search');
function showResult() {
  searchField.keyup(mainSearch);
  function mainSearch() {
    resetContainerClass();
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
    $('#result').html('');
    const expression = new RegExp(searchField.val(), 'i');
    $.each(data, function (key, node) {
      if (searchField.val() != '' && node.title.search(expression) != -1) {
        var defTotalCount = 0;
        $.each(node.defs.items, function (i, def) {
          defTotalCount++;
        });
        var cardHTML = `<div class="card mb-2 bg-white" id="${node.databaseId}"><div class="card-body"><h4 class="card-title h5 text-primary"><b>${node.title}</b></h4>`;
        var defCount = 1;
        $.each(node.defs.items, function (i, def) {
          if (defTotalCount == 1) {
            defCountHTML = ``;
          } else {
            defCountHTML = `<span class="defcount bg-light">${defCount}</span>`;
          }
          var disable = null;
          var disableSpan = '';
          var seeHTML = '';
          var moreHTML = '';
          if (def.deprecated == true) {
            disable = 'deprecated';
            disableSpan = `<h5 class="text-danger h6" style="opacity:1"><i style="opacity:.6">Obsolète</i></h5>`;
          }
          if (def.referto != null) {
            seeHTML += `<div class="val_see">`;
            $.each(def.referto, function (i, ref) {
              var see = data.find(
                (node) => node.databaseId === def.referto[i].databaseId
              );
              seeHTML += `<i class="card-text val_see_value text-warning mr-3" data-value="${see.title}">Voir ${see.title}</i>`;
            });
            seeHTML += `</div>`;
          }
          if (def.isMore == true) {
            moreHTML +=
              '<button class="more-content btn btn-sm btn-outline-dark" data-id="' +
              node.databaseId +
              defCount +
              '"><span class="small">Plus  d\'info...</span></button>';
          }
          if (defCount > 1) {
            cardHTML += `<hr />`;
          }
          var fullname = '';
          if (def.fullname) {
            fullname = def.fullname;
          }
          var definition = '<i>aucune définition</i>';
          if (def.definition) {
            definition = def.definition;
          }
          cardHTML += `<div class="mt-2 ${disable}">${disableSpan}<h5 class="h6 ard-text val_fullname text-dark font-weight-bold">${defCountHTML}${fullname} <span class="card-subtitle val_type small font-weight-light text-secondary"> —&nbsp;${def.type}</span></h5><p class="card-text val_desc text-secondary">${definition} ${seeHTML}</p>${moreHTML}<div class="more"><a href="#" class="card-link">Card link</a><a href="#" class="card-link">Another link</a></div></div>`;
          defCount++;
        });
        cardHTML += `</div></div>`;
        $('#result').append(cardHTML);
      }
    });
    totalResult();
    referTo();
    displayMoreContent();
  }
  function totalResult() {
    var totalResult = $('.card').length;
    if (totalResult == 0 && searchField.val() == '') {
      $('#count').html(
        '<span class="mt-5 pt-5"> <br /></span><br /><b>Commencez à taper votre recherche dans le champ ci-dessus pour parcourir le Larouse PRO BTP !</b><br />Pour toute demande d’évolution ou d’ajout de notion, cliquez sur le bouton “contact” en bas à droite.'
      );
    } else if (totalResult == 0 && searchField.val() != '') {
      $('#count').html(
        '<span class="display-4">:(</span><br /><br />Aucun résultat...'
      );
    } else {
      $('#count').html('');
    }
  }
  function referTo() {
    var searchField = $('#search');
    $('.val_see_value').click(function () {
      var target = $(this).data('value');
      searchField.val(target);
      searchField.html(target);
      $('#search').keyup(mainSearch());
    });
  }
  function resetContainerClass() {
    $('#result-container').removeClass('left');
    $('#result-container').addClass('focus');
    $('#more-container').removeClass('focus');
    $('#more-container').addClass('right');
    setTimeout(() => {
      $('#more-container').delay(800).html('');
    }, 500);
  }
  function displayMoreContent() {
    $('.more-content').click(function () {
      function getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
          if (!obj.hasOwnProperty(i)) continue;
          if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
          } else if (i == key && obj[key] == val) {
            objects.push(obj);
          }
        }
        return objects;
      }
      moreHTMLContent = '';
      var id = $(this).data('id');
      var id = '' + id;
      var parentId = id.substr(0, 2) * 1;
      var currentId = id.substr(2, 1) - 1;
      var obj = getObjects(data, 'databaseId', parentId)[0].defs.items[
        currentId
      ];
      moreHTMLContent =
        '<div class="back-btn btn btn-sm btn-primary mb-3 small" style="cursor:pointer" onnclik="resetContainerClass()">< retour</div><div>' +
        obj.moreContent +
        '</div>';
      $('#more-container').removeClass('right');
      $('#more-container').addClass('focus');
      $('#result-container').removeClass('focus');
      $('#result-container').addClass('left');
      $('#more-container').append(moreHTMLContent);
      $('.back-btn').click(function () {
        resetContainerClass();
      });
    });
  }
  $('#reset').click(function () {
    $('#search').val('');
    resetContainerClass();
    mainSearch();
  });
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $('#search').blur();
      $('#search').addClass('form-control-sm');
      $('#reset').addClass('btn-scroll btn-sm');
    } else {
      $('#search').blur();
      $('#search').removeClass('form-control-sm');
      $('#reset').removeClass('btn-scroll btn-sm');
    }
    lastScrollTop = st;
  });
  searchField.on('keydown', function () {
    clearTimeout(typingTimer);
  });
  function doneTyping() {
    $('#search').blur();
  }
}
