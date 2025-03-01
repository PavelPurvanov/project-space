/**
 * External dependencies.
 */
import { useForm as useInertiaForm } from '@inertiajs/react';

const useForm = (initialData) => {
    const { setData, clearErrors, ...rest } = useInertiaForm(initialData);

    const handleOnChange = (event) => {
        let value = event?.target?.value;

        if (event?.target?.type === 'checkbox') {
            value = event?.target?.checked;
        }

        if (event?.target?.type === 'file') {
            value = event?.target?.files[0];
        }

        setData((prev) => ({
            ...prev,
            [event?.target?.name]: value,
        }));

        clearErrors(event?.target?.name);
    };

    return {
        setData,
        clearErrors,
        handleOnChange,
        ...rest,
    };
};

export default useForm;
