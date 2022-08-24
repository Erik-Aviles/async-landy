const API= 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLJJCfEJpRU8Fo9dYloEgOp2kxzXG2axOn&part=snippet&maxResults=9';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '396d370d5fmsh0099418ba7b02fdp18a7d8jsn479e720b4138',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;  
}

//funcion anonima para llamarse a si misma... ejecuta la funcion cuando esta cargando automaticamente 
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => ` 
        <a href="https://youtube.com/watch?v=${video.snippet.resourceId.videoId}" "target="_blank">
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
     
        `)} 
        `
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();