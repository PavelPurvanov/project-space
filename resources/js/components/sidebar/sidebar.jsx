/**
 * External dependencies.
 */
import { Users, Settings, FolderOpenDot } from 'lucide-react';

/**
 * Internal dependencies.
 */
import { HStack } from '@/components/stack/stack';

const Sidebar = () => (
    <div className="sidebar">
        <HStack>
            <button type="button" className="sidebar__item">
                <FolderOpenDot />
            </button>
            <button type="button" className="sidebar__item">
                <Users />
            </button>
        </HStack>

        <HStack>
            <button type="button" className="sidebar__item">
                <Settings />
            </button>
        </HStack>
    </div>
);

export default Sidebar;
