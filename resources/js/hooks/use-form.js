/**
 * External dependencies.
 */
import { useForm as useInertiaForm } from '@inertiajs/react';

const useForm = (initialData) => {
    const { setData, clearErrors, ...rest } = useInertiaForm(initialData);

    const handleOnChange = (event) => {
        const value =
            event?.target?.type === 'checkbox'
                ? event?.target?.checked
                : event?.target?.value;

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
