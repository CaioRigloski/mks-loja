import requestProducts from "@/interfaces/requestProducts.interface"
import axios from "axios"

export default async function getProducts(props: requestProducts) {
  const result = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products', {
    params: {
        'page': props.page,
        'rows': 8,
        'sortBy': 'id',
        'orderBy': 'ASC'
    }
  })
  return result.data
}