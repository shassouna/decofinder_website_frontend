
const ProduitSlug = () => {
    return (
        <div>
            
        </div>
    )
}

export default ProduitSlug

export async function getStaticPaths() {

    const res = await axios.get(`http://localhost:1337/api/produits`)

    const paths = []

    res.data.data.forEach(val => {
        paths.push({params : {produit_slug : val['attributes']['slug']}})
    })
    console.log(paths)
    return {
        paths:paths,
        fallback : false
    }
}

export async function getStaticProps(context) {
    const res = await axios.get(`http://localhost:1337/api/produits/${context.params.univers_slug}`)
    return {
        props: {
            produits : []
        }, 
      }
}
