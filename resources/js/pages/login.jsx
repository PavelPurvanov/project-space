/**
 * External dependencies.
 */
import { Rocket } from 'lucide-react';

/**
 * Internal dependencies.
 */
import Text from '@/components/text/text';
import Input from '@/components/input/input';
import Button from '@/components/button/button';
import Layout from '@/components/layout/layout';
import useForm from '@/hooks/use-form';
import Checkbox from '@/components/checkbox/checkbox';
import Stack, { VStack, HStack } from '@/components/stack/stack';

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
            <Stack gap={40} variant="bordered" direction="column">
                <Text as="h2" size="30">
                    <HStack gap={4} align="center">
                        Login to your Project Space <Rocket size={32} />
                    </HStack>
                </Text>

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

                        <HStack justify="space-between">
                            <Checkbox
                                name="remember"
                                label="Remember Me"
                                onChange={handleOnChange}
                            />

                            <Text
                                as="a"
                                size="14"
                                href="/forgot-password"
                                weight="semibold"
                            >
                                Forgot Password?
                            </Text>
                        </HStack>

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

                <hr />

                <Text align="center">
                    Don’t have account?{' '}
                    <Text as="a" href="/register">
                        Sign Up
                    </Text>
                </Text>
            </Stack>
        </Layout>
    );
};

export default Login;
