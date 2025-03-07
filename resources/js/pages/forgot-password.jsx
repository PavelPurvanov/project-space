/**
 * External dependencies.
 */
import { useState } from 'react';
import { ArrowLeft, CircleCheck } from 'lucide-react';

/**
 * Internal dependencies.
 */
import Text from '@/components/text/text';
import Input from '@/components/input/input';
import Button from '@/components/button/button';
import Layout from '@/components/layout/layout';
import useForm from '@/hooks/use-form';
import { VStack, HStack } from '@/components/stack/stack';

const ForgotPassword = () => {
    const [success, setSuccess] = useState(false);

    const { post, errors, processing, handleOnChange } = useForm({
        email: '',
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();

        post('/forgot-password', {
            onSuccess: () => setSuccess(true),
        });
    };

    return (
        <Layout guest>
            <div className="form">
                <VStack gap={success ? 24 : 40} variant="bordered">
                    {success && (
                        <VStack align="center">
                            <CircleCheck size={54} color="green" />
                        </VStack>
                    )}

                    <Text as="h2" size="30" align="center">
                        {success ? 'Success' : 'Forgot Password?'}
                    </Text>

                    <Text size="16" align="center">
                        {success
                            ? 'Please check the email address associated with your profile for instructions to reset your password.'
                            : 'Enter your email address and we will send a confirmation link to your inbox.'}
                    </Text>

                    {!success && (
                        <form onSubmit={handleOnSubmit}>
                            <VStack gap={32}>
                                <Input
                                    name="email"
                                    type="email"
                                    error={errors.email}
                                    onChange={handleOnChange}
                                    placeholder="Email"
                                />

                                <Button
                                    type="submit"
                                    color="orange"
                                    processing={processing}
                                >
                                    Reset password
                                </Button>
                            </VStack>
                        </form>
                    )}

                    <HStack gap={4} align="center" justify="center">
                        <Text as="a" href="/login" align="center">
                            <HStack gap={8} align="center" justify="center">
                                <ArrowLeft size={16} /> Back to login
                            </HStack>
                        </Text>
                    </HStack>
                </VStack>
            </div>
        </Layout>
    );
};

export default ForgotPassword;
