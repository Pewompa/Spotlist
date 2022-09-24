export const getPlaylists = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}/lists`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
