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
                <FolderOpenDot color="#0c3d51" />
            </button>
            <button type="button" className="sidebar__item">
                <Users color="#0c3d51" />
            </button>
        </HStack>

        <HStack>
            <button type="button" className="sidebar__item">
                <Settings color="#0c3d51" />
            </button>
        </HStack>
    </div>
);

export default Sidebar;
