import React from 'react'


const ProfileItem = ({ firstName, lastName, id, picture, title }) => {

    return (
        <li className='userlists'>
            <div className='usertitle'>
                <div><img className='picture' src={picture} alt='icon' /></div>
                <div>
                    <p>{id}</p>
                    <span className='useridentity'>{title}</span>
                    <span className='useridentity'> {firstName}</span>
                    <span className='useridentity'> {lastName}</span>
                </div>
            </div>
        </li>
    )
}

const ProfileList = ({ profiles }) => {

    return (
        <ul className='userdetails'>
            {profiles.map((profile) => {
                return (
                    <ProfileItem key={profile.id} {...profile} />
                )
            })}
        </ul>
    )
}

export default ProfileList