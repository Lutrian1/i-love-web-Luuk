
# [Bloem met ::view-transition](https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition)

## Introductie

Wat nou als je een coole animatie wil hebben tussen twee pagina's, in alleen CSS en HTML? BAM, daar heb je ::view-transition voor. Dit attribuut maakt het mogelijk om niet alleen cross-page, maar ook same-page view transitions te maken tussen elementen op je website. En het beste? Je hebt hier bijna geen JavaScript voor nodig!

Nadat we op school de kans kregen om naar het CSS Day congres (5 & 6 juni) te gaan, ben ik hier meer mee gaan experimenteren. Ik wilde een animatie maken tussen de homepage en een profielpagina, waarbij een bloem je hele scherm overneemt en dan switcht naar de nieuwe pagina. Dit is wat ik heb gemaakt:

![2025-05-2715-36-05-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/c7571003-09d8-405d-b965-583ff744fdda)

Of check het live: https://pleasurable-ui-jby7.onrender.com/

**Vet toch!**

Dit is me allemaal gelukt dankzij [deze video](https://www.youtube.com/watch?v=Bq5GVrXO6jE&t=1668s) van Cyd, waarin ze uitleg geeft over view-transitions. Dus dikke shoutout naar Cyd! Goed, introductie klaar - tijd om uit te leggen hoe ik dit werkend heb gekregen!

## Uitleg

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

### Afsluitertje

Er zijn nog een aantal dingen dat ik wil fixen aan dit project. Voornamelijk dat de andere view transitions nu niet meer werken, dit is een javascript ding, en ga ik binnenkort verwerken. Ook wil ik nog werken met clip-path: shape(), waarin de bloem dus meer uitrekt, en niet statisch is. Ook wil ik dat de bloem altijd een willekeurige kant op gaat, dit ga ik ook nog even fixen. 
