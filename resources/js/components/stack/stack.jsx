/**
 * External dependencies.
 */

const Stack = ({ gap, justify, children, direction }) => (
    <div
        className={`stack stack--direction-${direction} ${
            gap ? `stack--spacing-${gap}` : ''
        } ${justify ? `stack--justify-${justify}` : ''}`}
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
