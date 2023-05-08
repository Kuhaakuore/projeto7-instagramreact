export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.image} alt={props.user}/>
            </div>
            <div className="usuario">
                {props.user}
            </div>
        </div>
    );
}