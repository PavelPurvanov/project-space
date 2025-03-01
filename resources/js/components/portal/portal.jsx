/**
 * External dependencies
 */
import { createPortal } from 'react-dom';

const Portal = ({ create = false, children }) => {
    if (!create) {
        return null;
    }

    return createPortal(children, document.body);
};

export default Portal;
