import axios from "axios";

// AXIOS
const http = axios.create({
  baseURL: "https://my-json-server.typicode.com/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

// Deal with the response to make it easy to use
http.interceptors.response.use(
  (res) => ({ status: true, data: res.data }),
  (err) => {
    console.log("Error message", err);
    return { status: false, errMsg: err };
  }
);

const getRatesByCurrency = (currency) => {
  return http.get(`https://my-json-server.typicode.com/?base=${currency}`);
};

export default { getRatesByCurrency };

// JSOP
// const jsonp = require("jsonp");

// type GetRatesByCurrentcyResponse = {
//   rates: { [currencyCode: string]: string };
// };

// const getRateByCurrency = (currency): Promise<GetRatesByCurrentcyResponse> => {
//   return new Promise((resolve, reject) => {
//     jsonp(
//       `https://my-json-server.typicode.com/?base=${currency}`,
//       null,
//       (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       }
//     );
//   });
// };

// export default { getRatesByCurrency };
