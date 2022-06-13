import axios from 'axios'
import { useRouter } from 'next/router'

const ExposantSlug = (props) => {

    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading ... </h1>
    }
     
    return (
        <div>
            <h1>{props.exposant['attributes']['NOM']}</h1>
            <p>Activité : {props.activite['attributes']['LIB_FR']}</p>
            <p>{props.exposant['attributes']['SLOGAN_FR']}</p>
            <p>{props.exposant['attributes']['DESC_FR']}</p>
            <h4>Coordonnées : </h4>
            <p>{props.exposant['attributes']['ADRESSE']}</p>
            <p>{props.exposant['attributes']['CP']}</p>
            <p>{props.exposant['attributes']['VILLE']}</p>
            <p>{props.pays['attributes']['LIB_FR']}</p>
            <p>{props.exposant['attributes']['TELEPHONE']}</p>
            <p>{props.exposant['attributes']['FAX']}</p>
            <h4>Show Room</h4>
            <p>{props.exposant['attributes']['SHOW_ROOM']}</p>
        </div>
    )
}

export default ExposantSlug 

export async function getStaticPaths() {

    const paths = []

    return {
        paths:paths,
        fallback : true
    }
}

export async function getStaticProps(context) {

    const qs = require("qs")

    const res = await axios.get(`http://localhost:1337/api/exposants/${context.params.exposant_slug}`)

    const query = qs.stringify(
        {
            filters: {
                CLE_EXPOSANT: { $eq: res.data.data['attributes']['CLE_EXPOSANT'] } 
            }
        },
        {
            encodeValuesOnly: true,
        }
        )
    const res2 = await axios.get(`http://localhost:1337/api/lienexptyps?${query}`)

    const query2 = qs.stringify(
        {
            filters: {
                CLE_TYPE_EXP: { $eq: res2.data.data[0]['attributes']['CLE_TYPE_EXP'] } 
            }
        },
        {
            encodeValuesOnly: true,
        }
        )
    const res3 = await axios.get(`http://localhost:1337/api/typeexps?${query2}`)

    const query3 = qs.stringify(
        {
            filters: {
                CLE_PAYS: { $eq: res.data.data['attributes']['PAYS'] } 
            }
        },
        {
            encodeValuesOnly: true,
        }
        )
    const res4 = await axios.get(`http://localhost:1337/api/payss?${query3}`)
    console.log(res4.data.data[0])

    return {
        props : {
            exposant : res.data.data,
            activite : res3.data.data[0],
            pays : res4.data.data[0]
        }
    }
}
