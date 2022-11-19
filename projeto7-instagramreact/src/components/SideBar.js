import Sujestoes from "./Sujestoes"
import Usuario from "./Usuario"
export default function SideBar(){
    return(
        <div>
    <div class="sidebar">
    <Usuario/>

    <Sujestoes/>

    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
      Hashtags • Idioma
    </div>

    <div class="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  </div>
</div>)
}