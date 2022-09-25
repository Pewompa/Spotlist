export const getSongs = async (userId, listId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/users/${userId}/lists/${listId}/songs`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
