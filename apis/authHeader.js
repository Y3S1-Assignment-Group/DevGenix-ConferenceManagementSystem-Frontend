export default function authHeader() {
  const user = localStorage.getItem("user");

  if (user.token) {
    return { "x-auth-token": user.token };
  } else {
    return {};
  }
}
