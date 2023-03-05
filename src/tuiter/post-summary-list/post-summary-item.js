import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {

    let {topic, userName, time, title, image, tweets} = post;

    return (
        <div className="list-group-item list-group-item-action p-1">
            <div className="row p-2">
                <div className="col-md-10 col-9">
                    <div className="text-secondary">{topic}</div>
                    <div className="fw-bold">{userName} <i className="fas fa-check-circle"></i> <span
                        className="text-secondary fw-normal">- {time}</span>
                    </div>
                    <div className="fw-bold">{title}</div>
                    <div className="text-secondary">{tweets == null ? "" : tweets + " Tweets"}</div>
                </div>

                <div className="col-md-2 col-3">
                    <img width={70} src={`/images/${image}`} className="float-end img-fluid rounded-3"></img>
                </div>
            </div>
        </div>
    )
}

export default PostSummaryItem