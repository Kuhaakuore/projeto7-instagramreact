export default function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.user.image} alt={props.user.name} />
                <div class="texto">
                    <div class="nome">{props.text.name}</div>
                    <div class="razao">{props.text.reason}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}