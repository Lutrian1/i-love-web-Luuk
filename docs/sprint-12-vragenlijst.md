# Sprint 12: Vragenlijst:

1. **Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten** - 🍗
Het verschil is mij erg duidelijk. De ene gebruik je voor de browser zelf, de browser kan dit ook uit zetten, ook dan moet de site werken. Server-side werkt zoizo omdat dit altijd vanuit de server wordt gedaan.
[link](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/main/server.js) - JS wordt alleen gebruikt voor server-side.
[link](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/main/public/scripts/script.js) - Client side voor enhacements
2. **Ik heb een strategie voor server-side JavaScript debuggen, voor client-side JavaScript debuggen, en voor Liquid code debuggen** - 🤓
Ik heb een soort strategie. Met liquid geeft hij fouten vrij duidelijk aan vaak, het verteld welke regel iets mis is en waarom kan ik vaak zelf uitvogelen door even te zoeken naar hoe anderen iets doen. Voor javascript gebruik ik veel console.log na elke stap. Dit is zodat ik zie wat ik doe. Als ik iets echt niet snap in mijn console.log gebruik ik vaak AI om mij uit te leggen wat nou mist. Dan pas ik het zelf toe en ik wil nooit dat AI het voor me doet, alleen uitlegd. 
3. **Ik kan GET en POST routes aanmaken en request parameters gebruike** - 🍗
[link](https://github.com/Lutrian1/proof-of-concept/blob/main/server.js)
4. **Ik kan server-side JSON data fetchen uit een REST API** - 🍗
[link](https://github.com/Lutrian1/proof-of-concept/blob/cef762a648eae5703f97d3157865fe78e7611f40/server.js#L22)
5. **Ik kan data uit een REST API filteren of sorteren** - 🍗
Belangrijkste link hierbij: [link](https://docs.directus.io/reference/filter-rules.html)
[link filteren](https://github.com/Lutrian1/proof-of-concept/blob/cef762a648eae5703f97d3157865fe78e7611f40/server.js#L26)
6. **Ik snap wat het async keyword doet in JavaScript code** - 🤓
Async geeft altijd een promise. In combinatie met 'await' is dit vaak het best, omdat hij dan wacht totdat de promise werkt, zo niet kan je vaak een error code weergeven met bijvoorbeeld catch en try.
[link](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/9326c3797eda105c763bc79bfb0a8fbfdd4f396a/server.js#L30-L43)
7. **Ik weet wat het doel is van een try/catch block en kan het gebruiken bij het parsen van JSON** - 🍗
Hierboven beschreven.
[link](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/9326c3797eda105c763bc79bfb0a8fbfdd4f396a/server.js#L85-L105)
8. **Ik kan met een client-side fetch een werkend formulier verrijken** - 🍗
[link](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/9326c3797eda105c763bc79bfb0a8fbfdd4f396a/views/partials/imgcard.liquid#L16-L30)
9. **Ik kan multi-page en single-page view transitions inzetten en aanpassen** - 🤓
View transition blijft ingewikkeld. Single-page ben ik iets minder mee, multi-page snap ik en heb ook de tools om dit te gaan snappen #Cyd.
[link](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/9326c3797eda105c763bc79bfb0a8fbfdd4f396a/public/css/stylesheet.css#L343-L395)
10. **Ik kan verschillende manieren van responsive images uitleggen en toepassen** - 😅
iets te weinig mee gewerkt.
11. **Ik weet hoe ik de resultaten van een performance audit moet interpreteren en hoe ik performance problemen kan oplossen** - 🍗
Een voorbeeld in een issue is hier wel te vinden, waarbij ik aan de hand van de commit laat zien dat ik het fix:
[link](https://github.com/Sebastiaan-hva/pleasurable-ui/pull/67)
of de [performance audit](https://github.com/Lutrian1/performance-audit)
12. **Ik weet hoe ik met client-side JS de UX kan verbeteren, rekening houdend met progressive enhancement** - 🍗
[link](https://github.com/Lutrian1/proof-of-concept/blob/7b3e94a91b84ffe93c82652815231f4561476b61/views/login.liquid#L12) - box staat op hidden, toont dus alleen wanneer javascript werkt.
[link](https://github.com/Lutrian1/proof-of-concept/blob/7b3e94a91b84ffe93c82652815231f4561476b61/public/scripts/login.js#L1-L28) - Met js worden de nummers aangezet.
13. **Ik weet hoe ik binnen HTML, CSS en client-side JS nieuwe technieken toe kan passen, rekening houdend met oudere browsers** - 🍗
[link](https://github.com/Lutrian1/proof-of-concept/blob/7b3e94a91b84ffe93c82652815231f4561476b61/public/css/login.css#L76-L86)
14. **Ik weet wat objecten, arrays, strings, loops, variabelen, functies en parameters zijn, en kan die in JavaScript inzetten** - 🍗
Hierboven staan hier al een aantal links van. Nogmaals:
[link](https://github.com/Lutrian1/proof-of-concept/blob/7b3e94a91b84ffe93c82652815231f4561476b61/views/dashboard.liquid#L4) -  Variable aanmaken voor een string
15. **Ik weet wat geavanceerdere concepten in JavaScript zijn, zoals closures, promises, callbacks, scope en de event loop** - 😅
Niet veel mee gewerkt. Ik snap ze wel alleen moet hier meer mee werken.
16. **Ik kan via GitHub met feature branches werken, pull requests aanmaken, reviewen en mergen** - 🍗
[link](https://github.com/Lutrian1/proof-of-concept/blob/7b3e94a91b84ffe93c82652815231f4561476b61/views/dashboard.liquid#L4)
17. **Ik weet hoe ik formulieren pro-actief kan valideren met client-side code** - 🤓
Veel gedaan, alleen sommige aspecten zijn me nog wat onduidelijk.
[link](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/9326c3797eda105c763bc79bfb0a8fbfdd4f396a/public/scripts/script.js#L38-L70)
18. **Ik weet de eerste regel van ARIA, en wat dat betekent voor hoe ik HTML schrijf** - 🍗
"Don't use aria" 😉
19. **Ik weet wat layout shifts zijn, door wat ze veroorzaakt worden, hoe ik ze kan meten en hoe ik ze kan oplossen** - 🍗
[link](https://github.com/Lutrian1/proof-of-concept/blob/7b3e94a91b84ffe93c82652815231f4561476b61/views/dashboard.liquid#L10)
20. **Ik weet wat de Core Web Vitals zijn, hoe ik die kan meten, en hoe ik de cijfers moet interpreteren** - 🫣
21. **Ik weet hoe perceived performance invloed heeft op de beleving van een gebruiker, en ik heb de ontwerp- en code vaardigheden om die toe te passen** - 🤓
[link](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/9326c3797eda105c763bc79bfb0a8fbfdd4f396a/public/css/homepage.css#L268-L286)
22. **Ik kan UI states in meerdere lagen van progressive enhancement inzetten om de UX te verbeteren** - 🍗
[link](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/9326c3797eda105c763bc79bfb0a8fbfdd4f396a/public/scripts/script.js#L38-L70)
23. **Ik kan een UI leuker en prettiger maken, zonder de core functionaliteit uit het oog te verliezen** - 🍗
[link](https://lutrian1.github.io/progressive-enhancement/rating.html)
24. **Ik kan scroll-driven animations inzetten om de UI beter te maken** - 😅
[link](https://github.com/Lutrian1/i-love-web-Luuk/blob/632b99eea92a07ce791e6ebb5f85f53d95b1e343/public/css/blog.css#L165-L188)
25. **Ik weet hoe ik verschillende vormen van feature detection in kan zetten in HTML, in CSS en in client-side JS** - 😅
[Supports - CSS](https://github.com/Lutrian1/i-love-web-Luuk/blob/632b99eea92a07ce791e6ebb5f85f53d95b1e343/public/css/main.css#L183-L217)
[JS](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/9326c3797eda105c763bc79bfb0a8fbfdd4f396a/public/scripts/script.js#L38)


