import Story from "./Story.js";

export default function Stories() {
    const stories = [
        {user: "9gag", image: "assets/img/9gag.svg"},
        {user: "meowed", image: "assets/img/meowed.svg"},
        {user: "barked", image: "assets/img/barked.svg"}
    ]

    return (
        <div class="stories">
            {stories.map(story => <Story user={story.user} image={story.image} />)}

            {/* <div class="story">
                <div class="imagem">
                    <img src="assets/img/nathanwpylestrangeplanet.svg" alt="nathanwpylestrangeplanet" />
                </div>
                <div class="usuario">
                    nathanwpylestrangeplanet
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/wawawicomics.svg" alt="wawawicomics" />
                </div>
                <div class="usuario">
                    wawawicomics
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                </div>
                <div class="usuario">
                    respondeai
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/filomoderna.svg" alt="filomoderna" />
                </div>
                <div class="usuario">
                    filomoderna
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/memeriagourmet.svg" alt="memeriagourmet" />
                </div>
                <div class="usuario">
                    memeriagourmet
                </div>
            </div> */}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}