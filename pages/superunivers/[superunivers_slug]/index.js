import axios from 'axios'
const SuperuniversSlug = (props) => {
    return (
        <div>
            <h1>Univers Title {props.superunivers.data['attributes']['LIB']}</h1>
            <h6>Univers Description {props.superunivers.data['attributes']['DESC']}</h6>
            {
                props.rayons.map(val=>{
                    return
                    <p key={val['id']}>{val['attributes']['LIB']}</p>
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
        $or: [
            {
            $and: [
                { CLE_SUPERUNIVERS: { $eq: res.data.data['attributes']['CLE_SUPERUNIVERS'] } }
            ]
            }
        ]
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
    const query2 = qs.stringify(
        {
            filters: {
            $or: [
                {
                $and: [
                    { CLE_RAYON: { $eq: rayons_keys } }
                ]
                }
            ]
            }
        },
        {
            encodeValuesOnly: true,
        }
        )
    const res3 = await axios.get(`http://localhost:1337/api/rayondetails?${query2}`)
    res3.data.data.forEach(e=>console.log(e))
    return {
      props: {
          superunivers : res.data,
          rayons : []
      }, 
    }
  }