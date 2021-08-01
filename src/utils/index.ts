import { AxiosResponse } from "axios";

import { ResponseObject } from "../interfaces";

export function handleAxiosError(error: any): ResponseObject | undefined {
    // The request was made and the server responded with a status code that falls out of the range of 2xx
    if (error.response) {
        return {
            data: error.response.data,
            headers: error.response.headers,
            method: error.response.config.method,
            status: error.response.status,
            statusText: error.response.statusText,
        };
    }
    
    // The request was made but no response was recieved or request failed 
    return;
}

export function buildResponseObject(response: AxiosResponse<any>): ResponseObject {
    return {
        data: response.data,
        headers: response.headers,
        method: response.config.method,
        status: response.status,
        statusText: response.statusText,
    };
}