const Input = ({ name, type, error, ...rest }) => (
    <div className={`input input--${type} ${error ? 'has-error' : ''}`}>
        <input {...rest} />

        {error && <p className="input__error">{error}</p>}
    </div>
);

export default Input;
