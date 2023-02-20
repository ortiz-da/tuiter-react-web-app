const PostSummaryItem = (post) => {

    let {topic, userName, time, title, image} = post;

    return (`
        <div class="list-group-item list-group-item-action p-1">
            <div class="row p-2">
                <div class="col-md-10 col-9">
                    <div class="text-secondary">${topic}</div>
                    <div class="fw-bold">${userName} <i class="fas fa-check-circle"></i> <span
                            class="text-secondary fw-normal">- ${time}</span>
                    </div>
                    <div class="fw-bold">${title}</div>
                </div>
                <div class="col-md-2 col-3">
                    <img src=${image} class="img-fluid rounded">
                </div>
            </div>
        </div>
    `)
}

export default PostSummaryItem