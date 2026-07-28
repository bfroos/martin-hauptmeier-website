// Globale Navigation & Footer — EINZIGE Quelle für Navi-/Footer-Änderungen.
// Die statischen Kopien in den HTML-Dateien dienen nur als Fallback/SEO.
document.addEventListener('DOMContentLoaded', function () {
  var navItems = [
    ['workshops-psychische-gesundheit-fuehrungskraefte.html', 'Workshops'],
    ['vortrag-psychische-gesundheit-gesundheitstag.html', 'Vorträge'],
    ['index.html#referenzen', 'Referenzen'],
    ['index.html#ueber', 'Über mich'],
    ['psychotherapie-frankfurt-nordend.html', 'Psychotherapie']
  ];
  var ul = document.querySelector('header nav ul');
  if (ul) {
    ul.innerHTML = navItems.map(function (i) {
      return '<li><a href="' + i[0] + '">' + i[1] + '</a></li>';
    }).join('');
  }
  var f = document.querySelector('footer .wrap');
  if (f) {
    f.innerHTML =
      '<p class="f-brand">Martin Hauptmeier — Betriebspsychologe, Workshops & psychologische Beratung · Frankfurt am Main, Eschborn & Rhein-Main</p>' +
      '<p class="f-links">' +
      '<a href="index.html">Startseite</a> · ' +
      '<a href="workshops-psychische-gesundheit-fuehrungskraefte.html">Workshop-Themen</a> · ' +
      '<a href="resilienztraining-unternehmen-frankfurt.html">Resilienztraining</a> · ' +
      '<a href="stressmanagement-seminar-frankfurt.html">Stressmanagement &amp; Burnout-Prävention</a> · ' +
      '<a href="workshop-psychisch-erkrankte-mitarbeiter-frankfurt.html">Psychisch erkrankte Mitarbeiter</a> · ' +
      '<a href="gespraechsfuehrung-training-fuehrungskraefte.html">Gesprächsführung &amp; Wirkung</a> · ' +
      '<a href="fuehrungskraeftetraining-frankfurt.html">Führungskräftetraining &amp; Teamentwicklung</a> · ' +
      '<a href="gefaehrdungsbeurteilung-psychische-belastung.html">Gefährdungsbeurteilung psychische Belastung</a> · ' +
      '<a href="bem-wiedereingliederung-frankfurt.html">BEM &amp; Wiedereingliederung</a> · ' +
      '<a href="akutberatung-psychische-erkrankung-arbeitsplatz.html">Akuter Fall</a> · ' +
      '<a href="vortrag-psychische-gesundheit-gesundheitstag.html">Vorträge &amp; Gesundheitstage</a> · ' +
      '<a href="psychotherapie-frankfurt-nordend.html">Psychotherapie Frankfurt</a></p>' +
      '<p class="f-links f-legal"><a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a> · © 2026 Martin Hauptmeier</p>';
  }
});
