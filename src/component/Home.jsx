import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className='homemain'>
      <div className='homeimg'>
        <div className='welcome'><div>Welcome to Dr Nischal Naik's</div>
          <div>Divyam hospital</div></div>
        <img className='sdr' src="standing_dr.jpeg" alt="sdr" />
      </div>
      <div className='drpicinfo'>
        <img src="laughing_dr.jpeg" className='ldr' alt="Dr Nischal Naik" />
        <div>
          <div className='infotitle'>Dr Nischal Naik</div>
          <div className='drinfo'>
            Dr. Nischal Naik is a renowned Plastic Surgeon in Ahmedabad, Gujarat. He offers a fully equipped, state of the art health care facilities to ensure that his patients receive the best plastic, reconstructive & cosmetic surgery experience in a safe and comfortable environment.
            Dr. Nischal Naik performs not only Plastic Surgery but also Reconstructive and Microsurgery. Brachial Plexus Injury and Nerve Surgery, Complex Facial Trauma, Congenital Surgeries, Cleft Lip and Cleft Palate Surgery, Burns And Burns Reconstruction, Rhinoplasty, Liposuction and body contouring,Cosmetic Breast Surgery, Face Lift And Facial Rejuvenation Surgery,etc. are some of the areas of his expertise. His dedication, passion and meticulous standard for his work are well recognized by his colleagues and his clients.
            Aside from regular work, Dr. Naik dedicates time towards helping those in need and doing pro-bono surgeries.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
