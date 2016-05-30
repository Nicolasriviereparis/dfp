<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output
    method="html"
    version="1.0"
    encoding="UTF-8"
    indent="yes" 
    />

    <xsl:preserve-space elements="*"/>

    <xsl:template match="/">

      <html lang="fr">
        <head>
          <title>Catalogue de formation 2016</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <link href="bootstrap.css" rel="stylesheet"></link>
          <script src="js/isotope.pkgd.js"></script>
        </head>
        <body style="background-color:rgb(0,69,127)"> 





          <header>
            <nav class="navbar-default navbar-fixed-top" style="background-color:white">
              <div class="container-fluid" style="padding:0">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-lg-5 col-lg-offset-1">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="index.php">
                        <span style="color:#ea6212; font-weight:700; margin-right:10px;">PRO BTP</span><span style="color:#00457f">Formation</span>
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-lg-4 col-lg-offset-1">
                    <div class="nav navbar-nav navbar-right hidden-xs">
                      <a href="index.php" id="accueil-btn">Accueil</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>




          <div class="container-fluid" style="padding:60px 0 20px 0">
            <xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
            <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />

            <div class="row">
              <div class="col-xs-12 col-sm-5 col-sm-offset-0 col-lg-4 col-lg-offset-1 navbar-collapse collapse" id="filters-col">
                <div id="filters">
                  <div style="padding:12px; background-color:white;">
                    <a class="h-filter" style="text-decoration:none;color: rgb(0, 69, 127)" href="catalogue/Catalogue - mai 2016.pdf" target="_blank">Téléchargez le catalogue</a>
                  </div>
                  <div style="margin:15px 0 15px 0; text-align:right;">
                    <a type="button" class="h-filter" href="catalogue.php" style="font-size:13px;">Restaurer tous les filtres</a>
                  </div>




                  <div class="filters" id="options">

                    <div class="option-set" data-group="domaines">
                      <div type="button" class="h-filter nav" data-toggle="collapse"  href="#domaine-filter">+ Domaines</div>
                      <div id="domaine-filter" class="nav nav-second-level collapse">
                        <input type="checkbox" value="" id="domaine-all" class="all" checked=""></input>
                        <label for="domaine-all">Tous les domaines</label><br/>
                        <xsl:for-each select="dataroot/ficheStage/Domaine_x0020_du_x0020_stage[not(preceding::Domaine_x0020_du_x0020_stage/. = .)]">
                          <xsl:sort select="." order="ascending"/>
                          <xsl:variable name="nomDom" select="."/>
                          <xsl:variable name="idDom" select="substring(../Identif_x0020_du_x0020_stage,2,3)"/>
                          <input type="checkbox" value=".dom-{$idDom}" id="{$nomDom}"></input>
                          <label for="{$nomDom}"><xsl:copy-of select="concat(substring(.,1,1), translate(substring(.,2), $uppercase, $lowercase))" /></label><br/>
                        </xsl:for-each>
                      </div>
                    </div>


                    <div class="option-set" data-group="competences">
                      <div type="button" class="h-filter nav" data-toggle="collapse"  href="#competences-filter">+ Compétences</div>
                      <div id="competences-filter" class="nav nav-second-level collapse">
                        <input type="checkbox" value="" id="comp-all" class="all" checked=""></input>
                        <label for="comp-all">Toutes les compétences</label><br/>
                        <xsl:for-each select="dataroot/ficheStage/Compétences/CompétenceFamille[not(preceding::CompétenceFamille/. = .)]">
                          <xsl:sort select="." order="ascending"/>
                          <xsl:variable name="compTrans" select='translate(., " &apos;,:/", "-")'/>
                          <input type="checkbox" value=".comp-{$compTrans}" id="{$compTrans}"></input>
                          <label for="{$compTrans}"><xsl:copy-of select="concat(substring(.,1,1), translate(translate(substring(.,2), $uppercase, $lowercase), '/', ' '))" />
                        </label><br/>
                      </xsl:for-each>
                    </div>
                  </div>


                  <div class="option-set" data-group="axe">
                    <div type="button" class="h-filter nav" data-toggle="collapse"  href="#axe-filter">+ Axe</div>
                    <div id="axe-filter" class="nav nav-second-level collapse">
                      <input type="checkbox" value="" id="axe-all" class="all" checked=""></input>
                      <label for="axe-all">Tous les axes</label><br />
                      <xsl:for-each select="dataroot/ficheStage/Axe/Axe_x0020_de_x0020_formation[not(preceding::Axe_x0020_de_x0020_formation/. = .)]">
                        <xsl:sort select="." order="ascending"/>
                        <xsl:variable name="metTrans" select='translate(., " &apos;,:/", "-")'/>
                        <input type="checkbox" value=".axe-{$metTrans}" id="{$metTrans}"></input>
                        <label for="{$metTrans}"><xsl:copy-of select="concat(substring(.,1,1), translate(substring(.,2), $uppercase, $lowercase))" />
                      </label><br/>
                    </xsl:for-each>
                  </div>
                </div>


                <div class="option-set" data-group="metiers">
                  <div type="button" class="h-filter nav" data-toggle="collapse"  href="#metiers-filter">+ Métiers</div>
                  <div id="metiers-filter" class="nav nav-second-level collapse">
                    <input type="checkbox" value="" id="met-all" class="all" checked=""></input>
                    <label for="met-all">Tous les métiers</label><br />
                    <xsl:for-each select="dataroot/ficheStage/Métier/MétierLibellé[not(preceding::MétierLibellé/. = .)]">
                      <xsl:sort select="." order="ascending"/>
                      <xsl:variable name="metTrans" select='translate(., " &apos;,:/", "-")'/>
                      <input type="checkbox" value=".metier-{$metTrans}" id="{$metTrans}"></input>
                      <label for="{$metTrans}"><xsl:copy-of select="concat(substring(.,1,1), translate(substring(.,2), $uppercase, $lowercase))" />
                    </label><br />
                  </xsl:for-each>
                </div>
              </div>
              

              <div class="option-set" data-group="societe">
                <div type="button" class="h-filter nav" data-toggle="collapse"  href="#societe-filter">+ Société</div>
                <div id="societe-filter" class="nav nav-second-level collapse">
                  <input type="checkbox" value="" id="offre-all" class="all" checked=""></input>
                  <label for="offre-all">Toutes les sociétés</label><br/>
                  <input type="checkbox" value=".offre-Catalogue-PROBTP" id="offre-PB"></input>
                  <label for="offre-PB">PRO BTP</label><br/>
                  <input type="checkbox" value=".offre-Catalogue-BTP-RMS" id="offre-RMS"></input>
                  <label for="offre-RMS">BTP RMS</label><br/>
                  <input type="checkbox" value=".offre-Catalogue-BTP-VAC" id="offre-VAC"></input>
                  <label for="offre-VAC">BTP VAC</label><br/>
                </div>
              </div>


              <div class="option-set" data-group="parcours">
                <div type="button" class="h-filter nav" data-toggle="collapse"  href="#parcours-filter">+ Parcours</div>
                <div id="parcours-filter" class="nav nav-second-level collapse">
                  <input type="checkbox" value="" id="par-all" class="all" checked=""></input>
                  <label for="par-all">Tous les parcours</label><br/>
                  <xsl:for-each select="dataroot/ficheStage/Parcours/ParcoursCode[not(preceding::ParcoursCode/. = .)]">
                    <xsl:variable name="parcoursTrans" select="."/>
                    <input type="checkbox" value=".parcours-{$parcoursTrans}" id="{$parcoursTrans}"></input>
                    <label for="{$parcoursTrans}"><xsl:copy-of select="../ParcoursLibellé" /></label><br/>
                  </xsl:for-each>
                </div>
              </div>
              
              
              <div class="option-set" data-group="planbudget">
                <div type="button" class="h-filter nav" data-toggle="collapse"  href="#planbudget-filter">+ Plan budgétaire</div>
                <div id="planbudget-filter" class="nav nav-second-level collapse">
                  <input class="filter-item all" type="checkbox" value="" id="planbudget-all" checked=""></input>
                  <label class="filter-item" for="planbudget-all">Toutes les budgets</label><br/>
                  <xsl:for-each select="dataroot/ficheStage/PlanbudgétairePDF[not(preceding::PlanbudgétairePDF/. = .)]">
                    <xsl:sort select="." order="ascending"/>
                    <xsl:variable name="planTrans" select='translate(., " &apos;,:/", "-")'/>
                    <input class="filter-item" type="checkbox" value=".plan-{$planTrans}" id="{$planTrans}"></input>
                    <label class="filter-item" for="{$planTrans}"><xsl:copy-of select="." />
                  </label><br/>
                </xsl:for-each>
              </div>
            </div>


            <div class="visible-xs" style="height:10px; width:120%; background-color:rgb(9, 77, 134); margin:0 -10% 20px -10%"></div>
          </div>
        </div>
      </div>          <!-- /.col filtres -->



      <div class="col-xs-12 col-sm-7 col-sm-offset-5 col-lg-6 col-lg-offset-5">


        <div class="row">
          <div class="col-xs-12">
            <p style="color:white; margin:0">Rechercher un stage : <input type="text" id="clearSearch" class="quicksearch option-set" placeholder='code stage, thème...' style="width:50%; font-size:16px; border-radius:6px; line-height:inherit; margin:10px 0 3px 0; color:gray; padding:0 6px; outline-width: 0"/></p>
            <div id="totalResult" class="totalResult hidden-xs" style="margin-bottom:5px; color:white;">
              <p style="font-size:11px; margin:5px 0">Nombre de stage : <span id="totalResultnum"></span></p>
            </div>
          </div>
          <div class="text-right" style="margin-bottom:10px">
            <form action="" method="post" class="hidden-xs">
              <xsl:for-each select="dataroot/ficheStage">
                <xsl:variable name="delimiteurPDF-check" select="translate(Lib_x0020_long_x0020_du_x0020_stage, ':', '')" />
                <input type="checkbox" name="files[]" value="{$delimiteurPDF-check}.pdf" id="{Identif_x0020_du_x0020_stage}" style="display:none"/>
              </xsl:for-each>
              <p style="cursor:pointer; font-size:13px; margin:0; display:inline-block" id="unCheckAll"><span style="color:white" class="visible-xs">tout décocher</span><xsl:text> </xsl:text><span><input class="btn" style="background-color:white; display:inline-block;" type="submit" id="submit" name="createzip" value="Télécharger les stages sélectionnés" /></span></p>
            </form>
            <p style="cursor:pointer; font-size:13px; margin:15px 0;color:white" onClick="closeAll()">Fermer tous les stages</p>
          </div>
        </div>



        <div class="grid">
          <div class="panel-group" id="container">
            <xsl:for-each select="dataroot/ficheStage">
              <xsl:sort select="Parcours/ParcoursOrdre" data-type="number" />
              <xsl:sort select="Lib_x0020_long_x0020_du_x0020_stage" order="ascending" />
              <xsl:variable name="liblong" select="Lib_x0020_long_x0020_du_x0020_stage"/>
              <xsl:variable name="code" select="Identif_x0020_du_x0020_stage"/>
              <xsl:variable name="domaine" select="substring(Identif_x0020_du_x0020_stage,2,3)"/>
              <xsl:variable name="compétence-test">
                <xsl:for-each select="Compétences/CompétenceFamille">
                  <xsl:text>comp-</xsl:text><xsl:copy-of select='translate(., " &apos;,:/", "-")'/><xsl:text> </xsl:text>
                </xsl:for-each>
              </xsl:variable>
              <xsl:variable name="axe" select='translate(Axe/Axe_x0020_de_x0020_formation, " &apos;,:/", "-")'/>
              <xsl:variable name="metier" select='translate(Métier/MétierLibellé, " &apos;,:/", "-")'/>
              <xsl:variable name="societe">
                <xsl:for-each select="Offre/OffreCode">
                  <xsl:text>offre-</xsl:text><xsl:copy-of select='translate(., " &apos;,:/", "-")'/><xsl:text> </xsl:text>
                </xsl:for-each>
              </xsl:variable>
              <xsl:variable name="parcour" select="Parcours/ParcoursCode" />
              <xsl:variable name="plan-budget" select="Budget/PlanbudgétairePDF" />
              <xsl:variable name="delimiteurPDF" select="translate($liblong, ':', '')" />

              <div class="panel panel-default grid-item item dom-{$domaine} {$compétence-test} axe-{$axe} metier-{$metier} plan-{$plan-budget} parcours-{$parcour} {$societe}">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#more-{$code}" aria-expanded="true" aria-controls="more-{$liblong}">
                  <div class="panel-heading" role="tab" id="head-{$code}">
                    <xsl:value-of select="Lib_x0020_long_x0020_du_x0020_stage" />
                  </div>
                </a>
                <label for="{$code}" class="label-pdf text-center hidden-xs" onclick="afficher_masquer();" style="cursor:pointer">+</label>


                <div class="panel-collapse collapse" id="more-{$code}" role="tabpanel">
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-xs-12 col-lg-4">
                        <xsl:choose>
                          <xsl:when test="Généralités">
                            <h4 style="margin-bottom:0">Généralités</h4>
                            <p style="white-space: pre-line"><xsl:value-of select="Généralités" /><br/></p>
                          </xsl:when>
                          <xsl:otherwise>
                          </xsl:otherwise>
                        </xsl:choose>
                        <h4 style="margin-bottom:0">Objectifs</h4>
                        <p style="white-space: pre-line"><xsl:value-of select="Objectifs" /><br/></p>
                        <div style="height:1px; width:100%; background-color:rgb(234,98,18)"></div>
                        <h4 style="margin-bottom:0">Pré-requis</h4>
                        <p style="white-space: pre-line">
                          <xsl:choose>
                            <xsl:when test="Prérequis">
                              <xsl:choose>
                                <xsl:when test="Prérequis=''">Aucun pré-requis</xsl:when>
                                <xsl:when test="Prérequis='Aucun'">Aucun pré-requis</xsl:when>
                                <xsl:otherwise><xsl:value-of select="Prérequis" /></xsl:otherwise>
                              </xsl:choose>
                            </xsl:when>
                            <xsl:otherwise>Aucun pré-requis</xsl:otherwise>
                          </xsl:choose>
                        </p>
                        
                      </div>
                      <div class="col-xs-12 col-lg-8" style="margin-bottom:20px">
                        <div class="hidden-lg" style="height:2px; width:100%; background-color:rgb(234,98,18)"></div>
                        <h3>Programme</h3>
                        <p style="hyphens: auto; word-wrap: break-word; white-space: pre-line"><xsl:value-of select="Programme" /></p>
                      </div>
                      <div class="col-xs-12" style="background-color:rgb(244, 207, 186); color:rgb(234,98,18); margin-bottom:-15px">
                        <xsl:choose>
                          <xsl:when test="AlaMainDFP='1'">
                            <p style="font-size:11px; font-weight:600; color:rgb(0, 69, 127); line-height:18px">Attention, les inscriptions pour ce stage sont à la main de la Direction de la Formation Professionnelle.</p>
                          </xsl:when>
                          <xsl:otherwise>
                          </xsl:otherwise>
                        </xsl:choose>
                        <h5>Informations complémentaires</h5>
                        <div class="col-xs-12 col-md-4" style="padding:0">
                          <p class="info-comp">Code : <span style="font-weight:700"><xsl:value-of select="Identif_x0020_du_x0020_stage" /></span></p>
                          <p class="info-comp">Durée : 
                            <xsl:choose>
                              <xsl:when test="UnitéeTransco='jour(s)'">
                                <xsl:choose>
                                  <xsl:when test="DuréeTransco = 0.5">
                                    <span style="font-weight:700">1/2 journée</span>
                                  </xsl:when>
                                  <xsl:when test="DuréeTransco = 1">
                                    <span style="font-weight:700"><xsl:value-of select="DuréeTransco" /> jour</span>
                                  </xsl:when>
                                  <xsl:otherwise>
                                    <span style="font-weight:700"><xsl:value-of select="DuréeTransco" /> jours</span>
                                  </xsl:otherwise>
                                </xsl:choose>
                              </xsl:when>
                              <xsl:otherwise>
                                <xsl:choose>
                                  <xsl:when test="DuréeTransco &lt;= 1">
                                    <span style="font-weight:700"><xsl:value-of select="DuréeTransco" /> heure</span>
                                  </xsl:when>
                                  <xsl:otherwise>
                                    <span style="font-weight:700"><xsl:value-of select="DuréeTransco" /> heures</span>
                                  </xsl:otherwise>
                                </xsl:choose>
                              </xsl:otherwise>
                            </xsl:choose>
                          </p>
                          <p class="info-comp">Coût moyen : <span style="font-weight:700"><xsl:value-of select="SommeCoutTransco" /> €</span></p>
                          <p class="info-comp">Plan budgétaire : <span style="font-weight:700"><xsl:value-of select="Budget/PlanbudgétairePDF" /></span></p>
                          <p class="info-comp">Organisme : <span style="font-weight:700"><xsl:value-of select="Organisme" /></span></p>
                        </div>
                        <xsl:choose>
                          <xsl:when test="MéthodePédagogie">
                            <div class="col-xs-12 col-md-8" style="padding:0">
                              <p class="info-comp">Méthode et pédagogie :<br />
                              <xsl:value-of select="MéthodePédagogie"/></p>
                            </div>
                          </xsl:when>
                          <xsl:otherwise>
                          </xsl:otherwise>
                        </xsl:choose>
                        <div class="col-xs-12 text-right">
                          <p class="info-comp">
                            <a href="catalogue/{$delimiteurPDF}.pdf" target="_blank" style="color:inherit; text-decoration:underline; font-size:11px; margin-top:5px">Télécharger la fiche de stage</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </xsl:for-each> 
          </div>
        </div>
      </div>          <!-- /.col stages -->




    </div>
  </div><!-- /.container-fluid -->

  <div style="height:18px; background-color:rgb(7, 54, 93); font-size:10px; width:100%; position:fixed; bottom:0; padding-top:1px" class="text-center">
    <a href="http://agenceyvonne.com" target="_blank" style="color:rgb(162, 196, 222)">site réalisé</a><span style="color:rgb(162, 196, 222)"> par </span><a href="http://agenceyvonne.com" target="_blank" style="color:rgb(162, 196, 222)">l'agence Yvonne</a>
  </div>



  <script>
    var qsRegex;

    var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'vertical',
    filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
    }
    });


    // use value of search field to filter
    var $quicksearch = $('.quicksearch').keyup( debounce( function() {
    qsRegex = new RegExp( $quicksearch.val(), 'gi' );
    $grid.isotope();
    }, 200 ) );


    // debounce so filtering doesn't happen every millisecond
    function debounce( fn, threshold ) {
    var timeout;
    return function debounced() {
    if ( timeout ) {
    clearTimeout( timeout );
    }
    function delayed() {
    fn();
    timeout = null;
    }
    timeout = setTimeout( delayed, threshold || 100 );
    }
    }
  </script>
  <script src="js/isotopemulti.js"></script>
  <script src="js/catalogue.js"></script>





  <script>
    function closeAll() {
    $('.panel-collapse').collapse('hide');}
  </script>

  <script>
    setInterval(function(){
    $('#totalResultnum').text($('.panel-default:visible').length);}, 500)
  </script>


</body>
</html>
</xsl:template>
</xsl:stylesheet>