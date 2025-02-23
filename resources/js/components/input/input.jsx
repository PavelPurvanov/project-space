/**
 * External dependencies.
 */
import classNames from 'classnames';

/**
 * Internal dependencies.
 */
import Text from '@/components/text/text';

const Input = ({ type, error, ...rest }) => (
    <div
        className={classNames('input', {
            'has-error': error,
        })}
    >
        <input type={type} {...rest} />

        {error && (
            <Text size="13" variant="error" className="input__error">
                {error}
            </Text>
        )}
    </div>
);

export default Input;
