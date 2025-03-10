function VideoOptions({videoData})
{
    if (!videoData) return null

    return (
        <div>
            <h2>{videoData.title}</h2>

            {videoData.formats.map((format,index) => (
                <a key = {index} href = {format.url} download>
                    <button>{format.quality}</button>
                </a>
            ))}
        </div>
    )
}

export default VideoOptions