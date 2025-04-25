import { useState } from 'react'
import axios from 'axios'
import Erro from './Erro'

const api = axios.create({
    baseURL: "https://videocatch-backend-production.up.railway.app/"
})

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
            const response = await api.post("/download", { url });
            console.table(response.data)
            setVideoData(response.data)
        } catch (error) {
            setErros(true)
        }
    }

    return (
        <div>
            <h1>Baixar Video</h1>

                {(!estadoUrl) ? <Erro texto = "Cole o texto aqui!" /> : null}
                {(erros) ? <Erro texto = "Erro ao processar o video!" /> : null}

                <select value = {plataform} onChange = { (e) => setPlataform(e.target.value)}>
                    <option value = "youtube">Youtube</option>
                </select>

                <input type = "text" placeholder='Digite o link aqui!' value = {url} onChange = {(e) => setUrl(e.target.value)} />
                <button onClick = {handleDownload}>Baixar</button>

        </div>
    )
}

export default Home