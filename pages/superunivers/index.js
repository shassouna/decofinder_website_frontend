import axios from 'axios'
import Link from 'next/link'


const Home = (props) => {
    return (
        <div>
            {     
                props.superunivers.data.map(val=>(
                    console.log(val),
                    <div key={val['id']}>
                        <Link href={{pathname: `/superunivers/${val['attributes']['slug']}`}}>
                          <a key={val['id']}>Name : {val['attributes']['LIB']}</a>
                        </Link>
                    </div>         
                ))
            }   
        </div>
    )
}

export default Home

export async function getStaticProps(context) {

    const res = await axios.get(`http://localhost:1337/api/superuniversdetailss`)

    return {
      props: {
          superunivers : res.data
      }, 
    }
  }