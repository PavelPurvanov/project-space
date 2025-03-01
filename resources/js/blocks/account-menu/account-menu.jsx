/**
 * External dependencies.
 */
import { LogOut } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import { useRef, useState, useEffect } from 'react';

/**
 * Internal dependencies.
 */
import Text from '@/components/text/text';
import Portal from '@/components/portal/portal';
import { HStack, VStack } from '@/components/stack/stack';

const AccountMenu = () => {
    const modalRef = useRef();

    const { authUser } = usePage().props;

    const [showAccountMenu, setShowAccountMenu] = useState(false);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowAccountMenu(false);
        }
    };

    useEffect(() => {
        showAccountMenu &&
            document.addEventListener('mousedown', handleClickOutside);

        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [showAccountMenu]);

    return (
        <div className="account-menu">
            <HStack justify="center">
                <button
                    onClick={() => setShowAccountMenu(true)}
                    disabled={showAccountMenu}
                >
                    <img src="images/avatar.png" width="40" height="40" />
                </button>

                <Portal create={showAccountMenu}>
                    <div ref={modalRef} className="account-menu__modal">
                        <VStack gap={16}>
                            <HStack gap={8}>
                                <img
                                    src="images/avatar.png"
                                    width="40"
                                    height="40"
                                />

                                <VStack>
                                    <Text size={15}>{authUser.name}</Text>
                                    <Text variant="helper">
                                        {authUser.email}
                                    </Text>
                                </VStack>
                            </HStack>

                            <hr />

                            <Link href="/logout" method="post">
                                <HStack gap={4} align="center">
                                    <LogOut size={16} /> Sign out
                                </HStack>
                            </Link>
                        </VStack>
                    </div>
                </Portal>
            </HStack>
        </div>
    );
};

export default AccountMenu;
