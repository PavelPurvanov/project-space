/**
 * External dependencies.
 */
import classNames from 'classnames';

const Input = ({ type, error, ...rest }) => (
    <div
        className={classNames('input', {
            'has-error': error,
        })}
    >
        <input type={type} {...rest} />

        {error && <p className="input__error">{error}</p>}
    </div>
);

export default Input;
