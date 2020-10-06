import axios, { AxiosPromise } from 'axios';

export default class ScorebatService {
    
    public static baseUrl = `https://www.scorebat.com/api`;

    public static getDailyFeed(): AxiosPromise<any> {
        return axios.get(`${this.baseUrl}/feed`);
    }

    public static getBoardInfo(idLeague: string): AxiosPromise<any> {
        return axios.get(`${this.baseUrl}/competition/${idLeague}`);
    }
}