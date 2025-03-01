/**
 * External dependencies.
 */
import { Paperclip } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/**
 * Internal dependencies.
 */
import Input from '@/components/input/input';
import { VStack, HStack } from '@/components/stack/stack';

const AccountAvatarUploader = ({ avatar, error, handleOnChange }) => {
    const ref = useRef();

    const [preview, setPreview] = useState(avatar);

    useEffect(() => {
        if (avatar instanceof File) {
            setPreview(URL.createObjectURL(avatar));
        }
    }, [avatar]);

    return (
        <div className="account-avatar-uploader">
            <VStack gap={8}>
                <VStack gap={8} align="center">
                    <img src={preview} alt="avatar" />

                    <button type="button" onClick={() => ref?.current.click()}>
                        <HStack gap={4} align="center">
                            <Paperclip size={16} /> Upload
                        </HStack>
                    </button>
                </VStack>

                <Input
                    ref={ref}
                    name="avatar"
                    type="file"
                    error={error}
                    hidden
                    accept="image/png, image/jpeg"
                    onChange={handleOnChange}
                />
            </VStack>
        </div>
    );
};

export default AccountAvatarUploader;
