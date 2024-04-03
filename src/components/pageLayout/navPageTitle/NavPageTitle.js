import {useCannoliContext} from "../../../context/CannoliContext";


function NavPageTitle() {
    const {pageTitle} = useCannoliContext();

    return (
        <h1 className="mobile-title">{pageTitle}</h1>

    )
}

export default NavPageTitle;