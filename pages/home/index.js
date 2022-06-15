import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import HomeDescription from '../../components/homeDescription'
const Home = ({superuniversdetailss, nouveautes, selections}) => {
    return (
    <>
        <div>
            <h2>Les Selections</h2>
            {
                selections.map(slection=>(
                    <div key={slection['produit']['id']}>
                        <Image src="https://s1.decofinder.com/0/0/sel-home/vig/1226/1226881/Assiette-De-Presentation.jpg" 
                        width={300} height={300} placeholder="none" alt={slection['produit']['attributes']['TITRE_FR']}>
                        </Image>
                        <p>EXPOSANT : {slection['exposant']['attributes']['NOM']}</p>
                        <p>Nom Produit : {slection['produit']['attributes']['TITRE_FR']}</p>
                        <p>Modeles : {slection['produit']['attributes']['MODELES']}</p>
                        <p>Description produit : {slection['produit']['attributes']['DESC_FR']}</p>
                        <p>{slection['produit']['attributes']['selection']&& 'selection jury'}</p>
                        <p>{slection['produit']['attributes']['coupdecoeur']&& 'coupdecoeur'}</p>
                        <p>{slection['produit']['attributes']['achatenligne']&& 'achatenligne'}</p>
                        <p>{slection['produit']['attributes']['asaisir']&& 'asaisir'}</p>
                        <p>{slection['produit']['attributes']['TARIF_PUB']} €</p>
                    </div>
                ))
                }
        </div>
        <div>
            <h2>Tous les Mega Univers :</h2>
            <div>
                {
                    superuniversdetailss.map(superuniversdetails=>{
                        return(
                        <div key={superuniversdetails['id']}>
                            <Link href={{pathname: `/superunivers/${superuniversdetails['attributes']['slug']}`}}>
                              <>
                                <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                                width={300} height={300} placeholder="none" alt={superuniversdetails['attributes']['slug']}>
                                </Image>
                                <a key={superuniversdetails['id']}>{superuniversdetails['attributes']['LIB']}</a>
                              </>
                            </Link>
                        </div>  
                        )
                    })
                }
            </div>
        </div>
        <div>
            <Image src="https://s1.decofinder.com/0/0/bdpBanner/_bandeaux/100/100771/.jpg" 
                width={1000} height={300} placeholder="none" alt={''}>
            </Image>
        </div>
        <div>
            <HomeDescription/>
        </div>
        <div>
            <h2>Les Nouveautés</h2>
            {
                nouveautes.map(nouveaute=>(
                    <div key={nouveaute['produit']['id']}>
                        <Image src="https://s1.decofinder.com/0/0/sel-home/vig/1226/1226881/Assiette-De-Presentation.jpg" 
                        width={300} height={300} placeholder="none" alt={nouveaute['produit']['attributes']['TITRE_FR']}>
                        </Image>
                        <p>EXPOSANT : {nouveaute['exposant']['attributes']['NOM']}</p>
                        <p>Nom Produit : {nouveaute['produit']['attributes']['TITRE_FR']}</p>
                        <p>Modeles : {nouveaute['produit']['attributes']['MODELES']}</p>
                        <p>Description produit : {nouveaute['produit']['attributes']['DESC_FR']}</p>
                        <p>{nouveaute['produit']['attributes']['selection']&& 'selection jury'}</p>
                        <p>{nouveaute['produit']['attributes']['coupdecoeur']&& 'coupdecoeur'}</p>
                        <p>{nouveaute['produit']['attributes']['achatenligne']&& 'achatenligne'}</p>
                        <p>{nouveaute['produit']['attributes']['asaisir']&& 'asaisir'}</p>
                        <p>{nouveaute['produit']['attributes']['TARIF_PUB']} €</p>
                    </div>
                ))
                }
        </div>
    </>
    )
}

export default Home

export async function getStaticProps(context) {
    const qs =require('qs')
    // superuniversdetailssCall
    const superuniversdetailssCall = await axios.get(`http://localhost:1337/api/superuniversdetailss`)

    // nouveautés 
    const queryNouveautes = qs.stringify(
        {
            fields: ['TITRE_FR', 'DESC_FR', 'CLE_EXPOSANT', 'CLE_TYPE_PROD', 'MODELES', 'TARIF_PUB'],
            filters: {
                NOUVEAUTE : { $eq: "1" } 
            }
        }
    )
    const nouveautesCall = await axios.get(`http://localhost:1337/api/produits?${queryNouveautes}`)
    const nouveautes = []
    for (let produit of nouveautesCall.data.data) {
        // exposants des nouveautés
        const queryExposants = qs.stringify (
            {
                filters: {
                    CLE_EXPOSANT: { $eq: produit['attributes']['CLE_EXPOSANT'] } 
                }
            }
        )   
        const exposantsCall = await axios.get(`http://localhost:1337/api/exposants?${queryExposants}`) 

        // typesprods des nouveautés
        const queryTypesprods = qs.stringify (
            {
                filters: {
                    CLE_TYPE_PROD: { $eq: produit['attributes']['CLE_TYPE_PROD'] } 
                }
            }
        )  
        const typesprodsCall = await axios.get(`http://localhost:1337/api/typeprods?${queryTypesprods}`) 

        nouveautes.push({produit : produit, typeprod : typesprodsCall.data.data[0], exposant : exposantsCall.data.data[0]})
    }

    // selections 
    const querySelections = qs.stringify(
        {
            fields: ['TITRE_FR', 'DESC_FR', 'CLE_EXPOSANT', 'CLE_TYPE_PROD', 'MODELES', 'TARIF_PUB'],
            filters: {
                selection : { $eq: "1" } 
            }
        }
    )
    const selectionsCall = await axios.get(`http://localhost:1337/api/produits?${querySelections}`)
    console.log(selectionsCall)
    const selections = []
    for (let produit of selectionsCall.data.data) {
        // exposants des nouveautés
        const queryExposants = qs.stringify (
            {
                filters: {
                    CLE_EXPOSANT: { $eq: produit['attributes']['CLE_EXPOSANT'] } 
                }
            }
        )   
        const exposantsCall = await axios.get(`http://localhost:1337/api/exposants?${queryExposants}`) 

        // typesprods des nouveautés
        const queryTypesprods = qs.stringify (
            {
                filters: {
                    CLE_TYPE_PROD: { $eq: produit['attributes']['CLE_TYPE_PROD'] } 
                }
            }
        )  
        const typesprodsCall = await axios.get(`http://localhost:1337/api/typeprods?${queryTypesprods}`) 

        selections.push({produit : produit, typeprod : typesprodsCall.data.data[0], exposant : exposantsCall.data.data[0]})
    }

    return {
        props: {
            superuniversdetailss : superuniversdetailssCall.data.data,
            selections : selections,
            nouveautes : nouveautes
        }, 
      }
}