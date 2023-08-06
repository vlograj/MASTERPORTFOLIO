import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import light from '../../public/light.png'
import dark from '../../public/dark.png'
import Create from '../../public/Create.png'
import update from '../../public/update.png'
import bill from '../../public/bill.png'
import profile from '../../public/profile.jpg'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[darkmode,setdarkmode]=useState(false);
  return (
    <div className={darkmode ? 'dark' : ''}>
      <Head>
        <title>RAJKUMAR PORTFOLIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-black dark:text-white">
     <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-between '>
        <h1 className='text-xl font-Burtons md:text-2xl lg:text-3xl'>RAJKUMAR</h1>
        <ul className='flex justify-between gap-8'>
          <li><BsFillMoonStarsFill onClick={()=> setdarkmode(!darkmode)} className='text-2xl cursor-pointer'/></li>
          <li className='cursor-pointer bg-teal-500 md:px-4 md:py-2 md:ml-8 dark:text-white rounded-md'>Resume</li>
        </ul>
      </nav>
      <div className='text-center p-10'>
             <h2 className='text-5xl py-3 text-teal-600 font-extrabold'>N.D.RAJKUMAR</h2>
             <h3 className='text-2xl py-3 font-black'>Software Developer</h3>
             <p className='text-md py-3 font-medium leading-8'>Fresher having a better knowledge in Software Development and having a experience in done some projects using <span className='text-blue-400 font-bold'>REACT.JS </span>, <span className='text-purple-900 font-bold'>DOTNET</span> and <span className='text-green-800 font-bold'>SQL</span> . To obtain a challenging position to enhance and utilize my skills and experiences, which will also provide me
with the opportunity for growth and development. </p>
      </div>
      <div className='text-5xl flex justify-center gap-28 '>
        <AiFillLinkedin className='text-blue-900'/>
        <AiFillTwitterCircle className='text-blue-500'/>
        <AiFillYoutube  className='text-red-600'/>
      </div>
      <div className='w-44 h-40 py-5 md:w-60 md:h-44 md:py-4'>
        <Image className=' mx-24 md:mx-96'src={profile} />
      </div>
     </section>
     <section className='my-44'>
      <div>
      <h3 className='text-3xl px-5 py-2 font-bold'>EDUCATION QUALIFICATION </h3>
      <p className='text-md px-5 leading-8'> Completed <span className='text-teal-600 font-bold'> B.E Computer Science</span>  in Sathyabama university Passed out in 2022 with <span className='text-teal-600 font-bold'>7.16 CGPA.</span> </p>
      <p className='text-md px-5 leading-8'>Completed <span className='text-teal-600 font-bold'>HSC</span> in Zion Matriculation Higher Secondary school passed out in 2018 with <span className='text-teal-600 font-bold'>79.9%</span> </p>
      <p className='text-md px-5 leading-8'>Completed <span className='text-teal-600 font-bold'>SSLC</span> in Peniel Matriculation Higher Secondary school passed out in 2016 with <span className='text-teal-600 font-bold'>93.4%</span> </p>
      </div>
     <div className='lg:flex lg:gap-40 lg:px-52'>
      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
      <h2 className='text-blue-700 text-5xl py-2 font-extrabold'>SKILLS</h2>
        <Image className='m-auto'src={code} />
        <h3 className='text-2xl font-black font-md text-teal-600'>Coding Language</h3>
        <p className='py-2 leading-3 font-bold'>C# , JavaScript , HTML , CSS</p>
        <h3 className='py-1 text-teal-600 font-black text-2xl'>Frameworks</h3>
        <p className='py-1 font-bold'>React , Dotnet</p>
        <h3 className='text-teal-600 py-1 font-black text-2xl'>Database</h3>
        <p className='py-1 font-bold'>SQl</p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
      <h2 className='text-blue-700 text-5xl py-2 font-extrabold '>Certification</h2>
       <Image className='m-auto'src={consulting} />
      <h3 className='text-2xl font-black font-md text-teal-600'>ACCORD INFO MATRIX</h3>
      <p className='py-2 font-bold'>Certification in <span className='text-purple-900 font-extrabold '>DOTNET</span></p>
      <p className='py-2 font-bold'>Certification in <sapn className='text-blue-400 font-extrabold'>REACT.JS</sapn></p>
      <p className='py-2 font-bold'>Certification in <span className='text-green-800 font-extrabold'>SQL</span></p>
      </div>
     </div>
     </section>
     <section>
      <h1 className='text-3xl py-3 font-extrabold'>PORTFOLIO</h1>
      <p className='font-bold py-2'>Done  a <span className='text-teal-400'>Personal Portfolio WebSite</span> using <span className='text-red-600'>NEXT.JS</span> and <span className='text-red-600'>TailWind CSS</span> and used Hooks like <span className='text-red-600'>UseState</span> in this Project.</p>
      <p className='font-bold py-2'>Done a <span className='text-teal-400'>CRUD Operation Project</span> using <span className='text-red-600'>REACT.JS</span> and <span className='text-red-600'>MockAPI</span> and used some important concepts Like <span className='text-red-600'>UseState , UseEffect </span> and <span className='text-red-600'>UseNavigate , Axios.</span></p>
      <p className='font-bold py-2'>Done a <span className='text-teal-400'>Restaurant Billing System</span> using <span className='text-red-600'>DOTNET and SQL.</span></p>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
      <div className='basis-1/3 flex-1'>
        <Image src={light}
         className='rounded-lg object-cover' 
         width={'100%'}
          height={'100%'}
          layout='responsive'/>
      </div>
      <div className='basis-1/3 flex-1'>
        <Image src={dark}
         className='rounded-lg object-cover' 
         width={'100%'}
          height={'100%'}
          layout='responsive' />
      </div>
      <div className='basis-1/3 flex-1'>
        <Image src={Create} 
         className='rounded-lg object-cover' 
         width={'100%'}
          height={'100%'}
          layout='responsive'/>
      </div>
      <div className='basis-1/3 flex-1'>
        <Image src={update}
         className='rounded-lg object-cover' 
         width={'100%'}
          height={'100%'}
          layout='responsive' />
      </div>
      <div className='basis-1/3 flex-1'>
        <Image src={bill}
         className='rounded-lg object-cover' 
         width={'100%'}
          height={'100%'}
          layout='responsive' />
      </div>
      </div>
     </section>
       </main>
    </div>
  )
}
