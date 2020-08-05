$( document ).ready(function() {
    const data  = [{"databaseId":40,"title":"AC","slug":"ac","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Assistant Commercial","type":"poste","definition":"","isMore":null,"moreContent":null}]}},{"databaseId":36,"title":"CA","slug":"ca","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Conseillé Artisant","type":"poste","definition":"","isMore":null,"moreContent":null}]}},{"databaseId":34,"title":"CRM","slug":"crm","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Customer Relationship Management","type":"outil","definition":"Logiciel de gestion de la relation client (suivi, relance...)","isMore":null,"moreContent":null}]}},{"databaseId":60,"title":"DCO","slug":"dco","defs":{"items":[{"deprecated":true,"referto":[{"databaseId":58}],"fullname":"Direction de la Communication","type":"direction","definition":"Ancien nom de DMCO.","isMore":null,"moreContent":null}]}},{"databaseId":38,"title":"DD","slug":"dd","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Délégué Départemental","type":"poste","definition":"","isMore":null,"moreContent":null}]}},{"databaseId":17,"title":"DDD","slug":"ddd","defs":{"items":[{"deprecated":null,"referto":[{"databaseId":18}],"fullname":"Direction Du Digital","type":"direction","definition":"<div><br />\r\n<div>Reprehenderit repellendus excepturi, odio consectetur quae asperiores inventore voluptates sunt <strong>laboriosam aut nesciunt</strong> iusto libero quibusdam explicabo ratione vel perspiciatis, a deserunt eaque rerum. Itaque incidunt nam amet culpa, assumenda id inventore accusamus omnis rem officiis a aspernatur excepturi nemo quos voluptatum totam quibusdam voluptatem.</div><br />\r\n</div>","isMore":null,"moreContent":null}]}},{"databaseId":28,"title":"DDTC","slug":"ddtc","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Direction du Développement et des Compétences","type":"direction","definition":"<div><br />\r\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta provident quasi ut itaque? Perferendis ea, cumque quas vel voluptas delectus quaerat temporibus hic odio! Ducimus doloremque voluptates odit mollitia impedit officia rem. Quisquam praesentium ducimus accusantium hic temporibus numquam odio quasi, neque fugiat nam tempora? Ipsam eaque nesciunt architecto expedita!</div><br />\r\n</div>","isMore":null,"moreContent":null}]}},{"databaseId":26,"title":"DFP","slug":"dfp","defs":{"items":[{"deprecated":true,"referto":[{"databaseId":28}],"fullname":"Direction de la Formation Professionnelle","type":"direction","definition":"<div><br />\r\n<div>Direction en charge de la création et de la diffusion des formations internes.</div><br />\r\n</div>","isMore":null,"moreContent":null}]}},{"databaseId":58,"title":"DMCO","slug":"dmco","defs":{"items":[{"deprecated":null,"referto":[],"fullname":"Direction du Marketing et de la Communication","type":"direction","definition":"","isMore":null,"moreContent":null}]}},{"databaseId":42,"title":"DR","slug":"dr","defs":{"items":[{"deprecated":null,"referto":[],"fullname":"Direction Régional","type":"direction","definition":"PRO BTP compte 9 directions régionale, numérotée par ordre alphabétique de la ville qui abrite les locaux :<br />\r\n<ul><br />\r\n \t<li>DR1 -</li><br />\r\n \t<li>DR2 -</li><br />\r\n \t<li>DR3 -</li><br />\r\n \t<li>DR4 -</li><br />\r\n \t<li>DR5 -</li><br />\r\n \t<li>DR6 -</li><br />\r\n \t<li>DR7 -</li><br />\r\n \t<li>DR8 -</li><br />\r\n \t<li>DR9 -</li><br />\r\n</ul>","isMore":null,"moreContent":null},{"deprecated":null,"referto":[],"fullname":"Directeur Régional","type":"poste","definition":"Directeur d'une direction régionale","isMore":null,"moreContent":null}]}},{"databaseId":63,"title":"DRIS","slug":"dris","defs":{"items":[{"deprecated":null,"referto":[],"fullname":"Direction des RISques","type":"direction","definition":"","isMore":null,"moreContent":null}]}},{"databaseId":65,"title":"HRAccess","slug":"hraccess","defs":{"items":[{"deprecated":null,"referto":[],"fullname":null,"type":"outil","definition":"HRAccess est notre logiciel de gestion de la paie","isMore":null,"moreContent":null}]}},{"databaseId":47,"title":"Lotus","slug":"lotus","defs":{"items":[{"deprecated":null,"referto":[],"fullname":null,"type":"outil","definition":"Lotus est un logiciel interne qui comporte entre autre les fonctions de client mail, de base documentaire...","isMore":null,"moreContent":null}]}},{"databaseId":67,"title":"Multisupport CONFIANCE","slug":"multisupport-confiance","defs":{"items":[{"deprecated":null,"referto":[],"fullname":null,"type":"produit_service","definition":"Le Multisupport CONFIANCE est un contrat d’assurance vie.","isMore":true,"moreContent":"<p>Le Multisupport CONFIANCE est un contrat d’assurance vie. C’est un placement simple et modulable, offrant de nombreux avantages. Il associe, au choix : un fonds en euros dont le capital net investi est garanti et plusieurs supports en unités de compte pour s’adapter à votre sensibilité au risque.</p>\n<blockquote><p>\nNOUVEAU : la formule « Gestion à horizon » qui vous permet de bénéficier de l’évolution des marchés boursiers tout en sécurisant votre capital.</p></blockquote>\n<div class=\"ficheSection\">\n<h2>Une solution d&rsquo;épargne personnalisée</h2>\n<div>\n<div class=\"wysiwyg classic\">\n<p>À chaque objectif correspond un support précis. À vous de composer le placement qui vous correspond !</p>\n<div class=\"wysiwyg classic\">\n<div class=\"wysiwyg classic\">\n<p>&nbsp;</p>\n<table border=\"1\">\n<tbody>\n<tr>\n<td>Objectif</td>\n<td>Supports</td>\n<td>Échelle de risque et d&rsquo;espérance de rendement<br />\n(de 1 à 7)</td>\n<td>Durée de placement recommandée</td>\n</tr>\n<tr>\n<td>Sécuriser votre placement en bénéficiant d’une croissance régulière de votre épargne.</td>\n<td><strong>Livret CONFIANCE<sup>®</sup></strong></p>\n<p>(Fonds en euros à capital garanti)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque1.png\" alt=\"risque1.png (risque1)\" /></td>\n<td></td>\n</tr>\n<tr>\n<td>Préserver votre capital investi sur le marché monétaire dans l’attente de nouvelles opportunités sur d’autres supports d’investissement.</td>\n<td><strong>Regard Monétaire Euros<sup>(1)</sup></strong></p>\n<p>(Fonds monétaire)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque1.png\" alt=\"risque1.png (risque1)\" /></td>\n<td>Inférieure à 1 an</td>\n</tr>\n<tr>\n<td>Rechercher une croissance régulière du capital, grâce à des investissements sur des obligations diversifiées.</td>\n<td><strong>Regard Obligations Diversifiées<sup> (1)</sup></strong></p>\n<p>(Fonds obligataire)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque3.png\" alt=\"risque3.png (risque3)\" /></td>\n<td>Supérieure à 3 ans</td>\n</tr>\n<tr>\n<td>Investissez dans l&rsquo;immobilier professionnel, un marché potentiellement plus rémunérateur que les marchés obligataires et monétaires, sans exposition directe aux marchés actions, mais lié aux risques des marchés de l&rsquo;immobilier de bureaux.</td>\n<td><strong>Regard Immobilier<sup> (1)</sup></strong></p>\n<p>(Fonds immobilier)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque3.png\" alt=\"risque3.png (risque3)\" /></td>\n<td>Supérieure à 8 ans</td>\n</tr>\n<tr>\n<td>Privilégier une espérance de gain élevée sur le long terme, contrepartie d’un risque important de fluctuation de la valeur de l’épargne essentiellement investie sur les marchés actions.</td>\n<td><strong>Regard Actions<sup> (1)</sup></strong></p>\n<p>(Fonds actions)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque5.png\" alt=\"risque5.png (risque5)\" /></td>\n<td>Supérieure à 5 ans</td>\n</tr>\n<tr>\n<td>Valoriser le capital investi grâce à la gestion prudente d’obligations, dynamisée par un investissement modéré en actions.</td>\n<td><strong>Regard Prudent<sup> (2)</sup></strong></p>\n<p>(Fonds diversifié)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque3.png\" alt=\"risque3.png (risque3)\" /></td>\n<td>Supérieure à 3 ans</td>\n</tr>\n<tr>\n<td>Rechercher un équilibre entre sécurité et performance, avec une prise de risque mesurée.</td>\n<td><strong>Regard Équilibré<sup> (2)</sup></strong></p>\n<p>(Fonds diversifié)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque3.png\" alt=\"risque3.png (risque3)\" /></td>\n<td>Supérieure à 5 ans</td>\n</tr>\n<tr>\n<td>Rechercher une performance dynamique sur le long terme, avec une épargne largement investie sur les marchés actions, en contrepartie d’une prise de risque élevée.</td>\n<td><strong>Regard Dynamique<sup> (2)</sup></strong></p>\n<p>(Fond diversifié)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque4.png\" alt=\"risque4.png (risque4)\" /></td>\n<td>Supérieure à 5 ans</td>\n</tr>\n<tr>\n<td>Epargner en conciliant développement durable, approche responsable et rendement financier.</td>\n<td><strong>Regard Responsable Flexible</strong></p>\n<p>(Fond diversifié)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque4.png\" alt=\"risque4.png (risque4)\" /></td>\n<td>Supérieure à 5 ans</td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>\n<p><strong>Risque nul</strong> <img class=\"\" title=\"echelle-risque.\" src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/echelle-risque.png\" alt=\"echelle-risque.png (echelle-risque)\" width=\"83\" height=\"30\" /> <strong>Risque très élevé </strong></p>\n<p><em>Plus l&rsquo;indicateur est élevé, plus la prise de risque et l&rsquo;espérance de rendement sont importantes.</em></p>\n<p><em>Les montants investis sur les supports en unités de compte ne sont pas garantis et sont sujets à des fluctuations à la hausse ou à la baisse, dépendant en particulier de l’évolution des marchés financiers.</em></p>\n<p><sup>(1) Fonds purs : si vous souhaitez piloter livrement la répartition de vos investissements.<br />\n</sup><sup>(2) Fonds profilés : si vous préférez suivre un profil d&rsquo;investissement déterminé par un objectif et un risque.</sup></p>\n</div>\n</div>\n</div>\n</div>\n</div>\n"}]}},{"databaseId":51,"title":"ProTalents","slug":"protalents","defs":{"items":[{"deprecated":null,"referto":[],"fullname":null,"type":"outil","definition":"ProTalents est notre solution de gestion des compétences. C'est en accédant à ProTalents que vous pourrez suivre vos formation à distance et encore renseigner vos entretiens annuels.","isMore":null,"moreContent":null}]}},{"databaseId":18,"title":"RSE","slug":"rse","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Rséeau Social d'Entreprise","type":"outil","definition":"<div><br />\r\n<div>Architecto modi perferendis facilis libero nulla quas qui molestias similique odio cumque laborum hic, minus quis expedita perspiciatis molestiae aspernatur nesciunt reiciendis repellat temporibus in provident itaque repudiandae sequi! Corporis expedita, error minima quam beatae esse earum tempore iure ex odit accusantium eius itaque distinctio, rerum fugiat reiciendis quos nihil magni libero praesentium mollitia? Laborum consectetur, quas, velit, quaerat rem animi corrupti praesentium aspernatur recusandae et quis.</div><br />\r\n</div>","isMore":null,"moreContent":null},{"deprecated":null,"referto":null,"fullname":"Responsabilité Sociale de l'Entreprise","type":"produit_service","definition":"<div><br />\r\n<div>Itaque incidunt nam amet culpa, assumenda id inventore accusamus omnis rem officiis a aspernatur excepturi nemo quos voluptatum totam quibusdam voluptatem. Corporis expedita, error minima quam beatae esse earum tempore iure ex odit accusantium eius itaque distinctio, rerum fugiat reiciendis quos nihil magni libero praesentium mollitia? Laborum consectetur, quas, velit, quaerat rem animi corrupti praesentium aspernatur recusandae et quis.</div><br />\r\n</div>","isMore":null,"moreContent":null}]}},{"databaseId":45,"title":"Sametime","slug":"sametime","defs":{"items":[{"deprecated":null,"referto":[{"databaseId":47}],"fullname":null,"type":"outil","definition":"<div><br />\r\n<div>Sametime est notre outils de messagerie instantané. Sametime est accessible depuis Lotus.</div><br />\r\n</div>","isMore":null,"moreContent":null}]}},{"databaseId":56,"title":"Service plus","slug":"service-plus","defs":{"items":[{"deprecated":null,"referto":[],"fullname":"PRO BTP Service plus","type":"produit_service","definition":"PRO BTP Service plus est...","isMore":null,"moreContent":null}]}},{"databaseId":54,"title":"TalentSoft","slug":"talentsoft","defs":{"items":[{"deprecated":null,"referto":[{"databaseId":51}],"fullname":null,"type":"outil","definition":"<div><br />\r\n<div>TalentSoft est le nom générique de la solution ProTalent.</div><br />\r\n</div>","isMore":null,"moreContent":null}]}}];
        
    
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
    
      
        $('#reset').click(function(){
          $('#search').val('');
          resetContainerClass();
          mainSearch();
        })
    
        var lastScrollTop = 0;
        $(window).scroll(function(event){
           var st = $(this).scrollTop();
           if (st > lastScrollTop){
               // downscroll code
               $('#search').blur();
               $('#search').addClass('form-control-sm');
               $('#reset').addClass('btn-scroll btn-sm');
           } else {
              // upscroll code
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
    showResult();
    function docReady(fn) {
        // see if DOM is already available
        if (
          document.readyState === 'complete' ||
          document.readyState === 'interactive'
        ) {
          // call on next available tick
          setTimeout(fn, 1);
        } else {
          document.addEventListener('DOMContentLoaded', fn);
        }
      }
      
      function handleNetworkChange(event) {
        if (navigator.onLine) {
          document.querySelector('#body').classList.remove('offline');
        } else {
          document.querySelector('#body').classList.add('offline');
        }
      }
      
      
      window.addEventListener('load', () => {
        window.addEventListener('online', handleNetworkChange);
        window.addEventListener('offline', handleNetworkChange);
      });
      
      docReady(handleNetworkChange);
      
      
      
      
      
      let deferredPrompt;
      
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI notify the user they can install the PWA
        $('#installPromptModal').modal('show');
      });
      
      let buttonInstall = document.querySelector('#install-btn');
      
      buttonInstall.addEventListener('click', (e) => {
        // Hide the app provided install promotion
        // hideMyInstallPromotion();
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          // if (choiceResult.outcome === 'accepted') {
          //   console.log('User accepted the install prompt');
          // } else {
          //   console.log('User dismissed the install prompt');
          // }
          $('#installPromptModal').modal('hide');
        });
      });
      
    })

    