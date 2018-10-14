import React from 'react'
import { Field } from 'redux-form'

import './styles/util.css'

export const FormInputs = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div className='formfield-container'>
            <p className='formfield-label'>{label}</p>
            <div>
            <input className='formfield-input' {...input} type={type} placeholder={label}/>
            </div>
        </div>
    )
}

export const FormArrays = ({ fields, label, meta: {touched} }) => {
    return (
        <div>
            <label>{label}</label>
            <ul>
            {fields.map((item, i) => (
                <div>
                    <li key={i}>
                    <Field name={item} type='text' component='input'/>
                </li>
                <div>
                    <button onClick={e => {
                        e.preventDefault()
                        fields.remove(i)
                    }}>Remove</button>
                </div>
                </div>
            ))}
            </ul>
            <button onClick={e => {
                e.preventDefault()
                fields.push()
            }}>Add More</button>
        </div>
    )
}