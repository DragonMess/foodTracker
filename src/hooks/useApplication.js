import axios from "axios";

export default function useApplicationData() {
  const users = () => {
    return axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res));
  };

  return {
    users,
  };
}
