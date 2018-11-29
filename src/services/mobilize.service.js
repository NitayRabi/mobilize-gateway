import axios from 'axios';
import queryString from 'queryString';

export class MobilizeService {

    constructor() {
        this.ADDRESS = process.env.MOBILIZE_ADDRESS || 'https://api.mobilize.io/v1';
        this.KEY = process.env.MOBILIZE_KEY || '';
        this.SECRET = process.env.MOBILIZE_SECRET || '';
        this.auth = { username: this.KEY, password: this.SECRET };
    }

    getGroups(query) {
        return axios.get(`${this.ADDRESS}/groups?${queryString.stringify(query)}`, { auth: this.auth });
    }

    getGroup(id, query) {
        return axios.get(`${this.ADDRESS}/groups/${id}?${queryString.stringify(query)}`, { auth: this.auth });
    }

    getMembers(groupdId, query) {
        return axios.get(`${this.ADDRESS}/groups/${groupdId}/members?${queryString.stringify(query)}`, { auth: this.auth });
    }

    getMember(groupdId, memberId, query) {
        return axios.get(`${this.ADDRESS}/groups/${groupdId}/members/${memberId}?${queryString.stringify(query)}`, { auth: this.auth });
    }
}
