export const getUser = async (username, password) => {
  try {
    const response = await fetch(
      `http://localhost:3000/users/${username}/${password}`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
