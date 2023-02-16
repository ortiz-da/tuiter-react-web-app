import {useParams} from "react-router";

function Add(
    {
        b=20,
        a=30
    })
{
    const {parama, paramb} = useParams()
    // a has default value of 30

    const aValue = parseInt(parama)
    const bValue = parseInt(paramb)


    return(
        <div>
            <h3>Add Component</h3>
            {aValue} + {bValue} = {aValue + bValue}
        </div>
    )
}
export default Add