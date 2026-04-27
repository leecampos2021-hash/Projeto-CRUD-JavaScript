import { Filme } from "../models/Filme.js"


export async function listar(req, res) {
  const filmes = await Filme.findAll()
  return res.json(filmes)
}

export async function create(req, res) {
  const { titulo, genero, ano } = req.body

  const novoFilme = await Filme.create({ titulo, genero, ano })

  return res.status(201).json(novoFilme)
}

export async function update(req, res) {
  const { id } = req.params
  const { titulo, genero, ano } = req.body

  const filme = await Filme.findByPk(id)
  if (!filme) return res.status(404).json({ message: "Não encontrado" })

  await filme.update({ titulo, genero, ano })

  return res.json(filme)
}

export async function patch(req, res) {
  const { id } = req.params

  const filme = await Filme.findByPk(id)
  if (!filme) return res.status(404).json({ message: "Não encontrado" })

  await filme.update(req.body)

  return res.json(filme)
}


export async function deletar(req, res) {
  const { id } = req.params

  const filme = await Filme.findByPk(id)
  if (!filme) return res.status(404).json({ message: "Não encontrado" })

  await filme.destroy()

  return res.status(204).send()
}