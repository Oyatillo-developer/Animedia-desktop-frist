import { Link } from 'react-router-dom';
import '../style/signin.scss'


function Signin() {
    return ( <>
    
    <div class="go">
        <div class="edit">
            
            <div class="file">
                <h1>Tizimga kirish</h1>
            </div>

            <div class="run">

                <div class="ter">
                    <div class="bbc">
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <input type="text" id="inp" placeholder="Ismingiz"/>
                </div>

                <div class="ter">
                    <div class="bbc">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <input type="text" id="inp2" placeholder="Telefon"/>
                </div>

                <div class="ter">
                    <div class="bbc">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    <input type="password" id="inp3" placeholder="Parol"/>
                </div>

                <div class="ter">
                    <div class="bbc">
                        <i class="fa-solid fa-key"></i>
                    </div>
                    <input type="password" id="inp4" placeholder="Takror"/>
                </div>
            </div>

            <div class="help">
                <button onclick="kirish()">Ro'yxatdan o'tish</button>
                <Link to="/login">Sizda akkanut bormi?</Link>
            </div>
        </div>
    </div>
    
    </> );
}

export default Signin;