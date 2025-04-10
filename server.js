// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Zodat we bestanden en mappen in kunnen lezen.. Cool!
import { readdir, readFile } from 'node:fs/promises'

// Markdown parsen, ook cool!
import { marked } from 'marked'

// Frontmatter uitlezen, nog cooler!
import matter from 'gray-matter'

// Lees alle bestandsnamen uit de content directory in
const files = await readdir('docs')

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Misschien handig voor als we forms gaan POSTen. Een gastenboek misschien?
app.use(express.urlencoded({extended: true}))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

app.get('/', async function(request, response) {
  response.render('home.liquid')
})
app.get('/learning-journal', async function(req, res) {
  res.render('journal.liquid', {files: files})
})
app.get('/learning-journal/:slug', async function(req, res) {
  const fileContents = await readFile('docs/' + req.params.slug + '.md', { encoding: 'utf8' })
  const article = matter(fileContents)
  const markedUpContent = marked.parse(article.content)

  res.render('artikel.liquid', {fileContents: markedUpContent, metadata: article.data})
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})