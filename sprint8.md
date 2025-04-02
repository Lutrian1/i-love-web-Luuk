# Sprint 8: Server-Side Rendering

## Week 2

### Woensdag
**Expiriment 2 / 3 (Array notaties):** [Filter Example](https://fdnd.directus.app/items/person?fields=name&filter[_or][0][name][_starts_with]=D&filter[_or][1][name][_starts_with]=K), Dit is de prompt voor het experiment, dit is in een array notatie een geeft de namen met een d en k weer.

- **First:** Geeft de eerste item in een Array. Dus stel dat is zebra, dan geeft dat de array zebra.  
- **Join:** Voegt alle items aan elkaar in een Array  
- **Map:** Mapped alle items uit een Array en maakt hier een lijst van, Het styled het zegmaar als een list?  
- **Plus:** Voegt een nummer aan een ander nummer toe, bijvoorbeeld: `{{ 4 | plus: 2 }}`  
- **Remover:** Verwijdert alle letters die je invoert in de prompt  

**Experimenten:**  

- `{{ gift.name | remove: "A" }}`: Dit verwijderd alle letters a van de gift.name, stel ik had daar "Kaas" Getypt dus: `{{ "Kaas" | remove: "aa" }}` dan kwam Ks eruit.  

- `{% assign beatles = "John, Paul, George, Ringo" | split: ", " %}`  
  `{{ beatles | join: " and " }}`: Haalde alle commas weg, en verplaatste dit met 'and'.  

- `{{ 4 | plus: 2 }}`, Gaf het nummer 6 weer in de browser.  

- `{{ gift.name | first }}`, In gift.name gaf hij constant de eerste Letter van de array.  

- **Truncate:** `{{ gift.name | truncate: 5 }}`, liet de eerste 5 letters zien, en toonde de rest als....., je kan  
