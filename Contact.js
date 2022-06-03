import NavHeader from './NavHeader.js'
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate()
    const submitHandler = event => {
      event.preventDefault()
      navigate('/')
    }
    return (
      <>
        <header>
          <NavHeader></NavHeader>
        </header>
        <section>
          <form className="me-auto" onSubmit={submitHandler}>
            <button type='submit'>Return to Home</button>
          </form>
        </section>
      </>
    )
}