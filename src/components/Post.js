import React from "react";

let liked = false;
let aux;

function changeLikes() {
    if (!liked) {
        liked = true;
        return aux++;
    } 
    else {
        liked = false;
        return aux--;
    }
}

export default function Post(props) {
    const [likes, setLikes] = React.useState(props.likes.amount);
    aux = likes;

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
                <img src={props.content.image} alt={props.content.name} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline" onClick={() => setLikes(changeLikes)}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
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