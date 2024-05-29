import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../src/components/Layout';
import axios from 'axios';
import withAuth from '@/components/withAuth';
import { getUserDetails } from '../../api/user';

const ProfilePage: React.FC = () => {
    const router = useRouter();
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userGender, setUserGender] = useState("");
    const [userBirthdate, setUserBirthdate] = useState("");

    // Function to fetch user details
    const fetchUserDetails = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }
            // Make a request to your backend API to fetch user details
            const response = await getUserDetails(token);

            setUserEmail(response.email); 
            setUserName(response.name); 
            setUserBirthdate(response.birthdate); 
            setUserGender(response.gender); 
        } catch (error) {
            router.push("/authentication/userLogin");
            console.error('Failed to fetch user details:', error);
        }
    };

    useEffect(() => {
        fetchUserDetails(); // Fetch user details when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once

    const handleLogout = async () => {
        try {
            localStorage.removeItem('token'); // Clear the token from local storage
            router.push('/'); // Redirect to home or login page
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    return (
        <Layout>
            <div>
                <p onClick={handleLogout}>Logout</p>
                <p>{userEmail}</p>
                <p>{userName}</p>
                <p>{userBirthdate}</p>
                <p>{userGender}</p>
            </div>
        </Layout>
    );
};

export default withAuth(ProfilePage);
