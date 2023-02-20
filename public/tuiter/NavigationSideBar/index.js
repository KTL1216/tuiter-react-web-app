import navList from "./navList.js";
import sideItems from "./sideItems.js";

const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            ${sideItems.map(sidebar => {
                return(`
                    ${navList(sidebar, active === sidebar.name ? "active" : "")}
                `)
            }).join('')}
        </div>
        <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a></div>
    `);
}

export default NavigationSidebar;