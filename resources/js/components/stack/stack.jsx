/**
 * External dependencies.
 */

const Stack = ({ children, direction }) => (
    <div className={`stack stack--${direction}`}>{children}</div>
);

export const VStack = ({ children }) => (
    <Stack direction="row">{children}</Stack>
);

export const HStack = ({ children }) => (
    <Stack direction="column">{children}</Stack>
);

export default Stack;
