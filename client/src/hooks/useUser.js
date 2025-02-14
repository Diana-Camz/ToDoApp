import { useEffect, useState } from "react";
import exampleUsers from '../data/exampleUsers'


export const useUser = (id) => {
    const [loadingUser, setLoadingUser] = useState(true);
    const [user, setUser] = useState(null);

    const getUserData = () => {
        try {
            const data =  exampleUsers.find(user => user.id === String(id));
            if( data ) {
                setUser(data)
            } else {
                console.error(`User with ID ${id} not found`)
            }
        } catch (error) {
            console.error('Error fetching user data');
        } finally {
            setLoadingUser(false)
        };
    }

    useEffect(() => {
        getUserData()
    }, [id]);

    return {user, loadingUser}
}