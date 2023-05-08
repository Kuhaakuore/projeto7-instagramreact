import React from "react";

export default function Post(props) {
    let [likes, setLikes] = React.useState(props.likes.amount);
    let [bookmark, setBookmark] = React.useState("bookmark-outline");
    let [like, setLike] = React.useState("heart-outline");
    let [likeClass, setLikeClass] = React.useState("");
    let [bonusLikeClass, setBonusLikeClass] = React.useState("heart-bonus hide")

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
            showBonusLike();
            setLike("heart");
            setLikes(++likes);
            setLikeClass("red");
        }
    }

    function showBonusLike() {
        setBonusLikeClass("heart-bonus");
        setTimeout(() => {
            setBonusLikeClass("heart-bonus hide")
        }, 500);
    }

    return (
        <div class="post" data-test="post">
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
                <img src={props.content.image} alt={props.content.name} onDoubleClick={likePost} data-test="post-image"/>
                <ion-icon class={bonusLikeClass} name="heart"></ion-icon>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={likeClass} name={like} onClick={likeToggle} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmark} onClick={bookmarkToggle} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likes.image} alt={props.likes.name} />
                    <div class="texto" data-test="likes-number">
                        Curtido por <strong>{props.likes.name}</strong> e <strong>outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}