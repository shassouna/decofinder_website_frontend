import axios from 'axios'

const AchatsEnLigne = (props) => {

    return (
        props.selections.map(val=>(
            <div>
                <p>EXPOSANT : {val['exposant']['attributes']['NOM']}</p>
                <p>Type produit : {val['typeprod']['attributes']['LIB_FR']}</p>
                <p>Nom Produit : {val['produit']['attributes']['TITRE_FR']}</p>
                <p>Modeles : {val['produit']['attributes']['MODELES']}</p>
                <p>Description produit : {val['produit']['attributes']['DESC_FR']}</p>
            </div>
        ))
    )
}

export default AchatsEnLigne

export async function getStaticProps(context) {
    const qs = require('qs')

    const query = qs.stringify(
        {
            filters: {
                achatenligne: { $eq: true } 
            }
        },
        {
            encodeValuesOnly: true,
        }
        )
    const res = await axios.get(`http://localhost:1337/api/produits?${query}`) 


    const selections = []
    for (let produit of res.data.data) {
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
    return {
        props : {
            selections : selections
        }
    }
}
