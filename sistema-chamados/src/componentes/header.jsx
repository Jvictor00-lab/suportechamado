//src/components/header.jsx
//um componente react nada mais é do que uma função javascript que retornar jsx!



export default function header(){
    const usuariologado="Tecnico suporte";

    return(
        <head className="header-container">
            <div className="header-content">
                <h2>Sistema de chamados</h2>
                 <span className="user-badge">Usuário: {usuariologado}</span>
            </div>
        </head>
    );
}