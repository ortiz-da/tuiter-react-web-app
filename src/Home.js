import {Link} from "react-router-dom";

export default function Home () {
    return(
        <>
            <h1>Hello, welcome to React.js</h1>
            <Link to={"/"}>Home</Link><br/>
            <Link to={"/add/12/20"}>Add</Link><br/>
            <Link to={"/simple"}>Simple</Link><br/>
            <Link to={"/destructor"}>Destructor</Link><br/>
            <Link to={"/loops"}>Loops</Link>

        </>
    )

}

