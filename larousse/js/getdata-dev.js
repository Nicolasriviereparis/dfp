var url = 'data.json';
fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' } })
  .then((res) => res.json())
  .then((json) => {
    json.sort(function (a, b) {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    JSON.stringify(json);
    return json;
  })
  .then((json) => (data = json))
  .then(() => showResult(data))
  .catch((err) => console.log('Une erreur' + err));

  //////////////////////////////////////
  // Delete flowing part for production

const data = [{"databaseId":40,"title":"AC","slug":"ac","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Assistant Commercial","type":"poste","definition":"","isMore":null,"moreContent":null}]}},{"databaseId":36,"title":"CA","slug":"ca","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Conseillé Artisant","type":"poste","definition":"","isMore":null,"moreContent":null}]}},{"databaseId":34,"title":"CRM","slug":"crm","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Customer Relationship Management","type":"outil","definition":"Logiciel de gestion de la relation client (suivi, relance...)","isMore":null,"moreContent":null}]}},{"databaseId":60,"title":"DCO","slug":"dco","defs":{"items":[{"deprecated":true,"referto":[{"databaseId":58}],"fullname":"Direction de la Communication","type":"direction","definition":"Ancien nom de DMCO.","isMore":null,"moreContent":null}]}},{"databaseId":38,"title":"DD","slug":"dd","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Délégué Départemental","type":"poste","definition":"","isMore":null,"moreContent":null}]}},{"databaseId":17,"title":"DDD","slug":"ddd","defs":{"items":[{"deprecated":null,"referto":[{"databaseId":18}],"fullname":"Direction Du Digital","type":"direction","definition":"<div><br />\r\n<div>Reprehenderit repellendus excepturi, odio consectetur quae asperiores inventore voluptates sunt <strong>laboriosam aut nesciunt</strong> iusto libero quibusdam explicabo ratione vel perspiciatis, a deserunt eaque rerum. Itaque incidunt nam amet culpa, assumenda id inventore accusamus omnis rem officiis a aspernatur excepturi nemo quos voluptatum totam quibusdam voluptatem.</div><br />\r\n</div>","isMore":null,"moreContent":null}]}},{"databaseId":28,"title":"DDTC","slug":"ddtc","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Direction du Développement et des Compétences","type":"direction","definition":"<div><br />\r\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta provident quasi ut itaque? Perferendis ea, cumque quas vel voluptas delectus quaerat temporibus hic odio! Ducimus doloremque voluptates odit mollitia impedit officia rem. Quisquam praesentium ducimus accusantium hic temporibus numquam odio quasi, neque fugiat nam tempora? Ipsam eaque nesciunt architecto expedita!</div><br />\r\n</div>","isMore":null,"moreContent":null}]}},{"databaseId":26,"title":"DFP","slug":"dfp","defs":{"items":[{"deprecated":true,"referto":[{"databaseId":28}],"fullname":"Direction de la Formation Professionnelle","type":"direction","definition":"<div><br />\r\n<div>Direction en charge de la création et de la diffusion des formations internes.</div><br />\r\n</div>","isMore":null,"moreContent":null}]}},{"databaseId":58,"title":"DMCO","slug":"dmco","defs":{"items":[{"deprecated":null,"referto":[],"fullname":"Direction du Marketing et de la Communication","type":"direction","definition":"","isMore":null,"moreContent":null}]}},{"databaseId":42,"title":"DR","slug":"dr","defs":{"items":[{"deprecated":null,"referto":[],"fullname":"Direction Régional","type":"direction","definition":"PRO BTP compte 9 directions régionale, numérotée par ordre alphabétique de la ville qui abrite les locaux :<br />\r\n<ul><br />\r\n \t<li>DR1 -</li><br />\r\n \t<li>DR2 -</li><br />\r\n \t<li>DR3 -</li><br />\r\n \t<li>DR4 -</li><br />\r\n \t<li>DR5 -</li><br />\r\n \t<li>DR6 -</li><br />\r\n \t<li>DR7 -</li><br />\r\n \t<li>DR8 -</li><br />\r\n \t<li>DR9 -</li><br />\r\n</ul>","isMore":null,"moreContent":null},{"deprecated":null,"referto":[],"fullname":"Directeur Régional","type":"poste","definition":"Directeur d'une direction régionale","isMore":null,"moreContent":null}]}},{"databaseId":63,"title":"DRIS","slug":"dris","defs":{"items":[{"deprecated":null,"referto":[],"fullname":"Direction des RISques","type":"direction","definition":"","isMore":null,"moreContent":null}]}},{"databaseId":65,"title":"HRAccess","slug":"hraccess","defs":{"items":[{"deprecated":null,"referto":[],"fullname":null,"type":"outil","definition":"HRAccess est notre logiciel de gestion de la paie","isMore":null,"moreContent":null}]}},{"databaseId":47,"title":"Lotus","slug":"lotus","defs":{"items":[{"deprecated":null,"referto":[],"fullname":null,"type":"outil","definition":"Lotus est un logiciel interne qui comporte entre autre les fonctions de client mail, de base documentaire...","isMore":null,"moreContent":null}]}},{"databaseId":67,"title":"Multisupport CONFIANCE","slug":"multisupport-confiance","defs":{"items":[{"deprecated":null,"referto":[],"fullname":null,"type":"produit_service","definition":"Le Multisupport CONFIANCE est un contrat d’assurance vie.","isMore":true,"moreContent":"<p>Le Multisupport CONFIANCE est un contrat d’assurance vie. C’est un placement simple et modulable, offrant de nombreux avantages. Il associe, au choix : un fonds en euros dont le capital net investi est garanti et plusieurs supports en unités de compte pour s’adapter à votre sensibilité au risque.</p>\n<blockquote><p>\nNOUVEAU : la formule « Gestion à horizon » qui vous permet de bénéficier de l’évolution des marchés boursiers tout en sécurisant votre capital.</p></blockquote>\n<div class=\"ficheSection\">\n<h2>Une solution d&rsquo;épargne personnalisée</h2>\n<div>\n<div class=\"wysiwyg classic\">\n<p>À chaque objectif correspond un support précis. À vous de composer le placement qui vous correspond !</p>\n<div class=\"wysiwyg classic\">\n<div class=\"wysiwyg classic\">\n<p>&nbsp;</p>\n<table border=\"1\">\n<tbody>\n<tr>\n<td>Objectif</td>\n<td>Supports</td>\n<td>Échelle de risque et d&rsquo;espérance de rendement<br />\n(de 1 à 7)</td>\n<td>Durée de placement recommandée</td>\n</tr>\n<tr>\n<td>Sécuriser votre placement en bénéficiant d’une croissance régulière de votre épargne.</td>\n<td><strong>Livret CONFIANCE<sup>®</sup></strong></p>\n<p>(Fonds en euros à capital garanti)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque1.png\" alt=\"risque1.png (risque1)\" /></td>\n<td></td>\n</tr>\n<tr>\n<td>Préserver votre capital investi sur le marché monétaire dans l’attente de nouvelles opportunités sur d’autres supports d’investissement.</td>\n<td><strong>Regard Monétaire Euros<sup>(1)</sup></strong></p>\n<p>(Fonds monétaire)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque1.png\" alt=\"risque1.png (risque1)\" /></td>\n<td>Inférieure à 1 an</td>\n</tr>\n<tr>\n<td>Rechercher une croissance régulière du capital, grâce à des investissements sur des obligations diversifiées.</td>\n<td><strong>Regard Obligations Diversifiées<sup> (1)</sup></strong></p>\n<p>(Fonds obligataire)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque3.png\" alt=\"risque3.png (risque3)\" /></td>\n<td>Supérieure à 3 ans</td>\n</tr>\n<tr>\n<td>Investissez dans l&rsquo;immobilier professionnel, un marché potentiellement plus rémunérateur que les marchés obligataires et monétaires, sans exposition directe aux marchés actions, mais lié aux risques des marchés de l&rsquo;immobilier de bureaux.</td>\n<td><strong>Regard Immobilier<sup> (1)</sup></strong></p>\n<p>(Fonds immobilier)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque3.png\" alt=\"risque3.png (risque3)\" /></td>\n<td>Supérieure à 8 ans</td>\n</tr>\n<tr>\n<td>Privilégier une espérance de gain élevée sur le long terme, contrepartie d’un risque important de fluctuation de la valeur de l’épargne essentiellement investie sur les marchés actions.</td>\n<td><strong>Regard Actions<sup> (1)</sup></strong></p>\n<p>(Fonds actions)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque5.png\" alt=\"risque5.png (risque5)\" /></td>\n<td>Supérieure à 5 ans</td>\n</tr>\n<tr>\n<td>Valoriser le capital investi grâce à la gestion prudente d’obligations, dynamisée par un investissement modéré en actions.</td>\n<td><strong>Regard Prudent<sup> (2)</sup></strong></p>\n<p>(Fonds diversifié)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque3.png\" alt=\"risque3.png (risque3)\" /></td>\n<td>Supérieure à 3 ans</td>\n</tr>\n<tr>\n<td>Rechercher un équilibre entre sécurité et performance, avec une prise de risque mesurée.</td>\n<td><strong>Regard Équilibré<sup> (2)</sup></strong></p>\n<p>(Fonds diversifié)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque3.png\" alt=\"risque3.png (risque3)\" /></td>\n<td>Supérieure à 5 ans</td>\n</tr>\n<tr>\n<td>Rechercher une performance dynamique sur le long terme, avec une épargne largement investie sur les marchés actions, en contrepartie d’une prise de risque élevée.</td>\n<td><strong>Regard Dynamique<sup> (2)</sup></strong></p>\n<p>(Fond diversifié)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque4.png\" alt=\"risque4.png (risque4)\" /></td>\n<td>Supérieure à 5 ans</td>\n</tr>\n<tr>\n<td>Epargner en conciliant développement durable, approche responsable et rendement financier.</td>\n<td><strong>Regard Responsable Flexible</strong></p>\n<p>(Fond diversifié)</td>\n<td><img src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/risque4.png\" alt=\"risque4.png (risque4)\" /></td>\n<td>Supérieure à 5 ans</td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>\n<p><strong>Risque nul</strong> <img class=\"\" title=\"echelle-risque.\" src=\"https://www.probtp.com/files/live/sites/probtp/files/media/images/inutilisees/echelle-risque.png\" alt=\"echelle-risque.png (echelle-risque)\" width=\"83\" height=\"30\" /> <strong>Risque très élevé </strong></p>\n<p><em>Plus l&rsquo;indicateur est élevé, plus la prise de risque et l&rsquo;espérance de rendement sont importantes.</em></p>\n<p><em>Les montants investis sur les supports en unités de compte ne sont pas garantis et sont sujets à des fluctuations à la hausse ou à la baisse, dépendant en particulier de l’évolution des marchés financiers.</em></p>\n<p><sup>(1) Fonds purs : si vous souhaitez piloter livrement la répartition de vos investissements.<br />\n</sup><sup>(2) Fonds profilés : si vous préférez suivre un profil d&rsquo;investissement déterminé par un objectif et un risque.</sup></p>\n</div>\n</div>\n</div>\n</div>\n</div>\n"}]}},{"databaseId":51,"title":"ProTalents","slug":"protalents","defs":{"items":[{"deprecated":null,"referto":[],"fullname":null,"type":"outil","definition":"ProTalents est notre solution de gestion des compétences. C'est en accédant à ProTalents que vous pourrez suivre vos formation à distance et encore renseigner vos entretiens annuels.","isMore":null,"moreContent":null}]}},{"databaseId":18,"title":"RSE","slug":"rse","defs":{"items":[{"deprecated":null,"referto":null,"fullname":"Rséeau Social d'Entreprise","type":"outil","definition":"<div><br />\r\n<div>Architecto modi perferendis facilis libero nulla quas qui molestias similique odio cumque laborum hic, minus quis expedita perspiciatis molestiae aspernatur nesciunt reiciendis repellat temporibus in provident itaque repudiandae sequi! Corporis expedita, error minima quam beatae esse earum tempore iure ex odit accusantium eius itaque distinctio, rerum fugiat reiciendis quos nihil magni libero praesentium mollitia? Laborum consectetur, quas, velit, quaerat rem animi corrupti praesentium aspernatur recusandae et quis.</div><br />\r\n</div>","isMore":null,"moreContent":null},{"deprecated":null,"referto":null,"fullname":"Responsabilité Sociale de l'Entreprise","type":"produit_service","definition":"<div><br />\r\n<div>Itaque incidunt nam amet culpa, assumenda id inventore accusamus omnis rem officiis a aspernatur excepturi nemo quos voluptatum totam quibusdam voluptatem. Corporis expedita, error minima quam beatae esse earum tempore iure ex odit accusantium eius itaque distinctio, rerum fugiat reiciendis quos nihil magni libero praesentium mollitia? Laborum consectetur, quas, velit, quaerat rem animi corrupti praesentium aspernatur recusandae et quis.</div><br />\r\n</div>","isMore":null,"moreContent":null}]}},{"databaseId":45,"title":"Sametime","slug":"sametime","defs":{"items":[{"deprecated":null,"referto":[{"databaseId":47}],"fullname":null,"type":"outil","definition":"<div><br />\r\n<div>Sametime est notre outils de messagerie instantané. Sametime est accessible depuis Lotus.</div><br />\r\n</div>","isMore":null,"moreContent":null}]}},{"databaseId":56,"title":"Service plus","slug":"service-plus","defs":{"items":[{"deprecated":null,"referto":[],"fullname":"PRO BTP Service plus","type":"produit_service","definition":"PRO BTP Service plus est...","isMore":null,"moreContent":null}]}},{"databaseId":54,"title":"TalentSoft","slug":"talentsoft","defs":{"items":[{"deprecated":null,"referto":[{"databaseId":51}],"fullname":null,"type":"outil","definition":"<div><br />\r\n<div>TalentSoft est le nom générique de la solution ProTalent.</div><br />\r\n</div>","isMore":null,"moreContent":null}]}}];
showResult(data);