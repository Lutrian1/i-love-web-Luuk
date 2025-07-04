# CSS-Day 

## CSS-Dag 1

### Introductie

Na het maken van [mijn blog](#Bloem-met-::view-transition-(Blog)) over view-transitions. Had ik vandaag dus de kans om op CSS-Day te komen. 6 sprekers kwamen vandaag vertellen over coole nieuwe features in CSS, en in het algemeen, over CSS. 1 van deze speakers was Cyd Stumpel (Ons Docent) waar ik later nog even over ga praten. ANYWAY! Het was een unieke en echt bijzonder leerzame dag voor mij. Zoals ik tegen vele op het event die ik met genoegen heb mogen spreken zij: "Ik kwam eigenlijk voor bewijslast, maar dat is echt compleet opmgedraaid. Eenmaal tijdens event boeide mij dit geen kanus,en kwam ik erachter dat ik echt wel kwam om te leren, en niet voor bewijstlast (wel een mooie bonus werdt dit). Ik heb zo bizar veel gepraat met mensen en geleerd van de speakers, maar ook van mensen op het event. Niet alleen over dingen binnen CSS, maar ook gewoon hoe je het werkveld instapt of hoe je überhaupt hoi zegt tegen mensen. Ik kan meestal wel een gesprek aanhouden, maar nooit starten. Deze mensen, en voornamelijk Adam Argyle (Wie dat is praat ik later over), waaren zo genuine in alles, dat ze me ook hiermee hielpen. 

 Ik heb wel duizend links en woorden die ik wil laten zien, dus laten we daar maar is meer starten. Dit is namelijk Adam Argyle, en persoon waarvan ik nog niet eerder had gehoord tot vandaag op CSS-Day (5 juni 2o25).

 ## Adam Argyle : Level up your Scroll UX 

- [Website](https://nerdy.dev)
- [Codepen](https://codepen.io/collection/JYdmwr)
- [Collectie Sliders](https://css-day-2025.argyleink.deno.net)

#### "People Grab Thumbs!"

Adam was de eerste spreker van vandaag. Hij was ook (Sorry Cyd) mijn favoriete van de dag. Voornamelijk omdat hij praatte over scrollbars, en hoe hij deze aanpast en styled. Mooiste van allemaal, het is nog accessible ook! Het is zo'n klein niche ding, wat echt TOTAAL niet persee nodig is, maar een website gewoon bijzonder vet maakt. Ik had nog de kans om met hem te praten na het event. Geweldige gozer. Ben ook na dit event hem gaan volgen, en hoop nog meer van hem te leren wat de toekomst brengt. 

Goed, hier zijn een aantal notites van zijn presentatie:

- "Overflow: auto = A scroll hint, Thumb size hints at the corpus. It's feedback, Your keyboard and everything works."
- "Scollbars are our friend"

Er waren wel 3 presentaties over de scrollbars, maar wij gaan het hebben over de 'wat simpelere'. Deze kan je [hier](https://codepen.io/argyleink/pen/pvJvqjY) vinden. Echter zeg ik wat simpeler, maar echt de helft dat hierin staat snap ik de ballen van. Maar ik ga mijn best doen om voor mijzelf nog even zijn presentatie (voor deze slide), samen te vatten.

Als eerste had hij het over dat hij gebruikt maakt van 3 elementen binnen zijn HTML waarvan 2 divs voor de scroller.

HTML: 

```
<section class="scroll--root">
  <div class="scroll--viewport">
    <div class="scroll--content">
```
CSS (Simplified):
```
/* 
  HTML Structure, 3 elements

  .scroll--root 
    > .scroll--viewport 
      > .scroll--content
        > YOUR_CONTENT
*/
```
Nou wil ik echt heel diep hier over in gaan, maar je kan beter gewoon ze codepen checken en erachter komen hoe dit allemaal werkt in zijn css. Echter zijn er wel 2 super belangrijke dingen die moeten worden gedaan wat hij elke keer deed in al zijn demo's. Dat is dat je de scroll root eigenlijk alleen laat, en deze 3 lines code in de viewport verwerkt, alles daaronder is puur styling:
```
    /* be explicit about the axis */
    overflow: hidden auto;
    
    /* nearly always specify overscroll behavior */
    overscroll-behavior-y: contain;
    
    /* enable if ok with user's preference */
    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
```
Zoals ik al zij, ik kan nog wel uren hierover praten, maar het beste is gewoon zijn slides, samen met de dingen die hij heeft gemaakt voor die slides. 

![IMG_3489](https://github.com/user-attachments/assets/8e585727-9c5f-4ab9-9842-7a1bd1fdb61c)

## 	John Allsopp : A Doa of CSS

## Cyd Stumpel : CSS came for my job!

[Github](https://github.com/Sidstumple/view-transitions)

Cyd was ook echt geweldig om naar te luisteren. Ze zou eigenlijk gewoon mijn number 1 zijn vandaag, maar omdat ze mijn docent is plaats ik haar toch even naar 2, ik hoop dat ze het kan hebben. Ze is mijn number 1 docent voor CSS anyway! Ik weet niet eens waar te beginnen met deze presentatie en alle info dat ze wel niet had. Een voordeel dat ik had is dat ik al gedeeltelijk wist waar ze vandaag over ging praten, omdat ik al met ::view-transition heb gewerkt, dankzij haar hulp ook. Het beste is eigenlijk gewoon als je [mijn blog](#Bloem-met-::view-transition-(Blog)) bekijkt, waarin ik probeer uit te leggen over view transitions. Omdat ze eigenlijk zoveel was gaan praten over haar code heb ik ook echt nul qoutes kunnen opschrijven. Het beste is gewoon haar github te bekijken en dan hopen dat mijn geheugen nog genoeg snapt wat ze bedoelde bij bepaalde delen van haar code. 


## Bloem met ::view-transition (Blog)

### Introductie

Wat nou als je een coole animatie wil hebben tussen twee pagina's, in alleen CSS en HTML? BAM, daar heb je ::view-transition voor. Dit attribuut maakt het mogelijk om niet alleen cross-page, maar ook same-page view transitions te maken tussen elementen op je website. En het beste? Je hebt hier bijna geen JavaScript voor nodig!

Nadat we op school de kans kregen om naar het CSS Day congres (5 & 6 juni) te gaan, ben ik hier meer mee gaan experimenteren. Ik wilde een animatie maken tussen de homepage en een profielpagina, waarbij een bloem je hele scherm overneemt en dan switcht naar de nieuwe pagina. Dit is wat ik heb gemaakt:

![2025-05-2715-36-05-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/c7571003-09d8-405d-b965-583ff744fdda)

Of check het live: https://pleasurable-ui-jby7.onrender.com/

**Vet toch!**

Dit is me allemaal gelukt dankzij [deze video](https://www.youtube.com/watch?v=Bq5GVrXO6jE&t=1668s) van Cyd, waarin ze uitleg geeft over view-transitions. Dus dikke shoutout naar Cyd! Goed, introductie klaar - tijd om uit te leggen hoe ik dit werkend heb gekregen!

#### Uitleg

Als eerste was het belangrijk om te werken met ::view-transition-name. Dit is zodat ik tussen specifieke elementen kan transitionen, dus - van iets, naar iets.

**_Homepage:_**
* `<article class="gift-box" style="view-transition-name: card-{{ gift.id }};">`
Ik geef hier een view transtition mee voor een andere element, dit is niet belangrijk voor de view transition 'bloem', maar is wel nodig omdat het wordt gebruikt in de view transition.

* `<div class="flower" height="138" width="129" style="view-transition-name: flower;"></div>`
Dit is het belangrijkste! Dit is de bloem waarop de view transition gaat gebeuren.

**_Profile:_**
* `<div class="flower-new"></div>` De div waaran ik in css een view transition meegeef. Dit kan ook in HTML zoals hierboven, ik woue echter beide uitproberen.
* `.flower-new{
    view-transition-name: flower;
    width: 100vw;
    height: 100vw;
    scale: 3;
    position: absolute;
    top: 0%;
    left: 0%;
    margin: 0;
    z-index: 1000;
}`

Stukje code in profile waar de bloem naar toe transitioned, dit is erg belangrijk omdat de 'oude' bloem vergroot in de 'nieuwe' die zich bevind op de profile, en andersom. In javascript verwijder ik deze class, nadat de animatie is gedaan. Dit is niet nodig, maar wel handig zodat je DOM niet op de profile word aangepast.

Key, nu dat allemaal is gedaan, gaan we aan het vette beginnen. Als je wil kan je mijn volledige code hier zien:
https://github.com/Sebastiaan-hva/pleasurable-ui/blob/a41553006a0ff40578d7979bdfad1e7d2c2638d7/public/css/stylesheet.css#L343-L395

Om elke line nog even langs te gaan:

1.
`::view-transition-new(root),
::view-transition-old(root) {
    animation-duration: 0.1s;
    animation-fill-mode: both;
    animation-timing-function: ease-in;
}`

Hierin pas ik alles aan, naast de flower animatie. De volledige DOM (naast bepaalde elementen die ik hieronder style) word weggehaald in 0.1s

2.
`::view-transition-group(flower){
    z-index: 1000;
}`

Ik geef hier de flower group een index mee zodat deze boven alle elementen valt. Dit is zodat de animatie het hele scherm overneemt.

3.
`::view-transition-new(flower),
::view-transition-old(flower){
    animation-duration: 0.8s;
    animation-fill-mode: both;
    animation-name: flower-rotate;
    animation-timing-function: ease-in;
    overflow: clip;
    object-fit: cover;
    cursor: none;
}`

Hierin geef ik de duur van de animatie aan mee, en de animatie zelf, met behulp van keyframes.

4. 
`html::view-transition-group(*) {
    animation-duration: 0.8s;
    animation-fill-mode: both;
}`

Dit is de duur van alle animaties binnen de volledige DOM, en alle groups. Dit is zodat de kaartjes eigenlijk weg-faden, terwijl de bloem zolang duurt.

5. 
En als laatste de animatie:

`@keyframes flower-rotate{
  from{
    transform: scale(1);
    transform: rotate(0deg);
  }
  to{
    transform: scale(60);
    transform: rotate(360deg);
  }
} `

#### Afsluitertje

Er zijn nog een aantal dingen dat ik wil fixen aan dit project. Voornamelijk dat de andere view transitions nu niet meer werken, dit is een javascript ding, en ga ik binnenkort verwerken. Ook wil ik nog werken met clip-path: shape(), waarin de bloem dus meer uitrekt, en niet statisch is. Ook wil ik dat de bloem altijd een willekeurige kant op gaat, dit ga ik ook nog even fixen. 
