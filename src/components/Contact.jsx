import { useForm } from "react-hook-form";
import { db } from '../firebase/firebaseConfig'; // adjust path as needed
import { collection, addDoc, setDoc, updateDoc, arrayUnion, doc } from 'firebase/firestore';

const Contact = () => {

    const { register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        saveUser(data);


    }
    const saveUser = async (data) => {
        try {

            await addDoc(collection(db, "users"), {
                ...data,
                createdAt: new Date()
            })

            // console.log("Document written with ID: ", docRef.id);
            alert("Your response has securely sent!");
            reset();
        }
        catch (err) {
            console.error("Error adding document: ", err);
        }
    }
    return (
        <>
            <section className="py-10 pt-15 px-5 bg-gray-900 text-white bg-gray-800" id='contact'>
                <h2 className="text-3xl text-center font-bold text-gray-200 tracking-wide">Get in Touch</h2>
                <div className="w-20 border-blue-600 border-b-4 mx-auto mt-2"></div>
                <p className="text-gray-500 text-sm md:w-[60%] mx-auto text-center my-5">Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                <div className="grid lg:grid-cols-3 gap-8 mt-10">
                    <div className="lg:col-span-1" style={{ opacity: 1 }}>
                        <div className="bg-white dark:bg-gray-900 p-2 md:p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                            className="w-10 h-10 text-gray-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z">
                                            </path>
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">
                                            Email
                                        </h4>
                                        <a href="mailto:abdulkaleem254@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                            abdulkaleem254@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                            className="w-10 h-10 text-gray-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z">
                                            </path>
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">
                                            Phone
                                        </h4>
                                        <a href="tel:+918006869258" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                            +91 8106268423
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                            className="w-10 h-10 text-gray-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z">
                                            </path>
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">
                                            Location
                                        </h4>
                                        <a href="https://maps.google.com/?q=AP+India" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                            AP, India
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">
                                    Follow Me
                                </h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512"
                                            className="w-5 h-5 text-gray-900 dark:text-white" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                            </path>
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                            className="w-5 h-5 text-gray-900 dark:text-white" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                            </path>
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/kaleem254/" target="_blank" className="bg-gray-100 dark:bg-gray-900/30 p-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                            className="w-5 h-5 text-gray-900 dark:text-white" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form name="contact" className="lg:col-span-2 bg-white dark:bg-gray-900 p-2 md:p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                        style={{ opacity: 1 }} onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" value="contact" name="form-name" />
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                                    Name
                                </label>
                                <input placeholder="Enter your name" required="" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    type="text" name="name" {...register("name", { required: true })} />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input placeholder="Enter your email" required="" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    type="email" name="email" {...register("Email", { required: true })} />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                                Subject
                            </label>
                            <input placeholder="Enter subject" required="" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                                type="text" name="subject" {...register("subject")} />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                                Message
                            </label>
                            <textarea name="message" placeholder="Write your message here..." rows="6"
                                required="" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                                spellCheck="false" {...register("message")}>
                            </textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
                            Send Message
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <line x1="22" y1="2" x2="11" y2="13">
                                </line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2">
                                </polygon>
                            </svg>
                        </button>
                    </form>
                </div>            </section>
        </>
    )
}
export default Contact;