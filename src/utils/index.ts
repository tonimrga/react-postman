import { AxiosResponse } from "axios";

import { HeaderObject, ResponseObject } from "../interfaces";

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

export function prepareRequestHeaders(reqHeaders: string[][]): HeaderObject {
    const headers: HeaderObject = {};
    for (let i = 0; i < reqHeaders.length; i++) {
        const key = reqHeaders[i][0];
        const value = reqHeaders[i][1];
        headers[key] = value;
    }
    return headers;
}

export function prepareRequestBody(reqBody: string): any {
    let body: any;
    try {
        body = JSON.parse(reqBody);
    } catch(e) {
        body = reqBody;
    }
    return body;
}

export function renderPlacholderJson(): string {
    return "Enter request body:\n\nExample:\n\n{\n    \"title\": \"foo\",\n    \"body\": \"bar\",\n    \"userId\": 1\n}";
}