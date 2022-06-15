import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import HomeDescription from '../components/homeDescription'

const Home = (props) => {

    return (
        <div>
            <div>
                {
                props.selections.map(val=>(
                    <div>
                        <Image src="https://s1.decofinder.com/0/0/sel-home/vig/1226/1226881/Assiette-De-Presentation.jpg" 
                        width={300} height={300} placeholder="none" alt={val['produit']['attributes']['TITRE_FR']}>
                        </Image>
                        <p>EXPOSANT : {val['exposant']['attributes']['NOM']}</p>
                        <p>Type produit : {val['typeprod']['attributes']['LIB_FR']}</p>
                        <p>Nom Produit : {val['produit']['attributes']['TITRE_FR']}</p>
                        <p>Modeles : {val['produit']['attributes']['MODELES']}</p>
                        <p>Description produit : {val['produit']['attributes']['DESC_FR']}</p>
                        <p>{val['produit']['attributes']['selection']&& 'selection jury'}</p>
                        <p>{val['produit']['attributes']['coupdecoeur']&& 'coupdecoeur'}</p>
                        <p>{val['produit']['attributes']['achatenligne']&& 'achatenligne'}</p>
                        <p>{val['produit']['attributes']['asaisir']&& 'asaisir'}</p>
                        <p>{val['produit']['attributes']['TARIF_PUB']} €</p>
                    </div>
                ))
                }
            </div>
            <div>
                <Link href={{pathname: `/selections`}}><a>Toutes les séléctions du jury</a></Link>
                <Link href={{pathname: `/coupdecoeur`}}><a>Tous les coups de coeur</a></Link>
                <Link href={{pathname: `/achatsenligne`}}><a>Toutes les achats en ligne</a></Link>
                <Link href={{pathname: `/promos`}}><a>Toutes les promotions</a></Link>
            </div>
            <div>
                <h2>Tous les Mega Univers :</h2>
                {
                props.superunivers.map(val=>(
                    <div key={val['id']}>
                        <Link href={{pathname: `/superunivers/${val['attributes']['slug']}`}}>
                          <Image src="https://s3.decofinder.com/0/0/tgprom/vig/1457/1457253/Accessoires-De-Table.jpg" 
                          width={300} height={300} placeholder="none" alt={val['attributes']['slug']}>
                          </Image>
                        </Link>
                        <Link href={{pathname: `/superunivers/${val['attributes']['slug']}`}}>                       
                        <a key={val['id']}>{val['attributes']['LIB']}</a>
                        </Link>
                    </div>         
                ))
                }
            </div>
            <div>
            <Image src="https://s1.decofinder.com/0/0/bdpBanner/_bandeaux/100/100771/.jpg" 
                width={900} height={270} placeholder="none" alt={''}>
            </Image>
            </div>
            <div>
                {
                props.rayons_univers.map(val=>(
                    <div>
                        <h3>{val["superunivers_lib"]["attributes"]["LIB"]}</h3>
                        <ul>
                        {val["univers"].map(val=>(
                            <p>{val["attributes"]["LIB"]}</p>
                        ))}
                        </ul> 
                    </div>   
                ))
                }
            </div>
            <div>
                {
                props.typeprods_univers.map(val=>(
                    <div>
                        <h3>{val["univers"]["attributes"]["LIB"]}</h3>
                        <ul>
                        {val["typeprods"].map(val2=>(
                            <p>{val2["attributes"]["LIB_FR"]}</p>
                        ))}
                        </ul> 
                    </div>   
                ))
                }
            </div>
            <div>
            <HomeDescription/>
            </div>
            <div>
            <h2>Les Nouveautés</h2>
            {
                props.nouveautes.map(val=>(
                    <div>
                        <Image src="https://s1.decofinder.com/0/0/sel-home/vig/1226/1226881/Assiette-De-Presentation.jpg" 
                        width={300} height={300} placeholder="none" alt={val['produit']['attributes']['TITRE_FR']}>
                        </Image>
                        <p>EXPOSANT : {val['exposant']['attributes']['NOM']}</p>
                        <p>Type produit : {val['typeprod']['attributes']['LIB_FR']}</p>
                        <p>Nom Produit : {val['produit']['attributes']['TITRE_FR']}</p>
                        <p>Modeles : {val['produit']['attributes']['MODELES']}</p>
                        <p>Description produit : {val['produit']['attributes']['DESC_FR']}</p>
                        <p>{val['produit']['attributes']['selection']&& 'selection jury'}</p>
                        <p>{val['produit']['attributes']['coupdecoeur']&& 'coupdecoeur'}</p>
                        <p>{val['produit']['attributes']['achatenligne']&& 'achatenligne'}</p>
                        <p>{val['produit']['attributes']['asaisir']&& 'asaisir'}</p>
                        <p>{val['produit']['attributes']['TARIF_PUB']} €</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Home

export async function getStaticProps(context) {
    const qs =require('qs')

    const res = await axios.get(`http://localhost:1337/api/superuniversdetailss`)

    const rayons_superunivers = []
    const typeprods_univers = []

    for (let cle_superunivers of res.data.data) {

        const query = qs.stringify(
            {
                filters: {
                            CLE_SUPERUNIVERS: { $eq: cle_superunivers["attributes"]["CLE_SUPERUNIVERS"] } 
                        }
            },
            {
                encodeValuesOnly: true,
            }
        ) 
        const res2 = await axios.get(`http://localhost:1337/api/rayonbases?${query}`)

        const rayons_keys = []

        for (let superunivers of res2.data.data) {
            rayons_keys.push(superunivers['attributes']['CLE_RAYON'])
        }

        const query2 = qs.stringify(
            {
                filters: {
                            CLE_RAYON : { $in : rayons_keys },
                            CLE_LANG : { $eq : "0"}
                        }
            },
            {
                encodeValuesOnly: true,
            }
        ) 
        const res3 = await axios.get(`http://localhost:1337/api/rayondetails?${query2}`)   
        rayons_superunivers.push({superunivers_lib : cle_superunivers, univers : res3.data.data})

        for (let univers of res3.data.data) {
            const query3 = qs.stringify(
                {
                    filters : {
                                    
                                CLE_RAYON: { $eq: univers['attributes']['CLE_RAYON'] }    
                            }
                },
                {
                    encodeValuesOnly: true,
                }
            ) 
            const res4 = await axios.get(`http://localhost:1337/api/typeprods?${query3}`) 
            typeprods_univers.push({univers : univers, typeprods : res4.data.data})    
        }
    }

    const query3 = qs.stringify(
        {
            filters: {
                $or: [
                    {selection: { $eq: true }},
                    {coupdecoeur: { $eq: true }},
                    {achatenligne: { $eq: true }},     
                    {asaisir: { $eq: true }}               
                ]
            }
        },
        {
            encodeValuesOnly: true,
        }
        )
    const res2 = await axios.get(`http://localhost:1337/api/produits?${query3}`)  
    const selections = []
    for (let produit of res2.data.data) {
        const query = qs.stringify (
            {
                filters: {
                    CLE_EXPOSANT: { $eq: produit['attributes']['CLE_EXPOSANT'] } 
                }
            },
            {
                encodeValuesOnly: true,
            }
        )   
        const res = await axios.get(`http://localhost:1337/api/exposants?${query}`) 

        const query2 = qs.stringify (
            {
                filters: {
                    CLE_TYPE_PROD: { $eq: produit['attributes']['CLE_TYPE_PROD'] } 
                }
            },
            {
                encodeValuesOnly: true,
            }
        )  
        const res2 = await axios.get(`http://localhost:1337/api/typeprods?${query2}`) 
        selections.push({produit : produit, typeprod : res2.data.data[0], exposant : res.data.data[0]})
    }

    const query4 = qs.stringify(
        {
            filters: {
                NOUVEAUTE : { $eq: "1" } 
            }
        },
        {
            encodeValuesOnly: true,
        }
        )
        const res3 = await axios.get(`http://localhost:1337/api/produits?${query4}`) 
        const nouveautes = []
        for (let produit of res3.data.data) {
            const query = qs.stringify (
                {
                    filters: {
                        CLE_EXPOSANT: { $eq: produit['attributes']['CLE_EXPOSANT'] } 
                    }
                },
                {
                    encodeValuesOnly: true,
                }
            )   
            const res = await axios.get(`http://localhost:1337/api/exposants?${query}`) 
    
            const query2 = qs.stringify (
                {
                    filters: {
                        CLE_TYPE_PROD: { $eq: produit['attributes']['CLE_TYPE_PROD'] } 
                    }
                },
                {
                    encodeValuesOnly: true,
                }
            )  
            const res2 = await axios.get(`http://localhost:1337/api/typeprods?${query2}`) 

            nouveautes.push({produit : produit, typeprod : res2.data.data[0], exposant : res.data.data[0]})
        }
    return {
      props: {
          superunivers : res.data.data,
          rayons_univers : rayons_superunivers,
          typeprods_univers : typeprods_univers,
          selections : selections,
          nouveautes : nouveautes
      }, 
    }
}
//  CLE_SUPERUNIVERS