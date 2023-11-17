import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0a4e2ca0-40b5-4d91-96de-5f44e63341a7"
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

export const followAPI = {
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    }
}

export const profileAPI = {
    getProfile(id: string) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            });
    }
}

