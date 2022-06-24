import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faHeart
  } from "@fortawesome/free-solid-svg-icons";
const SearchHeader = () => {
    return (
        <>
        <header className="header">
        <div className="topbar-sticky">
          <div className="logo visible-mobile">
            <a href="/" title="logo Decofinder">
              <picture>
                <img src="https://www.decofinder.com/public/images/logoDF.jpg" data-src="https://www.decofinder.com/public/images/logoDF.jpg" className=" ls-is-cached lazyloaded" alt="Le salon en ligne international de la décoration, du design et de l'habitat" />
              </picture>
            </a>
          </div>
          <div className="icon flag-lang">
            <div className="flag-lang_dropdown">
              <span className="flag-lang_dropdown_btn">
                <span className="sprite-flag_fr" />&nbsp;fr&nbsp;<span className="caret" />
              </span>
              <div className="flag-lang_dropdown_content">
                <li className="flag-lang_item">
                  <a href="https://www.decofinder.co.uk">
                    <span className="sprite-flag_gb" />&nbsp;gb
                  </a>
                </li>
                <li className="flag-lang_item">
                  <a href="https://de.decofinder.com">
                    <span className="sprite-flag_de" />&nbsp;de
                  </a>
                </li>
                <li className="flag-lang_item">
                  <a href="https://www.decofinder.es">
                    <span className="sprite-flag_es" />&nbsp;es
                  </a>
                </li>
                <li className="flag-lang_item">
                  <a href="https://www.decofinder.it">
                    <span className="sprite-flag_it" />&nbsp;it
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="icon"><a href="https://conseil.decofinder.com" title="Conseils" target="_blank">Conseils</a></div>
          <div className="barre-recherche visible-mobile">
            <div id="icon-search" className="icon search"><i className="fa fa-search" aria-hidden="true" /></div>
            <form className="formHeadSearch" name="formHeadSearch" id="formHeadSearch" action="/search" method="get">
              <div className="easy-autocomplete"><input className="input-recherche" type="search" name="q" placeholder="Recherchez dans plus de 502 024 produits, entreprises..." required id="eac-2133" autoComplete="off" /><div className="easy-autocomplete-container" id="eac-container-eac-2133"><ul /></div></div>
              <button className="input-submit" type="submit">
                <i className="fa fa-search" /> 
              </button>
            </form>
          </div>
          <div className="icon unProduitGo" title="Inspirations">
            Inspirations 
          </div>
          <div className="icon">  
            <a href="https://mag.decofinder.com/" title="Mag déco" target="_blank">
              Le MAG
            </a>
          </div>
          <div className="icon">
            <span className="unProduitGo" title="Nouveautés">Nouveautés</span>
          </div>
          <FontAwesomeIcon
        icon={faHeart}
        style={{ fontSize: 30, color: "rgb(200,1,1)"}}
      />
          <a href="#content-menu-mobile" id="open_menu_mobile" className="icon bars visible-mobile"><i className="fa fa-bars" /></a>
        </div>
        <nav id="cart" className="sidebar-cart" data-sidebar-id="cart">
          <div className="sidebar-cart_content">
            <div className="cart_header">
              <span>Liste d'envies</span>
            </div>
            <div id="caddieVoirProd" className="cart_info">0 produit dans votre liste d'envie</div>
            <div id="containerThumbProducts" className="cart_body"></div>
           </div>
        </nav>
      </header>
      </>
    )
}

export default SearchHeader
