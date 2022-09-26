export const getPlayLists = async () => {
  try {
    const response = await fetch(`http://localhost:3000/users/lists`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const addPlayList = async (userId, name, listId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/users/${userId}/lists/add`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          listId: listId,
          name: name,
        }),
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deletePlayList = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/users/${id}/lists/delete`,
      {
        method: 'DELETE',
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
