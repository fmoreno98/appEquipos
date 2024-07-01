const APIURL = 'https://app.nocodb.com/api/v2/tables/m7fdwo1mh9gzsh8/records';
const TOKEN = 'x7CPbPPHqs99cDyACVmrTOOWvsYDEiBm5Dp7G4cO';

class PartidoController{

    constructor(){
        this.apiUrl = APIURL;
        this.token = TOKEN;
    }

    async getAllPartidos() {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data.list;
    }

    async getPartidoById(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async createPartido(resultadoLoc, resultadoVis, local, contrincante, fecha) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                resultadoLoc: resultadoLoc,
                resultadoVis: resultadoVis,
                local: local,
                contrincante: contrincante,
                fecha: fecha
            })
        });

        const data = await response.json();
        return data;
    }

    async updatePartido(id, resultadoLoc, resultadoVis, local, contrincante, fecha) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                resultadoLoc,
                resultadoVis,
                local,
                contrincante,
                fecha
            })
        });

        const data = await response.json();
        return data;
    }

    async deletePartido(id) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id:id
            })
        });

        const data = await response.json();
        return data;
    }


}

export default PartidoController;