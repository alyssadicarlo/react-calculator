import './index.css';

function Button(props) {

    const handleClick = () => {
        props.onClick(props.number);
    }

    return (
        <>
            <div className="button-wrapper" onClick={handleClick}>
                <h1>{props.number}</h1>
            </div>
        </>
    );
}

export default Button;