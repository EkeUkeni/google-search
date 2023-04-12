import {useState} from 'react'

const People = [
    {
        "id": "60d0fe4f5311236168a109f5",
        "title": "ms",
        "firstName": "Charlotte",
        "lastName": "Legrand",
        "picture": "https://randomuser.me/api/portraits/med/women/77.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109f6",
        "title": "miss",
        "firstName": "Madison",
        "lastName": "Ambrose",
        "picture": "https://randomuser.me/api/portraits/med/women/15.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109fa",
        "title": "ms",
        "firstName": "Ann",
        "lastName": "Mason",
        "picture": "https://randomuser.me/api/portraits/med/women/18.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109fb",
        "title": "mr",
        "firstName": "Sohan",
        "lastName": "Pierre",
        "picture": "https://randomuser.me/api/portraits/med/men/77.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109fc",
        "title": "mr",
        "firstName": "Gonzaga",
        "lastName": "Ribeiro",
        "picture": "https://randomuser.me/api/portraits/med/men/10.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109ff",
        "title": "mrs",
        "firstName": "Josefina",
        "lastName": "Calvo",
        "picture": "https://randomuser.me/api/portraits/med/women/3.jpg"
    },
    {
        "id": "60d0fe4f5311236168a10a00",
        "title": "mrs",
        "firstName": "Els",
        "lastName": "Ijsseldijk",
        "picture": "https://randomuser.me/api/portraits/med/women/75.jpg"
    },
    {
        "id": "60d0fe4f5311236168a10a01",
        "title": "mr",
        "firstName": "Jesus",
        "lastName": "Riley",
        "picture": "https://randomuser.me/api/portraits/med/men/45.jpg"
    },
    {
        "id": "60d0fe4f5311236168a10a03",
        "title": "mr",
        "firstName": "Andri",
        "lastName": "Leclerc",
        "picture": "https://randomuser.me/api/portraits/med/men/57.jpg"
    },
    {
        "id": "60d0fe4f5311236168a10a04",
        "title": "mr",
        "firstName": "Konsta",
        "lastName": "Manninen",
        "picture": "https://randomuser.me/api/portraits/med/men/24.jpg"
    }
]

const UserProfiles = () => {

    const [userProfile, setUserProfile] = useState(" ")
    //const [filteredProfile, setFilteredProfile] = useState(" ")


    const handleChange = (event)=>{
        const userName = event.target.value
        setUserProfile(userName)
    }
  return (
    <div className='container'>
        <input className='filter' type='text' placeholder='Search by name...' value={userProfile} onChange={handleChange}/>
        <p>{userProfile}</p>
        <div className='userprofile'>
            <ul className='userdetails'>
                {People.map((profile)=> {
                    const {id, title, firstName, lastName, picture} = profile;
                    return <li className='userlists' key={id}>
                        <div className='usertitle'>
                            <div><img src={picture}/></div>
                            <div>
                                <p> {id}</p>
                                <span> {title}</span>
                                <span> {firstName}</span>
                                <span> {lastName}</span>
                            </div>
                        </div>

                    </li>
                })}
            </ul>
        </div>
        
        
    </div>
  )
}

export default UserProfiles