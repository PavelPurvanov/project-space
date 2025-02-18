/**
 * External dependencies.
 */

const Stack = ({ gap, children, direction }) => (
    <div
        className={`stack stack--${direction} ${
            gap ? `stack--gap-${gap}` : ''
        }`}
    >
        {children}
    </div>
);

export const VStack = ({ gap, children }) => (
    <Stack gap={gap} direction="column">
        {children}
    </Stack>
);

export const HStack = ({ gap, children }) => (
    <Stack gap={gap} direction="row">
        {children}
    </Stack>
);

export default Stack;
