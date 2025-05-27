import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    return (
        <>
            <section id="footer mt-20 bg-gray-950">
                <div className="container px-10 py-10 md:flex justify-between items-center">
                    <div className="md:w-1/2">
                        <h2 className="font-bold text-xl">Portfolio</h2>
                        <p>A passionate Full Stack Web Developer building modern and responsive web applications with React, Tailwind CSS, and JavaScript.</p>

                    </div>
                    <div className='flex gap-3 mt-5'>
                        <a href=""> <GitHubIcon/> </a>
                        <a href=""> <LinkedInIcon/> </a>
                        <a href="">  <XIcon/> </a>
                        <a href=""><EmailIcon/></a>
                    </div>
                </div>
                <div className="container text-center py-5 md:py-1">
                    <p>© 2025 Shaik Kaleem. All Rights Reserved.</p>
                </div>
            </section>
        </>
    )
}
export default Footer;