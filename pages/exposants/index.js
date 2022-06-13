import axios from 'axios'
import Link from 'next/link'

const Exposants = (props) => {
    return (
        <div>
            {
                props.exposants.map(val=>(
                    <Link href={{pathname: `/exposants/${val['attributes']['slug']}`}}><p>{val['attributes']['NOM']}</p></Link>
                ))
            }
        </div>
    )
}

export default Exposants

export async function getStaticProps(context) {
    const res = await axios.get(`http://localhost:1337/api/exposants`)

    return {
        props : {
            exposants : res.data.data
        }
    }
}
