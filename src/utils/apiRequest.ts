import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

class APIRequest {

    mode: boolean; // If mode = true -> pathUng and if mode = false -> pathDebug
    pathUng: string;
    pathDebug: string;

    constructor(mode: boolean) {
        this.mode = mode
        this.pathUng = "https://api-etuutt-2020.dev.uttnetgroup.fr/"
        this.pathDebug = "http://92.149.175.117:8000/"
    }

    async makeRequest(path: string) {

        var pathRequest

        if (this.mode === true) {
            pathRequest = this.pathUng + path
        } else {
            pathRequest = this.pathDebug + path
        }

        try {
            const response = await axios.get(pathRequest, {
                headers: {
                    'accept': 'application/ld+json',
                    'CAS-LOGIN': 'admin',
                    'Access-Control-Allow-Origin': '*',
                },
            });
            console.log(response);
        } catch (exception) {
            //process.stderr.write("ERROR");
            console.log("ERREURRRR")
        }
    }
}

export default APIRequest;
