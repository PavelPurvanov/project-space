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
import Stack, { VStack, HStack } from '@/components/stack/stack';

const Register = () => {
    const { post, errors, processing, handleOnChange } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <Layout guest>
            <Stack gap={40} variant="bordered" direction="column">
                <Text as="h2" size="30" align="center">
                    <HStack gap={4} align="center" justify="center">
                        Register <Rocket size={32} />
                    </HStack>
                </Text>

                <form onSubmit={handleOnSubmit}>
                    <VStack gap={32}>
                        <VStack gap={8}>
                            <Input
                                name="name"
                                error={errors.name}
                                onChange={handleOnChange}
                                placeholder="Name"
                            />

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

                            <Input
                                name="password_confirmation"
                                type="password"
                                error={errors.password_confirmation}
                                onChange={handleOnChange}
                                placeholder="Confirm password"
                            />
                        </VStack>

                        <Button
                            type="submit"
                            color="orange"
                            processing={processing}
                        >
                            Register
                        </Button>
                    </VStack>
                </form>

                <hr />

                <Text align="center">
                    Already have an account?{' '}
                    <Text as="a" href="/login">
                        Login
                    </Text>
                </Text>
            </Stack>
        </Layout>
    );
};

export default Register;
