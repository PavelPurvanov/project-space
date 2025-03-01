/**
 * External dependencies.
 */
import classNames from 'classnames';

/**
 * Internal dependencies.
 */
import Loader from '@/components/loader/loader';

const Button = ({
    type = 'button',
    color = '',
    children,
    modifier,
    className,
    processing = false,
}) => (
    <button
        type={type}
        disabled={processing}
        className={classNames('button', {
            [className]: className,
            [`button--${color}`]: color,
            [`button--${modifier}`]: modifier,
        })}
    >
        {processing ? <Loader /> : children}
    </button>
);

export default Button;
