const Header = ({ modifier, children }) => (
    <header className={`header ${modifier ? `header--${modifier}` : ""}`}>
        {children}
    </header>
);

export const HeaderLeft = ({ children }) => (
    <div className="header__left-col">{children}</div>
);

export const HeaderRight = ({ children }) => (
    <div className="header__right-col">{children}</div>
);

export default Header;
