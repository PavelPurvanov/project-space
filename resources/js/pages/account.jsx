/**
 * External dependencies.
 */
import { Link } from '@inertiajs/react';
import { UserPen } from 'lucide-react';

/**
 * Internal dependencies.
 */
import Text from '@/components/text/text';
import Input from '@/components/input/input';
import Button from '@/components/button/button';
import Layout from '@/components/layout/layout';
import useForm from '@/hooks/use-form';
import { VStack, HStack } from '@/components/stack/stack';
import AccountAvatarUploader from '@/blocks/account/account-avatar-uploader';

const Account = ({ authUser }) => {
    const { post, data, reset, errors, processing, handleOnChange } = useForm({
        name: authUser.name,
        email: authUser.email,
        avatar: authUser.avatar,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(`/account/update`, {
            onSuccess: () => {
                alert('Account info updated.');
                reset();
            },
        });
    };

    return (
        <Layout>
            <form onSubmit={handleOnSubmit}>
                <VStack gap={24} align="center">
                    <Text as="h2" size="24" align="center">
                        <HStack gap={8} align="center" justify="center">
                            Account Settings
                            <UserPen size={32} />
                        </HStack>
                    </Text>

                    <div className="form">
                        <VStack gap={24}>
                            <AccountAvatarUploader
                                error={errors.avatar}
                                avatar={data.avatar}
                                handleOnChange={handleOnChange}
                            />

                            <Input
                                name="name"
                                value={data.name}
                                error={errors.name}
                                onChange={handleOnChange}
                                placeholder="Name"
                            />

                            <Input
                                name="email"
                                type="email"
                                value={data.email}
                                error={errors.email}
                                onChange={handleOnChange}
                                placeholder="Email"
                            />

                            <HStack gap={40}>
                                <Link
                                    href="/projects"
                                    className="button button--red"
                                >
                                    Cancel
                                </Link>

                                <Button
                                    type="submit"
                                    color="blue"
                                    disabled={processing}
                                >
                                    Save
                                </Button>
                            </HStack>
                        </VStack>
                    </div>
                </VStack>
            </form>
        </Layout>
    );
};

export default Account;
