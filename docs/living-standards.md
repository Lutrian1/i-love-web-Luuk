# Should the CSS light-dark() Function Support More Than Light and Dark Values?

Bekijk [hier](https://css-tricks.com/should-the-css-light-dark-function-support-more-than-light-and-dark-values/#aa-custom-color-schemes) het orginele artikel



In het artikel gaat het over de CSS light-dark() functie, die momenteel enkel schakelt tussen kleuren voor light en dark mode op basis van de gebruikersvoorkeur (color-scheme: light dark).
De vraag is of light-dark() moet worden uitgebreid naar meer modi (zoals high contrast, grayscale, of aangepaste schema's). Het antwoord is dat light-dark() zelf niet uitgebreid zal worden, omdat het wordt gezien als een tussenstap.
In de toekomst wordt een krachtigere functie verwacht: schemed-value(). Deze functie zou, in combinatie met een nieuwe @color-scheme at-rule, wél volledige ondersteuning voor aangepaste kleurschema's mogelijk maken. light-dark() zou dan simpelweg een verkorte syntax (syntactic sugar) worden voor schemed-value(light <kleur>, dark <kleur>).
Er wordt ook gekeken naar de rol van aangepaste CSS-functies (custom functions) als een mogelijk alternatief.

## Test beide functies uit dit artikel:
CODEPEN LINK 1 (Custom functions): https://codepen.io/Lutrian1/pen/qEbBYzm

Deze demo laat zien hoe je met een (hypothetische) aangepaste functie het gedrag van light-dark() zou kunnen nabootsen. Dit is experimenteel en werkt mogelijk alleen in Chrome Canary met de "Experimental Web Platform features" vlag aan.

CODEPEN LINK 2 (Custom color scheme): https://codepen.io/Lutrian1/pen/JoGjZbr

Deze demo laat zien hoe de @color-scheme regel en schemed-value() functie in de toekomst zouden kunnen werken. Let op: Deze code werkt nog nergens; het is een blik op de mogelijke toekomst van CSS.
