var typingTimer;
var doneTypingInterval = 3000;
var moreContainer = document.querySelector('#more');
const searchField = $('#search');
function showResult() {
  searchField.keyup(mainSearch);
  function mainSearch() {
    $(document).scrollTop(0);
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
        var cardHTML = `<div class="card" id="${node.databaseId}"><div class="card-header"><h1 class="card-title">${node.title}</h1></div>`;
        var defCount = 1;
        $.each(node.defs.items, function (i, def) {
          if (defTotalCount == 1) {
            defCountHTML = `<div class="def-count-container def-count-hidden"><div class="def-count def-count-hidden">${defCount}</div><div class="small light def-type"> &nbsp;${def.type}</div></div>`;
          } else {
            defCountHTML = `<div class="def-count-container"><div class="def-count">${defCount}</div><div class="small light def-type"> &nbsp;${def.type}</div></div>`;
          }
          var disable = '';
          var disableSpan = '';
          var seeHTML = '';
          var moreHTML = '';
          if (def.deprecated == true) {
            disable = 'deprecated';
            disableSpan = `<p class="deprecated" style="opacity:1">Obsolète</p>`;
          }
          if (def.referto != null) {
            $.each(def.referto, function (i, ref) {
              seeHTML += `<p class="val_see">Voir : `;
              var see = data.find(
                (node) => node.databaseId === def.referto[i].databaseId
              );
              seeHTML += `&nbsp;&nbsp;<i class="card-text val_see_value text-warning" data-value="${see.title}">${see.title}</i>`;
              seeHTML += `</p>`;
            });
          }
          if (def.isMore == true) {
            moreHTML +=
              '<button class="more-content btn" data-id="' +
              node.databaseId +
              defCount +
              '"><span class="small">Plus  d\'info...</span></button>';
          }
          var fullname = '';
          if (def.fullname) {
            fullname = `<h2>${def.fullname}</h2>`;
          }
          var definition = '<i>aucune définition</i>';
          if (def.definition) {
            definition = def.definition;
          }
          cardHTML += `<div class="def">${defCountHTML}<div class="def-content ${disable}">${disableSpan}${fullname}${definition} ${seeHTML}${moreHTML}</div></div>`;
          defCount++;
        });
        cardHTML += `</div>`;
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
        '<div class="back-btn btn btn-sm btn-primary mb-3 small" style="cursor:pointer; position:sticky; top:-20px" onnclik="resetContainerClass()">< retour</div><div>' +
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
      $('body').addClass('scroll-down');
    } else {
      $('body').removeClass('scroll-down');
    }
    lastScrollTop = st;
  });
  $('#search').click(function () {
    $('body').removeClass('scroll-down');
  });
  searchField.on('keydown', function () {
    clearTimeout(typingTimer);
  });
  function doneTyping() {
    $('#search').blur();
    if ($('#search').val() != '') {
      $('body').addClass('scroll-down');
    }
  }
}
