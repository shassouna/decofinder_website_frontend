import axios from 'axios'

const UniversSlug = (props) => {
    return (
        <div>
            <h1>Univers : {props.univers['attributes']['LIB']}</h1>
            <h3>{props.univers['attributes']['DOSSIER_RESUME']}</h3>
            <h3>Dans cet univers</h3>
        </div>
    )
}

export default UniversSlug

export async function getStaticPaths() {

    const res = await axios.get(`http://localhost:1337/api/rayondetails`)

    const paths = []

    res.data.data.forEach(val => {
        paths.push({params : {univers_slug : val['attributes']['slug']}})
    })
    return {
        paths:paths,
        fallback : false
    }
}

export async function getStaticProps(context) {

    const res = await axios.get(`http://localhost:1337/api/rayondetails/${context.params.univers_slug}`)

    return {
        props: {
            univers : res.data.data
        }, 
      }
}