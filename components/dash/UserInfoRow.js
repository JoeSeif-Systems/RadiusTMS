"use client"
import { useState, useEffect } from 'react';
import localStorage from 'local-storage';

export default function UserInfoRow() {
  const [username, setUsername] = useState();
  const [err, setErr] = useState();
  const [userinfo, setUserinfo] = useState({});

  useEffect(() => {
    setUsername(localStorage.get('user'));
    // getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const res = await fetch("/api/dash/user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "username": username })
      });

      if (res.ok) {
        const data = await res.json();
        setUserinfo(data); // Assuming data returned from the backend contains userinfo
      } else {
        setErr("Error in parsing data. Contact system admin.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErr("Error in fetching data. Contact system admin.");
    }
  }
  return (
    <div className='text-center'>
        <p>
            Wecome back { username }!
        </p>
    </div>
  )
}

function Error(){
	return(
		<p> error { err } </p>
	)
}
