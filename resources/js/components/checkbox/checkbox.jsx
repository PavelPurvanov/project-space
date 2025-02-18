/**
 * External dependencies.
 */
import { Check } from 'lucide-react';
import { useState } from 'react';

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

            <span>{label}</span>
        </label>
    );
};

export default Checkbox;
