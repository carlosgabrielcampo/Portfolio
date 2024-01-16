import './index.scss'
import { useRef } from 'react'

const Form = ({onsubmit}) => {
    const form = useRef();
    
    return (
        <form ref={form} onSubmit={(e) => onsubmit(e, form.current)}>
                <input placeholder="Name" type="text" name="name" required />
                <div className='email_subject'>
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                />
                <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                />
                </div>
                <textarea
                    placeholder="Message"
                    name="message"
                    required
                >
                </textarea>
                <input type="submit" className="flat-button" value="SEND" />
        </form>
    )
}

export default Form