function TarpNavigator() {
    const links = [
        "Northeastern",
        "Dashboard",
        "Courses",
        "Calendar",
        "Inbox",
        "Account"
    ]

    return (
        `<div className="list-group">${links.map(link => `<a class = "list-group-item" href="#">${link}</a>`).join("")}</div>`
    )
}