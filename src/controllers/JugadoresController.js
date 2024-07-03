const APIURL = 'https://app.nocodb.com/api/v2/tables/mahhjacyhnhyqtg/records';
const TOKEN = 'x7CPbPPHqs99cDyACVmrTOOWvsYDEiBm5Dp7G4cO';

class JugadorController{

    constructor(){
        this.apiUrl = APIURL;
        this.token = TOKEN;
    }

    async getAllJugadors() {
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
    async getJugadoresByEquipo(id_equipo) {
        const response = await fetch(`${this.apiUrl}?where=(id_equipo,eq,${id_equipo})`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        return data.list; // La lista ya debe estar filtrada por el backend
    }

    async getJugadorById(id) {
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

    async createJugador(nombre, dorsal, idEquipo) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                nombre: nombre,
                dorsal: dorsal,
                idEquipo: idEquipo
            })
        });

        const data = await response.json();
        return data;
    }

    async updateJugador(id, nombre, dorsal, idEquipo) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                nombre,
                dorsal,
                idEquipo
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

export default JugadorController;