/**
 * External dependencies.
 */
import classNames from 'classnames';

const Header = ({ modifier, children }) => (
    <header
        className={classNames('header', {
            [`header--${modifier}`]: modifier,
        })}
    >
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
