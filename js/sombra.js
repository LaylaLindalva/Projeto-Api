const variavel = 'eyeshadow'

const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${variavel}&brand=${marca}`

const loadSombra = async () => {
    const res = await fetch(url)
    const json = await res.json()
    return json
};

console.log(loadSombra())

const showSombra = () => {
    const categoriaContainer = document.getElementById('sombra-container')
    categorias.map((categoria) => {
        const divSombra = document.createElement('div')
        divSombra.innerHTML =`
        <img id="imagem-sombra" src"${categoria.image_link}" alt="imagem-sombra">
        <article class="categoria-info">
           <h3>${categoria.name}</h3>
           <span class="marca">Marca: </span>
           <a class="character-link" href="#">${categoria.brand.name}</a>

        </article>
        `;

        divSombra.classList.add('sombra-container')
        categoriaContainer.appendChild(divSombra)
    });

}

console.log(showSombra())































	// // <![CDATA[  <-- For SVG support
	// if ('WebSocket' in window) {
	// 	(function () {
	// 		function refreshCSS() {
	// 			var sheets = [].slice.call(document.getElementsByTagName("link"));
	// 			var head = document.getElementsByTagName("head")[0];
	// 			for (var i = 0; i < sheets.length; ++i) {
	// 				var elem = sheets[i];
	// 				var parent = elem.parentElement || head;
	// 				parent.removeChild(elem);
	// 				var rel = elem.rel;
	// 				if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
	// 					var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
	// 					elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
	// 				}
	// 				parent.appendChild(elem);
	// 			}
	// 		}
	// 		var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
	// 		var address = protocol + window.location.host + window.location.pathname + '/ws';
	// 		var socket = new WebSocket(address);
	// 		socket.onmessage = function (msg) {
	// 			if (msg.data == 'reload') window.location.reload();
	// 			else if (msg.data == 'refreshcss') refreshCSS();
	// 		};
	// 		if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
	// 			console.log('Live reload enabled.');
	// 			sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
	// 		}
	// 	})();
	// }
	// else {
	// 	console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	// }
	// // ]]>