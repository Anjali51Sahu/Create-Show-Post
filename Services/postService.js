import Http from './httpService';

const Callback = (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  };

export const getAllPosts=()=>{
    return Http.get(`/get-all-post`)
    .then(response => Callback(response));
}

export const createPost=(post)=>{
    return Http.post(`/create-post`,post)
    .then(response => { Callback(response) });
}

export default {
    getAllPosts ,
    createPost
}