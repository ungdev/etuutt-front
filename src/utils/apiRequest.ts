import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

class APIRequest {

    mode: boolean; // If mode = true -> pathUng and if mode = false -> pathDebug
    pathUng: string;
    pathDebug: string;

    constructor(mode: boolean) {
        this.mode = mode
        this.pathUng = "https://api-etuutt-2020.dev.uttnetgroup.fr/"
        this.pathDebug = "http://81.51.27.27:8000/"
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
                    // 'accept': 'application/ld+json',
                    //'CAS-LOGIN': 'admin',
                    'access-control-allow-origin': '*'
                }
            });
            console.log(response);
            console.log("it's workinnnnng !")
        } catch (exception) {
            //process.stderr.write("ERROR");
            console.log(exception)
        }
    }
}

export default APIRequest;
