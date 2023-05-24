import instance from ".";

export async function createUser(data, type = "patient") {
  const res = await instance.post(`user/signup?type=${type}`, data);
  return res;
}

export async function login(cred) {
  const res = await instance.post(`user/login`, cred);
  return res;
}

export async function getHospitals(token) {
  const { data } = await instance.get(`hospital/search?token=${token}`);
  return data;
}
