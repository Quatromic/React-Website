import { useState } from "react"
import img1 from './Two/gallery-3.jpg'
import img2 from './Two/gallery-4.jpg'

const Login = () => {
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const nameHandler = (event) => {
        if(event.target.value !== "" || !event.target.value.length <= 0 ){
            setUsername(event.target.value)
        }
    }

    const emailHandler = (event) => {
        const checker = event.target.value.search('@gmail.com' || '@yahoo.com')
        if(checker){
            setEmail(event.target.value)
        }
    }

    const passHandler = (event) => {
        if(event.target.value !== "" || !event.target.value.length <= 0 ){
            setPassword(event.target.value)
        }
    }

    const submitbtn = (e) => {
        e.preventDefault()
    }
    return(
        <div>
            <h1 className="header">Login</h1>
            <div id="credentials">
                <form>
                    <input onChange={(e) => nameHandler(e)} type="text" id="username" placeholder="username"/>
                    <br/>
                    <input onChange={(e) => emailHandler(e)} type="email" id="email" placeholder="email"/>
                    <br/>
                    <input onChange={(e) => passHandler(e)} type="password" id="password" placeholder="password"/>
                    <br/>
                    <button onClick={submitbtn} id="btn1">Submit</button>

                    <p>Or</p>

                    <button id="btn2">Sign up with <i className="fa-brands fa-google"></i></button>
                    <br/>
                    <button id="btn3">Sign up with <i className="fa-brands fa-apple"></i></button>
                </form>
            </div>
            <div id="half1">
                <a href="#">
                    <img src={img1}/>
                </a>
                <div id="text1">
                    <h2>Rio de Janairo</h2>
                    <p>Rio de Janeiro is the second-most-populous city in Brazil (after São<br/> Paulo) and the sixth-most-populous city in the Americas.</p>
                    <div id="liner"></div>
                </div>
            </div>
            <div id="divider"></div>
            <div id="half2">
                <a>
                    <img src={img2}/>
                </a>
                <div id="text2">
                    <h2>Netherlands</h2>
                    <p>The Netherlands informally Holland, is a country located in northwestern <br/> Europe with overseas territories in the Caribbean.</p>
                    <div id="liner"></div>
                </div>
            </div>
            {setTimeout(() => {
                document.getElementById("desc").classList.add("animation")
            }, 500)};
            {setTimeout(() => {
                const texts = [document.getElementById("text1"),document.getElementById("text2")]
                texts.forEach((element,index) => {
                    if(index != texts.length){
                        element.classList.add("anim1")
                    }
                    element.classList.add("anim2")
                })
            },500)}
            <h2 id="desc">Journey of exploration awaits you</h2>
        </div>
    )
}

export default Login