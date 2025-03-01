/**
 * External dependencies.
 */
import { MailQuestion } from 'lucide-react';

/**
 * Internal dependencies.
 */
import Text from '@/components/text/text';
import Button from '@/components/button/button';
import Layout from '@/components/layout/layout';
import useForm from '@/hooks/use-form';
import Stack, { HStack } from '@/components/stack/stack';

const VerifyEmail = ({ authUser }) => {
    const { processing, post } = useForm();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        post('/email/verify/resend', {
            onSuccess: () => alert('Email verification link was resent'),
            onError: () => alert('Something went wrong.'),
        });
    };

    return (
        <Layout guest>
            <Stack gap={40} variant="bordered" direction="column">
                <Text as="h2" size="30" align="center">
                    <HStack gap={8} align="center" justify="center">
                        Verify your email address
                        <MailQuestion size={32} />
                    </HStack>
                </Text>

                <Text size="13" align="center">
                    We have sent you a verification link to {authUser.email}
                </Text>

                <form onSubmit={handleOnSubmit}>
                    <Button
                        type="submit"
                        color="orange"
                        modifier="medium"
                        processing={processing}
                    >
                        Resend email
                    </Button>
                </form>
            </Stack>
        </Layout>
    );
};

export default VerifyEmail;
