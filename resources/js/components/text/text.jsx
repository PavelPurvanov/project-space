/**
 * External dependencies
 */
import classNames from 'classnames';
import { forwardRef, createElement } from 'react';

const Text = forwardRef((props, ref) => {
    const {
        as = 'p',
        size = 14,
        align,
        weight,
        children,
        className,
        textTransform,
        variant = 'default',
        ...rest
    } = props;

    return createElement(
        as,
        {
            ref,
            className: classNames(
                'text',
                `text--size-${size}`,
                `text--variant-${as == 'a' ? 'link' : variant}`,
                {
                    [className]: className,
                    [`text--align-${align}`]: align,
                    [`text--weight-${weight}`]: weight,
                    [`text--transform-${textTransform}`]: textTransform,
                }
            ),
            ...rest,
        },
        children
    );
});

export default Text;
