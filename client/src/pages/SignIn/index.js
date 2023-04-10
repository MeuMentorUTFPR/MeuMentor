import './style.css';
import GoogleIcon from '@mui/icons-material/Google';

export const SignIn = () => {
  return (
    

    <div>
        <div className='logo'>
        <img src='/MeuMentor/client/public/logo.png' alt='logoPrincipal' />
        </div>

      <div className='container'>
        <h1>Acesse sua <span class="conta">conta</span></h1>
        <input type="email" placeholder="Email institucional" name="email" />
        <input type="password" placeholder="Senha" name="senha" />

        <button type="submit" class='login'>Login</button>
        <button type="submit" class='inscrever'><span class="cadastre">Cadastre-se</span> pelo google</button>
        <GoogleIcon />
        
      </div>
    </div>
  );
};
