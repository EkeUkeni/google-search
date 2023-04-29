import { useState } from 'react'
import { People } from './People'
import Input from './Input'
import ProfileList from './ProfileList'


const UserProfiles = () => {

    const [entry, setEntry] = useState("")


    const handleChange = (event) => {
        const userName = event.target.value
        setEntry(userName)
    }

    const filteredProfiles = People.filter((person) => {
        const fullName = `${person.firstName} ${person.lastName}`;
        return fullName.toLowerCase().includes(entry.toLowerCase());

    });


    return (
        <div className='container'>
            <div className='userprofile'>

                <Input
                    inputValue={entry} // going inside input
                    onEntryChange={handleChange} // coming out of the input
                />

                <ProfileList profiles={filteredProfiles} />
            </div>
        </div>
    )
}

export default UserProfiles