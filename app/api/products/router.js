
import { productList} from '../productList';
export async function GET(){
  return new Response(JSON.stringify(productList),
  {status:200,
    headers:{
        "Content-Type":"application/json"
    }
  })
}