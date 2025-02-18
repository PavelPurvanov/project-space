/**
 * External dependencies.
 */
import { Rocket } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';

/**
 * Internal dependencies.
 */
import Layout from '@/components/layout/layout';

const Home = () => {
    const { appName } = usePage().props;

    return (
        <Layout>
            <div className="box">
                <h2>
                    Welcome to {appName} <Rocket size={32} />
                </h2>

                <Link href="/login" className="button button--blue">
                    Login
                </Link>

                <Link href="/register" className="button button--orange">
                    Register
                </Link>
            </div>
        </Layout>
    );
};

export default Home;
