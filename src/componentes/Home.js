import { useState, useEffect } from 'react'
import axios from 'axios'
import Erro from './Erro'

function Home({ setVideoData})
{
    const [url,setUrl] = useState("")
    const [plataform, setPlataform] = useState("youtube")
    const [estadoUrl, setEstadoUrl] = useState(true)
    const [erros, setErros] = useState(false)
    const [carregandoVideo, setCarregandoVideo] = useState(false)

    const handleDownload = async () =>
    {
        if (!url) {
            setEstadoUrl(false)
            return 
        }                

        try
        {
            setCarregandoVideo(true)
            const response = await axios.post("https://videocatch-backend-production.up.railway.app/download", { url });
            console.table(response.data)
            setVideoData(response.data)
            setCarregandoVideo(false)
        } catch (error) {
            setErros(true)
        }
    }

    return (
        <div>
            <h1>Baixar Video</h1>

           { (carregandoVideo) ? <p>Carregando... </p> : (
            <>
                {(!estadoUrl) ? <Erro texto = "Cole o texto aqui!" /> : null}
                {(erros) ? <Erro texto = "Erro ao processar o video!" /> : null}

                <select value = {plataform} onChange = { (e) => setPlataform(e.target.value)}>
                    <option value = "youtube">Youtube</option>
                    <option value = "facebook">Facebook</option>
                </select>

                <input type = "text" placeholder='Digite o link aqui!' value = {url} onChange = {(e) => setUrl(e.target.value)} />
                <button onClick = {handleDownload}>Baixar</button>
            </>
           ) }


        </div>
    )
}

export default Home