import {Link} from 'react-router-dom'

export function HomeRoute() {
    return <div>
        <div>
            <h1>The Legend Of Zelda</h1>
        </div>
        <Link to="/sign-in">Entrar</Link>
        <Link to="/sign-Up">Criar Conta</Link>
    </div>
}