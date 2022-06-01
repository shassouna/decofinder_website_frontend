import axios from 'axios'
import Link from 'next/link'
const SuperuniversSlug = (props) => {
    return (
        <div>
            <p>Superunivers {props.superunivers['attributes']['LIB']}</p>
            <p>Superunivers Description {props.superunivers['attributes']['DESCR']}</p>
                Les Univers Arts De La Table :
                {  
                    props.rayons.map(val=>{
                        return //<Link href={{pathname: `/univers/${val['attributes']['slug']}`}}><p key={val['rayon'][0]['id']}>{val['rayon'][0]['attributes']['LIB']}</p></Link>
                    })
                }
                Les catégories :
                {  
                    props.rayons.map(val=>{
                        return <div>
                               <h2 key={val['rayon'][0]['id']}>{val['rayon'][0]['attributes']['LIB']}</h2>
                               {val['typeprod'].map(val2=>{
                                   return <p>{val2['attributes']['LIB_FR']}</p>
                               })}
                               </div> 
                    })
                }
        </div>
    )
}


export default SuperuniversSlug

export async function getStaticPaths() {

    const res = await axios.get(`http://localhost:1337/api/superuniversdetailss`)

    const paths = []

    res.data.data.forEach(val => {
        paths.push({params : {superunivers_slug : val['attributes']['slug']}})
    })

    return {
        paths:paths,
        fallback : false
    }
}

export async function getStaticProps(context) {

    const qs = require("qs")

    const res = await axios.get(`http://localhost:1337/api/superuniversdetailss/${context.params.superunivers_slug}`)

    const query = qs.stringify(
        {
            filters: {
                CLE_SUPERUNIVERS: { $eq: res.data.data['attributes']['CLE_SUPERUNIVERS'] } 
            }
        },
        {
            encodeValuesOnly: true,
        }
        )

    const res2 = await axios.get(`http://localhost:1337/api/rayonbases?${query}`)
    const rayons_keys=[]
    res2.data.data.forEach(element => {
        rayons_keys.push(element['attributes']['CLE_RAYON'])
    })

    const rayons = []
    for (let cle_rayon of rayons_keys)  {
        const query2 = qs.stringify(
            {
                filters: {
                    CLE_RAYON: { $eq: cle_rayon } 
                }
            },
            {
                encodeValuesOnly: true,
            }
            )
        const res = await axios.get(`http://localhost:1337/api/rayondetails?${query2}`) 
        const query3 = qs.stringify(
            {
                filters: {
                    CLE_RAYON: cle_rayon 
                }
            },
            {
                encodeValuesOnly: true,
            }
            )
        const res2 = await axios.get(`http://localhost:1337/api/typeprods?${query3}`)

        rayons.push({rayon : res.data.data, typeprod : res2.data.data})
    }
    return {
      props: {
        superunivers : res.data.data,
        rayons : rayons
      }, 
    }
  }