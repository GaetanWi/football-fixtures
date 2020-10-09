import axios, { AxiosPromise } from 'axios';

export default class ScorebatService {
    
    public static baseUrl = `https://www.scorebat.com/api`;

    public static getDailyFeed(): AxiosPromise<any> {
        return axios.get(`${this.baseUrl}/feed`);
    }

    public static getBoardInfo(idLeague: string): AxiosPromise<any> {
        return axios.get(`${this.baseUrl}/competition/${idLeague}`);
    }

    public static getMatchData(team1: string, team2: string): AxiosPromise<any> {
        return axios.get(`${this.baseUrl}/feed/match/${team1.toLowerCase()}/${team2.toLowerCase()}`)
    }
}