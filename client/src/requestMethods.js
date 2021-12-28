import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzc0Yzc0NzJjOWQ1ZTcwMGExMTU2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY4ODUxNiwiZXhwIjoxNjQwOTQ3NzE2fQ.nvC1dhqd7ESurONTNV4B8au4EKixcG3SVp2ZQ3K2EUU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
