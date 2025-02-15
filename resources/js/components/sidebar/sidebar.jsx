/**
 * External dependencies.
 */
import { Link, usePage } from '@inertiajs/react';
import { Users, Settings, FolderOpenDot } from 'lucide-react';

/**
 * Internal dependencies.
 */
import { HStack } from '@/components/stack/stack';

const Sidebar = () => {
    const { url } = usePage();

    return (
        <div className="sidebar">
            <HStack>
                <Link href="/projects" className={url === '/projects' ? 'sidebar__item active' : 'sidebar__item'}>
                    <FolderOpenDot color="#0c3d51" />
                </Link>
                <Link className="sidebar__item">
                    <Users color="#0c3d51" />
                </Link>
            </HStack>

            <HStack>
                <Link className="sidebar__item">
                    <Settings color="#0c3d51" />
                </Link>
            </HStack>
        </div>
    );
};

export default Sidebar;
