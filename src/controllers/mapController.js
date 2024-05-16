import axios from 'axios'

class MapC {
//INDEX -> LISTAR TODOS
    async index(req, res) {
        const cep = req.params.cep;
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}&country=brazil&limit=1`);
            
            if (response.data && response.data.length > 0) {
                
                const {lat , lon, place_id, display_name} = response.data[0];
                const displaySplit = display_name.split(',');
                
                const googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
                res.send({
                    lat: lat, 
                    lon: lon, 
                    id_local: place_id, 
                    link_google: googleMapsLink, 
                    cep: displaySplit[0], 
                    bairro: displaySplit[1], 
                    cidade: displaySplit[2]
                });
            } else {
                res.status(404).send({error: 'CEP não encontrado'});
            }
        } catch(error) {
            console.error('Erro ao consultar o CEP', error);
            res.status(500).send({error: 'Erro ao processar a solicitação'});
        }
    }
}

export default new MapC();
