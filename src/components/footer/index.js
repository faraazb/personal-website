import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import './footer.scss';
import { githubIcon, linkedinIcon, paperPlaneIcon, twitterIcon } from '../icons';
import { ContactLink } from '../button';


const Footer = () => {
    const isBrowser = typeof window !== 'undefined';
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [formResponse, setFormResponse] = useState('');
    const footerData = useStaticQuery(graphql`
        query getFooterData {
            data: contentJson {
                contact {
                    github
                    linkedin
                    twitter
                }
                contactForm {
                    pageClipSiteKey
                    formName
                }
            }
        }
    `)
    const { data } = footerData;

    const contactFormSubmit = (event) => {
        event.preventDefault();
        const contactForm = {};
        const formData = new FormData(event.target)
        for (const [name, value] of formData) {
            contactForm[name] = value
        }
        if (isBrowser && window.hasOwnProperty('Pageclip')) {
            setIsFormSubmitting(true)
            window.Pageclip.send(
                data.contactForm.pageClipSiteKey,
                data.contactForm.formName,
                contactForm,
                (error, response) => {
                    if (error) {
                        setFormResponse('Sorry! Try again after sometime or please send an email.')
                    }
                    else if (response && response.data === 'ok') {
                        setFormResponse('Sent!')
                    }
                    setIsFormSubmitting(false)
                });
        }
        else if (isBrowser && !window.hasOwnProperty('Pageclip')) {
            setFormResponse('Sorry! Your content blocker has probably blocked Pageclip (pageclip.js).');
            setIsFormSubmitting(false)
        }
        setTimeout(() => {
            setFormResponse('')
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
                            id="name" type='text' name='name' required placeholder='Your name'
                        />
                    </div>
                    <div className='form-item input-field'>
                        <label htmlFor='email'>E-mail</label>
                        <input
                            id="email" type='email' name='email' required placeholder='Your email'
                        />
                    </div>
                    <div className='form-item input-field message'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            id="message" name='message' required
                            placeholder='Your message...'
                        />
                    </div>
                    <div className='form-item submit'>
                        <button className='accent-button submit' type='submit' disabled={isFormSubmitting === true}>
                            {isFormSubmitting ? <span className='loader'></span> : paperPlaneIcon}
                            <span>Send</span>
                        </button>
                    </div>
                </form>
                <span className='contact-form-response'>{formResponse}</span>
            </div>
            <div className='footer-nav-links'>
                <Link className='underline-link' to={'/#about'}>About</Link>
                <Link className='underline-link' to={'/#projects'}>Projects</Link>
                <Link className='underline-link' to={'/resume'}>Resume</Link>
            </div>
            <div className='contact-links'>
                <ContactLink href={data.contact.github} text='GitHub' icon={githubIcon} />
                <ContactLink href={data.contact.linkedin} text='LinkedIn' icon={linkedinIcon} />
                <ContactLink href={data.contact.twitter} text='Twitter' icon={twitterIcon} />
            </div>
            <span id='bye'>Until we meet again!</span>
        </footer>
    )
}


export default Footer;
