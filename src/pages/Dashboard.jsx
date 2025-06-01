import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";

const Dashboard = () => {
    const [data, setData] = useState();
    const handleLogOut = async () => {
        try {
            await signOut(auth);
            alert("Logged Out successfully");
            Navigate('/login')
        }
        catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'users'));
                console.log(querySnapshot);

                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(data)
                console.log(data);
            } catch (error) {
                console.error("Error fetching users:", error.message);
            }

        }
        fetchData();

    }, [])
    return (
        <>
            <div className="flex justify-between my-1">
                <h1>This is dashboard page</h1>
                <div>
                    <button className="bg-red-700 px-2 py-1 radius" onClick={handleLogOut}>Logout</button>
                </div>
            </div>

            <div className="px-10 mx-auto border">
                <h2>Contact Form Submissions</h2>
                <ul>
                    {data && data.map((msg) => (
                        <li key={msg.id} className="my-2">
                            <strong>{msg.name}</strong> ({msg.email})<br />
                            <em>{msg.subject}</em><br />
                            {msg.message}
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>



        </>
    )
}
export default Dashboard;