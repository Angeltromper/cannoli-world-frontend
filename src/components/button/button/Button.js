import './Button.css';
import { Link } from "react-router-dom";

export function ButtonGroup({children}) {
    return (
        <div className="button">
            {children}
        </div>
    );
}

export function Button({variation, url, size, children}) {
    return (
        <Link to={url} className={`button button-${variation} button-${size}`}>{children}</Link>
    );
}

