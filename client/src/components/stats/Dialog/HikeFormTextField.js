import React from 'react'
import TextField from '@material-ui/core/TextField';


//this.prop.input.label
//this.prop.input.input
//this.prop.input.meta ....
export default ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
    }) => {
    return(
        <div>
            <TextField
                label={label}
                placeholder={label}
                error={touched && invalid}
                helperText={touched && error}
                {...input}
                {...custom}
            />
        </div>

    );
}