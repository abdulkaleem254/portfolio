import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import logo from "../assets/logo.png"

const Dashboard = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
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
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error.message);
            }

        }
        fetchData();

    }, [])
    return (
        <>
            <div className="px-2 fixed flex justify-between w-full align-center bg-gray-950">
                <h1><img src={logo} alt="logo" className="w-full h-20" /></h1>
                <div className="flex items-center">
                    <button className="bg-red-700 px-2 py-1 rounded" onClick={handleLogOut}>Logout</button>
                </div>
            </div>

            <div className="px-10 mx-auto pt-25">
                <h2 className="font-semibold text-xl">Contact Form Submissions</h2>
                {loading && <p className="flex h-full items-center font-semibold">Loading...</p>}
                {!loading && <ul>
                    {data && data.map((msg) => (
                        <li key={msg.id} className="my-2 py-1">
                            <strong>Name: </strong>{msg.name}<br />
                            <strong>Email : </strong>{msg.Email} <br />
                            <em><strong>Subject : </strong>{msg.subject}</em><br />
                            <strong >Message : </strong>{msg.message}

                            <hr className="mt-2" />
                        </li>
                    ))}
                </ul>}
            </div>



        </>
    )
}
export default Dashboard;