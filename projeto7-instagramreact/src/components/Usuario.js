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
        <div class="usuario">
      <img onClick={inserirFoto} src={!fotoPerfil ? imagemPadrao : fotoPerfil} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
        {!nomeUsuario ? "Catana" : `${nomeUsuario}`}
          <ion-icon onClick={inserirUsuario} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
    )
}
