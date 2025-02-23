/**
 * External dependencies.
 */
import { Check } from 'lucide-react';
import { useState } from 'react';

/**
 * Internal dependencies.
 */
import Text from '@/components/text/text';

const Checkbox = ({ label, onChange, ...rest }) => {
    const [checked, setChecked] = useState(false);

    return (
        <label className="checkbox">
            <input
                type="checkbox"
                onChange={(e) => {
                    setChecked(!checked);
                    onChange(e);
                }}
                {...rest}
            />

            <div className="checkbox__visual">
                {checked && <Check size={16} />}
            </div>

            <Text size="14">{label}</Text>
        </label>
    );
};

export default Checkbox;
