# Static academic site

This is a plain static HTML/CSS/JavaScript website in the compact academic style. It does not require Ruby, Jekyll, Bundler, or a paid sports API.

## Local preview

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

or, if you want to use the npm script:

```bash
npm run serve
```

## Main files

```text
index.html                       homepage
research.html                    research
resume.html                      CV/resume-style page
assets/css/site.css              styling
assets/js/main.js                dark-mode toggle
```

## Editing the World Cup tracker

The canonical score file is:

```text
assets/data/worldcup26-data.js
```

Edit group-stage scores like this:

```js
{ "id": "A1", "a": "MEX", "b": "RSA", "ga": 2, "gb": 1 }
```

Here:

```text
ga = goals for the first team
gb = goals for the second team
null = unplayed / unknown score
```

Edit knockout scores like this:

```js
"104": { "a": 2, "b": 1, "winner": null }
```

For a tied knockout match decided by penalties or extra time, set the advancing/winning team code:

```js
"104": { "a": 1, "b": 1, "winner": "ARG" }
```

The page recomputes group tables, third-place rankings, and knockout advancement from this file.

## Optional helper commands

Validate the score file:

```bash
npm run validate:worldcup26
```

Update a group match from the terminal:

```bash
npm run score -- group A1 2 1
```

Update a knockout match:

```bash
npm run score -- knockout 104 1 1 ARG
```

These helpers only rewrite `assets/data/worldcup26-data.js`; you can always edit the file manually instead.

## Publishing on GitHub Pages

Commit and push the static files:

```bash
git add .
git commit -m "Update website"
git push
```

For World Cup score updates specifically:

```bash
git add assets/data/worldcup26-data.js
git commit -m "Update World Cup scores"
git push
```

