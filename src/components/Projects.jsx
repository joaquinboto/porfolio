import React from 'react'
import './css/projects.css'
import portRect from '../assets/portRectangulo.png'
import {motion} from 'framer-motion'
import {useState , useRef , useEffect} from 'react'
import jsvanilla from '../assets/jsvanilla.png'
import reactproject from '../assets/reactcommerce.png'
import ticket from '../assets/ticket.png'
import countries from '../assets/countries.png' 
import reactlorenzo from '../assets/reactlorenzo.png'



function Projects() {

  const [width , setWith] = useState(0)

  const total = useRef()

  useEffect(() => {
    setWith(total.current.scrollWidth - total.current.offsetWidth)
  },[])

  const projectos = [{
    img: jsvanilla,
    github: "https://github.com/joaquinboto/E-Commerce-JavaScript-Vanilla",
    deploy: "https://joaquinboto.github.io/E-Commerce-JavaScript-Vanilla/",
    p: "E-commerce realizado con Javascript Vanilla, POO , manejo de LocalStorage & API."
  },
  {
    img: reactproject,
    github: "https://github.com/joaquinboto/E-Commerce-React",
    deploy: "https://joaquinboto.github.io/E-Commerce-React/",
    p: "E-commerce realizado con React, manejo de estados, styled component , useEffect , useContext, conectado con Firebase."
  },
  {
    img: ticket,
    github: "https://github.com/joaquinboto/TICKET-HENRY",
    deploy: "https://tickethenry.vercel.app/",
    p: "E-commerce de tickets para eventos , incluye vista de usuario y de admin , con su respectivo dashboard"
  },
  {
    img: countries,
    github: 'https://github.com/joaquinboto/PI-COUNTRIES',
    deploy: "https://pi-countries-f7j5crn1k-joaquinboto.vercel.app/",
    p: "Diseñar y desarrollar  una app de paises que incluía: búsqueda , filtrados, creación y ordenamientos"
  },
  {
    img: reactlorenzo,
    github: 'https://github.com/joaquinboto/ProyectoReactLorenzo',
    deploy: "https://proyecto-react-lorenzo.vercel.app/",
    p: "Portfolio para cliente real , realizado en React con 2 diseñadoras UI y otro desarrollador."
  }
]

  return (
    <div className='porfolio' id='projectspage'>
      <div className='banner'>
          <div>
            <img src={portRect} alt="" />
          </div>
      </div>
      <motion.div ref={total} className='projects'>
      <motion.div drag="x" dragConstraints={{right: 0 , left: -width}} className='corousel-inner'>
        {projectos.map((image) =>{
          return (
            <motion.div className='card' key={image}>
              <img className='imgpro' src={image.img} alt="" />
              <a target="_blank" href={image.github}><i className="lni lni-github-original"></i></a>
              <a className='imgDeploy' target="_blank" href={image.deploy}>
                <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" class="icon">
                  <path d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z" fill="#f0f0f0"></path>
                </svg>
              </a>
              <p>{image.p}</p>
            </motion.div>
          )
        })}
      </motion.div>
      </motion.div>
    </div>
  )
}


export default Projects