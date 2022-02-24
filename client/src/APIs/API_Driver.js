import Config from "../config";
var baseUrl = Config.api_url;

class API_Driver {
    async postDriver(driver){
        var result =
            fetch(`${baseUrl}drivers`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(driver)           
            })
            .then((response) => response.json())
            .then((a) => {
                return a;
            });
        return result;
    }

    async updateDriver(driver){
        var result =
            fetch(`${baseUrl}drivers`,
            {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(driver)           
            })
            .then((response) => response.json())
            .then((a) => {
                return a;
            });
        return result;
    }

    async getAllDrivers(){
        var result =
            fetch(`${baseUrl}drivers`)
            .then((response) => response.json())
            .then((a) => {
                return a;
            });
        return result;
    }

    async deleteDriver(driverId){
        var result =
            fetch(`${baseUrl}drivers/${driverId}`, {
                method: 'DELETE',
            })
            .then((response) => response.json())
            .then((a) => {
                return a;
            });
        return result;
    }

    async loginDriver(driver){
        var result =
            fetch(`${baseUrl}drivers/login`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(driver)           
            })
            .then((response) => response.json())
            .then((a) => {
                return a;
            });
        return result;
    }
}

export default API_Driver;