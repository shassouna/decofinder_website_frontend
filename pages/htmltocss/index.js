import styles from '../../styles/Home.module.css'

import Image from 'next/image'

import MenuHeader from '../../components/menuHeader'
import SearchHeader from '../../components/searchHeader'
import PubHeader from '../../components/pubHeader'
import Nouveautes from '../../components/nouveautes'

const Index = () => {
  return (
    <>
      <PubHeader/>
      <SearchHeader/>
      <MenuHeader/>
      <div className={styles.main}>
         <div className={styles.container}>
          <div className={styles.productswrapper}>
            <div className={styles.productswrapperItem}>
              <div className={styles.productswrapperItemUp}>
              <Image src="https://s1.decofinder.com/0/0/sel-home/vig/1226/1226881/Assiette-De-Presentation.jpg" 
                  width={260} height={260} placeholder="none">
              </Image>
              </div>
              <div className={styles.productswrapperItemDown}>
                <div className={styles.productswrapperItemDownDescription}>
                  <span className={styles.productswrapperItemDownDescriptionSpanExposant}>MATHON</span>
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanTypeProduct}>Couteau à steak</span>
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanProduct}>Frisette à fromage</span>
                  <br/> 
                  <span className={styles.productswrapperItemDownDescriptionSpanDescription}> Ainsi, le piètement qui nécessite de la robustesse est traité en gaulettes (tiges de châtaignier) qui gardent la protection naturelle de l'écorce, tandis qu'à l'inverse, l'assise est traitée en feuillards (tiges de châtaignier refendues) qui procurent la planéité nécessaire au confort ergonomique de la surface d'appui</span>             
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanProduct}>30 £</span>
                </div>
              </div>
            </div>
            <div className={styles.productswrapperItem}>
              <div className={styles.productswrapperItemUp}>
              <Image src="https://s1.decofinder.com/0/0/sel-home/vig/1226/1226881/Assiette-De-Presentation.jpg" 
                            width={260} height={260} placeholder="none">
              </Image>
              </div>
              <div className={styles.productswrapperItemDown}>
                <div className={styles.productswrapperItemDownDescription}>
                  <span className={styles.productswrapperItemDownDescriptionSpanExposant}>MATHON</span>
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanTypeProduct}>Couteau à steak</span>
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanProduct}>Frisette à fromage</span>
                  <br/> 
                  <span className={styles.productswrapperItemDownDescriptionSpanDescription}> Ainsi, le piètement qui nécessite de la robustesse est traité en gaulettes (tiges de châtaignier) qui gardent la protection naturelle de l'écorce, tandis qu'à l'inverse, l'assise est traitée en feuillards (tiges de châtaignier refendues) qui procurent la planéité nécessaire au confort ergonomique de la surface d'appui</span>             
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanProduct}>30 £</span>
                </div>
              </div>
            </div>
            <div className={styles.productswrapperItem}>
              <div className={styles.productswrapperItemUp}>
              <Image src="https://s1.decofinder.com/0/0/sel-home/vig/1226/1226881/Assiette-De-Presentation.jpg" 
                            width={260} height={260} placeholder="none">
              </Image>
              </div>
              <div className={styles.productswrapperItemDown}>
                <div className={styles.productswrapperItemDownDescription}>
                  <span className={styles.productswrapperItemDownDescriptionSpanExposant}>MATHON</span>
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanTypeProduct}>Couteau à steak</span>
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanProduct}>Frisette à fromage</span>
                  <br/> 
                  <span className={styles.productswrapperItemDownDescriptionSpanDescription}> Ainsi, le piètement qui nécessite de la robustesse est traité en gaulettes (tiges de châtaignier) qui gardent la protection naturelle de l'écorce, tandis qu'à l'inverse, l'assise est traitée en feuillards (tiges de châtaignier refendues) qui procurent la planéité nécessaire au confort ergonomique de la surface d'appui</span>             
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanProduct}>30 £</span>
                </div>
              </div>
            </div>
            <div className={styles.productswrapperItem}>
              <div className={styles.productswrapperItemUp}>
              <Image src="https://s1.decofinder.com/0/0/sel-home/vig/1226/1226881/Assiette-De-Presentation.jpg" 
                            width={260} height={260} placeholder="none">
              </Image>
              </div>
              <div className={styles.productswrapperItemDown}>
                <div className={styles.productswrapperItemDownDescription}>
                  <span className={styles.productswrapperItemDownDescriptionSpanExposant}>MATHON</span>
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanTypeProduct}>Couteau à steak</span>
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanProduct}>Frisette à fromage</span>
                  <br/> 
                  <span className={styles.productswrapperItemDownDescriptionSpanDescription}> Ainsi, le piètement qui nécessite de la robustesse est traité en gaulettes (tiges de châtaignier) qui gardent la protection naturelle de l'écorce, tandis qu'à l'inverse, l'assise est traitée en feuillards (tiges de châtaignier refendues) qui procurent la planéité nécessaire au confort ergonomique de la surface d'appui</span>             
                  <br/>
                  <span className={styles.productswrapperItemDownDescriptionSpanProduct}>30 £</span>
                </div>
              </div>
            </div>
          </div>
          <br/><br/>
          <div className={styles.linkswrapper}>
            <div className={styles.linkswrapperItem}>Toutes les sélections du Jury</div>
            <div className={styles.linkswrapperItem}>Tous les coups de coeur</div>
            <div className={styles.linkswrapperItem}>Tous les achats en ligne</div>
            <div className={styles.linkswrapperItem}>Toutes les promotions</div>
          </div>
          <br/><br/>
          <div className={styles.megaunivers}>
            <div className={styles.megauniversItem}>
              <h1 className={styles.megauniversH1}>Tous les Mega Univers</h1>
            </div>
            <div className={styles.megauniversItem}>
              <div className={styles.megauniverswrapper}>
                <div className={styles.megauniverswrapperItem}>
                  <div className={styles.megauniverswrapperItemUp}>
                    <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={128} height={128}  placeholder="none">
                    </Image>
                  </div>
                  <div className={styles.megauniverswrapperItemDown}>
                    <span className={styles.megauniverswrapperDownTexte}>Arts de la Table</span>
                  </div>
                </div>
                <div className={styles.megauniverswrapperItem}>
                  <div className={styles.megauniverswrapperItemUp}>
                    <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={128} height={128} placeholder="none">
                    </Image>
                  </div>
                  <div className={styles.megauniverswrapperItemDown}>
                    <span className={styles.megauniverswrapperDownTexte}>Arts de la Table</span>
                  </div>
                </div>
                <div className={styles.megauniverswrapperItem}>
                  <div className={styles.megauniverswrapperItemUp}>
                    <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={128} height={128} placeholder="none">
                    </Image>
                  </div>
                  <div className={styles.megauniverswrapperItemDown}>
                    <span className={styles.megauniverswrapperDownTexte}>Arts de la Table</span>
                  </div>
                </div>
                <div className={styles.megauniverswrapperItem}>
                  <div className={styles.megauniverswrapperItemUp}>
                    <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={128} height={128} placeholder="none">
                    </Image>
                  </div>
                  <div className={styles.megauniverswrapperItemDown}>
                    <span className={styles.megauniverswrapperDownTexte}>Arts de la Table</span>
                  </div>
                </div>
                <div className={styles.megauniverswrapperItem}>
                  <div className={styles.megauniverswrapperItemUp}>
                    <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={128} height={128} placeholder="none">
                    </Image>
                  </div>
                  <div className={styles.megauniverswrapperItemDown}>
                    <span className={styles.megauniverswrapperDownTexte}>Arts de la Table</span>
                  </div>
                </div>
                <div className={styles.megauniverswrapperItem}>
                  <div className={styles.megauniverswrapperItemUp}>
                    <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={128} height={128} placeholder="none">
                    </Image>
                  </div>
                  <div className={styles.megauniverswrapperItemDown}>
                    <span className={styles.megauniverswrapperDownTexte}>Arts de la Table</span>
                  </div>
                </div>
                <div className={styles.megauniverswrapperItem}>
                  <div className={styles.megauniverswrapperItemUp}>
                    <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={128} height={128} placeholder="none">
                    </Image>
                  </div>
                  <div className={styles.megauniverswrapperItemDown}>
                    <span className={styles.megauniverswrapperDownTexte}>Arts de la Table</span>
                  </div>
                </div>
                <div className={styles.megauniverswrapperItem}>
                  <div className={styles.megauniverswrapperItemUp}>
                    <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={128} height={128} placeholder="none">
                    </Image>
                  </div>
                  <div className={styles.megauniverswrapperItemDown}>
                    <span className={styles.megauniverswrapperDownTexte}>Arts de la Table</span>
                  </div>
                </div>
                <div className={styles.megauniverswrapperItem}>
                  <div className={styles.megauniverswrapperItemUp}>
                    <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={128} height={128} placeholder="none">
                    </Image>
                  </div>
                  <div className={styles.megauniverswrapperItemDown}>
                    <span className={styles.megauniverswrapperDownTexte}>Arts de la Table</span>
                  </div>
                </div>
                <div className={styles.megauniverswrapperItem}>
                  <div className={styles.megauniverswrapperItemUp}>
                    <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={128} height={128} placeholder="none">
                    </Image>
                  </div>
                  <div className={styles.megauniverswrapperItemDown}>
                    <span className={styles.megauniverswrapperDownTexte}>Arts de la Table</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pub}>
          <Image src="https://s1.decofinder.com/0/0/bdpBanner/_bandeaux/88/88771/.jpg" 
            width={1168} height={217} placeholder="none" alt={''}>
          </Image>
        </div>
        <div className={styles.container2}>
          <div className={styles.container21}>
            <h2 className={styles.container21H2}>Le salon en ligne de la décoration et de l’ameublement depuis 1994 !</h2>
            <p className={styles.container21P}>Decofinder est conçu pour permettre aux <span style={{fontWeight: "bold", color:"#858585"}}>acheteurs</span>, particuliers comme professionnels, de <span style={{fontWeight: "bold", color:"#858585"}}>trouver</span> des <span style={{fontWeight: "bold", color:"#858585"}}>produits</span>, des <span style={{fontWeight: "bold", color:"#858585"}}>entreprises</span> et de la <span style={{fontWeight: "bold", color:"#858585"}}>documentation</span>. Pensé comme un <span style={{fontWeight: "bold", color:"#858585"}}>outil</span> de <span style={{fontWeight: "bold", color:"#858585"}}>découverte</span> ayant pour objectif de faciliter la recherche, il offre également aux <span style={{fontWeight: "bold", color:"#858585"}}>entreprises</span> de meilleurs canaux de <span style={{fontWeight: "bold", color:"#858585"}}>diffusion</span> et de <span style={{fontWeight: "bold", color:"#858585"}}>vente</span> pour leurs produits, tant en <span style={{fontWeight: "bold", color:"#858585"}}>France</span> qu’à <span style={{fontWeight: "bold", color:"#858585"}}>l’étranger</span>.</p>
            <h3 className={styles.container21H3}>De l’ameublement à la décoration, notre catalogue répond à toutes vos envies :</h3>     
            <p className={styles.container21P}>Avec plus de <span style={{fontWeight: "bold", color:"#858585"}}>500 000 produits</span> référencés au sein de <span style={{fontWeight: "bold", color:"#858585"}}>12 Univers</span>, Decofinder est un site leader et la référence du secteur de la décoration, de l’habitat et du design. Du style classique au style contemporain, des objets rétro aux objets design, notre <span style={{fontWeight: "bold", color:"#858585"}}>catalogue</span> est <span style={{fontWeight: "bold", color:"#858585"}}>mis à jour régulièrement</span> afin de vous assurer un choix à la hauteur de vos attentes.</p>
            <p className={styles.container21P}>C’est pourquoi, nous mettons tout en place pour vous <span style={{fontWeight: "bold", color:"#858585"}}>satisfaire</span> : une large gamme de <span style={{fontWeight: "bold", color:"#16823C"}}>mobilier</span> avec des <span style={{fontWeight: "bold", color:"#16823C"}}>bureaux</span>, des <span style={{fontWeight: "bold", color:"#16823C"}}>lits</span>, des <span style={{fontWeight: "bold", color:"#16823C"}}>rangements</span>, des <span style={{fontWeight: "bold", color:"#16823C"}}>tables</span> ou encore <span style={{fontWeight: "bold", color:"#16823C"}}>bureaux</span>, des <span style={{fontWeight: "bold", color:"#16823C"}}>lits</span>, des <span style={{fontWeight: "bold", color:"#16823C"}}>rangements</span>,<span style={{fontWeight: "bold", color:"#16823C"}}> des sièges et des canapés</span>, conçus dans des matières et des styles différents, novateurs et design. Vous trouverez également tout pour décorer <span style={{fontWeight: "bold", color:"#16823C"}}>vos murs</span>, <span style={{fontWeight: "bold", color:"#16823C"}}>vos plafonds et vos sols</span> : de la peinture <span style={{fontWeight: "bold", color:"#16823C"}}>intérieure</span> ou <span style={{fontWeight: "bold", color:"#16823C"}}>extérieure</span> au <span style={{fontWeight: "bold", color:"#16823C"}}>papier peint</span> en passant par les <span style={{fontWeight: "bold", color:"#16823C"}}>tableaux décoratifs</span>, les <span style={{fontWeight: "bold", color:"#16823C"}}>parquets</span>, les <span style={{fontWeight: "bold", color:"#16823C"}}>tapis</span> et les <span style={{fontWeight: "bold", color:"#16823C"}}>luminaires</span>, vous trouverez de quoi réaliser l’<span style={{fontWeight: "bold", color:"#858585"}}>ambiance parfaite</span>.</p>
            <h3 className={styles.container21H3}>Avec Decofinder tout est possible :</h3>
            <p className={styles.container21P2}>Grâce à l’une des <span style={{fontWeight: "bold", color:"#858585"}}>offres</span> les plus <span style={{fontWeight: "bold", color:"#858585"}}>complètes</span> sur le marché de la décoration et de l’ameublement, nous pouvons répondre à la majorité de vos demandes et de vos envies. <span style={{fontWeight: "bold", color:"#16823C"}}>Fausse poutre</span>, <span style={{fontWeight: "bold", color:"#16823C"}}>encoignure</span> ou encore <span style={{fontWeight: "bold", color:"#16823C"}}>chintz</span>, notre équipe met tout en œuvre pour vous satisfaire.</p>
            <p className={styles.container21P}>Vous cherchez un <span style={{fontWeight: "bold", color:"#16823C"}}>billot de cuisine</span>, un <span style={{fontWeight: "bold", color:"#16823C"}}>bout de canapé</span> ou bien une <span style={{fontWeight: "bold", color:"#16823C"}}>entrée de meuble</span> pour vos serrures ? Nous avons les produits qu’il vous faut et surtout un vaste choix de couleurs, de formes et de matières, grâce à nos milliers d’exposants. <span style={{fontWeight: "bold", color:"#16823C"}}>Vasque de jardin</span>, <span style={{fontWeight: "bold", color:"#16823C"}}>suspension multiple</span>, <span style={{fontWeight: "bold", color:"#16823C"}}>table de jeux</span> ou encore <span style={{fontWeight: "bold", color:"#16823C"}}>porte tasses</span>, <span style={{fontWeight: "bold", color:"#858585"}}>nous avons ce que vous cherchez</span> !</p>
          </div>
          <div className={styles.container22}>
            <p className={styles.container21P}>Finalement, de l’intérieur à <span style={{fontWeight: "bold", color:"#16823C"}}>l’extérieur</span>, de la <span style={{fontWeight: "bold", color:"#16823C"}}>table</span> à la <span style={{fontWeight: "bold", color:"#16823C"}}>cuisine et à la salle de bain</span>, du <span style={{fontWeight: "bold", color:"#16823C"}}>high-tech</span> à la <span style={{fontWeight: "bold", color:"#16823C"}}>décoration</span>, au <span style={{fontWeight: "bold", color:"#16823C"}}>linge de maison</span> ou encore au monde de <span style={{fontWeight: "bold", color:"#16823C"}}>l’enfant</span>, notre équipe reste présente et à <span style={{fontWeight: "bold", color:"#858585"}}>l’affût</span> pour vous proposer les <span style={{fontWeight: "bold", color:"#858585"}}>meilleurs produits</span>.</p>          
            <h3 className={styles.container21H3}>Un espace dédié pour les créateurs et les exposants :</h3>
            <p className={styles.container21P}>Fort d’un <span style={{fontWeight: "bold", color:"#858585"}}>savoir-faire</span> dans l’univers du commerce en ligne, Decofinder s’est donné comme mission de <span style={{fontWeight: "bold", color:"#858585"}}>valoriser</span> les <span style={{fontWeight: "bold", color:"#858585"}}>entreprises</span> et les <span style={{fontWeight: "bold", color:"#858585"}}>designers</span> en leur offrant une plus large <span style={{fontWeight: "bold", color:"#858585"}}>visibilité</span>. Grâce à un descriptif d’entreprise, des fiches techniques détaillées et une mise en avant des sites Internet, toutes les conditions sont réunies pour assurer une <span style={{fontWeight: "bold", color:"#858585"}}>notoriété croissante</span>.</p>
            <p className={styles.container21P}>Grâce à notre site internet proposé en <span style={{fontWeight: "bold", color:"#858585"}}>5 langues</span> (francais, anglais, allemand, italien et espagnol) et nos <span style={{fontWeight: "bold", color:"#858585"}}>millions de visiteurs annuels</span>, vous serez mis en relation avec de nombreux futurs acheteurs.</p>
            <h3 className={styles.container21H3}>Decofinder c'est aussi des idées et des conseils tendances pour votre intérieur et votre extérieur en matière de décoration et d’ameublement :</h3>
            <p className={styles.container21P}>Quelquefois, il peut être compliqué de se projeter et de choisir un produit. C’est pourquoi, nous vous accompagnons également à travers notre <span style={{fontWeight: "bold", color:"#16823C"}}>Mag</span>, dans la <span style={{fontWeight: "bold", color:"#858585"}}>découverte</span> des <span style={{fontWeight: "bold", color:"#858585"}}>dernières tendances</span> en matière de décoration, d’ameublement et de design, grâce à de nombreuses sélections. Nous vous présentons aussi les dernières créations élaborées par des designers ainsi que de nombreuses rénovations et <span style={{fontWeight: "bold", color:"#858585"}}>créations architecturales</span>, afin que jamais vous ne manquiez <span style={{fontWeight: "bold", color:"#858585"}}>d’inspiration</span>.</p>
            <p className={styles.container21P}>Decofinder s’attache également à vous <span style={{fontWeight: "bold", color:"#858585"}}>accompagner</span> lors de <span style={{fontWeight: "bold", color:"#858585"}}>l’aménagement</span> et de <span style={{fontWeight: "bold", color:"#858585"}}>l’optimisation</span> de vos <span style={{fontWeight: "bold", color:"#858585"}}>espaces</span> ainsi que dans la réalisation de vos <span style={{fontWeight: "bold", color:"#858585"}}>petits travaux</span>, grâce à sa page Conseil. Retrouvez-y des astuces, des tutos et des recommandations pour donner vie à vos projets et pour plus d’inspiration, nous vous proposons des <span style={{fontWeight:"bold", color:"#858585"}}>posts quotidiens</span> sur nos <span style={{fontWeight: "bold", color:"#858585"}}>réseaux sociaux</span>.</p>
            <p className={styles.container21P}>Nous restons à votre écoute pour toute question que vous jugeriez utile.</p>
            <p className={styles.container21P}>Bonne visite sur Decofinder.</p>
          </div>
        </div>
        <div className={styles.container3}>
          <h2 className={styles.container3h2}>Derniers communiqués de presse</h2>
          <div className={styles.container3Communiques}>
            <div className={styles.container3CommuniquesItem}>
              <Image src="https://s6.decofinder.com/0/0/bdnew-home//_bandeaux/52/52956/La-Rochere.jpg" 
              width={121} height={88} placeholder="none" alt={''}>
              </Image>
              <p className={styles.container3CommuniquesItemText}>75 ans d'Ecodesign Burgbad est depuis n75 ans le spécialiste des solutions personnalisées, innovantes, durables. Burgbad est ...</p>
            </div>
            <div className={styles.container3CommuniquesItem}>
              <Image src="https://s6.decofinder.com/0/0/bdnew-home//_bandeaux/52/52956/La-Rochere.jpg" 
              width={121} height={88} placeholder="none" alt={''}>
              </Image>
              <p className={styles.container3CommuniquesItemText}>75 ans d'Ecodesign Burgbad est depuis n75 ans le spécialiste des solutions personnalisées, innovantes, durables. Burgbad est ...</p>
            </div>
            <div className={styles.container3CommuniquesItem}>
              <Image src="https://s6.decofinder.com/0/0/bdnew-home//_bandeaux/52/52956/La-Rochere.jpg" 
              width={121} height={88} placeholder="none" alt={''}>
              </Image>
              <p className={styles.container3CommuniquesItemText}>75 ans d'Ecodesign Burgbad est depuis n75 ans le spécialiste des solutions personnalisées, innovantes, durables. Burgbad est ...</p>
            </div>
            <div className={styles.container3CommuniquesItem}>
              <Image src="https://s6.decofinder.com/0/0/bdnew-home//_bandeaux/52/52956/La-Rochere.jpg" 
              width={121} height={88} placeholder="none" alt={''}>
              </Image>
              <p className={styles.container3CommuniquesItemText}>75 ans d'Ecodesign Burgbad est depuis n75 ans le spécialiste des solutions personnalisées, innovantes, durables. Burgbad est ...</p>
            </div>
            <div className={styles.container3CommuniquesItem}>
              <Image src="https://s6.decofinder.com/0/0/bdnew-home//_bandeaux/52/52956/La-Rochere.jpg" 
              width={121} height={88} placeholder="none" alt={''}>
              </Image>
              <p className={styles.container3CommuniquesItemText}>75 ans d'Ecodesign Burgbad est depuis n75 ans le spécialiste des solutions personnalisées, innovantes, durables. Burgbad est ...</p>
            </div>
            <div className={styles.container3CommuniquesItem}>
              <Image src="https://s6.decofinder.com/0/0/bdnew-home//_bandeaux/52/52956/La-Rochere.jpg" 
              width={121} height={88} placeholder="none" alt={''}>
              </Image>
              <p className={styles.container3CommuniquesItemText}>75 ans d'Ecodesign Burgbad est depuis n75 ans le spécialiste des solutions personnalisées, innovantes, durables. Burgbad est ...</p>            
            </div>
          </div>
          <div className={styles.container3Button}>Tous les communiqués de presse</div>
        </div>
          <div className={styles.container4}>
            <div className={styles.container4Wrap}>
              <div className={styles.container4Item}>
              <Image src="https://s5.decofinder.com/0/0/ambiance/0/_bandeaux/90/90895-3/Ailleurs-Salon-Bar.jpg" 
                width={360} height={225} placeholder="none" alt={''}>
              </Image>  
              <h4 className={styles.container4ItemTextTitle}>Inspiration</h4>  
              <p className={styles.container4ItemTextParagraphe}>Papier peint panoramique - Murs & Plafonds</p>      
              </div>
              <div className={styles.container4Item}>
              <Image src="https://s5.decofinder.com/0/0/ambiance/0/_bandeaux/90/90895-3/Ailleurs-Salon-Bar.jpg" 
                width={360} height={225} placeholder="none" alt={''}>
              </Image>  
              <h4 className={styles.container4ItemTextTitle}>Inspiration</h4>  
              <p className={styles.container4ItemTextParagraphe}>Papier peint panoramique - Murs & Plafonds</p>      
              </div>            <div className={styles.container4Item}>
              <Image src="https://s5.decofinder.com/0/0/ambiance/0/_bandeaux/90/90895-3/Ailleurs-Salon-Bar.jpg" 
                width={360} height={225} placeholder="none" alt={''}>
              </Image>  
              <h4 className={styles.container4ItemTextTitle}>Inspiration</h4>  
              <p className={styles.container4ItemTextParagraphe}>Papier peint panoramique - Murs & Plafonds</p>      
              </div>            <div className={styles.container4Item}>
              <Image src="https://s5.decofinder.com/0/0/ambiance/0/_bandeaux/90/90895-3/Ailleurs-Salon-Bar.jpg" 
                width={360} height={225} placeholder="none" alt={''}>
              </Image>  
              <h4 className={styles.container4ItemTextTitle}>Inspiration</h4>  
              <p className={styles.container4ItemTextParagraphe}>Papier peint panoramique - Murs & Plafonds</p>      
              </div>
            </div>
            <div className={styles.container4Button}>Découvrez toutes les inspirations</div>       
          </div>
          <div id="icon_wishlist" className="icon wishlist visible-mobile">
          <i class="fa-solid fa-heart"></i>
          </div>
      </div>
      <Nouveautes/>
    </>
  )
}

export default Index
