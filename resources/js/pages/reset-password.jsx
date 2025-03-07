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

const ResetPassword = ({ email, token }) => {
    const [success, setSuccess] = useState(true);

    const { post, errors, processing, handleOnChange } = useForm({
        email: email,
        token: token,
        password: '',
    });

    const handleOnSubmit = (event) => {
        event.preventDefault();

        post('/reset-password', {
            onSuccess: () => setSuccess(true),
        });
    };

    return (
        <Layout guest>
            <div className="form">
                <VStack gap={success ? 24 : 32} variant="bordered">
                    {success && (
                        <VStack align="center">
                            <CircleCheck size={54} color="green" />
                        </VStack>
                    )}

                    <Text as="h2" size="30" align="center">
                        {success ? 'Password Changed' : 'Reset your password'}
                    </Text>

                    <Text size="16" align="center">
                        {success
                            ? 'Your password has been changed successfully.'
                            : 'Enter a new password'}
                    </Text>

                    {!success && (
                        <form onSubmit={handleOnSubmit}>
                            <VStack gap={16}>
                                <Input
                                    name="password"
                                    type="password"
                                    error={errors.password}
                                    onChange={handleOnChange}
                                    placeholder="New password"
                                />

                                <Input
                                    name="password_confirmation"
                                    type="password"
                                    error={errors.password_confirmation}
                                    onChange={handleOnChange}
                                    placeholder="Confirm password"
                                />

                                <Text size="13" align="center" variant="helper">
                                    Password must be at least 8 characters.
                                </Text>

                                <Button
                                    type="submit"
                                    color="orange"
                                    processing={processing}
                                >
                                    Submit
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

export default ResetPassword;
