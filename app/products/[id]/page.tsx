
interface productParms{
params:{id:string};
}
export default function ProductPage({params}:productParms){
    return (<h1>{params.id}</h1>)
}