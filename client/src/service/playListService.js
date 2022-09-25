export const getPlayLists = async () => {
  try {
    const response = await fetch(`http://localhost:3000/users/lists`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const addPlayList = async (id, name) => {
  try {
    const response = await fetch(
      `http://localhost:3000/users/${id}/lists/add`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          name: name,
        }),
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
