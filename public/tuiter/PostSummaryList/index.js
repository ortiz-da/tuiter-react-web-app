import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    let items = "";
    items = posts.map(post => `${PostSummaryItem(post)}`).join("")
    return (`
        <div class = "list-group pb-3">
            ${items}
        </div>
    `)
}

export default PostSummaryList;

