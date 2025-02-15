import { Link } from 'react-router-dom';
import '../style/login.scss'


function Login() {
    return ( <>
    
    <div class="go2">
        <div class="edit2">
            
            <div class="file2">
                <h1>Tizimga kirish</h1>
            </div>

            <div class="run2">

                <div class="ter2">
                    <div class="bbc2">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <input type="text" id="inp1" placeholder="Telefon"/>
                </div>

                <div class="ter2">
                    <div class="bbc2">
                        <i class="fa-solid fa-key"></i>
                    </div>
                    <input type="password" id="inp2" placeholder="Parol"/>
                </div>
            </div>

            <div class="help2">
                <button onclick="kirish()">Ro'yxatdan o'tish</button>
                <Link to="/signin">Sizda akkanut yo'qmi?</Link>
            </div>
        </div>
    </div>
    
    </> );
}

export default Login;