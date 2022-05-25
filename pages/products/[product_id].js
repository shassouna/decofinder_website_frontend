import { useRouter } from "next/router"

const Product= () => {

    const router = useRouter()

    return (
    <>
      <h1>Product {router.query.product_id}</h1>

    </>
    )
  }
  export default Product