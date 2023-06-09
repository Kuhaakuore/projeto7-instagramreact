import { useState } from "react";

export default function User() {
    let [name, setName] = useState("catanacomics");
    let [image, setImage] = useState("assets/img/catanacomics.svg");

    function getName() {
        let newName = prompt("Digite o novo nome: ");
        if (newName !== null) if (newName.trim().length > 0) setName(newName);
    }

    function getImage() {
        let newImage = prompt("Digite o link da nova imagem: ");
        if (newImage !== null) if (newImage.trim().length > 0) setImage(newImage);
    }
    
    return (
        <div className="usuario">
            <img src={image} alt="imagem de perfil" onClick={getImage} data-test="profile-image"/>
            <div className="texto">
                <span data-test="name">
                    <strong>{name}</strong>
                    <ion-icon name="pencil" onClick={getName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
}