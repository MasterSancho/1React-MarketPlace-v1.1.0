import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const ProfileScreen = () => {
 const [user, setUser] = useState(null);
 const auth = getAuth();

 useEffect(() => {
  setUser(auth.currentUser);
 }, [auth]);

 return user ? <h1>{user.displayName}</h1> : 'Not Logged In';
};

export default ProfileScreen;
