export function SignInRoute() {
    return (
    <div className="h-[100vh] w-[100vw] flex flex-col flex-1 justify-center">
        <div className="bg-white rounded-lg mx-auto p-20 opacity-90">
            <h1 className="text-6xl text-center mb-5">Sign In</h1>
            <form noValidate className="flex flex-col p-1">
                <input type="text" placeholder="Username" className="border-black border rounded px-1"/>
                <input type="password" placeholder="Senha" className="border-black border rounded my-3 px-1" />
                <button type="submit" value="Enviar" className="bg-black text-slate-50 p-1 rounded font-[Triforce]">Entrar</button>
            </form>
        </div>
    </div>
    );
}