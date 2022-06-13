import MeiliSearch from "meilisearch"
import { useState, useRef } from "react"
const client = new MeiliSearch({
  host: "http://127.0.0.1:7700/"
})

export default function Home( props ) {

  const searchBarRef = useRef()

  const [exposants, setExposants] = useState(props.exposants)
  const [superUniversDetails, setSuperUniversDetails] = useState(props.superuniversdetails)
  const [univers, setUnivers] = useState(props.rayonsdetails)
  const [typeprods, setTypeprods] = useState(props.typeprods)
  const [produits, setProduits] = useState(props.Produits)

  const handleSearchBar = async () => {
    const index = await client.getIndex('exposant')
    const search = await index.search(searchBarRef.current.value)
    setExposants(search.hits)
    const index2 = await client.getIndex('superunivers')
    const search2 = await index2.search(searchBarRef.current.value)
    setSuperUniversDetails(search2.hits)
    const index3 = await client.getIndex('univers')
    const search3 = await index3.search(searchBarRef.current.value)
    setUnivers(search3.hits)
    const index4 = await client.getIndex('typeprod')
    const search4 = await index4.search(searchBarRef.current.value)
    setTypeprods(search4.hits)
    const index5 = await client.getIndex('produit')
    const search5 = await index5.search(searchBarRef.current.value)
    setProduits(search5.hits)
  }
  return (
    <div>
    <h2 style={{color:"red"}}>Les exposants</h2>
      {
        exposants.map(val=>{
            return <h3 key={val['id']}>{val['NOM']}</h3>
        })
      }
    <h2 style={{color:"red"}}>Les superunivers</h2>
      {
        superUniversDetails.map(val=>{
            return <h3 key={val['id']}>{val['LIB_FR']}</h3>
        })
      }    
    <h2 style={{color:"red"}}>Les univers</h2>
      {
        univers.map(val=>{
            return <h3 key={val['id']}>{val['LIB_FR']}</h3>
        })
      }    
    <h2 style={{color:"red"}}>Les types produits</h2>
      {
        typeprods.map(val=>{
            return <h3 key={val['id']}>{val['LIB_FR']}</h3>
        })
      }      
    <h2 style={{color:"red"}}>Les produits</h2>
      {
        produits.map(val=>{
            return <h3 key={val['id']}>{val['MODELES']}</h3>
        })
      }  
      <input ref={searchBarRef} onChange={handleSearchBar}></input>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps(){

  const index = await client.getIndex('exposant')
  const search = await index.search('')
  const exposants = search.hits

  const index2 = await client.getIndex('superuniversdetails')
  const search2 = await index2.search('')
  const superuniversdetails = search2.hits

  const index3 = await client.getIndex('rayondetail')
  const search3 = await index3.search('')
  const rayonsdetails = search3.hits

  const index4 = await client.getIndex('typeprod')
  const search4 = await index4.search('')
  const typeprods = search4.hits

  const index5 = await client.getIndex('produit')
  const search5 = await index5.search('')
  const produits = search5.hits
  return { 
      props: {
        exposants:exposants,
        superuniversdetails:superuniversdetails,
        rayonsdetails:rayonsdetails,
        typeprods:typeprods,
        produits:produits
      }
  }
}