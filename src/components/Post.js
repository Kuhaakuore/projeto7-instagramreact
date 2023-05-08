import React from "react";

export default function Post(props) {
    let [likes, setLikes] = React.useState(props.likes.amount);
    let [bookmark, setBookmark] = React.useState("bookmark-outline");
    let [like, setLike] = React.useState("heart-outline");
    let [likeClass, setLikeClass] = React.useState("");

    function bookmarkToggle() {
        if (bookmark === "bookmark-outline") setBookmark("bookmark");
        else setBookmark("bookmark-outline");
    }

    function likeColourToggle() {
        if (likeClass === "") setLikeClass("red");
        else setLikeClass("");
    }

    function likeToggle() {
        if (like === "heart-outline") {
            setLike("heart");
            setLikes(++likes);
            likeColourToggle();
        }
        else {
            setLike("heart-outline");
            setLikes(--likes);
            likeColourToggle();
        }
    }

    function likePost() {
        if (like === "heart-outline") {
            setLike("heart");
            setLikes(++likes);
            setLikeClass("red");
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.user.image} alt={props.user.name} />
                    {props.user.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.content.image} alt={props.content.name} onClick={likePost}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={likeClass} name={like} onClick={likeToggle}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmark} onClick={bookmarkToggle}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likes.image} alt={props.likes.name} />
                    <div class="texto">
                        Curtido por <strong>{props.likes.name}</strong> e <strong>outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}