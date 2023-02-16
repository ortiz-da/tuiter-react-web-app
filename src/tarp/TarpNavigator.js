import {useState} from "react";

export default function TarpNavigator({active = 'Dashboard'}) {
    // whatever setLinks says, that will be our new array
    const [links, setLinks] = useState(
    [
        "Northeastern",
        "Dashboard",
        "Courses",
        "Calendar",
        "Inbox",
        "Account"
    ])

    const onAdd = () => {
        const newLinks = [...links, 'New Link']
        setLinks(newLinks)
    }

    return (
        <div className={"list-group"}>
            {
                links.map((link, x) =>
                    <a key={x} className={`list-group-item ${active === link ? 'active' : ""}`}
                       href={'#'}>{link}
                    </a>)
            }
            <div>
                <button onClick={onAdd}>Add</button>
            </div>

        </div>

    )
}

