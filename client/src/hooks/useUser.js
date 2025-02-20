import { useEffect, useState } from "react";
import { fetchUser } from "../api/requests";


export const useUser = (id) => {
    const [loadingUser, setLoadingUser] = useState(true);
    const [userData, setUser] = useState(null);

    const getUserData = async () => {
        try {
            const data =  await fetchUser(id);
            setUser(data);
        } catch (error) {
            console.error('Error fetching user data');
        } finally {
            setLoadingUser(false)
        };
    }

    useEffect(() => {
        getUserData()
    }, [id]);

    return {userData, loadingUser}
}