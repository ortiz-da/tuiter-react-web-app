import React from "react";

const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png'}
    }
) => {

    let {avatarIcon, userName, handle} = who

    return (
        <div>
            <a href="#"
               className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

                <div className="float-start">
                    <img className="img-fluid rounded-circle m-2" width="36px" height="36px"
                         src={`/images/${avatarIcon}`} alt={""}></img>
                </div>

                <span className="col">
                <span className="fw-bold">{userName} <i className="fas fa-check-circle"></i></span>
                    <br></br>@{handle}

            </span>
                <div className="position-absolute end-0 mx-3">
                    <button type="button" className="btn btn-primary rounded-pill my-1">Follow</button>
                </div>
            </a>
        </div>
    );


}

export default WhoToFollowListItem