import Posts from "./Posts.js";
import SideBar from "./SideBar.js";
import Stories from "./Stories.js";

export default function Body() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </div>
    );
}