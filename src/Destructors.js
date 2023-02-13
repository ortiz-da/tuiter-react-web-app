function Destructors() {
    const house = {
        rooms: 3,
        baths: 2,
        sqft: 1500
    }

    const {rooms, baths, sqft} = house

    const colors = ['danger', 'primary', 'warning']
    // names don't matter for array, just position matters
    // in object, names matter, not position
    const [random1, random2, random3] = colors


    return (
        <div>
            <h2>Destructors</h2>
            <h3>House</h3>
            Rooms: {rooms}<br/>
            Baths: {baths}<br/>
            SQFT: {sqft}

            <h2>Array Destructor</h2>
            random1 = {random1}<br/>
            random2 = {random2}<br/>
            random2 = {random3}

        </div>

    )
}
export default Destructors