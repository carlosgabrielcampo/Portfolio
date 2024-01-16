import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../../components/AnimatedLetters'
import './index.scss'
import Form from '../../components/Form'
import 'leaflet/dist/leaflet.css'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate-hover')
  const form = useRef()
  const position = [-37.82435, 144.96353]

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'service_my6weus', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance and job opportunities - in any project or company size. 
            However, if you have any other requests or
            questions, contact me using the form below.
          </p>
          <div className='form_contact'>
            <Form ref={form} onsubmit={sendEmail}/>
          </div>
        </div>
        <div className="info-map">
          Carlos Roman,
          <br />
          Australia,
          <br />
          Power Street, Southbank <br />
          Melbourne <br />
          <br />
          <span>carlosgabrielcampo@gmail.com</span>
        </div>
        <div className="map-container">
          <div className='map-wrap'>
          <div
                    style={{
                        height:"700px"
                    }}>
                    <MapContainer center={position} zoom={19}
                        style={{
                            height:"700px"
                        }}>
                        <TileLayer
                          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                      </MapContainer>
                  </div>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default Contact