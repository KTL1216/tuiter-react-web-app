import WhoToFollowListItem from "./WhoToFollowListItem.js";
import followList from "./followList.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            <li class="list-group-item fw-bolder">
                Who to follow
            </li>
            ${
                followList.map(single => {
                    return(`${WhoToFollowListItem(single)}`)
                }).join('')}
        </ul>
    `);
}
export default WhoToFollowList;