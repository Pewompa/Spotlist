const supertest = require('supertest');
const { app, server } = require('../backend/index');
const api = supertest(app);

describe('User Authentication', () => {
  test('GET /users users are returned as json', async () => {
    const response = await api
      .get('/users')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body).toHaveLength(3);
  });
  test('GET /users/:username/:password user is returned', async () => {
    const response = await api
      .get('/users/Jhon%20Smith/unsecurepassword123')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body[0].id).toBe('aaaa00');
  });
  test('GET /users/:username/:wrongpassword should return empty array', async () => {
    const response = await api.get('/users/Jhon%20Smith/unsecurepassword122');
    expect(response.body).toHaveLength(0);
  });
});

describe('Add a playlist to the database', () => {
  const newPlaylist = {
    name: 'test',
  };
  afterAll(async () => {
    await api.delete(`/users/${newPlaylist.name}/lists/delete`);
  });
  test('GET /users/lists should return all playlists', async () => {
    await api
      .get('/users/lists')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
  test('POST /users/:userid/lists/add should add a playlist', async () => {
    const response = await api
      .post('/users/aaaa01/lists/add')
      .send(newPlaylist)
      .expect(201)
      .expect('Content-Type', /application\/json/);
    expect(response.body.name).toBe('test');
  });
  test('GET /users/:undefined/ should return an error code', async () => {
    await api.get('/users/undefined').expect(404);
  });
});

describe('Add a song to the database', () => {
  const newSong = {
    title: 'test',
    artist: 'test1',
  };
  afterAll(async () => {
    await api.delete(`/users/${newSong.title}/delete`);
  });
  test('GET /users/:userid/lists/:listid/songs should return all playlists', async () => {
    await api
      .get('/users/aaaa02/lists/c70c7088-77e9-4186-bbd4-c7cb0fc7ad9f/songs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
  test('POST /users/:userid/lists/:listid/songs/add should add a playlist', async () => {
    const response = await api
      .post(
        '/users/aaaa02/lists/c70c7088-77e9-4186-bbd4-c7cb0fc7ad9f/songs/add'
      )
      .send(newSong)
      .expect(201)
      .expect('Content-Type', /application\/json/);
    expect(response.body.title).toBe('test');
  });
  test('GET /users/:userid/lists/:undefined/songs should return empty array', async () => {
    const response = await api.get('/users/aaaa/lists/c70c70/songs');
    expect(response.body).toHaveLength(0);
  });
});

afterAll(() => {
  server.close();
});
