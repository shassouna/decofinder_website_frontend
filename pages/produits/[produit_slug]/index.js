import axios from 'axios'
import { useRouter } from 'next/router'

const ProduitSlug = (props) => {

    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading ... </h1>
    }

    return (
        <div>
            <p>{props.exposant['attributes']['NOM']}</p>
            <p>Numéro : {props.produits['attributes']['NUMERO']}</p>
            <p>Marque : {props.produits['attributes']['MARQUE']}</p>
            <h3>{`${props.typeprod['attributes']['LIB_FR']} - ${props.produits['attributes']['TITRE_FR']}`}</h3>
            <h3>Site web : {props.exposant['attributes']['SRV_INTERNET']}</h3>
            <h2>Détails</h2>
            <h3>Description</h3>
            {<p>{props.typeprod['attributes']['DESC_FR']}</p>}
            <h3>Caractéristiques</h3>
            <p>Origine : {props.pays['attributes']['LIB_FR']}</p>
            <p>Ref.Fab : {props.produits['attributes']['REFERENCE_FABRICANT']}</p>
            <p>EAN : {props.produits['attributes']['EAN']}</p>
            <h3>Autres produits Range-couverts CHEMIN DE CAMPAGNE</h3>
            {props.autres_produits_exposant_typeprod.map(produit=>{
                return <>
                       <p>exposant : {props.exposant['attributes']['NOM']}</p>
                       <p>type produit : {props.typeprod['attributes']['LIB_FR']}</p>
                       <p>hauteur : {produit['attributes']['DESC_FR']}</p>
                       </>
            })}
            <h3>Toute la collection de CHEMIN DE CAMPAGNE</h3>
            {props.autres_produits_exposant.map(produit=>{
                return <>
                       <p>exposant : {props.exposant['attributes']['NOM']}</p>
                       <p>description produit : {produit['attributes']['DESC_FR']}</p>
                       </>
            })}
            <h3>Vous aimerez aussi</h3>
            {props.autres_produits_typeprod.map(produit=>{
                return <>
                      <p>type produit : {props.typeprod['attributes']['LIB_FR']}</p>
                      <p>nom produit : {produit['attributes']['TITRE_FR']}</p>
                      <p>description produit : {produit['attributes']['DESC_FR']}</p>
                       </>
            })}
            <h3>Produits associés</h3>
            {props.autres_typeprods.map(typeprod=>{
                return <p>type prod : {typeprod['attributes']['LIB_FR']}</p>
            })}
        </div>
    )
}

export default ProduitSlug

export async function getStaticPaths() {

    //const res = await axios.get(`http://localhost:1337/api/produits`)

    const paths = []
    /*res.data.data.forEach(val => {
        paths.push({params : {produit_slug : "val['attributes']['slug']"}})
    })*/

    return {
        paths:paths,
        fallback : true
    }
}

export async function getStaticProps(context) {

    const qs = require("qs")

    const res = await axios.get(`http://localhost:1337/api/produits/bote-couvert-th-style-ancienne-bote-couvert-en-bois-tiroir-40-cm-353873`)

    const query = qs.stringify(
        {
            filters: {
                CLE_PAYS: { $eq: res.data.data["attributes"]["CLE_PAYS"] } 
            }
        },
        {
            encodeValuesOnly: true,
        }
        )   
    const res2 = await axios.get(`http://localhost:1337/api/payss?${query}`)

    const query2 = qs.stringify(
        {
            filters: {
                CLE_TYPE_PROD: { $eq: res.data.data["attributes"]["CLE_TYPE_PROD"] } 
            }
        },
        {
            encodeValuesOnly: true,
        }
        )
    const res3 = await axios.get(`http://localhost:1337/api/typeprods?${query2}`)

    const query3 = qs.stringify(
        {
            filters: 
            {
                CLE_EXPOSANT: { $eq: res.data.data["attributes"]["CLE_EXPOSANT"] } 
            }
        },
        {
            encodeValuesOnly: true,
        }
        )
    const res4 = await axios.get(`http://localhost:1337/api/exposants?${query3}`)

    const query4 = qs.stringify(
        {
            filters: {
                $and: [
                    {
                        CLE_EXPOSANT: { $eq: res.data.data["attributes"]["CLE_EXPOSANT"] } 
                    },
                    {
                        CLE_TYPE_PROD: { $eq: res.data.data["attributes"]["CLE_TYPE_PROD"] } 
                    } 
                ]
            }
   
        },
        {
            encodeValuesOnly: true,
        }
        )
    const res5 = await axios.get(`http://localhost:1337/api/produits?${query4}`)

    const query5 = qs.stringify(
        {
            filters: {
                        CLE_EXPOSANT: { $eq: res.data.data["attributes"]["CLE_EXPOSANT"] } 
                    }
        },
        {
            encodeValuesOnly: true,
        }
        )    
    const res6 = await axios.get(`http://localhost:1337/api/produits?${query5}`)

    const query6 = qs.stringify(
        {
            filters: {
                        CLE_TYPE_PROD: { $eq: res.data.data["attributes"]["CLE_TYPE_PROD"] } 
                    }
        },
        {
            encodeValuesOnly: true,
        }
        )    
    const res7 = await axios.get(`http://localhost:1337/api/produits?${query6}`)

    const query7 = qs.stringify(
        {
            filters: {
                        CLE_RAYON: { $eq: res.data.data["attributes"]["CLE_RAYON"] } 
                    }
        },
        {
            encodeValuesOnly: true,
        }
        )    
    const res8 = await axios.get(`http://localhost:1337/api/typeprods?${query7}`)

    return {
        props: {
            produits : res.data.data,
            pays : res2.data.data[0],
            typeprod : res3.data.data[0],
            exposant : res4.data.data[0],
            autres_produits_exposant_typeprod : res5.data.data,
            autres_produits_exposant : res6.data.data,
            autres_produits_typeprod : res7.data.data,
            autres_typeprods : res8.data.data
        }, 
      }
}
