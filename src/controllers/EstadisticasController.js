const APIURL = 'https://app.nocodb.com/api/v2/tables/mk8zsxiqis2dc9f/records';
const TOKEN = 'x7CPbPPHqs99cDyACVmrTOOWvsYDEiBm5Dp7G4cO';

class EstadisticaController{

    constructor(){
        this.apiUrl = APIURL;
        this.token = TOKEN;
    }

    async getAllEstadisticas() {
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
    async getEstadisticasByJugador(id_jugador) {
        const response = await fetch(`${this.apiUrl}?where=(id_jugador,eq,${id_jugador})`, {
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
    async getCountByJugador(id_jugador) {
        const response = await fetch(`${this.apiUrl}/count?where=(id_jugador,eq,${id_jugador})`, {
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
        console.log("controoller data", data)
        return data.count; // La lista ya debe estar filtrada por el backend
    }

    async getEstadisticaById(id) {
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

    async createEstadistica(puntos, t1_a, t1, t2_a, t2, t3_a, t3, minutos, faltas) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                puntos: puntos,
                t1_a: t1_a,
                t1: t1,
                t2_a: t2_a,
                t2: t2,
                t3_a: t3_a,
                t3: t3,
                minutos: minutos,
                faltas: faltas
            })
        });

        const data = await response.json();
        return data;
    }

    async updateEstadistica(puntos, t1_a, t1, t2_a, t2, t3_a, t3, minutos, faltas) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                puntos,
                t1_a,
                t1,
                t2_a,
                t2,
                t3_a,
                t3,
                minutos,
                faltas
            })
        });

        const data = await response.json();
        return data;
    }

    async deleteEstadistica(id) {
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

export default EstadisticaController;