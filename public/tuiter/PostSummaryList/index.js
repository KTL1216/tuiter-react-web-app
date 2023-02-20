import PostSummaryItem from "./PostSummaryItem.js";
import items from './postList.js'

const PostSummaryList = () => {
    return(`
        <ul class="list-group">
            ${items.map(post => {
                return(`${PostSummaryItem(post)}`)
            }).join('')}
        </ul>
    `)
};

export default PostSummaryList;