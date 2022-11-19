export default function Post(){
    const itensPost = [
        {usuario:"meowed" , fotoUsuario:"assets/img/meowed.svg" , imagem:"assets/img/gato-telefone.svg" , imgCurtidas:"assets/img/respondeai.svg" , usuarioCurtidas:"respondeai" , numeroCurtidas:"101.523"},
        {usuario:"barked" , fotoUsuario:"assets/img/barked.svg" , imagem:"assets/img/dog.svg" , imgCurtidas:"assets/img/adorable_animals.svg" , usuarioCurtidas:"adorable_animals" , numeroCurtidas:"99.159"}
    ]

    return (
        <div class="posts">
         {itensPost.map((s) => <ListaPost usuario={s.usuario} imagem={s.imagem} fotoUsuario={s.fotoUsuario} imgCurtidas={s.imgCurtidas} numeroCurtidas={s.numeroCurtidas} />)}
        </div>
    )
}
function ListaPost(props){
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
            <img src={props.imagem} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={props.imgCurtidas} />
              <div class="texto">
                Curtido por <strong>{props.usuarioCurtidas}</strong> e <strong>outras {props.numeroCurtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
        </div>
        )
}
