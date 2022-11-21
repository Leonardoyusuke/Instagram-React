import ListaPost from "./ListaPost"
export default function Post(){
    const itensPost = [
        {usuario:"meowed" , fotoUsuario:"assets/img/meowed.svg" , imagem:"assets/img/gato-telefone.svg" , imgCurtidas:"assets/img/respondeai.svg" , usuarioCurtidas:"respondeai" , numeroCurtidas:101.523},
        {usuario:"barked" , fotoUsuario:"assets/img/barked.svg" , imagem:"assets/img/dog.svg" , imgCurtidas:"assets/img/adorable_animals.svg" , usuarioCurtidas:"adorable_animals" , numeroCurtidas:99.158}
    ]

    return (
        <div class="posts">
         {itensPost.map((s) => <ListaPost usuario={s.usuario} imagem={s.imagem} fotoUsuario={s.fotoUsuario} imgCurtidas={s.imgCurtidas} numeroCurtidas={s.numeroCurtidas} />)}
        </div>
    )
}