import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "785356f0-bfad-453c-883d-856e6d5db0d2",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`);
  },

  follow(id) {
    return instance.post(`follow/${id}`);
  },
};


export const profileAPI = {
  
  getProfile(id) {
    return instance.get(`profile/${id}`);
  },

  getStatus(id) {
    return instance.get(`profile/status/${id}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status:status})
  },
  savePhoto(photoFile) {
    const formData = new FormData()
    formData.append("image", photoFile)
    return instance.put(`profile/photo/`, formData, {
      headers : {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  saveProfile(profile) {
    return instance.put(`profile`, profile)
  }
};

export const authAPI = {
 
  me() {
    return instance.get(`auth/me`);
  },

  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email,password,rememberMe, captcha});
  },

  logout() {
    return instance.delete(`auth/login`);
  },

};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
