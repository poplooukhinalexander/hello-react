import React from 'react';

const MySelect = ({options, defaultText, value, onChange}) => {
    return(
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option disabled value="">{defaultText}</option>        
            {
                options.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>)
            }
        </select>
    );
}

export default MySelect;