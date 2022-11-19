export default function Story(){
    const itensStory = [
        {usuario:"9gag" , imagem:"assets/img/9gag.svg"},
        {usuario:"meowed" , imagem:"assets/img/meowed.svg"},
        {usuario:"barked" , imagem:"assets/img/barked.svg"},
        {usuario:"nathanwpylestrangeplanet" , imagem:"assets/img/nathanwpylestrangeplanet.svg"},
        {usuario:"wawawicomics" , imagem:"assets/img/wawawicomics.svg"},
        {usuario:"respondeai" , imagem:"assets/img/respondeai.svg"},
        {usuario:"filomoderna" , imagem:"assets/img/filomoderna.svg"},
        {usuario:"memeriagourmet" , imagem:"assets/img/memeriagourmet.svg"}
    ]
    return (
        <div class="stories">
        <ListaStory usuario="9gag"  imagem="assets/img/9gag.svg" />
        <ListaStory usuario="meowed"  imagem="assets/img/meowed.svg" />
        <ListaStory usuario="barked"  imagem="assets/img/barked.svg" />
        <ListaStory usuario="nathanwpylestrangeplanet"  imagem="assets/img/nathanwpylestrangeplanet.svg" />
        <ListaStory usuario="wawawicomics"  imagem="assets/img/wawawicomics.svg" />
        <ListaStory usuario="respondeai"  imagem="assets/img/respondeai.svg" />
        <ListaStory usuario="filomoderna"  imagem="assets/img/filomoderna.svg" />
        <ListaStory usuario="memeriagourmet"  imagem="assets/img/memeriagourmet.svg" />

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
}

function ListaStory(props){
    return (
        <div class="story">
          <div class="imagem">
            <img src={props.imagem} />
          </div>
          <div class="usuario">
            {props.usuario}
          </div>
        </div>

    )
}