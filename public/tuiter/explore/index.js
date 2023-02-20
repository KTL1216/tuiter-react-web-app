/* eslint-env jquery */
import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    let active = "explore";
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar(active)}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
                ${ExploreComponent()}           
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);

}

$(exploreComponent)