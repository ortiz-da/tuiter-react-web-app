const WhoToFollowListItem = (who) => {

    let {avatarIcon, userName, handle} = who

    return (`
<!--                ONE ACCOUNT-->
        <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

<!--                    Account image-->
            <div class="float-start">
                <img class="img-fluid rounded-circle m-2" width="36px" height="36px"
                     src=${avatarIcon}>
            </div>

<!--                    Account name-->
            <span class="col">
                <span class="fw-bold">${userName} <i class="fas fa-check-circle"></i></span>
                </br>@${handle}

            </span>

<!--                    Follow button-->
            <div class="position-absolute end-0 mx-3">
<!--            USED TO USE FLOAT END-->
                <button type="button" class="btn btn-primary rounded-pill my-1">Follow</button>
            </div>
        </a>
    `);
}

export default WhoToFollowListItem