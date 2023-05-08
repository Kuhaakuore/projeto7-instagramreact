import Suggestion from "./Suggestion.js";

export default function Suggestions() {
    const suggestions = [
        {
            user: { image: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes.svg" },
            text: { name: "bad.vibes.memes", reason: "Segue você" }
        },

        {
            user: { image: "assets/img/chibirdart.svg", name: "chibirdart" },
            text: { name: "chibirdart", reason: "Segue você" }
        },

        {
            user: { image: "assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar" },
            text: { name: "razoesparaacreditar", reason: "Novo no Instagram" }
        },

        {
            user: { image: "assets/img/adorable_animals.svg", name: "adorable_animals" },
            text: { name: "adorable_animals", reason: "Segue você" }
        },

        {
            user: { image: "assets/img/smallcutecats.svg", name: "smallcutecats" },
            text: { name: "smallcutecats", reason: "Segue você" }
        },
    ]


    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map(suggestion => <Suggestion user={suggestion.user} text={suggestion.text} />)}
        </div>
    );
}