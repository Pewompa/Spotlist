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
export const addSongs = async (userId, listId, artist, title) => {
  try {
    const response = await fetch(
      `http://localhost:3000/users/${userId}/lists/${listId}/songs/add`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          listId: listId,
          artist: artist,
          title: title,
        }),
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteSongs = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/users/${id}/delete/many`,
      {
        method: 'DELETE',
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
export const deleteOneSong = async (title) => {
  try {
    const response = await fetch(
      `http://localhost:3000/users/${title}/delete`,
      {
        method: 'DELETE',
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
