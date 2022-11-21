import Post from "./Post"
import { useState } from "react";
export default function ListaPost(props){
    const [nomeIconeSalvar, setNomeIconeSalvar] = useState("bookmark-outline");
    
    function salvarPost(){
        if (nomeIconeSalvar == "bookmark-outline") {
            setNomeIconeSalvar("bookmark")
        } else {
            setNomeIconeSalvar("bookmark-outline")
        }
        }
    
    const [iconeFotoCurtida , setIconeFotoCurtida] = useState("heart-outline")
    const [corCoracao , setCorCoracao] = useState("black")
    let [novoNumeroCurtidas, setNovoNumeroCurtidas] = useState (props.numeroCurtidas);

    function curtirPost (){
        if(iconeFotoCurtida == "heart-outline"){
            setIconeFotoCurtida("heart")
            setCorCoracao("red")
            setNovoNumeroCurtidas(novoNumeroCurtidas + .001 )
            console.log(typeof(novoNumeroCurtidas))
        }else{
            setIconeFotoCurtida("heart-outline");
            setCorCoracao("black")
            setNovoNumeroCurtidas(novoNumeroCurtidas - .001)
    }
    }
    function curtirPostNaFoto(){
        if(iconeFotoCurtida == "heart-outline"){
        setIconeFotoCurtida("heart")
        setCorCoracao("red")
        setNovoNumeroCurtidas(novoNumeroCurtidas + .001 )
    } else{}
    }



    return (
        <div class="posts">
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.fotoUsuario} />
              {props.usuario}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img onClick={(() => curtirPostNaFoto())} src={props.imagem} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon style={{color: corCoracao}} onClick={(() => curtirPost())} name={iconeFotoCurtida}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick={(() => salvarPost())} name={nomeIconeSalvar}></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={props.imgCurtidas} />
              <div class="texto">
                Curtido por <strong>{props.usuarioCurtidas}</strong> e <strong>outras {novoNumeroCurtidas } pessoas</strong>
              </div>
            </div>
          </div>
        </div>
        </div>
        )
}
