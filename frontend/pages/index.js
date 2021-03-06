import Head from 'next/head'

import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Reference from '../components/Reference'


export default function Home() {

  // TODO create database, backend and admin panel for easy changing
  const about = {
    name: "Luca Bergman",
    description: "Passionate full-stack developer"
  }

  const images = [
    {
      alt: "Picture of me",
      src: "/face1.jpg"
    }, {
      alt: "Picture of me",
      src: "/face2.jpg"
    }, {
      alt: "Picture of me",
      src: "/face3.jpg"
    }, {
      alt: "Picture of me",
      src: "/face4.jpg"
    }
  ]

  const projects = [
    {
      title: "LeAn",
      imgSrc: "/LeAn.png",
      startDate: "2020-08-31T16:02:49.067Z",
      endDate: null,
      company: "DevDroplets",
      description: "LeAn is a tool I am currently developing for Open-ICT with the LeAn-team. It allows teachers and students to quickly analyze their progress within a peer-review based study. Its made with a React frontend, NestJS backend and hosted within kubernetes. I love working with all of those frameworks/ technologies and consider myself quite good at them. I have learned an incredible amount of things from this project and I can't wait to learn even more from LeAn."
    }, {
      title: "Profile website",
      imgSrc: "/piet-mondriaan.jpeg",
      startDate: "2021-03-23T16:02:49.067Z",
      endDate: null,
      company: "",
      description: "My study recently required me to build a portfolio website to show off all my skills. This was perfect since I already had such a plan in mind! Now I'll admit I'm not the greatest designer, which is why I chose to use a beautiful painting from Piet Mondriaan. I used NextJS for it's incredible optimization and built in page routing. I also love working with react so theres that too. I plan to make the site even more dynamic with an admin panel that I plan to build with a NestJS backend for its typescript and wonderful code structure. It is hosted on my own server with docker."
    }
  ]

  const skills = [
    {
      skillName: "Docker", skillGrade: 70
    }, {
      skillName: "Javascript", skillGrade: 90
    }, {
      skillName: "CSS", skillGrade: 75
    }, {
      skillName: "HTML", skillGrade: 70 
    }, {
      skillName: "Typescript", skillGrade: 60
    }, {
      skillName: "Python", skillGrade: 80
    }, {
      skillName: "Git", skillGrade: 85
    }
  ]

  return (
    <div>
      <Head>
        <title>Luca Bergman</title>
        <meta name="description" content="My portfolio website, check out my current projects and skills!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="gridContainer" style={{aspectRatio: 1 / 1}}>
            <div id="d1" className="blackBorder"/><div className="blackBorder" id="d2"/><div className="blackBorder"id="d3"/><div className="blackBorder"id="d4"/><div className="blackBorder"id="d5"/><div className="blackBorder"id="d6"/><div className="blackBorder"id="d7"/><div className="blackBorder"id="d8"/><div className="blackBorder" id="d9"/><div className="blackBorder"id="d10"/><div className="blackBorder"id="d11"/><div className="blackBorder"id="d12"/><div className="blackBorder" id="d13"/><div id="d14" className="blackBorder"/><div id="d15" className="blackBorder"/><div id="d16" className="blackBorder"/><div id="d17" className="blackBorder"/><div id="d18" className="blackBorder"/>
            <About about={about} images={images}/>
            <Projects projects={projects} />
            <Contact />
            <Skills skills={skills} />
            <Reference />
        </section>
    </div>
  )
}

// TODO backend with api calls
// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const aboutRes = await fetch('https://run.mocky.io/v3/e09bb3f0-f4e4-4c17-a799-8e1e503658ed')
//   const about = await aboutRes.json()

//   const imagesRes = await fetch('https://run.mocky.io/v3/41869992-29d6-48a3-ba01-031efe8fffd5')
//   const images = await imagesRes.json()

//   // Pass data to the page via props
//   return { props : { about: about, images: images } }
// }

