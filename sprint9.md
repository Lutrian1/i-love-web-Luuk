# Sprint 9: The Web is for everyone

Vragenlijst:

# NodeJS & Liquid Skills Assessment

1. **Ik kan uitleggen wat NodeJS is en waarvoor het gebruikt wordt** 🍗3 pnt  
   NodeJS is eigenlijk gewoon JavaScript voor server-side. Je gebruikt NodeJS voor belangrijke communicatie tussen jouw site en de server (database) via API calls.

2. **Ik weet wat het doel van package.json is en heb hier aanpassingen in gemaakt** 🤓2 pnt  
   Dit is belangrijk voor de server omdat je bijvoorbeeld meegeeft wat te doen na `npm start` command (kan alles zijn, je kan het ook `npm blauw` noemen). Hierin staan ook belangrijke dependencies zoals Liquid en       Express. Ik heb hier alleen niet veel in gewerkt, naast het installeren van NODEMON. [hier een voorbeeld](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/issues/14)

3. **Ik heb met npm packages geïnstalleerd en gebruikt in het bestand server.js** 🫣0 pnt  
   Ik heb hier nog niet mee gewerkt.

4. **Ik kan met commando’s in de terminal een NodeJS project stoppen en starten** 🍗3 pnt  
   Door middel van `npm start` en `Ctrl+C` start en stop je een live site (die runt op jouw computer).

5. **Ik weet waarom ik mijn NodeJS project regelmatig moet herstarten en kan dit uitleggen** 🤓2 pnt  
   Het past niet automatisch aan wat je doorvoert in de NodeJS bestanden, omdat deze worden opgeslagen in het geheugen. Waardoor je veranderingen moet opslaan en opnieuw moet starten.

6. **Ik heb een strategie voor debuggen in NodeJS** 🍗3 pnt  
   Ik `console.log` elk ding dat ik doe (maak ik een variable aan? Console log). Dit zorgt ervoor dat ik snap wat ik doorvoer.

7. **Ik kan uitleggen wat Express.js doet en waarom het nodig is om met NodeJS een website te bouwen** 🫣1 pnt  
   Express.js is belangrijk en zorgt ervoor dat HTTP request en response mogelijk zijn, maar dat is het ook wel.

8. **Ik weet wat routes zijn en kan zelf een nieuwe route aanmaken** 🍗3 pnt  
   Ik heb hier regelmatig mee gewerkt, [hier is een voorbeeld](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/blob/b44bcd4fd56e78eb0b76539397e0c31af628329e/server.js#L47-L54).

9. **Ik weet wat request en response argumenten zijn in een functie voor het laden van data** 🤓2 pnt  
   Dingen als `POST`, `GET`, `DELETE` zorgen ervoor dat je communiceert tussen een server en een client. Deze vallen onder de request en response. Je stuurt wat naar een server en krijgt hier bijvoorbeeld een array voor terug (of je haalt alleen wat op met een `GET`), [hier een voorbeeld](https://github.com/Lutrian1/connect-your-tribe-squad-page/blob/ee249a211fb8104629703a56ec8a8b9dc04012b8/server.js#L47-L60).

10. **Ik heb gebruik gemaakt van een request parameter om specifieke data te laden** 🍗3 pnt  
   Een request parameter laat je bijvoorbeeld iets specifieks uitzoeken (of filteren) uit een database. Met een API call haal je data op uit een database (dat wordt omgezet naar JSON), en met bijvoorbeeld `=filter` filter je deze data. [Hier filter ik bijvoorbeeld alleen mensen uit team RAD](https://github.com/Lutrian1/connect-your-tribe-squad-page/blob/ee249a211fb8104629703a56ec8a8b9dc04012b8/server.js#L99).

11. **Ik kan uitleggen wat Liquid doet en waarom het nodig is om met Express.js een website te maken** 🤓2 pnt  
   Liquid zorgt ervoor dat je de data die in je `server.js` meegeeft, daadwerkelijk kan gebruiken in je front-end code. [Hier](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/blob/b44bcd4fd56e78eb0b76539397e0c31af628329e/views/index.liquid#L36-L47) zie je hoe ik met server tags `{{ }}` het gene wat ik in de `server.js` toepas, gebruik.

12. **Ik weet hoe ik data naar Liquid verstuur om dit te gebruiken bij het renderen van een pagina** 🍗3 pnt  
    Hiervoor heb ik al een voorbeeld gegeven, maar [hier nog een](https://github.com/SuleymanHG/connect-your-tribe-team-squad-page/blob/b94a7b69ee1724f81acf2bb67d80d2db36ffccda/views/statische-main-pages/birthdate.liquid#L9-L19).

13. **Ik weet hoe ik Liquid filters toe kan passen en waar ik kan vinden hoe die werken** 🍗3 pnt  
   In [Liquid Filters Documentation](https://shopify.dev/docs/api/liquid/filters) kan je vinden hoe de filters werken. [Hier pas ik bijvoorbeeld `TRUNCATE` toe](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/blob/b44bcd4fd56e78eb0b76539397e0c31af628329e/views/index.liquid#L39).

14. **Ik heb een nieuwe route gemaakt en nieuwe data meegegeven aan een Liquid view** 🍗3 pnt  
   [Check hier hoe ik de data gebruik](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/blob/b44bcd4fd56e78eb0b76539397e0c31af628329e/views/index.liquid#L35-L58). En [hier hoe ik het meegeef in een route](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/blob/b44bcd4fd56e78eb0b76539397e0c31af628329e/server.js#L42).

15. **Ik weet waar een foreach loop voor gebruikt wordt en pas het toe in een Liquid view om HTML te renderen** 🍗3 pnt  
   Ook dit snap ik, [hier een voorbeeld](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/blob/b44bcd4fd56e78eb0b76539397e0c31af628329e/views/mygiftpage.liquid#L6-L19).

16. **Ik kan in Liquid een controle maken waarmee een image niet getoond wordt als deze niet in de database is ingevuld** 🤓2 pnt  
    Hetzelfde voorbeeld als voorheen kan je hiervoor gebruiken.

17. **Ik heb een strategie voor debuggen in Liquid** 🫣0 pnt  
   Ik debug eigenlijk niet echt mijn Liquid, althans, ik heb hier geen strategie voor. Als het niet werkt, vogel ik maar wat uit totdat het wel doet.

18. **Ik kan data fetchen uit een REST API** 🍗3 pnt  
    Voorheen heb ik hier al een aantal voorbeelden opgegeven, maar [hier nog één](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/blob/b44bcd4fd56e78eb0b76539397e0c31af628329e/server.js#L92-L93).

19. **Ik snap het verschil tussen HTTP requests van de methodes GET en POST** 🍗3 pnt  
   `POST` voegt iets toe aan een database, `GET` haalt alleen wat op via een API call.

20. **Ik kan data uit een REST API filteren of sorteren** 🍗3 pnt  
    Ook hier heb ik al een aantal voorbeelden opgegeven, maar [hier nog één](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/blob/b44bcd4fd56e78eb0b76539397e0c31af628329e/server.js#L75).

21. **Ik snap wat het async keyword doet in JavaScript code** 🫣0 pnt  
   Geen idee. Een wilde gok is dat het ervoor zorgt dat je `try` en `catch` kan gebruiken (of niet) zodat je altijd wat terug krijgt.

22. **Ik weet wat het doel is van een try/catch block en kan het gebruiken bij het parsen van JSON** 🍗3 pnt  
   Het zorgt ervoor dat stel hij kan de `POST` bijvoorbeeld niet uitvoeren, dat je dan een status code meegeeft. [Hier een voorbeeld](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/blob/b44bcd4fd56e78eb0b76539397e0c31af628329e/server.js#L120-L147).

23. **Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten** 🤓2 pnt  
   Ik snap waarom we apart werken. Alleen in beide gevallen werk je met JavaScript (dus in theorie zou je ook server-side JavaScript kunnen gebruiken in een `<script>` in je HTML).

24. **Ik kan formulier data die is ge-POST opslaan in een variabele op de server en gebruiken bij het renderen van een pagina** 🍗3 pnt  
   Ik heb hiermee gewerkt en snap dit, [hier een voorbeeld](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality/blob/b44bcd4fd56e78eb0b76539397e0c31af628329e/server.js#L71-L103).

25. **Ik kan formulier data die is ge-POST door middel van een POST of PATCH HTTP request opslaan in de REST API** 🍗3 pnt  
   Ook hier kan je het voorbeeld van 24 voor gebruiken.
