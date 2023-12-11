import React from 'react'
import { footerText } from '../constants'


const Footer = () => {
    return (
        <footer id='footer' role='contentinfo'>
            <div className='footer__inner'>
                <div className='footer__text'>
                    <span>이승남</span>
                    <span>@ webs</span>
                </div>
                <div className='footer__info'>
                    <div className='left'>
                        <div className='title'>
                            <a href="#">sign up</a>
                        </div>
                        <p>회원가입을 하시면 댓글과 게시판 기능을 이용하실 수 있습니다.</p>
                    </div>
                    <div className='right'>
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, index)=>(
                                <li key={index}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='footer_right'>
                    @ 2023 이승남
                    이 사이트는 넥스트 제이에스를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer