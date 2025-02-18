const Button = ({ type = 'button', color = '', children, modifier }) => (
    <button
        type={type}
        className={`button ${color ? `button--${color}` : ''} ${
            modifier ? `button--${modifier}` : ''
        }`}
    >
        {children}
    </button>
);

export default Button;
