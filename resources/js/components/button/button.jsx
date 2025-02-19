/**
 * Internal dependencies.
 */
import Loader from '@/components/loader/loader';

const Button = ({
    type = 'button',
    color = '',
    children,
    modifier,
    processing = false,
}) => (
    <button
        type={type}
        disabled={processing}
        className={`button ${color ? `button--${color}` : ''} ${
            modifier ? `button--${modifier}` : ''
        }`}
    >
        {processing ? <Loader /> : children}
    </button>
);

export default Button;
