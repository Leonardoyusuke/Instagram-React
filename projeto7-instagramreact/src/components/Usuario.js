import { useState } from "react"

export default function Usuario (){
  const imagemPadrao = "assets/img/catanacomics.svg"
  const [nomeUsuario, setNomeUsuario] = useState("")
  const [fotoPerfil, setFotoPerfil] = useState(imagemPadrao)
  function inserirUsuario(){
    const resposta = prompt("Qual seu nome?")
    setNomeUsuario(resposta)
    }
  function inserirFoto(){
    const respostaFoto = prompt("Url da Foto")
    setFotoPerfil(respostaFoto)
  }
    

    return(
        <div data-test="user" class="usuario">
      <img onClick={inserirFoto} data-test="profile-image" src={!fotoPerfil ? imagemPadrao : fotoPerfil} />
      <div class="texto">
        <strong data-test="name" >catanacomics</strong>
        <span>
        {!nomeUsuario ? "Catana" : `${nomeUsuario}`}
          <ion-icon data-test="edit-name" onClick={inserirUsuario} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
    )
}
