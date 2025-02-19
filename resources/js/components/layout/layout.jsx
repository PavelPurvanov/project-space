/**
 * External dependencies.
 */
import { Link, usePage } from '@inertiajs/react';

/**
 * Internal dependencies.
 */
import Select from '@/components/select/select';
import Sidebar from '@/components/sidebar/sidebar';
import { HStack } from '@/components/stack/stack';
import Header, { HeaderLeft, HeaderRight } from '@/components/header/header';

const Layout = ({ children }) => {
    const { authUser } = usePage().props;

    return authUser ? (
        <div className="layout">
            <Sidebar />

            <div className="layout__inner">
                <Header>
                    <HeaderLeft>
                        <Select />
                    </HeaderLeft>
                    <HeaderRight>
                        <HStack gap="8">
                            <Link href="/logout" method="post">
                                Logout
                            </Link>

                            <img
                                src="images/avatar.png"
                                height="56"
                                width="56"
                            />
                        </HStack>
                    </HeaderRight>
                </Header>

                <div className="layout__content">{children}</div>
            </div>
        </div>
    ) : (
        <div className="layout layout--guest">{children}</div>
    );
};

export default Layout;
