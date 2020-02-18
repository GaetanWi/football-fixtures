import axios, { AxiosPromise } from 'axios';

export default class ScorebatService {
    
    public static getDailyFeed(): AxiosPromise<any> {
        return axios.get('/api/feed');
    }
}