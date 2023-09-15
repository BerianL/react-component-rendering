const Header = ({title}) => {
    return (
        <div className="navbar bg-base-100 bg-opacity-50 text-primary-content z-10 shadow-2xl">
            <a className="btn btn-ghost normal-case text-xl">{title}</a>
        </div>
    )
}

export default Header;