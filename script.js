const URL = "https://typicode.com"
let publicacoes = []

const btn = document.querySelector(".btn-carregar")
const filtro = document.querySelector(".filtro")
const mensagem = document.querySelector(".msg")
const painel = document.querySelector(".list")

function renderizarPublicacoes(lista) {
  painel.replaceChildren()

  lista.forEach((publicacao) => {
    const cartao = document.createElement("article")
    cartao.classList.add("cartao")

    const id = document.createElement("span")
    id.textContent = `#${publicacao.id}`

    const titulo = document.createElement("h2")
    titulo.textContent = publicacao.title

    const conteudo = document.createElement("p")
    conteudo.textContent = publicacao.body

    cartao.append(id, titulo, conteudo)
    painel.append(cartao)
  })
}

function carregarPublicacoes() {
  mensagem.textContent = "Carregando publicações..."
  mensagem.className = "msg carregando"
  btn.disabled = true

  fetch(URL)
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`)
      }
      return resposta.json()
    })
    .then((dados) => {
      publicacoes = dados
      mensagem.textContent = ""
      mensagem.className = "msg"
      renderizarPublicacoes(publicacoes)
    })
    .catch((erro) => {
      console.error(erro)
      mensagem.textContent = "Não foi possível carregar as publicações."
      mensagem.className = "msg erro"
      publicacoes = []
      renderizarPublicacoes([])
    })
    .finally(() => {
      btn.disabled = false
    })
}

btn.addEventListener("click", carregarPublicacoes)

filtro.addEventListener("input", () => {
  const termo = filtro.value.trim().toLowerCase()

  const encontradas = publicacoes.filter((item) =>
    item.title.toLowerCase().includes(termo)
  )

  renderizarPublicacoes(encontradas)
  mensagem.className = "msg"
  mensagem.textContent = encontradas.length === 0 ? "Nenhuma publicação encontrada." : ""
})
