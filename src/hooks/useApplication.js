import axios from "axios";

export default function useApplicationData() {
  function users() {
    return axios({
      url: "http://jsonplaceholder.typicode.com/users",
      method: "GET",
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return {
    users,
  };
}
