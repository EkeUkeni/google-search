import {useState} from 'react'
import { People } from './People'


const UserProfiles = () => {

    const [userProfile, setUserProfile] = useState(" ")
    

    const handleChange = (event)=>{
        const userName = event.target.value
        setUserProfile(userName)
    }

    // const filteredProfiles =People.filter((person)=> person.firstName.toLowerCase().includes(userProfile.toLowerCase()))

    const filteredProfiles = People.filter((person)=>{
        const fullName = `${person.firstName} ${person.lastName}`;
        return fullName.toLowerCase().includes(userProfile.toLowerCase());
        
    });
    
  return (
    <div className='container'>
        <div className='userprofile'>
            <input className='filter' type='text' placeholder='Search by name...' value={userProfile} onChange={handleChange}/>
            <ul className='userdetails'>
                {filteredProfiles.map((users) => {
                    return(<li className='userlists' key={users.id}>
                        
                        <div className='usertitle'>
                                <div><img className='picture' src={users.picture} alt='icon'/></div>
                                <div>
                                    <p> {users.id}</p>
                                    <span className='useridentity'> {users.title}</span>
                                    <span className='useridentity'> {users.firstName}</span>
                                    <span className='useridentity'> {users.lastName}</span>
                                </div>
                            </div>
                    </li>)
                })}
            </ul>
        </div>
    </div>
  )
}

export default UserProfiles