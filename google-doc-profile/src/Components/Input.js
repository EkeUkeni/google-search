import React from 'react'

const Input = (props) => {

    return (
        <input
            className='filter'
            type='text'
            placeholder='Search by name...'
            value={props.inputValue}
            onChange={props.onEntryChange}
        />
    )
}

export default Input