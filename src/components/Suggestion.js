export default function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.user.image} alt={props.user.name} />
                <div className="texto">
                    <div className="nome">{props.text.name}</div>
                    <div className="razao">{props.text.reason}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    );
}