/**
 * External dependencies.
 */
import classNames from 'classnames';

const Stack = ({ gap, justify, children, direction }) => (
    <div
        className={classNames('stack', `stack--direction-${direction}`, {
            [`stack--spacing-${gap}`]: gap,
            [`stack--justify-${justify}`]: justify,
        })}
    >
        {children}
    </div>
);

export const VStack = ({ gap, justify, children }) => (
    <Stack gap={gap} justify={justify} direction="column">
        {children}
    </Stack>
);

export const HStack = ({ gap, justify, children }) => (
    <Stack gap={gap} justify={justify} direction="row">
        {children}
    </Stack>
);

export default Stack;
