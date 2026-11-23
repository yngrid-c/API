# Mural de Publicações

Página em HTML, CSS e JavaScript puro que busca publicações de uma API e permite filtrar os resultados pelo título.

## Perguntas 

**1. O que é uma API e por que usamos `fetch()`?**
API é uma ponte para trocar dados entre sistemas pela internet. Usamos `fetch()` no JavaScript para buscar esses dados de um servidor sem precisar recarregar a página.

**2. Qual é o papel de `resposta.json()`?**
Ele transforma os dados recebidos da API (que chegam como texto) em objetos e arrays que o JavaScript consegue ler e usar.

**3. Qual a diferença entre filtrar o array localmente e fazer uma nova requisição?**
Filtrar localmente é instantâneo porque usa os dados já salvos na memória do navegador, enquanto uma nova requisição busca os dados novamente pela internet, levando mais tempo e consumindo rede.
