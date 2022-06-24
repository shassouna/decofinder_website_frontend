import { useRef } from "react"

const MenuHeader2 = () => {


const menuRefs = useRef()
menuRefs.current = []
const liSupUnivsRefs = useRef()
liSupUnivsRefs.current = []

// add refs function
const handleAddToMenuRefs = (element) => {
  if(element && !menuRefs.current.includes(element))
  menuRefs.current.push(element)
}
const handleAddToLiSupUnivsRefs = (element) => {
  if(element && !liSupUnivsRefs.current.includes(element))
  liSupUnivsRefs.current.push(element)
}

const handleShowDetails = (element) => {
  liSupUnivsRefs.current.forEach(tag => {
    tag.style.background =null
  })
  const targetSuperUnivers = menuRefs.current.find(tag=>tag.title===element.target.title)
  if(targetSuperUnivers){
    const targetSuperUniversLi = liSupUnivsRefs.current.find(tag=>tag.title===element.target.title)
    targetSuperUniversLi.style.background ="#87A83D"
    targetSuperUnivers.style.visibility = "visible"
  }
}
const handleHideDetails = (element) => {
  liSupUnivsRefs.current.forEach(tag => {
    tag.style.background =null
  })
  const targetSuperUnivers = menuRefs.current.find(tag=>tag.title===element.target.title)
  if(targetSuperUnivers){
    element.target.style.background =null
    for(let i=0; i<element.target.children.length; i++){
      console.log(element.target.children[i].style.background=null)
    }
    targetSuperUnivers.style.visibility = "hidden"
  } 
}

return (
<div className="container-menu">
  <nav className="nav" id="menu">
    <div className="nav-div">
      <ul className="nav-grid nav-superUniver">
        <li className="oneSuperUniver" title="Arts de la Table" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Arts de la Table"
            href="#"
          >
            Arts de la Table
          </a>
          <ul className="grid-superUniver" title="Arts de la Table" ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  7935 produits : Arts de la Table{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u2/Accessoires-De-Table.html">
                      ACCESSOIRES DE TABLE
                    </a>
                  </p>
                  <li>
                    <a href="/c5358/Autour-Du-The.html">Autour du thé</a>
                  </li>
                  <li>
                    <a href="/c5357/Autour-Du-Vin.html">Autour du vin</a>
                  </li>
                  <li>
                    <a href="/c5334/Bouchons.html">Bouchons</a>
                  </li>
                  <li>
                    <a href="/c5356/Cloches.html">Cloches</a>
                  </li>
                  <li>
                    <a href="/c5338/Cocktail-Et-Aperitif.html">
                      Cocktail et apéritif
                    </a>
                  </li>
                  <li>
                    <a href="/c5355/Corbeilles.html">Corbeilles</a>
                  </li>
                  <li>
                    <a href="/c5479/Dessous-De-Plats.html">Dessous de plats</a>
                  </li>
                  <li>
                    <a href="/c5471/Divers-Accessoires-De-Table.html">
                      Divers Accessoires de table
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5480/Decors-De-Table.html">Décors de table</a>
                  </li>
                  <li>
                    <a href="/c5337/Epices.html">Epices</a>
                  </li>
                  <li>
                    <a href="/c5378/Marques.html">Marques</a>
                  </li>
                  <li>
                    <a href="/c5335/Pinces-Et-Piques.html">Pinces et piques</a>
                  </li>
                  <li>
                    <a href="/c5336/Rafraichir.html">Rafraichir</a>
                  </li>
                  <li>
                    <a href="/c5878/Servir-Et-Maintenir-Chaud.html">
                      Servir et Maintenir Chaud
                    </a>
                  </li>
                  <li>
                    <a href="/c9271/Tire-Bouchons.html">Tire-bouchons</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u48/Coutellerie.html">COUTELLERIE</a>
                  </p>
                  <li>
                    <a href="/c5057/Couteaux.html">Couteaux</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5059/Couverts.html">Couverts</a>
                  </li>
                  <li>
                    <a href="/c5058/Cuilleres.html">Cuillères</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2AF904BC1BDD76DFDA1646CBFDF2624954A2BF4590CF96B3B1C514BEB1AD84FD123DC9FBD40614A374854A496E31E7A05C468A1759498156FCD08E928292"
                    >
                      Divers Coutellerie
                    </span>
                  </li>
                  <li>
                    <a href="/c5060/Fourchettes.html">Fourchettes</a>
                  </li>
                  <li>
                    <a href="/c5134/Louches.html">Louches</a>
                  </li>
                  <li>
                    <a href="/c5133/Pelles.html">Pelles</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2AF90BBE1BDD76DFDA1646CBFDF2624954A2BA37E7BDECCFC7C513BAB1DF84FD123DC9FFD40614B7749D4C5E6E32CCBB445E"
                    >
                      Pinces
                    </span>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u47/Vaisselle.html">VAISSELLE</a>
                  </p>
                  <li>
                    <a href="/c5136/Assiettes.html">Assiettes</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5342/Beurriers.html">Beurriers</a>
                  </li>
                  <li>
                    <a href="/c5137/Bols.html">Bols</a>
                  </li>
                  <li>
                    <a href="/c5340/Cafetieres-Et-Theieres.html">
                      Cafetières et théières
                    </a>
                  </li>
                  <li>
                    <a href="/c5341/Contenants-Divers.html">Contenants divers</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2AF972BE1BDD76DFDA1646CBFDF2624954A2CC41E4BB9EB5B5B117C2B1A9F6FD123DC9FDD30014A472825A5E6975C1BD5A1C870F5840"
                    >
                      Coquetiers
                    </span>
                  </li>
                  <li>
                    <a href="/c5138/Coupes-Et-Coupelles.html">
                      Coupes et coupelles
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2AF971CC1BDD76DFDA1646CBFDF2624954A2CD42E7CCECC1B2C017BAC6DBF1FD123DC9FBD40714A374854A496E31F2AE40419C1E59409611F18A8B8A"
                    >
                      Divers Vaisselle
                    </span>
                  </li>
                  <li>
                    <a href="/c5139/Plats.html">Plats</a>
                  </li>
                  <li>
                    <a href="/c5339/Pots.html">Pots</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5141/Saladiers.html">Saladiers</a>
                  </li>
                  <li>
                    <a href="/c5140/Services-De-Table.html">Services de table</a>
                  </li>
                  <li>
                    <a href="/c5142/Tasses.html">Tasses</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u49/Verrerie.html">VERRERIE</a>
                  </p>
                  <li>
                    <a href="/c5150/Carafes.html">Carafes</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2AF970BA1BDD76DFDA1646CBFDF2624954A2BF3497BFEEB3C2C714B8B7D780FD123DC9FBD40014A374854A496E31F0AE4B5E8A566349814DFC8C8F83C196BA94F3"
                    >
                      Divers Table Verrerie
                    </span>
                  </li>
                  <li>
                    <a href="/c5152/Services-De-Verres.html">
                      Services de verres
                    </a>
                  </li>
                  <li>
                    <a href="/c5151/Verres.html">Verres</a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D2AF977BA1BDD76DFDA1646CBFDF2624954A2C833EDCB98B6C5B461CBCBDA8BFD123F9FFAC8460AC85E814A5A6979D1BD04768A085C4B9D5AEBD3A7949B8DE3BDFA14329E163B7BDD4A83F19B5A9497"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2AF976CA1BDD76DFDA1646CBFDF2624954A2BA30E5BD9AC1B2CE15BDC6DB85FD123F9FFDC8460AC85B924D49747FC5A15D1FAE09415FDE7BFCD3AA87C2AAAF9BF35C50974F0276"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2AF976BC1BDD76DFDA1646CBFDF2624954A2CA4195B896B3C2CF16CBC5AAF0FD123F9FFCD71C4ED632BA424B726ED0AE5D579A09186D814BEAD3A283C2B2AFD4CB581C935E4172CB4B8A"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2AF975CD1BDD76DFDA1646CBFDF2624954A2B940E6CAECB2B3B114CEC5DA85FD123F9FFBC8460AC8599A5C4F6F75C6BA5D579A09186D814BEAD3A283C2B2AFD4CB581C935E4172CB4B8A"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title="Bricolage" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Bricolage"
            href="/su2/Bricolage.html"
          >
            Bricolage
          </a>
          <ul className="grid-superUniver"title="Bricolage"  ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  2568 produits : Bricolage{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u72/Bricolage.html">BRICOLAGE</a>
                  </p>
                  <li>
                    <a href="/c5097/Divers-Entretien.html">Divers entretien</a>
                  </li>
                  <li>
                    <a href="/c5094/Impregnateurs-Saturateurs.html">
                      Imprégnateurs Saturateurs
                    </a>
                  </li>
                  <li>
                    <a href="/c5089/Laver-Nettoyer.html">Laver Nettoyer</a>
                  </li>
                  <li>
                    <a href="/c5093/Nettoyants-Decapants.html">
                      Nettoyants - décapants
                    </a>
                  </li>
                </ul>
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u77/Outillage.html">OUTILLAGE</a>
                  </p>
                  <li>
                    <a href="/c5532/Divers-Outillage.html">Divers Outillage</a>
                  </li>
                  <li>
                    <a href="/c6561/Maconnerie.html">Maçonnerie</a>
                  </li>
                  <li>
                    <a href="/c6560/Peinture.html">Peinture</a>
                  </li>
                  <li>
                    <a href="/c6562/Tapisserie.html">Tapisserie</a>
                  </li>
                </ul>
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u18/Quincaillerie.html">QUINCAILLERIE</a>
                  </p>
                  <li>
                    <a href="/c5084/Adhesifs.html">Adhésifs</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2AF605BA1BDD76DFDA1646CBFDF2624954A2C945E2BC9FB3C7CF66CFC2DC8AFD123DC9FEDE0214A56F9C5C48786F8AA75D5F83"
                    >
                      Brosses
                    </span>
                  </li>
                  <li>
                    <a href="/c5088/Cires-Et-Baumes.html">Cires et baumes</a>
                  </li>
                  <li>
                    <a href="/c5087/Colles.html">Colles</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5481/Divers-Quincaillerie.html">
                      Divers quincaillerie
                    </a>
                  </li>
                  <li>
                    <a href="/c5085/Insecticides.html">Insecticides</a>
                  </li>
                  <li>
                    <a href="/c5092/Lasures-Teintures.html">
                      Lasures - Teintures
                    </a>
                  </li>
                  <li>
                    <a href="/c5095/Mastics.html">Mastics</a>
                  </li>
                  <li>
                    <a href="/c5217/Peintures-Interieures-Decoratives.html">
                      Peintures intérieures décoratives
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2AF60BC71BDD76DFDA1646CBFDF2624954A2CA4297CE9AC1B2B517B9C6DFF0FD123DC9FEDE0314B76F965F5A6F7DD0A6465CC22B47459E5EF08C83C8878AA395"
                    >
                      Préparation primaire
                    </span>
                  </li>
                  <li>
                    <a href="/c5086/Vernis.html">Vernis</a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D2AF60ACE1BDD76DFDA1646CBFDF2624954A2C942E2CFE9B2B6CF15BDB6D987FD123F9FFAC84609C85E814A5A6979D1BD04768A085C4B9D5AEBD3A494869DA195FE5E1BD1531B77D3"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2AF60AC91BDD76DFDA1646CBFDF2624954A2BA3092CC98C4C6C612CDC4D88AFD123F9FFDC84609C85B924D49747FC5A15D1FAD095C4F9C53F89983C8878AA395"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2AF60ABE1BDD76DFDA1646CBFDF2624954A2CD4295BD9CB3C7B41EC9C6AEF7FD123F9FFCD71C4ED532BA424B726ED0AE5D579A09186E8156FA918A87889BE091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2AF60ABA1BDD76DFDA1646CBFDF2624954A2BF33E1C9EDC2C1B562CBC5AEF2FD123F9FFBC84609C8599A5C4F6F75C6BA5D579A09186E8156FA918A87889BE091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title="Cuisine & Bain" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Cuisine & Bain"
            href="/su3/Cuisine-Bain.html"
          >
            Cuisine &amp; Bain
          </a>
          <ul className="grid-superUniver"title="Cuisine & Bain" ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  13219 produits : Cuisine &amp; Bain{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u14/Bain-Sanitaires.html">BAIN SANITAIRES</a>
                  </p>
                  <li>
                    <a href="/c5052/Accessoires-De-Salle-De-Bains.html">
                      Accessoires de salle de bains
                    </a>
                  </li>
                  <li>
                    <a href="/c5047/Baignoires.html">Baignoires</a>
                  </li>
                  <li>
                    <a href="/c5482/Bidets.html">Bidets</a>
                  </li>
                  <li>
                    <a href="/c5484/Brosses-Eponges-Et-Gants.html">
                      Brosses, éponges et gants
                    </a>
                  </li>
                  <li>
                    <a href="/c5485/Divers-Salle-De-Bains.html">
                      Divers Salle de bains
                    </a>
                  </li>
                  <li>
                    <a href="/c5048/Douche-Et-Accessoires.html">
                      Douche et accessoires
                    </a>
                  </li>
                  <li>
                    <a href="/c5056/Linge-De-Bain.html">Linge de bain</a>
                  </li>
                  <li>
                    <a href="/c5049/Meubles-De-Salle-De-Bains.html">
                      Meubles de salle de bains
                    </a>
                  </li>
                  <li>
                    <a href="/c5053/Miroirs-De-Salle-De-Bains.html">
                      Miroirs de salle de bains
                    </a>
                  </li>
                  <li>
                    <a href="/c5487/Pots-Et-Flacons.html">Pots et flacons</a>
                  </li>
                  <li>
                    <a href="/c5055/Radiateurs-De-Salle-De-Bains.html">
                      Radiateurs de salle de bains
                    </a>
                  </li>
                  <li>
                    <a href="/c5046/Robinetterie.html">Robinetterie</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2A8C02BD1BDD76DFDA1646CBFDF2624954A2C947E3CA96B1B2C714B9C0DFF6FD123DCAF7DE0014B5789243526E7DD0A6465C9C567149DE6CF8928A83C2BAABD4DD581791484172CB4B8A"
                    >
                      Réalisations de salle de bains
                    </span>
                  </li>
                  <li>
                    <a href="/c5065/Salles-De-Bains-Completes.html">
                      Salles de bains complètes
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5483/Sauna-Hammam.html">Sauna &amp; hammam</a>
                  </li>
                  <li>
                    <a href="/c5054/Savons.html">Savons</a>
                  </li>
                  <li>
                    <a href="/c5064/Sels-De-Bain-Cosmetique.html">
                      Sels de bain &amp; Cosmétique
                    </a>
                  </li>
                  <li>
                    <a href="/c5486/Sechoirs.html">Séchoirs</a>
                  </li>
                  <li>
                    <a href="/c5051/Vasques-Et-Lavabos.html">
                      Vasques et lavabos
                    </a>
                  </li>
                  <li>
                    <a href="/c5050/Wc-Et-Sanitaires.html">WC et sanitaires</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u17/Cuisine-Accessoires.html">
                      CUISINE ACCESSOIRES
                    </a>
                  </p>
                  <li>
                    <a href="/c5488/Accessoires-De-Cuisine.html">
                      Accessoires de cuisine
                    </a>
                  </li>
                  <li>
                    <a href="/c5111/Accrocher.html">Accrocher</a>
                  </li>
                  <li>
                    <a href="/c5105/Aiguiser.html">Aiguiser</a>
                  </li>
                  <li>
                    <a href="/c5754/Autour-De-L-Evier.html">Autour de l'évier</a>
                  </li>
                  <li>
                    <a href="/c6691/Autour-Du-Linge.html">Autour du linge</a>
                  </li>
                  <li>
                    <a href="/c6689/Autour-Du-Vin-Cuisine.html">
                      Autour du vin Cuisine
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2A8C06BA1BDD76DFDA1646CBFDF2624954A2CB3791C697C0B3B11FC3C0D9F6FD123DC9FDD20314A57C905C165868898D48419C125B498011F18A8B8A"
                    >
                      Bacs et bassines
                    </span>
                  </li>
                  <li>
                    <a href="/c5110/Boites-Pots-Bocaux.html">
                      Boites-pots-bocaux
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c6437/Conservation-Refrigeration.html">
                      Conservation Réfrigération
                    </a>
                  </li>
                  <li>
                    <a href="/c5101/Couper-Eplucher.html">Couper Eplucher</a>
                  </li>
                  <li>
                    <a href="/c7137/Divers-Cuisine-Accessoires.html">
                      Divers Cuisine accessoires
                    </a>
                  </li>
                  <li>
                    <a href="/c5114/Doser-Mesurer.html">Doser Mesurer</a>
                  </li>
                  <li>
                    <a href="/c5107/Egouttoirs.html">Egouttoirs</a>
                  </li>
                  <li>
                    <a href="/c5108/Filtres-Et-Tamis.html">Filtres et tamis</a>
                  </li>
                  <li>
                    <a href="/c5921/Gastronomie.html">Gastronomie</a>
                  </li>
                  <li>
                    <a href="/c5103/Hacher-Broyer.html">Hacher broyer</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2A8C0BBD1BDD76DFDA1646CBFDF2624954A2BE34E6CC9EC6B5C061CCCAAA8AFD123DC9FADE0214AF728143547A79D7E26D57C23840458056F79BC88E9B93A2"
                    >
                      Horloges de cuisine
                    </span>
                  </li>
                  <li>
                    <a href="/c5102/Mixeur-Batteur.html">Mixeur batteur</a>
                  </li>
                  <li>
                    <a href="/c5109/Moulins.html">Moulins</a>
                  </li>
                  <li>
                    <a href="/c5113/Ouvrir.html">Ouvrir</a>
                  </li>
                  <li>
                    <a href="/c5106/Peser.html">Peser</a>
                  </li>
                  <li>
                    <a href="/c6690/Plateaux.html">Plateaux</a>
                  </li>
                  <li>
                    <a href="/c6688/Preparation-Cuisson.html">
                      Préparation Cuisson
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5112/Rangements.html">Rangements</a>
                  </li>
                  <li>
                    <a href="/c5099/Rapes.html">Rapes</a>
                  </li>
                  <li>
                    <a href="/c6438/Textile.html">Textile</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u65/Cuisine-Cuisson.html">CUISINE CUISSON</a>
                  </p>
                  <li>
                    <a href="/c5126/Appareils-Divers.html">Appareils divers</a>
                  </li>
                  <li>
                    <a href="/c5119/Bouilloires.html">Bouilloires</a>
                  </li>
                  <li>
                    <a href="/c5120/Cafetieres.html">Cafetières</a>
                  </li>
                  <li>
                    <a href="/c5118/Casseroles.html">Casseroles</a>
                  </li>
                  <li>
                    <a href="/c5531/Divers-Cuisine-Cuisson.html">
                      Divers Cuisine Cuisson
                    </a>
                  </li>
                  <li>
                    <a href="/c5125/Grills.html">Grills</a>
                  </li>
                  <li>
                    <a href="/c5117/Moules.html">Moules</a>
                  </li>
                  <li>
                    <a href="/c5121/Plats.html">Plats</a>
                  </li>
                  <li>
                    <a href="/c5122/Poeles.html">Poêles</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u66/Cuisine-Equipement.html">CUISINE EQUIPEMENT</a>
                  </p>
                  <li>
                    <a href="/c5347/Billots-Et-Dessertes.html">
                      Billots et dessertes
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5344/Cuisines-Completes.html">
                      Cuisines complètes
                    </a>
                  </li>
                  <li>
                    <a href="/c5123/Cuisinieres.html">Cuisinières</a>
                  </li>
                  <li>
                    <a href="/c7129/Divers-Cuisine-Equipement.html">
                      Divers cuisine équipement
                    </a>
                  </li>
                  <li>
                    <a href="/c5412/Equipements-Divers.html">
                      Equipements divers
                    </a>
                  </li>
                  <li>
                    <a href="/c5345/Eviers.html">Eviers</a>
                  </li>
                  <li>
                    <a href="/c5124/Fours.html">Fours</a>
                  </li>
                  <li>
                    <a href="/c6198/Hottes-Aspirantes.html">Hottes aspirantes</a>
                  </li>
                  <li>
                    <a href="/c5349/Lave-Linges.html">Lave-linges</a>
                  </li>
                  <li>
                    <a href="/c6452/Lave-Vaisselle.html">Lave-vaisselle</a>
                  </li>
                  <li>
                    <a href="/c5346/Meubles-De-Cuisine.html">
                      Meubles de cuisine
                    </a>
                  </li>
                  <li>
                    <a href="/c5413/Racks-Et-Supports.html">Racks et supports</a>
                  </li>
                  <li>
                    <a href="/c5410/Robinetterie-De-Cuisine.html">
                      Robinetterie de cuisine
                    </a>
                  </li>
                  <li>
                    <a href="/c6080/Refrigerateurs-Congelateurs.html">
                      Réfrigérateurs Congélateurs
                    </a>
                  </li>
                  <li>
                    <a href="/c6070/Tables-De-Cuisson.html">Tables de cuisson</a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D2A8B03BE1BDD76DFDA1646CBFDF2624954A2BA4391C998CFB4C061BDB0AA80FD123F9FFAC84608C85E814A5A6979D1BD04768A085C4B9D5AEBD3A593868DA797FA143C9E520134D7528BB3"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2A8B03B91BDD76DFDA1646CBFDF2624954A2BE41E0CF9BC7CFCF61B8C2A9F7FD123F9FFDC84608C85B924D49747FC5A15D1FAC0E5C5F9A51FCD3A4878690E091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2A8B02CC1BDD76DFDA1646CBFDF2624954A2C340E2CFE9C5B5B41EB9CAAE8AFD123F9FFCD71C4ED432BA424B726ED0AE5D579A09186F8656EA978883C2BCAF90F117168B5603"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2A8B02C71BDD76DFDA1646CBFDF2624954A2CE40E0C69BB4C3C11FCDB7DD80FD123F9FFBC84608C8599A5C4F6F75C6BA5D579A09186F8656EA978883C2BCAF90F117168B5603"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title ="Décoration" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Décoration"
            href="/su4/Decoration.html"
          >
            Décoration
          </a>
          <ul className="grid-superUniver"title="Décoration"  ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  18147 produits : Décoration{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u82/Art.html">ART</a>
                  </p>
                  <li>
                    <a href="/c5845/Oeuvres-Sur-Papier.html">
                      Oeuvres sur papier
                    </a>
                  </li>
                  <li>
                    <a href="/c6766/Peintures.html">Peintures</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2A890BCE1BDD76DFDA1646CBFDF2624954A2CA3592B8E9C3B2CE10BDC0DA82FD123DC9FDD50114B7759C5B547A6EC5BF415B8A081B448752F5"
                    >
                      Photographies
                    </span>
                  </li>
                  <li>
                    <a href="/c8298/Reproductions.html">Reproductions</a>
                  </li>
                  <li>
                    <a href="/c5319/Sculptures.html">Sculptures</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u68/En-Marge-De-La-Deco.html">
                      EN MARGE DE LA DÉCO
                    </a>
                  </p>
                  <li>
                    <a href="/c5144/Bagagerie.html">Bagagerie</a>
                  </li>
                  <li>
                    <a href="/c5143/Bijouterie.html">Bijouterie</a>
                  </li>
                  <li>
                    <a href="/c5147/Couture.html">Couture</a>
                  </li>
                  <li>
                    <a href="/c5529/Divers-En-Marge-De-La-Deco.html">
                      Divers En marge de la Déco
                    </a>
                  </li>
                  <li>
                    <a href="/c5372/Emballages.html">Emballages</a>
                  </li>
                  <li>
                    <a href="/c5146/Etuis-Et-Trousses.html">Etuis et trousses</a>
                  </li>
                  <li>
                    <a href="/c6005/Livres-Magazines.html">
                      Livres &amp; Magazines
                    </a>
                  </li>
                  <li>
                    <a href="/c5149/Plv.html">PLV</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5145/Vetements.html">Vêtements</a>
                  </li>
                  <li>
                    <a href="/c7707/Sacs-Et-Accessoires.html">
                      sacs et accessoires
                    </a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u16/Fleurs-Et-Senteurs.html">FLEURS ET SENTEURS</a>
                  </p>
                  <li>
                    <a href="/c5316/Arbres-Et-Plantes.html">Arbres et plantes</a>
                  </li>
                  <li>
                    <a href="/c5502/Divers-Fleurs-Et-Senteurs.html">
                      Divers fleurs et senteurs
                    </a>
                  </li>
                  <li>
                    <a href="/c5312/Encens.html">Encens</a>
                  </li>
                  <li>
                    <a href="/c5315/Feuillages.html">Feuillages</a>
                  </li>
                  <li>
                    <a href="/c5317/Fleurs-Et-Compositions.html">
                      Fleurs et compositions
                    </a>
                  </li>
                  <li>
                    <a href="/c5313/Senteurs.html">Senteurs</a>
                  </li>
                  <li>
                    <a href="/c5314/Vases.html">Vases</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u70/Noel-Mariage-Et-Fetes.html">
                      NOËL MARIAGE ET FÊTES
                    </a>
                  </p>
                  <li>
                    <a href="/c5526/Accessoires-De-Fete.html">
                      Accessoires de fête
                    </a>
                  </li>
                  <li>
                    <a href="/c6227/Cadeaux-Et-Bonbonnieres.html">
                      Cadeaux et Bonbonnières
                    </a>
                  </li>
                  <li>
                    <a href="/c5525/Emballages.html">Emballages</a>
                  </li>
                  <li>
                    <a href="/c5318/Noel.html">Noel</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5861/Organisation-De-Fetes-Mariages.html">
                      Organisation de Fêtes &amp; Mariages
                    </a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u51/Objets-Decoratifs.html">OBJETS DÉCORATIFS</a>
                  </p>
                  <li>
                    <a href="/c5359/Affiches-Et-Posters.html">
                      Affiches et posters
                    </a>
                  </li>
                  <li>
                    <a href="/c5375/Animaux.html">Animaux</a>
                  </li>
                  <li>
                    <a href="/c5376/Armes-Et-Armures.html">Armes et armures</a>
                  </li>
                  <li>
                    <a href="/c7029/Assiettes-Decoratives.html">
                      Assiettes décoratives
                    </a>
                  </li>
                  <li>
                    <a href="/c5361/Boites-Decoratives.html">
                      Boites décoratives
                    </a>
                  </li>
                  <li>
                    <a href="/c5186/Bougies-Bougeoirs.html">Bougies Bougeoirs</a>
                  </li>
                  <li>
                    <a href="/c5362/Boules.html">Boules</a>
                  </li>
                  <li>
                    <a href="/c5363/Cadres.html">Cadres</a>
                  </li>
                  <li>
                    <a href="/c6947/Chiffres-Et-Lettres-Decoratifs.html">
                      Chiffres et Lettres décoratifs
                    </a>
                  </li>
                  <li>
                    <a href="/c5364/Coffrets.html">Coffrets</a>
                  </li>
                  <li>
                    <a href="/c5396/Coupes-Et-Contenants.html">
                      Coupes et contenants
                    </a>
                  </li>
                  <li>
                    <a href="/c5400/Couronnes-Et-Guirlandes.html">
                      Couronnes et guirlandes
                    </a>
                  </li>
                  <li>
                    <a href="/c5524/Divers-Objets-Decoratifs.html">
                      Divers Objets décoratifs
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5402/Eventails.html">Eventails</a>
                  </li>
                  <li>
                    <a href="/c5397/Fruits-Decoratifs.html">Fruits décoratifs</a>
                  </li>
                  <li>
                    <a href="/c5366/Horloges-Pendules-Reveils.html">
                      Horloges Pendules Réveils
                    </a>
                  </li>
                  <li>
                    <a href="/c5368/Maquettes.html">Maquettes</a>
                  </li>
                  <li>
                    <a href="/c5399/Masques.html">Masques</a>
                  </li>
                  <li>
                    <a href="/c5367/Miroirs.html">Miroirs</a>
                  </li>
                  <li>
                    <a href="/c5398/Mobiles-Balanciers.html">
                      Mobiles balanciers
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BFF01C91BDD76DFDA1646CBFDF2624954A2C843E0B89EB5C4B31FB9B5DA8AFD123DCAFEDE0614A9689E4648707DD0A658478A555D589E53"
                    >
                      Numismatique
                    </span>
                  </li>
                  <li>
                    <a href="/c5369/Objets-De-Marine.html">Objets de marine</a>
                  </li>
                  <li>
                    <a href="/c5360/Tabac.html">Tabac</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BFF00CE1BDD76DFDA1646CBFDF2624954A2CE30E2CBEDC1B6C716C2B2DBF0FD123DC9FAD70214B17C9D415E6F75C1E279538112505E8011F18A8B8A"
                    >
                      Vannerie paniers
                    </span>
                  </li>
                  <li>
                    <a href="/c6573/Vases-Decoratifs.html">Vases décoratifs</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u50/Ornements.html">ORNEMENTS</a>
                  </p>
                  <li>
                    <a href="/c5063/Architecture.html">Architecture</a>
                  </li>
                  <li>
                    <a href="/c5528/Divers-Art-Et-Ornements.html">
                      Divers Art et Ornements
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c6270/Decors-Muraux.html">Décors muraux</a>
                  </li>
                  <li>
                    <a href="/c5320/Faux.html">Faux</a>
                  </li>
                  <li>
                    <a href="/c5323/Marqueterie-Et-Mosaique.html">
                      Marqueterie et Mosaique
                    </a>
                  </li>
                  <li>
                    <a href="/c6144/Musique-Et-Instruments.html">
                      Musique et Instruments
                    </a>
                  </li>
                  <li>
                    <a href="/c6271/Religion.html">Religion</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BFF06CC1BDD76DFDA1646CBFDF2624954A2CA4E90BDECCFC7C512BACBDC85FD123DC9FDD50414B5789F464E6F79D7E141468217"
                    >
                      Reliures
                    </span>
                  </li>
                  <li>
                    <a href="/c5899/Taxidermie-Et-Trophees-De-Chasse.html">
                      Taxidermie et Trophées de chasse
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BFF06BE1BDD76DFDA1646CBFDF2624954A2CB3297CC96C1C5C262C9CBD680FD123DC9FDD50614B174875D5A68648AA75D5F83"
                    >
                      Vitraux
                    </span>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u81/Papeterie-Accessoires-De-Bureau.html">
                      PAPETERIE ACCESSOIRES DE BUREAU
                    </a>
                  </p>
                  <li>
                    <a href="/c5227/Fournitures-De-Bureau.html">
                      Fournitures de bureau
                    </a>
                  </li>
                  <li>
                    <a href="/c5226/Papeterie-Ecriture.html">
                      Papeterie Ecriture
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D2BFF05BD1BDD76DFDA1646CBFDF2624954A2CF42E4BBEEC5B4C217BDC2AEF7FD123F9FFAC8460FC85E814A5A6979D1BD04768A085C4B9D5AEBD3A2838C91BC98EB50119115076ED24A"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2BFF04CD1BDD76DFDA1646CBFDF2624954A2CF4795CDEDC6C5B511C8C4AA84FD123F9FFDC8460FC85B924D49747FC5A15D1FAB1E5643815EED978988C196BA94F3"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2BFF04C61BDD76DFDA1646CBFDF2624954A2BD4E96CDE9C1C2B51FCCCBDE86FD123F9FFCD71C4ED332BA424B726ED0AE5D579A091868965CF68C87928691A0D7F74D1393"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2BFF0BCF1BDD76DFDA1646CBFDF2624954A2C940E6BFEBC3B6C410CECBDA80FD123F9FFBC8460FC8599A5C4F6F75C6BA5D579A091868965CF68C87928691A0D7F74D1393"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title="Enfant" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Enfant"
            href="/su8/Enfant.html"
          >
            Enfant
          </a>
          <ul className="grid-superUniver"title="Enfant"  ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  5962 produits : Enfant{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u62/Enfant.html">ENFANT</a>
                  </p>
                  <li>
                    <a href="/c5443/Accessoires-De-Table-Enfant.html">
                      Accessoires de table enfant
                    </a>
                  </li>
                  <li>
                    <a href="/c5406/Bain-Et-Toilette.html">Bain et toilette</a>
                  </li>
                  <li>
                    <a href="/c5996/Chambres-Enfant.html">Chambres Enfant</a>
                  </li>
                  <li>
                    <a href="/c5448/Divers-Enfant.html">Divers enfant</a>
                  </li>
                  <li>
                    <a href="/c5445/Decoration-Enfant.html">Décoration enfant</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c6001/Linge-De-Lit-Enfant.html">
                      Linge de lit Enfant
                    </a>
                  </li>
                  <li>
                    <a href="/c5407/Luminaires-Enfant.html">Luminaires Enfant</a>
                  </li>
                  <li>
                    <a href="/c5447/Mobilite.html">Mobilité</a>
                  </li>
                  <li>
                    <a href="/c5446/Naissance-Et-Bapteme.html">
                      Naissance et baptème
                    </a>
                  </li>
                  <li>
                    <a href="/c5995/Rangement-Enfant.html">Rangement Enfant</a>
                  </li>
                  <li>
                    <a href="/c5994/Sieges-Enfant.html">Sièges Enfant</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5444/Securite-Enfant.html">Sécurité enfant</a>
                  </li>
                  <li>
                    <a href="/c5409/Tables-Bureaux-Enfant.html">
                      Tables Bureaux Enfant
                    </a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u22/Jeux-Jouets.html">JEUX &amp; JOUETS</a>
                  </p>
                  <li>
                    <a href="/c5383/Billards.html">Billards</a>
                  </li>
                  <li>
                    <a href="/c5477/Divers-Jeux-Jouets.html">
                      Divers jeux jouets
                    </a>
                  </li>
                  <li>
                    <a href="/c5476/Deguisements.html">Déguisements</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c6142/Instruments-De-Musique-Enfant.html">
                      Instruments de musique Enfant
                    </a>
                  </li>
                  <li>
                    <a href="/c6655/Jeux-D-Adresse-Et-De-Logique.html">
                      Jeux d'adresse et de logique
                    </a>
                  </li>
                  <li>
                    <a href="/c5387/Jeux-De-Plein-Air.html">Jeux de plein air</a>
                  </li>
                  <li>
                    <a href="/c5384/Jeux-De-Societe.html">Jeux de société</a>
                  </li>
                  <li>
                    <a href="/c5474/Jeux-Pour-Apprendre.html">
                      Jeux pour apprendre
                    </a>
                  </li>
                  <li>
                    <a href="/c5473/Jeux-Sportifs.html">Jeux sportifs</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5385/Jouets-A-Trainer.html">Jouets à trainer</a>
                  </li>
                  <li>
                    <a href="/c5478/Miniatures.html">Miniatures</a>
                  </li>
                  <li>
                    <a href="/c5475/Poupees.html">Poupées</a>
                  </li>
                  <li>
                    <a href="/c5442/Poupees-Peluches.html">Poupées Peluches</a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D2BFB03CA1BDD76DFDA1646CBFDF2624954A2CD4FE6BB98C1B3C515C8C1A9F2FD123F9FFAC84603C85E814A5A6979D1BD04768A085C4B9D5AEBD3A388899FA08DB1510A9257"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2BFB03BD1BDD76DFDA1646CBFDF2624954A2CD46E3CC9CB6B3C31FB8B1AEF5FD123F9FFDC84603C85B924D49747FC5A15D1FAA15534D9D4BB796928B83"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2BFB02CE1BDD76DFDA1646CBFDF2624954A2C84E97CA9CB5B3C716C8C6AA84FD123F9FFCD71C4EDF32BA424B726ED0AE5D579A0918699D59F89092C8878AA395"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2BFB02C61BDD76DFDA1646CBFDF2624954A2CC3591CB9AC0B4B51ECDC2D8F1FD123F9FFBC84603C8599A5C4F6F75C6BA5D579A0918699D59F89092C8878AA395"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title="Equipement" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Equipement"
            href="/su5/Equipement.html"
          >
            Equipement
          </a>
          <ul className="grid-superUniver"title="Equipement"  ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  6841 produits : Equipement{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u45/Cheminee.html">CHEMINÉE</a>
                  </p>
                  <li>
                    <a href="/c5129/Accessoires-De-Cheminee.html">
                      Accessoires de cheminée
                    </a>
                  </li>
                  <li>
                    <a href="/c5127/Cheminees.html">Cheminées</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BF903C71BDD76DFDA1646CBFDF2624954A2BD4E95BD97C4C7CE61BAC3DF87FD123DC9FBD50014A4729E4D4E6E68CDAD45579C555D589E53"
                    >
                      Combustibles
                    </span>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BF903B91BDD76DFDA1646CBFDF2624954A2BD4591BD96C5B4B313CBC5D9F2FD123DC9FFD40214A4729D4B4E7468D7E141468217"
                    >
                      Conduits
                    </span>
                  </li>
                  <li>
                    <a href="/c5130/Ecrans-Et-Pare-Feux.html">
                      Ecrans et pare-feux
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BF902BD1BDD76DFDA1646CBFDF2624954A2C23795CB98C4CEB511C9B6D68AFD123DC9FFD40114B771925E4E786F8AA75D5F83"
                    >
                      Plaques
                    </span>
                  </li>
                  <li>
                    <a href="/c5128/Poeles-Foyers-Inserts.html">
                      Poêles Foyers Inserts
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BF901C81BDD76DFDA1646CBFDF2624954A2C94FE7CEE9B4C6CF1FCFCBAC81FD123DC9F9DE0514B472815B52786F898B4C1FBB145C58DD57ED938A"
                    >
                      Sorties de toit
                    </span>
                  </li>
                </ul>
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u12/Equipement.html">EQUIPEMENT</a>
                  </p>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BF900CB1BDD76DFDA1646CBFDF2624954A2C94290CEEACFB3C016BAC0AB83FD123DCBFBD10B14A66F9E40526F79D7E27A428A185C4D9F56EA9B8395C196BA94F3"
                    >
                      Armoires spécialisées
                    </span>
                  </li>
                  <li>
                    <a href="/c5184/Ascenseurs.html">Ascenseurs</a>
                  </li>
                  <li>
                    <a href="/c5599/Aspirateurs.html">Aspirateurs</a>
                  </li>
                  <li>
                    <a href="/c5183/Cave.html">Cave</a>
                  </li>
                  <li>
                    <a href="/c5181/Climatisation-Ventilation.html">
                      Climatisation Ventilation
                    </a>
                  </li>
                  <li>
                    <a href="/c5976/Coffres-Forts.html">Coffres forts</a>
                  </li>
                  <li>
                    <a href="/c5521/Divers-Equipement.html">Divers Equipement</a>
                  </li>
                  <li>
                    <a href="/c5179/Escaliers-Echelles.html">
                      Escaliers Echelles
                    </a>
                  </li>
                  <li>
                    <a href="/c5180/Radiateurs.html">Radiateurs</a>
                  </li>
                  <li>
                    <a href="/c7644/Radiateurs-Electriques.html">
                      Radiateurs électriques
                    </a>
                  </li>
                </ul>
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u69/Maisons-Individuelles.html">
                      MAISONS INDIVIDUELLES
                    </a>
                  </p>
                  <li>
                    <a href="/c5619/Agencements-De-Magasin.html">
                      Agencements de magasin
                    </a>
                  </li>
                  <li>
                    <a href="/c5620/Maisons-Individuelles.html">
                      Maisons individuelles
                    </a>
                  </li>
                  <li>
                    <a href="/c5621/Realisations-D-Architecte.html">
                      Réalisations d'architecte
                    </a>
                  </li>
                  <li>
                    <a href="/c5622/Realisations-D-Architecte-D-Interieur.html">
                      Réalisations d'architecte d'intérieur
                    </a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u53/Portes-Et-Fenetres.html">PORTES ET FENÊTRES</a>
                  </p>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BF90BBC1BDD76DFDA1646CBFDF2624954A2BE40E0CDE9C2C7C41EBEC5DDF7FD123DC9FDDE0614A668854A55696F898A5D1FA21A475D8656EA9B95C8878AA395"
                    >
                      Auvents et marquises
                    </span>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BF90ACD1BDD76DFDA1646CBFDF2624954A2C244E2CB9BC3C1C114B8B1DE83FD123DC9FCD40B14A57C9F4C54736F8AA75D5F83"
                    >
                      Balcons
                    </span>
                  </li>
                  <li>
                    <a href="/c5494/Divers-Portes-Fenetres.html">
                      Divers Portes &amp; Fenêtres
                    </a>
                  </li>
                  <li>
                    <a href="/c5233/Fenetres.html">Fenêtres</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5240/Films.html">Films</a>
                  </li>
                  <li>
                    <a href="/c5352/Grilles.html">Grilles</a>
                  </li>
                  <li>
                    <a href="/c5235/Poignees-De-Portes.html">
                      Poignées de portes
                    </a>
                  </li>
                  <li>
                    <a href="/c5232/Portes.html">Portes</a>
                  </li>
                  <li>
                    <a href="/c6244/Portes-De-Garage.html">Portes de garage</a>
                  </li>
                  <li>
                    <a href="/c5237/Portes-Fenetres.html">Portes-fenêtres</a>
                  </li>
                  <li>
                    <a href="/c5239/Quincaillerie-De-Porte.html">
                      Quincaillerie de porte
                    </a>
                  </li>
                  <li>
                    <a href="/c5236/Stores-D-Exterieur.html">
                      Stores d'extérieur
                    </a>
                  </li>
                  <li>
                    <a href="/c5493/Verrieres.html">Verrieres</a>
                  </li>
                  <li>
                    <a href="/c5234/Volets.html">Volets</a>
                  </li>
                </ul>
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u44/Rangement-Dressing.html">RANGEMENT DRESSING</a>
                  </p>
                  <li>
                    <a href="/c5270/Boites-Et-Caisses.html">Boites et caisses</a>
                  </li>
                  <li>
                    <a href="/c5267/Clefs.html">Clefs</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2BF976BB1BDD76DFDA1646CBFDF2624954A2CC3495CAEEC1C6B465B9C4AD87FD123DC9FBD50314A374854A496E31F6AE47558A1650428712DD8C83959C97A09EB1510A9257"
                    >
                      Divers Rangement Dressing
                    </span>
                  </li>
                  <li>
                    <a href="/c5266/Dressing-Accessoires.html">
                      Dressing accessoires
                    </a>
                  </li>
                  <li>
                    <a href="/c5264/Dressings.html">Dressings</a>
                  </li>
                  <li>
                    <a href="/c5272/Penderies.html">Penderies</a>
                  </li>
                  <li>
                    <a href="/c5265/Placards.html">Placards</a>
                  </li>
                  <li>
                    <a href="/c5271/Valets-Et-Mannequins.html">
                      Valets et mannequins
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D2BF802CA1BDD76DFDA1646CBFDF2624954A2B84E95BD99B5C1C065BAB2AC87FD123F9FFAC8460EC85E814A5A6979D1BD04768A085C4B9D5AEBD3A3979A97BE9CF25C108B15076ED24A"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2BF801CE1BDD76DFDA1646CBFDF2624954A2BD4592BD99B2C6B163C3CADE80FD123F9FFDC8460EC85B924D49747FC5A15D1FAA0A4045835AF49B8892C196BA94F3"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2BF801BA1BDD76DFDA1646CBFDF2624954A2CE4596CD97B1B3C065B8C5AE87FD123F9FFCD71C4ED232BA424B726ED0AE5D579A091869824AF08E838B8A90BAD7F74D1393"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2BF800CB1BDD76DFDA1646CBFDF2624954A2BD4795CA98CFB4B162BFC3AAF6FD123F9FFBC8460EC8599A5C4F6F75C6BA5D579A091869824AF08E838B8A90BAD7F74D1393"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title="Extérieur" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Extérieur"
            href="/su6/Exterieur.html"
          >
            Extérieur
          </a>
          <ul className="grid-superUniver"title="Extérieur" ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  12071 produits : Extérieur{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u15/Exterieur-Divers.html">EXTÉRIEUR DIVERS</a>
                  </p>
                  <li>
                    <a href="/c5177/Arrosage.html">Arrosage</a>
                  </li>
                  <li>
                    <a href="/c5174/Barbecues.html">Barbecues</a>
                  </li>
                  <li>
                    <a href="/c5855/Chauffage-D-Exterieur.html">
                      Chauffage d'extérieur
                    </a>
                  </li>
                  <li>
                    <a href="/c7135/Divers-Exterieur.html">Divers Extérieur</a>
                  </li>
                  <li>
                    <a href="/c5176/Jardinage.html">Jardinage</a>
                  </li>
                  <li>
                    <a href="/c5391/Jardins-Realisations.html">
                      Jardins réalisations
                    </a>
                  </li>
                  <li>
                    <a href="/c5175/Mobilier-Urbain.html">Mobilier urbain</a>
                  </li>
                  <li>
                    <a href="/c5388/Ornements-De-Jardin.html">
                      Ornements de jardin
                    </a>
                  </li>
                  <li>
                    <a href="/c6245/Plaques-Signaletiques.html">
                      Plaques signalétiques
                    </a>
                  </li>
                  <li>
                    <a href="/c5810/Tondeuses-A-Gazon.html">Tondeuses à gazon</a>
                  </li>
                </ul>
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u64/Jardin-Abris-Portails.html">
                      JARDIN ABRIS PORTAILS...
                    </a>
                  </p>
                  <li>
                    <a href="/c5154/Abris-Chalets.html">Abris Chalets</a>
                  </li>
                  <li>
                    <a href="/c5157/Claustras-Et-Treillages.html">
                      Claustras et treillages
                    </a>
                  </li>
                  <li>
                    <a href="/c5155/Clotures-Bordures.html">Clôtures Bordures</a>
                  </li>
                  <li>
                    <a href="/c5449/Divers.html">Divers</a>
                  </li>
                  <li>
                    <a href="/c5162/Facade-Et-Toiture.html">Façade et toiture</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2B8E02C81BDD76DFDA1646CBFDF2624954A2C241ECBAEDC1B6B465CEC2DC80FD123DC9FFD10314A07C814E5C786F8AA75D5F83"
                    >
                      Garages
                    </span>
                  </li>
                  <li>
                    <a href="/c5061/Kiosques-Et-Gloriettes.html">
                      Kiosques et gloriettes
                    </a>
                  </li>
                  <li>
                    <a href="/c5389/Ponts-Et-Passerelles.html">
                      Ponts et passerelles
                    </a>
                  </li>
                  <li>
                    <a href="/c5153/Portails.html">Portails</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2B8E00CE1BDD76DFDA1646CBFDF2624954A2C346E5CF9CB1C7C61EC2CAAAF7FD123DCAF7DE0314B5728643546968C1BC075A9B1659"
                    >
                      Roulottes
                    </span>
                  </li>
                  <li>
                    <a href="/c5161/Serres.html">Serres</a>
                  </li>
                  <li>
                    <a href="/c5156/Tentes.html">Tentes</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5158/Verandas.html">Verandas</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u63/Jardin-Bacs-Pots.html">JARDIN BACS POTS</a>
                  </p>
                  <li>
                    <a href="/c5452/Bacs.html">Bacs</a>
                  </li>
                  <li>
                    <a href="/c5518/Divers-Jardin-Bacs-Pots.html">
                      Divers Jardin Bacs Pots
                    </a>
                  </li>
                  <li>
                    <a href="/c5451/Fontaines.html">Fontaines</a>
                  </li>
                  <li>
                    <a href="/c5453/Jardinieres.html">Jardinières</a>
                  </li>
                  <li>
                    <a href="/c5519/Porte-Pots.html">Porte-Pots</a>
                  </li>
                  <li>
                    <a href="/c5450/Pots-De-Jardin.html">Pots de jardin</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u61/Jardin-Mobilier.html">JARDIN MOBILIER</a>
                  </p>
                  <li>
                    <a href="/c5163/Bancs-De-Jardin.html">Bancs de jardin</a>
                  </li>
                  <li>
                    <a href="/c5166/Chaises-De-Jardin.html">Chaises de jardin</a>
                  </li>
                  <li>
                    <a href="/c5169/Chaises-Longues.html">Chaises longues</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5172/Divers-Mobilier-De-Jardin.html">
                      Divers mobilier de jardin
                    </a>
                  </li>
                  <li>
                    <a href="/c5164/Fauteuils-D-Exterieur.html">
                      Fauteuils d'extérieur
                    </a>
                  </li>
                  <li>
                    <a href="/c5165/Hamacs.html">Hamacs</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2B8D07C71BDD76DFDA1646CBFDF2624954A2C333ECCE9ACEC1B411C9C4AA86FD123DC9FFD00314AF72865C48786F898B4C1FBF095A58965CED978988C196BA94F3"
                    >
                      Housses de protection
                    </span>
                  </li>
                  <li>
                    <a href="/c5168/Parasols-Tonnelles.html">
                      Parasols Tonnelles
                    </a>
                  </li>
                  <li>
                    <a href="/c5173/Salons-Complets.html">Salons complets</a>
                  </li>
                  <li>
                    <a href="/c5171/Tables-De-Jardin.html">Tables de jardin</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2B8D06BE1BDD76DFDA1646CBFDF2624954A2BA3591CC9BB1C4C51EB9B6AAF7FD123DC9F7D10614B3789D5B5E6E31E1BB04619B09404F874AEB9B95CBA891A09FF3581C935E1C34D7528BB3"
                    >
                      Tentes et Structures gonflables
                    </span>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u60/Piscine-Et-Spa.html">PISCINE ET SPA</a>
                  </p>
                  <li>
                    <a href="/c5298/Abris-De-Piscine-Et-Spa.html">
                      Abris de piscine et spa
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2B8D05BC1BDD76DFDA1646CBFDF2624954A2C843ECCDEBC3B1C01FC3C0AE82FD123DC9FDD70414A475925A5D7B7DC3AA075A9B1659"
                    >
                      Chauffage
                    </span>
                  </li>
                  <li>
                    <a href="/c5299/Couvertures-Et-Baches.html">
                      Couvertures et baches
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5303/Eclairage-Et-Son.html">Eclairage et son</a>
                  </li>
                  <li>
                    <a href="/c5308/Equipements-Divers.html">
                      Equipements divers
                    </a>
                  </li>
                  <li>
                    <a href="/c5309/Jeux-Et-Confort.html">Jeux et confort</a>
                  </li>
                  <li>
                    <a href="/c5311/Margelles-Et-Plages.html">
                      Margelles et plages
                    </a>
                  </li>
                  <li>
                    <a href="/c6162/Piscines.html">Piscines</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2B8D0BCA1BDD76DFDA1646CBFDF2624954A2C83292CC96C6B2B616CFB1DC8BFD123DC9F8DE0A14B7729C43165573D1BC4C41C11341419F"
                    >
                      Pool Houses
                    </span>
                  </li>
                  <li>
                    <a href="/c5305/Proprete.html">Propreté</a>
                  </li>
                  <li>
                    <a href="/c5306/Revetements.html">Revêtements</a>
                  </li>
                  <li>
                    <a href="/c5310/Spas.html">Spas</a>
                  </li>
                  <li>
                    <a href="/c5304/Securite.html">Sécurité</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2B8D72CF1BDD76DFDA1646CBFDF2624954A2C843EDC89BB5CFCF63BAB7AA82FD123DC9FDD70314B36F92464F7871C1A15D1FAB1E1860DE7AF88BC88E9B93A2"
                    >
                      Traitement de l'eau
                    </span>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D2B8D72BD1BDD76DFDA1646CBFDF2624954A2CB47ECBC96C1C4C663B9B6AB81FD123F9FFAC8460DC85E814A5A6979D1BD04768A085C4B9D5AEBD3A39E9B9BBC90FA4C0CD1531B77D3"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2B8D71CD1BDD76DFDA1646CBFDF2624954A2CC4797C69EC2C6C215CFB0DA85FD123F9FFDC8460DC85B924D49747FC5A15D1FAA0341498156FC8B94C8878AA395"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2B8D71C61BDD76DFDA1646CBFDF2624954A2CF4590BBE9CECFC314BAC0A986FD123F9FFCD71C4ED132BA424B726ED0AE5D579A0918698B4BFC8C8F839A8CE091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2B8D71B91BDD76DFDA1646CBFDF2624954A2CF34E0C69EC4C3CF15BAC5ABF2FD123F9FFBC8460DC8599A5C4F6F75C6BA5D579A0918698B4BFC8C8F839A8CE091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title="High-tech" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="High-tech"
            href="/su7/High-Tech.html"
          >
            High-tech
          </a>
          <ul className="grid-superUniver"title="High-tech"  ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  1912 produits : High-tech{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u79/Domotique.html">DOMOTIQUE</a>
                  </p>
                  <li>
                    <a href="/c5553/Alarmes.html">Alarmes</a>
                  </li>
                  <li>
                    <a href="/c5555/Commande-A-Distance.html">
                      Commande à distance
                    </a>
                  </li>
                  <li>
                    <a href="/c5557/Divers-Domotique.html">Divers Domotique</a>
                  </li>
                  <li>
                    <a href="/c5556/Detecteurs.html">Détecteurs</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5558/Interphones-Videosurveillance.html">
                      Interphones &amp; Vidéosurveillance
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2B8A01CC1BDD76DFDA1646CBFDF2624954A2C94197CCEEC4CEC013CAB0DF83FD123DC9FBD20A14AA72874049746FC5BB405D81567149DE6FF68C92839CD39896F35C0A8C15076ED24A"
                    >
                      Motorisation de portes &amp; volets
                    </span>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u71/Fitness.html">FITNESS</a>
                  </p>
                  <li>
                    <a href="/c5513/Appareils-De-Musculation.html">
                      Appareils de musculation
                    </a>
                  </li>
                  <li>
                    <a href="/c5516/Divers-Fitness.html">Divers Fitness</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5515/Velos.html">Vélos</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u80/High-Tech.html">HIGH-TECH</a>
                  </p>
                  <li>
                    <a href="/c5560/Bureautique.html">Bureautique</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2B8A00C71BDD76DFDA1646CBFDF2624954A2C845E6CB97B5B2C461CFB2AA83FD123DCAF8D10714A47C975D5E6E31EABA44579D124459964CB796928B83"
                    >
                      Cadres numériques
                    </span>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D2B8A00BD1BDD76DFDA1646CBFDF2624954A2B830E6CF96B1C7C614CACADDF5FD123DC9FBD10214A47C9E4A487E73D4AA5A1C870F5840"
                    >
                      Camescopes
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5562/Divers-High-Tech.html">Divers High Tech</a>
                  </li>
                  <li>
                    <a href="/c5564/Hifi-Son.html">Hifi &amp; Son</a>
                  </li>
                  <li>
                    <a href="/c5565/Micro-Informatique.html">
                      Micro-informatique
                    </a>
                  </li>
                  <li>
                    <a href="/c5568/Photo.html">Photo</a>
                  </li>
                  <li>
                    <a href="/c5569/Telephonie.html">Téléphonie</a>
                  </li>
                  <li>
                    <a href="/c5570/Televiseurs.html">Téléviseurs</a>
                  </li>
                  <li>
                    <a href="/c5571/Video.html">Vidéo</a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D2B8A06CA1BDD76DFDA1646CBFDF2624954A2CB3595B8EAB5C6B114C8B2DF80FD123F9FFAC8460CC85E814A5A6979D1BD04768A085C4B9D5AEBD3AE8F8896E3ADFA5A16D1531B77D3"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2B8A06C61BDD76DFDA1646CBFDF2624954A2CB35E3CB9FB4C1C166B9C6AEF0FD123F9FFDC8460CC85B924D49747FC5A15D1FA7125244DE6BFC9D8EC8878AA395"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2B8A06BB1BDD76DFDA1646CBFDF2624954A2B844E7CAEBC2C0C363CAC1D8F1FD123F9FFCD71C4ED032BA424B726ED0AE5D579A0918649A58F1D3B2838C96E091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D2B8A05CF1BDD76DFDA1646CBFDF2624954A2BE4590BA98C7CEC663C9C0DA87FD123F9FFBC8460CC8599A5C4F6F75C6BA5D579A0918649A58F1D3B2838C96E091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title="Luminaire" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Luminaire"
            href="/su9/Luminaire.html"
          >
            Luminaire
          </a>
          <ul className="grid-superUniver"title="Luminaire"  ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  14104 produits : Luminaire{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u58/Luminaires-Exterieur.html">
                      LUMINAIRES EXTÉRIEUR
                    </a>
                  </p>
                  <li>
                    <a href="/c5062/Appliques-D-Exterieur.html">
                      Appliques d'extérieur
                    </a>
                  </li>
                  <li>
                    <a href="/c7130/Divers-Luminaires-D-Exterieur.html">
                      Divers luminaires d'extérieur
                    </a>
                  </li>
                  <li>
                    <a href="/c5200/Illuminations.html">Illuminations</a>
                  </li>
                  <li>
                    <a href="/c5196/Lampions-Bougies-D-Exterieur.html">
                      Lampions &amp; Bougies d'extérieur
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5198/Lanternes-D-Exterieur.html">
                      Lanternes d'extérieur
                    </a>
                  </li>
                  <li>
                    <a href="/c5199/Luminaires-De-Sol.html">Luminaires de sol</a>
                  </li>
                  <li>
                    <a href="/c5297/Projecteurs.html">Projecteurs</a>
                  </li>
                  <li>
                    <a href="/c5197/Reverberes-Lampadaires.html">
                      Réverbères lampadaires
                    </a>
                  </li>
                  <li>
                    <a href="/c5296/Signaletiques-Lumineuses.html">
                      Signalétiques lumineuses
                    </a>
                  </li>
                </ul>
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u3/Luminaires-Interieur.html">
                      LUMINAIRES INTÉRIEUR
                    </a>
                  </p>
                  <li>
                    <a href="/c7845/Abat-Jour.html">Abat-jour</a>
                  </li>
                  <li>
                    <a href="/c5185/Appliques-D-Interieur.html">
                      Appliques d'intérieur
                    </a>
                  </li>
                  <li>
                    <a href="/c5804/Autres-Luminaires-Interieurs.html">
                      Autres luminaires intérieurs
                    </a>
                  </li>
                  <li>
                    <a href="/c5190/Electricite.html">Electricité</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28FE02BE1BDD76DFDA1646CBFDF2624954A2B83292BD98B2C3C266BEC4D9F5FD123DC9FFDE0014A0689A5D577C72C0AA5A1C870F5840"
                    >
                      Guirlandes
                    </span>
                  </li>
                  <li>
                    <a href="/c5187/Lampadaires.html">Lampadaires</a>
                  </li>
                  <li>
                    <a href="/c5188/Lampes.html">Lampes</a>
                  </li>
                  <li>
                    <a href="/c6317/Lanternes-D-Interieur.html">
                      Lanternes d'intérieur
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28FE01BC1BDD76DFDA1646CBFDF2624954A2CF47ECB8EAC5B4C465C8B6AAF2FD123DC9FFDE0714AB689E46557268CCAA5B539F1250029B4BF492"
                    >
                      Luminothérapie
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28FE00CE1BDD76DFDA1646CBFDF2624954A2C84491C99EC6B6B566BEC5AC8AFD123DCAFFD10714AB689E465E6F79D7E26D1FAE1657459251FA9BC88E9B93A2"
                    >
                      Lumières d'ambiance
                    </span>
                  </li>
                  <li>
                    <a href="/c5189/Lustres-Suspensions.html">
                      Lustres &amp; Suspensions
                    </a>
                  </li>
                  <li>
                    <a href="/c5195/Objets-Lumineux.html">Objets lumineux</a>
                  </li>
                  <li>
                    <a href="/c5192/Spots.html">Spots</a>
                  </li>
                  <li>
                    <a href="/c6233/Systemes-D-Eclairage.html">
                      Systèmes d'éclairage
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D28FE07CD1BDD76DFDA1646CBFDF2624954A2CE4797C999C0B3C010C9C5AEF7FD123F9FFAC84602C85E814A5A6979D1BD04768A085C4B9D5AEBD3AA938297A098F64B1BD1531B77D3"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D28FE07C91BDD76DFDA1646CBFDF2624954A2C846ECC79AC6C1C214BDC3DF86FD123F9FFDC84602C85B924D49747FC5A15D1FA30E58459D5EF08C83C8878AA395"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D28FE07BE1BDD76DFDA1646CBFDF2624954A2CB47E0BB99B2B6B666CCC1D6F7FD123F9FFCD71C4EDE32BA424B726ED0AE5D579A0918608652F090878F9D9BE091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D28FE07BA1BDD76DFDA1646CBFDF2624954A2B832EDCF9EC5C7C010BAB5D9F1FD123F9FFBC84602C8599A5C4F6F75C6BA5D579A0918608652F090878F9D9BE091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title="Mobilier" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Mobilier"
            href="/su10/Mobilier.html"
          >
            Mobilier
          </a>
          <ul className="grid-superUniver"title="Mobilier"  ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  24080 produits : Mobilier{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u9/Bureau.html">BUREAU</a>
                  </p>
                  <li>
                    <a href="/c5371/Affichage-Et-Tableaux.html">
                      Affichage et tableaux
                    </a>
                  </li>
                  <li>
                    <a href="/c5231/Amenagements.html">Aménagements</a>
                  </li>
                  <li>
                    <a href="/c5230/Armoires-Et-Rangements.html">
                      Armoires et rangements
                    </a>
                  </li>
                  <li>
                    <a href="/c5228/Boites-Et-Classeurs.html">
                      Boites et classeurs
                    </a>
                  </li>
                  <li>
                    <a href="/c5229/Bureaux-Et-Tables.html">Bureaux et Tables</a>
                  </li>
                  <li>
                    <a href="/c5370/Cartables-Et-Mallettes.html">
                      Cartables et mallettes
                    </a>
                  </li>
                  <li>
                    <a href="/c5509/Divers-Bureau.html">Divers Bureau</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28FC71C61BDD76DFDA1646CBFDF2624954A2CE4290B89FCFC3CF12CDC5AB8BFD123DCAF9DF0614AA729146577479D6E26A5D8216505E9056F892C88E9B93A2"
                    >
                      Mobilier commercial
                    </span>
                  </li>
                  <li>
                    <a href="/c5225/Sieges-De-Bureau.html">Sièges de bureau</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u56/Lit.html">LIT</a>
                  </p>
                  <li>
                    <a href="/c5373/Bouts-De-Lit.html">Bouts de lit</a>
                  </li>
                  <li>
                    <a href="/c5290/Canapes-Convertibles.html">
                      Canapés convertibles
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5374/Chambres-A-Coucher.html">
                      Chambres à coucher
                    </a>
                  </li>
                  <li>
                    <a href="/c5293/Chevets.html">Chevets</a>
                  </li>
                  <li>
                    <a href="/c5508/Divers-Mobilier-Lit.html">
                      Divers Mobilier Lit
                    </a>
                  </li>
                  <li>
                    <a href="/c5291/Lits-Doubles.html">Lits doubles</a>
                  </li>
                  <li>
                    <a href="/c5295/Lits-Escamotables.html">Lits escamotables</a>
                  </li>
                  <li>
                    <a href="/c5288/Lits-Simples.html">Lits simples</a>
                  </li>
                  <li>
                    <a href="/c5289/Matelas.html">Matelas</a>
                  </li>
                  <li>
                    <a href="/c5292/Sommiers.html">Sommiers</a>
                  </li>
                  <li>
                    <a href="/c5294/Tetes-De-Lit.html">Têtes de lit</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u55/Rangements.html">RANGEMENTS</a>
                  </p>
                  <li>
                    <a href="/c5281/Armoires.html">Armoires</a>
                  </li>
                  <li>
                    <a href="/c5284/Bahuts-Buffets-Meubles-De-Salon.html">
                      Bahuts Buffets Meubles de salon
                    </a>
                  </li>
                  <li>
                    <a href="/c5282/Bibliotheques.html">Bibliothèques</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5403/Coffres.html">Coffres</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28FB03C61BDD76DFDA1646CBFDF2624954A2C33797CC9EC1C0C561B9C5DC84FD123DC9FCDF0414A4729A495D7869D7AA5A1C870F5840"
                    >
                      Coiffeuses
                    </span>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28FB03B91BDD76DFDA1646CBFDF2624954A2BA3796CD9DC6B3C616CFC7DB83FD123DC9F9D00614A4729E5F4F7275D6BC075A9B1659"
                    >
                      Comptoirs
                    </span>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28FB02C91BDD76DFDA1646CBFDF2624954A2B843E2BB96CFB3B51EBECADB81FD123DCBFFD40214A374854A496E31F6AE47558A1650428711F18A8B8A"
                    >
                      Divers rangement
                    </span>
                  </li>
                  <li>
                    <a href="/c5285/Etageres.html">Etagères</a>
                  </li>
                  <li>
                    <a href="/c5773/Meubles-Et-Accessoires-Pour-L-Entree.html">
                      Meubles et accessoires pour l'entrée
                    </a>
                  </li>
                  <li>
                    <a href="/c5283/Meubles-A-Tiroirs.html">Meubles à tiroirs</a>
                  </li>
                  <li>
                    <a href="/c5507/Petit-Mobilier-Rangements.html">
                      Petit Mobilier Rangements
                    </a>
                  </li>
                  <li>
                    <a href="/c5286/Vitrines.html">Vitrines</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u54/Sieges-Canapes.html">SIÈGES &amp; CANAPÉS</a>
                  </p>
                  <li>
                    <a href="/c5275/Bancs.html">Bancs</a>
                  </li>
                  <li>
                    <a href="/c5273/Banquettes.html">Banquettes</a>
                  </li>
                  <li>
                    <a href="/c5274/Canapes.html">Canapés</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5277/Chaises.html">Chaises</a>
                  </li>
                  <li>
                    <a href="/c5506/Divers-Sieges-Canapes.html">
                      Divers sièges canapés
                    </a>
                  </li>
                  <li>
                    <a href="/c5276/Fauteuils.html">Fauteuils</a>
                  </li>
                  <li>
                    <a href="/c7210/Mobilier-Gonflable.html">
                      Mobilier gonflable
                    </a>
                  </li>
                  <li>
                    <a href="/c5280/Meridiennes.html">Méridiennes</a>
                  </li>
                  <li>
                    <a href="/c5279/Salons.html">Salons</a>
                  </li>
                  <li>
                    <a href="/c5278/Tabourets-Et-Poufs.html">
                      Tabourets et poufs
                    </a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u57/Tables-Divers.html">TABLES &amp; DIVERS</a>
                  </p>
                  <li>
                    <a href="/c5258/Bars.html">Bars</a>
                  </li>
                  <li>
                    <a href="/c5262/Chariots-Tables-Roulantes.html">
                      Chariots Tables roulantes
                    </a>
                  </li>
                  <li>
                    <a href="/c5263/Consoles.html">Consoles</a>
                  </li>
                  <li>
                    <a href="/c7132/Divers-Salle-A-Manger.html">
                      Divers salle à manger
                    </a>
                  </li>
                  <li>
                    <a href="/c5259/Escabeaux.html">Escabeaux</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5353/Meubles-Divers.html">Meubles divers</a>
                  </li>
                  <li>
                    <a href="/c7136/Paravents.html">Paravents</a>
                  </li>
                  <li>
                    <a href="/c5505/Realisations-Bars-Hotels.html">
                      Réalisations Bars &amp; Hôtels
                    </a>
                  </li>
                  <li>
                    <a href="/c5261/Tables-Basses.html">Tables basses</a>
                  </li>
                  <li>
                    <a href="/c7164/Tables-D-Appoint.html">Tables d'appoint</a>
                  </li>
                  <li>
                    <a href="/c7165/Tables-De-Jeux.html">Tables de jeux</a>
                  </li>
                  <li>
                    <a href="/c5257/Tables-De-Repas.html">Tables de repas</a>
                  </li>
                  <li>
                    <a href="/c5782/Vitrines-A-Usage-Professionnel.html">
                      Vitrines à usage professionnel
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D28FB0ACA1BDD76DFDA1646CBFDF2624954A2BA3091CD9BC2C2C162CDC5A985FD123F9FFAC8460AD732B05D5E7C68C1BA5B1FAB1E46459451FC8CCBAB809CA795F65C0CD1531B77D3"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D28FB0AC71BDD76DFDA1646CBFDF2624954A2CE4791BB99C4B2CE11CDC5D782FD123F9FFDC8460AD732B54E596F75C7AE4746C2365A4E9A53F09B94C8878AA395"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D28FB0ABC1BDD76DFDA1646CBFDF2624954A2B84192CC9EC4B4B563CCC1DEF1FD123F9FFCD71C4ED62DDC66566D73D6BB48468A0E4701BE50FB978A8F8A8CE091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D28FB72CF1BDD76DFDA1646CBFDF2624954A2C841E0C89CC4B2C464C3B5AD84FD123F9FFBC8460AD732B74648696ECDAD5C468A0E4701BE50FB978A8F8A8CE091EB5412"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title="Mur, Plafond & Sol" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Mur, Plafond & Sol"
            href="/su11/Mur-Plafond-Sol.html"
          >
            Mur, Plafond &amp; Sol
          </a>
          <ul className="grid-superUniver"title="Mur, Plafond & Sol"  ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  7108 produits : Mur, Plafond &amp; Sol{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u11/Murs-Plafonds.html">MURS &amp; PLAFONDS</a>
                  </p>
                  <li>
                    <a href="/c5219/Autres-Revetements-Muraux.html">
                      Autres revêtements muraux
                    </a>
                  </li>
                  <li>
                    <a href="/c5215/Boiseries-Lambris-Placages.html">
                      Boiseries Lambris Placages
                    </a>
                  </li>
                  <li>
                    <a href="/c5211/Carrelages-Muraux.html">Carrelages Muraux</a>
                  </li>
                  <li>
                    <a href="/c5213/Cloisons-Panneaux-Acoustiques.html">
                      Cloisons &amp; Panneaux acoustiques
                    </a>
                  </li>
                  <li>
                    <a href="/c5710/Decorations-Murales.html">
                      Décorations murales
                    </a>
                  </li>
                  <li>
                    <a href="/c5394/Murs-D-Eau.html">Murs d'eau</a>
                  </li>
                  <li>
                    <a href="/c5216/Murs-Exterieurs.html">Murs extérieurs</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c6009/Panneaux-Decoratifs.html">
                      Panneaux décoratifs
                    </a>
                  </li>
                  <li>
                    <a href="/c5214/Papiers-Peints.html">Papiers peints</a>
                  </li>
                  <li>
                    <a href="/c5718/Parement.html">Parement</a>
                  </li>
                  <li>
                    <a href="/c5631/Peintures-Exterieures.html">
                      Peintures extérieures
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28F801C71BDD76DFDA1646CBFDF2624954A2C833E4C9ECB3C1B315C9C2D882FD123DCAF6D20414B7789A414F686EC1BC0462800E4701BE5AEC9C8A83C196BA94F3"
                    >
                      Peintures pour meuble
                    </span>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28F801BC1BDD76DFDA1646CBFDF2624954A2C834E2BFECC4C0B11FB8B7DA8AFD123DC9F9D60614B7789A414F686EC1BC04668A185D429A4EEC9B95C8878AA395"
                    >
                      Peintures techniques
                    </span>
                  </li>
                  <li>
                    <a href="/c5212/Plafonds.html">Plafonds</a>
                  </li>
                  <li>
                    <a href="/c5716/Poutre.html">Poutre</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5669/Revetements-Muraux.html">
                      Revêtements muraux
                    </a>
                  </li>
                  <li>
                    <a href="/c6484/Stickers-Decoratifs.html">
                      Stickers décoratifs
                    </a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28F807CD1BDD76DFDA1646CBFDF2624954A2B94595BD9EC5CEB563CEC0DBF0FD123DC9FCD60B14B374805C4E6E31E9BA5B539A031B448752F5"
                    >
                      Tissus muraux
                    </span>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u42/Sols.html">SOLS</a>
                  </p>
                  <li>
                    <a href="/c5876/Beton-Decoratif.html">Béton décoratif</a>
                  </li>
                  <li>
                    <a href="/c5255/Carrelages-Sol.html">Carrelages sol</a>
                  </li>
                  <li>
                    <a href="/c5252/Dallages.html">Dallages</a>
                  </li>
                  <li>
                    <a href="/c5739/Divers-Sols.html">Divers sols</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5253/Moquettes.html">Moquettes</a>
                  </li>
                  <li>
                    <a href="/c5254/Parquets.html">Parquets</a>
                  </li>
                  <li>
                    <a href="/c5393/Peintures-Sol.html">Peintures sol</a>
                  </li>
                  <li>
                    <a href="/c5256/Revetements-De-Sol.html">
                      Revêtements de sol
                    </a>
                  </li>
                  <li>
                    <a href="/c5351/Sols-Exterieurs.html">Sols extérieurs</a>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u24/Tapis-Tapisserie.html">TAPIS TAPISSERIE</a>
                  </p>
                  <li>
                    <a href="/c7133/Divers-Tapis.html">Divers tapis</a>
                  </li>
                  <li>
                    <a href="/c5888/Peaux-De-Bete.html">Peaux de bête</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5243/Tapis-De-Seuil-Couloir-Escalier.html">
                      Tapis de seuil couloir escalier
                    </a>
                  </li>
                  <li>
                    <a href="/c5241/Tapis-De-Style.html">Tapis de style</a>
                  </li>
                  <li>
                    <a href="/c5242/Tapis-Modernes.html">Tapis modernes</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28F804BD1BDD76DFDA1646CBFDF2624954A2BD4692CA9DC0B4B41FC3C7DA84FD123DC9F7D50714B37C834648304CCBBA5B1FA3567054875AEB9783939DD0A68DF255"
                    >
                      Tapis pour l'exterieur
                    </span>
                  </li>
                  <li>
                    <a href="/c5244/Tapisseries-Et-Tentures-Murales.html">
                      Tapisseries et tentures murales
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D28F80BCB1BDD76DFDA1646CBFDF2624954A2BF42E6C9E9B5B1B664CDB7DC81FD123F9FFAC8460AD632B05D5E7C68C1BA5B1FAB1E46459451FC8CCBAB9A8CE3A9F3581890550B37EC498AF19B5A9497"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D28F80BC71BDD76DFDA1646CBFDF2624954A2CD40ECCAECCEB5CF14BEB6AAF5FD123F9FFDC8460AD632B54E596F75C7AE4746C236405EDE6FF59F8089819AE3AAF05550974F0276"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D28F80BBA1BDD76DFDA1646CBFDF2624954A2CA4F96CD9BB5C2C416C3B0AB8AFD123F9FFCD71C4ED62CDC66566D73D6BB48468A0E4701BE4AEBD3B68A8E98A197FB142D90574172CB4B8A"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D28F80ACD1BDD76DFDA1646CBFDF2624954A2CD3792CE99B3C7C712CDC1AE80FD123F9FFBC8460AD632B74648696ECDAD5C468A0E4701BE4AEBD3B68A8E98A197FB142D90574172CB4B8A"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
        <li className="oneSuperUniver" title="Textile" ref={handleAddToLiSupUnivsRefs} onMouseOver={handleShowDetails} onMouseLeave={handleHideDetails}>
          <a
            className="super_univer_name underline-from-center"
            title="Textile"
            href="/su12/Textile.html"
          >
            Textile
          </a>
          <ul className="grid-superUniver"title="Textile"  ref={handleAddToMenuRefs}>
            <div className="SuperUniver-Univers">
              <div className="grid-nombreprod-titre-activite">
                <span className="SuperUniver-Univers_title">
                  7443 produits : Textile{" "}
                </span>
              </div>
              <div className="grid-univers">
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u4/Linge-De-Maison.html">LINGE DE MAISON</a>
                  </p>
                  <li>
                    <a href="/c5204/Couettes-Et-Duvets.html">
                      Couettes et duvets
                    </a>
                  </li>
                  <li>
                    <a href="/c5201/Coussins-Oreillers.html">
                      Coussins Oreillers
                    </a>
                  </li>
                  <li>
                    <a href="/c5205/Couvertures.html">Couvertures</a>
                  </li>
                  <li>
                    <a href="/c5209/Couvre-Lits.html">Couvre-lits</a>
                  </li>
                  <li>
                    <a href="/c5501/Divers-Linge-De-Maison.html">
                      Divers Linge de maison
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5202/Draps.html">Draps</a>
                  </li>
                  <li>
                    <a href="/c5208/Housses.html">Housses</a>
                  </li>
                  <li>
                    <a href="/c5206/Linge-De-Cuisine.html">Linge de cuisine</a>
                  </li>
                  <li>
                    <a href="/c5207/Linge-De-Toilette.html">Linge de toilette</a>
                  </li>
                  <li>
                    <a href="/c5210/Literie.html">Literie</a>
                  </li>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28F676B91BDD76DFDA1646CBFDF2624954A2B934EDC8EAC0C3B510B8C7ACF6FD123DC9FCD70014B77C815A49786F898B4C1FA31241029B4BF492"
                    >
                      Parures de lit
                    </span>
                  </li>
                </ul>
                <ul>
                  <p className="titreUniversMenu">
                    <a href="/u52/Linge-De-Table.html">LINGE DE TABLE</a>
                  </p>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D28F675CA1BDD76DFDA1646CBFDF2624954A2C33095CA9BC7CEC211C9CADF8BFD123DC9FBD70014A374854A496E31E8A647558A567149DE6BF89C8A83C196BA94F3"
                    >
                      Divers linge de table
                    </span>
                  </li>
                  <li>
                    <a href="/c5220/Nappes.html">Nappes</a>
                  </li>
                  <li>
                    <a href="/c5223/Serviettes.html">Serviettes</a>
                  </li>
                  <li>
                    <a href="/c5224/Sets-De-Table.html">Sets de table</a>
                  </li>
                  <li>
                    <a href="/c5222/Sous-Nappes.html">Sous nappes</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span
                      className="unProduitGo"
                      data-go="525ADB8D288E03CC1BDD76DFDA1646CBFDF2624954A2BD4691B89BB5C6B612BAB2D884FD123DC9FCD50214B46881415A6D6CC1BC075A9B1659"
                    >
                      Surnappes
                    </span>
                  </li>
                  <p className="titreUniversMenu">
                    <a href="/u5/Tissus-Rideaux-Passementerie.html">
                      TISSUS RIDEAUX PASSEMENTERIE
                    </a>
                  </p>
                  <li>
                    <a href="/c5538/Divers-Tissus-Rideaux-Passementerie.html">
                      Divers Tissus Rideaux Passementerie
                    </a>
                  </li>
                  <li>
                    <a href="/c5251/Embrasses.html">Embrasses</a>
                  </li>
                  <li>
                    <a href="/c7702/Moustiquaires.html">Moustiquaires</a>
                  </li>
                  <li>
                    <a href="/c5246/Passementerie.html">Passementerie</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/c5247/Rideaux.html">Rideaux</a>
                  </li>
                  <li>
                    <a href="/c5250/Stores.html">Stores</a>
                  </li>
                  <li>
                    <a href="/c5245/Tissus-D-Ameublement.html">
                      Tissus d'ameublement
                    </a>
                  </li>
                  <li>
                    <a href="/c5249/Tringles-Et-Accessoires.html">
                      Tringles et accessoires
                    </a>
                  </li>
                  <li>
                    <a href="/c5248/Voilages.html">Voilages</a>
                  </li>
                </ul>
                <ul className="dropdown-categ-spe-activite">
                  <span className="titreActivite"> Trouver un</span>&nbsp;:
                  <li>
                    <span
                      data-go="525ADB8D288E01C91BDD76DFDA1646CBFDF2624954A2B84FE0B8EECFB1B512CAC7DE82FD123F9FFAC8460AD532B05D5E7C68C1BA5B1FAB1E46459451FC8CCBB28A86BA90F35C50974F0276"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Créateur Designer
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D288E01C61BDD76DFDA1646CBFDF2624954A2CE4192B899C5C6B465C9C1DEF0FD123F9FFDC8460AD532B54E596F75C7AE4746C22F50548756F59BC88E9B93A2"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Fabricant
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D288E01BB1BDD76DFDA1646CBFDF2624954A2CA34E1C8EECFC1C461B9C0DE8AFD123F9FFCD71C4ED62FDC66566D73D6BB48468A0E4701A75AE18A8F8A8AD0A68DF255"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Importateur
                    </span>
                  </li>
                  <li>
                    <span
                      data-go="525ADB8D288E00CE1BDD76DFDA1646CBFDF2624954A2CB42E2CA9FC0B6C115C8C3AD84FD123F9FFBC8460AD532B74648696ECDAD5C468A0E4701A75AE18A8F8A8AD0A68DF255"
                      className="speRayon unProduitGo"
                    >
                      <span className="vertDF">•</span> Distributeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="SuperUniver-vignette"></div>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</div>
)
}

export default MenuHeader2;
