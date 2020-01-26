import React, { Component } from 'react';
import { Field , reduxForm } from 'redux-form';
import {connect} from 'react-redux'; 
import _ from 'lodash';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import HikeFormTextField from './HikeFormTextField';
import Fields from './Fields';

import {submitHikeForm} from '../../../actions'

import {Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';



export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const required = value => (value || typeof value === 'number' ? undefined : 'Required')

class NewHikeForm extends Component {
    state = {
        open: false
    }
    componentDidMount(){
        console.log('all',this.props.all)
    }
    renderTextFields() {
        return _.map(Fields.FIELDS, field => {
            return <Field 
                key={field.name} 
                name={field.name} 
                type={field.type}
                component={HikeFormTextField} 
                validate={required,[minLength2]}
                label={field.label}
                //onChange()
                />
        })
    };

    onFormSubmit = (formValues) => {
        //console.log(formValues)
        this.props.submitHikeForm(formValues)// to jest jest w state ale jest do tego dostęp
    }
    render() {
    console.log(this.props)// thanks reduxForm ( na dole ) we get a tons of properties
    const { handleSubmit, pristine, reset, submitting, classes , submitHikeForm} = this.props
    const handleClickOpen = () => {
            this.setState({open: true})
    };
        
    const handleClose = () => {
            this.setState({open: false});
    };
    
    
    
        return (
            <div>
                <Button variant="text" color="secondary" onClick={handleClickOpen}>
                    <AddCircleOutlineIcon/>
                </Button>
                <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                            New Hike
                    </DialogTitle>
                    <form 
                        onSubmit={handleSubmit(this.onFormSubmit)}
                    > 
                        <DialogContent>
                            {/*

                            onSubmit={onFormSubmit}
                            <form onSubmit={() => submitHikeForm()}> 
                            <form onSubmit={this.props.handleSubmit( value => console.log(value))}> 
                                this.props.handleSubmit comes from reduxForm
                                jeśli klikniemy w tak skonstruowanego forma to tylko nam wyświetli wartości z 
                                form ale nie zapisze ich do form w state  Zeby zapisało musimy wywołać actions
                            */}
                            
                        {this.renderTextFields()}
                            
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button variant="contained" disabled={pristine || submitting} type="submit" color="secondary">
                                ADD
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }
}
function validatefn(values){
    const errors={};
    _.each(Fields.FIELDS, ({label}) => {
        if(label === "Comment"){
            // komentarz is not required
        }
        else if(!values[label]){
            errors[label] = 'Enter the value'
        }
    })
    return errors;
}

const HikeForm = reduxForm({
    validate: validatefn,
    form: 'newHikeForm'
})(NewHikeForm);

export default connect(
    null,
    {submitHikeForm}
)(HikeForm);

