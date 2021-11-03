import axios from "axios";
const url = "http://localhost:4500";

export const addUser = async (data) => {
  let response = {};
  try {
    response = await axios.post(`${url}/addUser`, data);
  } catch (error) {
    console.error("error while adding user", error);
  }
  return response;
};

export const getUsers = async (googleId) => {
  let response = {};
  try {
    response = await axios.get(`${url}/getUsers?googleId=${googleId}`);
  } catch (error) {
    console.error("error while fetching users", error);
  }
  return response?.data || [];
};

export const setConversation = async (data) => {
  try {
    const response = await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.error("error while calling setConversation API due to", error);
  }
};

export const getConversation = async (data) => {
  try {
    const response = await axios.post(`${url}/conversation/get`, data);
    return response?.data || [];
  } catch (error) {
    console.error("error while calling getconversation api due to", error);
  }
};

export const newMessages = async (data) => {
  try {
    const response = await axios.post(`${url}/message/addNewMessage`, data);
    return response;
  } catch (error) {
    console.error("error while calling newMessage api dur to", error);
  }
};
export const getMessages = async (id) => {
  try {
    const response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("error while calling newMessage api dur to", error);
  }
};
