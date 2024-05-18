import React from 'react'
import pathAbout from './photos/about_speaker.jpg'
import pathAbout1 from './photos/about_speaker_1.jpg'

const AboutUs = () => {
  return (
    <div className='container pt-5 mb-5'>
        <h5 className='text-danger text-start pb-3'>"Hyderabad IT Trainings provides all software courses Classroom training & Online with 100% placements."</h5>
        <p>
            Hyderabad IT Trainings is a <strong>Hyderabad based IT Software Training & Recruitment Company delivering classroom and online 
            trainings in India, USA and UK, Australia, Canada, Singapore.</strong> Being the leader in Software courses classroom training &
            online training sector, Hyderabad IT Trainings holds the top position in short time. <strong>Our core values are providing high 
            quality and project oriented training at affordable fees.</strong> We offer classroom and online training on all technologies 
            which are in high demand. All our trainers are IT professionals with rich experience.
        </p>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                <img className='w-100' src={pathAbout} alt=''/>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8'>
                <h5 className='text-danger text-start pt-5 pb-3'>Online Training</h5>
                <p>
                    Online training is a method of delivering training through an electronic medium without the immediate presence of a 
                    human trainer. By taking advantage of technology, Online Training can be more cost effective by delivering more 
                    knowledge in a more efficient manner. Hyderabad IT Trainings is offering <strong>Software courses online Training using 
                    its vast Technology Expertise for the benefit of the students in transforming their dreams into reality.</strong> We 
                    offer Online Software Training sessions to cater the training requirements of the Aspirants who cannot attend Classroom 
                    Training.
                </p>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8'>
                <h5 className='text-danger text-start pt-5 pb-3'>Offline Training</h5>
                <p>
                    Hyderabad IT Trainings is a leading IT courses Classroom training Institute in Hyderabad, India. We are a well-respected 
                    company that has been in the training platform for over a decade. In everything we do we make an effort to deliver 
                    quality. <strong> With Classroom Training opted from Hyderabad IT Trainings, you can develop skills that directly and 
                    transfer from the classroom to the workplace. </strong>Each Software classroom training course includes the planning, 
                    design, implementation, management, and support phases of the technology adoption of the course.
                </p>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                <img className='border border-dark w-100' src={pathAbout1} alt=''/>
            </div>
        </div>
        <div>
        <h5 className='text-danger text-start pt-5 pb-3'>Vision</h5>
            <p>
                Hyderabad IT Training Training Institutes in Hyderabad vision for quality managements to consistently deliver high-quality 
                solutions focused on improving customer satisfaction. To be an Software Training Institutes in Hyderabad, in dynamic 
                equilibrium with its social, ecological and economic environment striving continuously for excellence in education. 
                Hyderabad IT Training is targeting to become one the biggest and globally renowned training and learning Solutions Company 
                which helps students build a reputed IT career and also assist IT organization to build up their workforce with more 
                practical oriented resources.
            </p>
        </div>
        <div>
        <h5 className='text-danger text-start pt-5 pb-3'>Mission</h5>
            <p>
                The mission of quality management at Hyderabad IT Training Institute in Hyderabad, is to Training and Develop a new methods 
                and standards Proactively communicate and share knowledge Apply the knowledge to enhance our products, processes, and 
                services Continually monitor and improve our performance against set targets. Hyderabad IT Training gives the flexibility to 
                organization making corporate Training more flexible, customized and economical that allows them to train a batch of 
                candidates or as few candidates as you need depending on the business need – from a single individual, team or department to 
                everyone in the organization.
            </p>
        </div>
    </div>
  )
}

export default AboutUs