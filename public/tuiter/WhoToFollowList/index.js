import whoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {

    let items = "";
    items = who.map(account => `${whoToFollowListItem(account)}`).join("")
    return (`
           <ul class="list-group">
           ${items}
           </ul>
`);
}

export default WhoToFollowList;