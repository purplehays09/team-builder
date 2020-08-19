import React from 'react'



export default function Form(props){
  const { values, update, submit } = props


  const onChange = evt => {

    const {name,value} = evt.target
    update(name,value)
  }

  const onSubmit = evt => {
    
    evt.preventDefault()

    submit()
  }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Mate</h2>
                <button disabled={ !values.username || !values.email || !values.role? true: false}>submit</button>
            </div>

            <div className='form-group inputs'>


                <label> User Name
                    <input 
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    placeholder='type username'
                    maxLength='20'
                    type="text"
                    />
                </label>

                <label> Email
                    <input 
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    placeholder='type email'
                    maxLength='30'
                    type="email"
                    />
                </label>
            
                <label> Role
                    <select 
                    value={values.role}
                    onChange={onChange}
                    name='role'
                    >
                    <option value=''>Select A Role</option>
                    <option value='warrior'>Warrior</option>
                    <option value='goliath'>Goliath</option>
                    <option value='ranger'>Ranger</option>
                    <option value='rogue'>Rogue</option>
                    <option value='druid'>Druid</option>
                    <option value='sorcerer'>Sorcerer</option>
                    <option value='arcanist'>Arcanist</option>
                    </select>
                </label>
            </div>

        </form>

    )
}