import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {

  const frontendExperienceList = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "ReactBoostrap", "jQuery", "Tailwind", "TanstackReactQuery", "Atom", "MaterialUI", "Supabase", "Jest"
  ]

  const backendExperienceList = [
    "NodeJS", "NextJS", "MongoDB", "C", "C++",  "SQL", "Python", "Swift", "Java", "Axios", "FastApi", "Prisma", "ElasticSearch"
  ]

  const cloudExperienceList = [ 
    "AWS Cloud Practioner", "AWS Developing Serverless Solutions", "Snowflake", "Terraform"
  ]
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {frontendExperienceList.map((data)=>{
              return (
                <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>{data}</h4>
              </div>
            </article>
              )
            })}
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {backendExperienceList.map((data)=>{
              return (
                <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>{data}</h4>
              </div>
            </article>
              )
            })}
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Cloud Architecture</h3>
          <div className='experience__content'>
            {cloudExperienceList.map((data)=>{
              return (
                <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>{data}</h4>
              </div>
            </article>
              )
            })}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
