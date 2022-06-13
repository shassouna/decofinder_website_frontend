import axios from 'axios'
import Link from 'next/link'

const Home = (props) => {
    return (
        <div>
            <div>
                {
                props.superunivers.map(val=>(
                    <div key={val['id']}>
                        <Link href={{pathname: `/superunivers/${val['attributes']['slug']}`}}>
                          <a key={val['id']}>Name : {val['attributes']['LIB']}</a>
                        </Link>

                    </div>         
                ))
                }
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
                                $and: [
                                    {
                                        CLE_RAYON: { $eq: univers['attributes']['CLE_RAYON'] } 
                                    },

                                ]
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

    return {
      props: {
          superunivers : res.data.data,
          rayons_univers : rayons_superunivers,
          typeprods_univers : typeprods_univers
      }, 
    }
}
//  CLE_SUPERUNIVERS