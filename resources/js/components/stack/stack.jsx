/**
 * External dependencies.
 */
import classNames from 'classnames';

const Stack = ({ gap, align, justify, variant, children, direction }) => (
    <div
        className={classNames('stack', `stack--direction-${direction}`, {
            [`stack--align-${align}`]: align,
            [`stack--spacing-${gap}`]: gap,
            [`stack--variant-${variant}`]: variant,
            [`stack--justify-${justify}`]: justify,
        })}
    >
        {children}
    </div>
);

export const VStack = ({ gap, align, variant, justify, children }) => (
    <Stack
        gap={gap}
        align={align}
        variant={variant}
        justify={justify}
        direction="column"
    >
        {children}
    </Stack>
);

export const HStack = ({ gap, align, variant, justify, children }) => (
    <Stack
        gap={gap}
        align={align}
        variant={variant}
        justify={justify}
        direction="row"
    >
        {children}
    </Stack>
);

export default Stack;
