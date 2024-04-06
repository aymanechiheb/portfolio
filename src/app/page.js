"use client";
import Head from 'next/head';
import { MdDarkMode } from "react-icons/md";
import { AiFillLinkedin ,AiFillGithub  } from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { RiAngularjsLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs";
import { MdOutlineHtml } from "react-icons/md";
import { FaNode } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandMongodb } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { DiJava } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { DiIonic } from "react-icons/di";
import Image from 'next/image';
import aymane from '/public/aymane.png'
import backend from'/public/backend.png' 
import front from '/public/front.png'
import mobile from '/public/mobile.png'
import database from'/public/database.png'
import bird from'/public/bird.png'
import ajitharek from '/public/ajitharek.jpg'
import { useState } from 'react';
import { CiTimer } from "react-icons/ci";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone ,faEnvelope} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const[darkMode,setdarkMode]=useState(false);
  
  const handleDownloadCV = () => {
    // Specify the URL of the PDF file
    const cvUrl = '/CV_2024-04-04_Aymane_chiheb.pdf'; 
    
    // Create an anchor element
    const anchor = document.createElement('a');
    
    // Set the href attribute to the PDF file URL
    anchor.href = cvUrl;
    
    // Set the download attribute to force download
    anchor.setAttribute('download', 'CV_2024-04-04_Aymane_chiheb.pdf');
    
    // Append the anchor element to the document body
    document.body.appendChild(anchor);
    
    // Simulate a click event on the anchor element to trigger the download
    anchor.click();
    
    // Remove the anchor element from the document body after the download
    document.body.removeChild(anchor);
};

  return (
<div className={darkMode ? "dark" : ""}>
      <Head>
        <title>aymane chiheb</title>
        </Head>
      <main className='bg-white px-10 md-:px-20 lg:px-40 dark:bg-gray-900'>
      <nav className='py-10 mb-12 flex justify-between items-center'>
      <h1 className='text-xl text-gray-700 hover:text-teal-600 px-4 py-2 dark:text-white dark:hover:text-teal-600'>aymane</h1>
      <ul className='flex items-center mx-auto '>
        <li><a href="#about-me" className="text-gray-700 hover:text-teal-600 px-4 py-2 dark:text-white dark:hover:text-teal-600 ">About Me</a></li>
        <li><a href="#skills" className="text-gray-700 hover:text-teal-600 px-4 py-2 dark:text-white dark:hover:text-teal-600 ">Skills</a></li>
        <li><a href="#Projects" className="text-gray-700 hover:text-teal-600 px-4 py-2 dark:text-white dark:hover:text-teal-600 ">Projects</a></li>
        <li><a href="#contact-me" className="text-gray-700 hover:text-teal-600 px-4 py-2 dark:text-white dark:hover:text-teal-600 ">Contact Me</a></li>
      </ul>
      <MdDarkMode onClick={() => setdarkMode(!darkMode)} className='cursor-pointer text-2xl ml-4' />
      <div>
       
        <button className='bg-red-700 text-white px-4 py-2 rounded-md ml-4' onClick={handleDownloadCV}>Download CV</button>
      </div>
    </nav>
          <section id="about-me" className="bg-white py-16  dark:bg-gray-900">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <div className="relative mx-auto bg-gradient-to-b from-teal-400 rounded-full w-64 h-64 overflow-hidden">
        <Image src={aymane} alt="Aymane Chiheb" layout="fill" objectFit="cover" />
      </div>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     <h2 className="text-4xl text-teal-600 font-bold mb-2 animate-fade-in">Aymane Chiheb</h2>
<h3 className="text-2xl text-gray-800 font-semibold mb-4 dark:text-white animate-fade-in">Full Stack Developer</h3>

      <p class="mb-8 leading-relaxed">Student in computer engineering in the fourth year, specialized in web and mobile development, and passionate about creating innovative applications.</p>
      <div className="flex justify-center space-x-6 mb-8">
        <a href="https://www.linkedin.com/in/aymanechiheb/" className="text-gray-600 hover:text-blue-800 transition duration-300 dark:text-white">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a href="https://github.com/aymanechiheb" className="text-gray-600 hover:text-black transition duration-300 dark:text-white">
          <AiFillGithub className="w-8 h-8" />
        </a>
      </div>
    </div>
  </div>
</section>
<section id="skills">
<div>

    <h4 className=' py-1 flex justify-center text-2xl text-gray-800 font-semibold mb-4   dark:text-white'>skills</h4>
    <br></br>
    <br></br>

  </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Front-end Development Card */}
  <div className="text-center shadow-lg p-10 rounded-xl my-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  dark:hover:bg-indigo-600 dark:hover:text-white">
    <div className="mb-8">
      <Image src={front} className="mx-auto" width={120} height={120} />
      <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white ">Front-end Development</h3>
      <p className="py-2  dark:text-white">
        Creating front-end interfaces suited for your needs
      </p>
    </div>
    <div className='flex flex-col justify-center items-center'>
        <h4 className="py-4 text-teal-600">Front-end tools I use</h4>
        <ul className="text-gray-600 text  dark:text-white ">
          <li className="py-2 flex items-center"><MdOutlineHtml /><span className="ml-2">HTML5,CSS3</span></li>
          <li className="py-2 flex items-center"><BsBootstrap /><span className="ml-2">Bootstrap</span></li>
          <li className="py-2 flex items-center"><BiLogoTailwindCss /><span className="ml-2">Tailwind CSS</span></li>
          <li className="py-2 flex items-center"><RiJavascriptLine /><span className="ml-2">JavaScript</span></li>
          <li className="py-2 flex items-center"><TbBrandTypescript /><span className="ml-2">TypeScript</span></li>
          <li className="py-2 flex items-center"><FaReact /><span className="ml-2">ReactJS</span></li>
          <li className="py-2 flex items-center"><RiAngularjsLine /><span className="ml-2">Angular</span></li>
        </ul>
      </div>
  </div>

  {/* Back-end Development Card */}
  <div className="text-center shadow-lg p-10 rounded-xl my-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  dark:hover:bg-indigo-600 dark:hover:text-white">
      <div className="mb-8">
        <Image src={backend} className="mx-auto" width={120} height={120} />
        <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Back-end Development</h3>
        <p className="py-2 dark:text-white">
          Creating back-end solutions to support your applications
        </p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h4 className="py-4 text-teal-600">Back-end tools I use</h4>
        <ul className="text-gray-600 dark:text-white">
          <li className="py-2 flex items-center"><SiLaravel /><span className="ml-2"> Laravel</span></li>
          <li className="py-2 flex items-center"><FaNode />  <span className="ml-2"> Node.js, Express</span></li>
          <li className="py-2 flex items-center"><SiDotnet /><span className="ml-2">   asp.net</span></li>
          <li className="py-2 flex items-center"><DiPostgresql /><span className="ml-2">    PostgreSQL</span></li>
          <li className="py-2 flex items-center"><SiMysql /> <span className="ml-2">   MySQL</span></li>
          <li className="py-2 flex items-center"><SiMicrosoftsqlserver /><span className="ml-2">SQL Server</span></li>
          <li className="py-2 flex items-center"><TbBrandMongodb /><span className="ml-2"> MongoDB</span></li>
        </ul>
      </div>

  </div>

  {/* Programming Languages Card */}
  <div className="text-center shadow-lg p-10 rounded-xl my-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  dark:hover:bg-indigo-600 dark:hover:text-white">
  <div className="mb-8">
    <Image src={database} className="mx-auto" width={120} height={120} />
    <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">Programming Languages</h3>
    <p className="py-2  dark:text-white">
      Proficient in various programming languages
    </p>
  </div>
  <div className="flex flex-col justify-center items-center"> {/* Add flex utilities */}
    <h4 className="py-4 text-teal-600">Languages I use</h4>
    <ul className="text-gray-600  dark:text-white">
      <li className="py-2 flex items-center"><TbBrandCSharp  /><span className="ml-2"> C#</span></li>
      <li className="py-2 flex items-center"><DiJava  /><span className="ml-2"> Java</span></li>
      <li className="py-2 flex items-center"><FaPhp  /> <span className="ml-2">PHP</span></li>
      <li className="py-2 flex items-center"><TbBrandPython  /><span className="ml-2"> Python</span></li>
    </ul>
  </div>
</div>


  {/* Mobile Development Card */}
  <div className=" text-center shadow-lg p-10 rounded-xl my-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110   dark:hover:bg-indigo-600 dark:hover:text-white">
    <div className="mb-8">
      <Image src={mobile} className="mx-auto" width={120} height={120} />
      <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">Mobile Development</h3>
      <p className="py-2  dark:text-white">
        Building mobile applications with cross-platform frameworks
      </p>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <h4 className="py-4 text-teal-600">Mobile frameworks I use</h4>
      <ul className="text-gray-600  dark:text-white">
        <li className="py-2 flex items-center"><DiIonic /> <span className="ml-2">Ionic</span></li>
      </ul>
    </div>
  </div>
</div>
</section>
<section id='Projects'>
  <div>
  <br></br>
    <br></br>
    <h4 className='py-1 flex justify-center text-2xl text-gray-800 font-semibold mb-4   dark:text-white'>Projects</h4>
    <br></br>
    <br></br>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Project 1 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden dark:bg-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110   dark:hover:bg-indigo-600 dark:hover:text-white">
      <div className="relative h-64">
        <Image src={bird} layout="fill" objectFit="cover" alt="Project 1" />
      </div>
      <div className="p-6">
      <h4 className="text-xl font-medium mb-2 dark:text-white">Bird Store</h4>
<p className="text-gray-600 mb-4 dark:text-white">
  The Bird Store is an exciting online platform dedicated to providing a diverse range of avian companions to bird enthusiasts worldwide. Our store offers a wide selection of birds, ranging from colorful parrots to melodious canaries and everything in between.
  <br /><br />
  At the Bird Store, we prioritize the well-being and happiness of our feathered friends. Each bird in our store is ethically sourced and raised in a nurturing environment. We work closely with trusted breeders and aviaries to ensure that our birds are healthy, well-socialized, and ready to become cherished members of their new families.
  
  
</p>

<button className="bg-teal-500 text-white py-2 px-4 rounded-md transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
  <a href="https://github.com/aymanechiheb/birdshop-laravel" target="_blank" rel="noopener noreferrer">
    GitHub Repository
  </a>
</button>

      </div>
   </div> 
   {/* Project 2 */}
   <div className="bg-white shadow-lg rounded-xl overflow-hidden dark:bg-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  dark:hover:bg-indigo-600 dark:hover:text-white">
      <div className="relative h-64">
        <Image src={ajitharek} layout="fill" objectFit="cover" alt="Project 1" />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-medium mb-2 dark:text-white">ajitharek</h4>
        <p className="text-gray-600 mb-4 dark:text-white">
    ajitharek is a dynamic platform designed to connect sports enthusiasts and gamers who share a passion for playing their favorite games in real life, whether it's football, basketball, or any other sport. 
    <br /><br />

    
    Whether you're a seasoned athlete or just looking to enjoy some recreational sports with friends, ajitharek offers a vibrant community where you can connect, compete, and forge lasting friendships through the thrill of sports.
  </p>        <button className="flex items-center justify-between bg-teal-500 text-white py-2 px-4 rounded-md transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
  <CiTimer /> {/* Assuming CiTimer is an icon component */}
  <span>Soon in Play Store...</span>
</button>

</div>
   </div>    
   </div> 
</section>
{/* contact me section */}
<section id='contact-me' >
 <div>
  <br></br>
  <br></br>
  <br></br>

  <h4 className='py-1 flex justify-center text-2xl text-gray-800 font-semibold mb-4 dark:text-white'>Contact me</h4>
  <br></br>
  <br></br>
  <br></br>
</div>
<div className="flex grid-cols-1  justify-center sm:grid-cols-3 gap-14"> {/* Adjusted grid classes */}
  {/* Card 1 */}
  <div className="bg-white shadow-lg rounded-xl overflow-hidden dark:bg-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 dark:hover:bg-indigo-600 dark:hover:text-white">
    <div className="relative h-48">
      <div className="p-24 flex justify-center">
        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "5rem", color: "#055fa3" }} className="mr-4" /> {/* Larger icon */}
      </div>
    </div>
    <div className="p-6 flex justify-center items-center">
      <div>
        <h4 className="text-xl  font-medium mb-2 dark:text-white">Aymane Chiheb</h4> {/* Name */}
      </div>
      {/* Additional content for Card */}
    </div>
  </div>


    {/* Card 2 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden dark:bg-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 dark:hover:bg-indigo-600 dark:hover:text-white">
      <div className="relative h-48">
      <div className="p-24 flex justify-center">
      <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "5rem",color: "#63E6BE"}} />      </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl flex justify-center font-medium mb-2 dark:text-white">ch.aymane19@gmail.com</h4>

        {/* Additional content for Card 2 */}
      </div>
    </div> 
    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden dark:bg-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 dark:hover:bg-indigo-600 dark:hover:text-white">
      <div className="relative h-48">
      <div className="p-24 flex justify-center">
      <FontAwesomeIcon icon={faPhone} style={{ fontSize: "5rem",color: "#63E6BE"}} />      </div>
      
      </div>
      <div className="p-6">
        <h4 className=" flex justify-center text-xl font-medium mb-2 dark:text-white">+212700229322</h4>

        {/* Additional content for Card 3 */}
      </div>
    </div>    
  </div>
  <br></br>
</section>


      </main>
    </div>
  );
}
