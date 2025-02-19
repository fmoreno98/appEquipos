const APIURL = 'https://app.nocodb.com/api/v2/tables/mseh2yq2tqlyitm/records';
const TOKEN = 'x7CPbPPHqs99cDyACVmrTOOWvsYDEiBm5Dp7G4cO';

class EquipoController{

    constructor(){
        this.apiUrl = APIURL;
        this.token = TOKEN;
    }

    async getAllEquipos() {
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

    async getEquipoById(id) {
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

    async createEquipo(nombre, categoria, logo, descripcion) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Nombre: nombre,
                Categoria: categoria,
                descripcion: descripcion,
                Logo: logo // Aquí se envía la cadena de texto codificada en base64
            })
        });
    
        const data = await response.json();
        return data;
    }
    

    async updateEquipo(id, nombre, categoria, logo, descripcion) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': this.token
                },
                body: JSON.stringify({
                    Nombre: nombre,
                    Categoria: categoria,
                    Descripcion: descripcion,
                    Logo: logo 
                })
            });
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating equipo:', error);
            throw error;
        }
    }
    

    async deleteEquipo(id) {
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

export default EquipoController;