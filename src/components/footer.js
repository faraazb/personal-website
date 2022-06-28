import React, {useState} from 'react';
import './footer.scss';
import data from '../../content/data.json'
import {githubIcon, linkedinIcon, mailIcon, paperPlaneIcon, twitterIcon} from './icons';
import {Link} from 'gatsby';
import {Anchor} from './link';


const Footer = () => {
    const isBrowser = typeof window !== 'undefined';
    const [contactForm, setContactForm] = useState({name: '', email: '', message: ''});
    const [submitButton, setSubmitButton] = useState(paperPlaneIcon);
    const [isSubmitDisabled, setSubmitDisabled] = useState(false)
    const [response, setResponse] = useState('');

    const contactFormFieldChange = (event) => {
        setContactForm({...contactForm, [event.target.name]: event.target.value});
    }

    const contactFormSubmit = (event) => {
        event.preventDefault();
        if (isBrowser && window.hasOwnProperty('Pageclip')) {
            setSubmitDisabled(true)
            setSubmitButton(<span className='loader'></span>);
            window.Pageclip.send(
                data.contactForm.pageClipSiteKey,
                data.contactForm.formName,
                contactForm,
                (error, response) => {
                if (error) {
                    setResponse('Sorry! Try again after sometime or please send an email.')
                }
                else if (response && response.data === 'ok') {
                    setResponse('Sent!')
                }
                setSubmitButton(paperPlaneIcon);
                setSubmitDisabled(false);
            });
        }
        else if (isBrowser && !window.hasOwnProperty('Pageclip')) {
            setResponse('Sorry! Your content blocker has probably blocked Pageclip (pageclip.js).');
            setSubmitButton(paperPlaneIcon);
            setSubmitDisabled(false);
        }
        setTimeout(() => {
            setResponse('')
        }, 15000);
    }

    return (
        <footer id='footer'>
            <div id='contact' className='contact-container'>
                <div className='footnote'>
                    <h2 className='header-2'>Contact</h2>
                    <span>Feel free to contact me about job opportunities and project collaborations!</span>
                </div>
                <form className='pageclip-form contact-form' onSubmit={contactFormSubmit}>
                    <div className='form-item input-field'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text' name='name' value={contactForm.name}
                            onChange={contactFormFieldChange} required placeholder='Your name'
                        />
                    </div>
                    <div className='form-item input-field'>
                        <label htmlFor='email'>E-mail</label>
                        <input
                            type='email' name='email' value={contactForm.email}
                            onChange={contactFormFieldChange} required placeholder='Your e-mail ID'
                        />
                    </div>
                    <div className='form-item input-field message'>
                        <label htmlFor='name'>Message</label>
                        <textarea
                            name='message' value={contactForm.message}
                            onChange={contactFormFieldChange} required
                            placeholder='Your message...'
                        />
                    </div>
                    <div className='form-item submit'>
                        <button className='accent-button submit' type='submit' disabled={isSubmitDisabled}>
                            {submitButton}<span>Send</span>
                        </button>
                    </div>
                </form>
                <span className='contact-form-response'>{response}</span>
            </div>
            <div className='footer-nav-links'>
                <Link className='footer-link' to={'/#about'}>About</Link>
                <Link className='footer-link' to={'/#projects'}>Projects</Link>
                <Link className='footer-link' to={'/resume'}>Resume</Link>
            </div>
            <div className='contact-links'>
                <Anchor href={data.contact.mail} text='Mail' icon={mailIcon} title='E-mail'/>
                <Anchor href={data.contact.github} text='GitHub' icon={githubIcon}/>
                <Anchor href={data.contact.linkedin} text='LinkedIn' icon={linkedinIcon}/>
                <Anchor href={data.contact.twitter} text='Twitter' icon={twitterIcon}/>
            </div>
            <span id='bye'>Until we meet again!</span>
        </footer>
    )
}


export default Footer;
