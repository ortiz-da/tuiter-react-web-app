import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {

    let items = "";
    items = who.map(account => `${WhoToFollowListItem(account)}`).join("")
    return (`
           <ul class="list-group">
           <div class="list-group-item fw-bold">Who to follow</div>
           ${items}
           </ul>
`);
}

export default WhoToFollowList;