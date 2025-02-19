/**
 * External dependencies.
 */
import { Rocket } from 'lucide-react';

/**
 * Internal dependencies.
 */
import Input from '@/components/input/input';
import Button from '@/components/button/button';
import Layout from '@/components/layout/layout';
import useForm from '@/hooks/use-form';
import Checkbox from '@/components/checkbox/checkbox';
import { VStack } from '@/components/stack/stack';

const Login = () => {
    const { post, errors, processing, handleOnChange } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <Layout guest>
            <div className="box">
                <h2>
                    Login to your Project Space <Rocket size={32} />
                </h2>

                <form onSubmit={handleOnSubmit}>
                    <VStack gap={32}>
                        <VStack gap={8}>
                            <Input
                                name="email"
                                type="email"
                                error={errors.email}
                                onChange={handleOnChange}
                                placeholder="Email"
                            />

                            <Input
                                name="password"
                                type="password"
                                error={errors.password}
                                onChange={handleOnChange}
                                placeholder="Password"
                            />
                        </VStack>

                        <Checkbox
                            name="remember"
                            label="Remember Me"
                            onChange={handleOnChange}
                        />

                        <Button
                            type="submit"
                            color="orange"
                            modifier="medium"
                            processing={processing}
                        >
                            Login
                        </Button>
                    </VStack>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
