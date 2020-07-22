import React, {useState} from 'react';

const Form = (props) => {

    const [formValue, setFormValues] = useState(
    {
        name: '',
        email: '',
        role: ''
    })
    const onChange = (e) => {
        console.log(e.target.name, e.target.value)
        setFormValues({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
    return(
        <form className = 'form-container' onSubmit  = {event => {
            event.preventDefault()
            props.newMember(formValue)
            setFormValues({
                name: '',
                email: '',
                role: ''
            })

        }}>
            <h2>Add a New Team Member</h2>
            <div className = 'form-inputs'>

                <label htmlFor='nameInput'>Name:&nbsp;
                <input
                    id='nameInput'
                    type = 'text'
                    placeholder = 'Type Name Here'
                    maxLength  = '30'
                    name = 'name'
                    value = {formValue.name}
                    onChange = {onChange}
                    />   
                </label>
                <br />

                <label htmlFor='emailInput'>Email:&nbsp;
                <input
                    id='emailInput'
                    type = 'email'
                    placeholder = 'Type email Here'
                    maxLength  = '30'
                    name = 'email'
                    value = {formValue.email}
                    onChange = {onChange}
                    />   
                </label>
                <br />

                <label htmlFor='role'>Role:&nbsp;
                <select id='role' name='role' value={formValue.role} onChange={onChange}>
                    <option disabled value=''>Select a role</option>
                    <option value='Full Stack Developer'>Full Stack Developer</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='UX Designer'>UX Designer</option>
                    <option value='Data Scientist'>Data Scientist</option>
                </select>
                </label>


            </div>
            <div className = 'form-submit'>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form;