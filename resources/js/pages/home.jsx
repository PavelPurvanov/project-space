/**
 * External dependencies.
 */
import { Rocket } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';

/**
 * Internal dependencies.
 */
import Text from '@/components/text/text';
import Layout from '@/components/layout/layout';
import { HStack, VStack } from '@/components/stack/stack';

const Home = () => {
    const { appName } = usePage().props;

    return (
        <Layout>
            <VStack gap={40} variant="bordered">
                <Text as="h2" size="30">
                    <HStack gap={4} align="center">
                        Welcome to {appName} <Rocket size={32} />
                    </HStack>
                </Text>

                <Link href="/login" className="button button--blue">
                    Login
                </Link>

                <Link href="/register" className="button button--orange">
                    Register
                </Link>
            </VStack>
        </Layout>
    );
};

export default Home;
