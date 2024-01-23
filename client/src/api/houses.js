import axiosSecure from './axiosSecure';

// get all houses from db
export const getAllRooms = async () => {
  const { data } = await axiosSecure('/houses');
  return data;
};
