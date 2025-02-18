const Input = ({ type, error, ...rest }) => (
    <div className={`input ${error ? 'has-error' : ''}`}>
        <input type={type} {...rest} />

        {error && <p className="input__error">{error}</p>}
    </div>
);

export default Input;
