export default function Botones ({texto, color}){
    
    const estilos= {
        color: color, 
        margin:12,
        backgroundColor: '#709da8', 
    }

    return(
        <>
        <button style={estilos}>{texto}</button>
        </>
    )
}