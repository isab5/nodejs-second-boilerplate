import { Router } from "express";
import UserRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();
const usersList = new UserRepository();

usuariosRoutes.get("/", (req, res) => {
  const usuarios = usersList.getAllusers()
  return res.status(200).json({
    message:
      usuarios.length == 0
        ? "Não há usuários cadastrados"
        : `Total de usuários: ${usuarios.length}`,
    usuarios,
  });
});

usuariosRoutes.post ("/", (req, res) => {
  const { name, email, password } = req.body

  const user = usersList.addUser(name, email, password)

  return res.status(201).json({
    message: "Usuário cadastrado com sucesso!"
  })
})

export default usuariosRoutes;
