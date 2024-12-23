import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [payload, setPayload] = useState({
    country: "Algeria",
    height: 0,
    width: 0,
    lenght: 0,
    weight: 0,
  });

  const [data, setData] = useState<
    {
      company: string;
      shippingPrice: number;
    }[]
  >([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const calculate = async () => {
    try {
      const res = await axios.post("http://localhost:3000", payload);
      // Check if the response contains the expected data structure
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <h1 className="font-semibold text-3xl py-4">Shipping Calculator</h1>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-4 items-start justify-center">
          <label htmlFor="">Country</label>
          <select
            value={payload.country} // Bind the value to the state
            onChange={(e) => {
              setPayload((prev) => ({
                ...prev,
                country: e.target.value,
              }));
            }}
            className="border border-slate-300 rounded-sm w-full"
          >
            <option value="Algeria">Algeria</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Morocco">Morocco</option>
          </select>
        </div>
        <div className="flex flex-col gap-4 items-start justify-center">
          <label htmlFor="">Weight (kg)</label>
          <input
            type="number"
            value={payload.weight} // Bind the value to the state
            onChange={(e) =>
              setPayload((prev) => ({
                ...prev,
                weight: Number(e.target.value),
              }))
            }
            className="border border-slate-300 rounded-sm w-full"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-center">
          <label htmlFor="">Length (cm)</label>
          <input
            type="number"
            value={payload.lenght}
            onChange={(e) =>
              setPayload((prev) => ({
                ...prev,
                lenght: Number(e.target.value),
              }))
            }
            className="border border-slate-300 rounded-sm w-full"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-center">
          <label htmlFor="">Width (cm)</label>
          <input
            type="number"
            value={payload.width}
            onChange={(e) =>
              setPayload((prev) => ({
                ...prev,
                width: Number(e.target.value),
              }))
            }
            className="border border-slate-300 rounded-sm w-full"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-center">
          <label htmlFor="">Height (cm)</label>
          <input
            type="number"
            value={payload.height}
            onChange={(e) =>
              setPayload((prev) => ({
                ...prev,
                height: Number(e.target.value),
              }))
            }
            className="border border-slate-300 rounded-sm w-full"
          />
        </div>
        <div>
          <button
            className="border border-slate-300 px-4 py-3 rounded-sm"
            onClick={calculate}
          >
            Calculate
          </button>
        </div>
      </div>
      <div className="w-[400px] ">
        {data?.map((item, index) => (
          <div
            className="border border-slate-300 p-4 my-4 w-full rounded-sm "
            key={index}
          >
            <strong>{item.company}</strong>: ${item.shippingPrice}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [payload, setPayload] = useState({
//     country: "Algeria",
//     height: 0,
//     width: 0,
//     lenght: 0,
//     weight: 0,
//   });

//   const [data, setData] = useState<
//     {
//       company: string;
//       shippingPrice: number;
//     }[]
//   >([]);

//   console.log(payload);
//   console.log(data);

//   const calculate = async () => {
//     try {
//       const res = await axios.post("http://localhost:3000", payload);
//       console.log(res);
//       setData(res.data.data);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-start w-full h-full ">
//       <h1>Shipping Calculator</h1>
//       <div className="grid grid-cols-2 gap-8 mt-8">
//         <div className="flex flex-col gap-4 items-start justify-center">
//           <label htmlFor="">Country</label>
//           <select
//             value={payload.country}
//             name=""
//             id=""
//             className="border border-slate-300 rounded-sm w-full"
//             onChange={(e) => {
//               setPayload((prev) => ({
//                 ...prev,
//                 country: e.target.value,
//               }));
//             }}
//             defaultValue={""}
//           >
//             <option value="Algeria">Algeria</option>
//             <option value="Tunisia">Tunisia</option>
//             <option value="Morocco">Morocco</option>
//           </select>
//         </div>
//         <div className="flex flex-col gap-4 items-start justify-center">
//           <label htmlFor="">weight kg</label>
//           <input
//             type="number"
//             id="weight"
//             className="border border-slate-300 rounded-sm w-full"
//             onChange={(e) =>
//               setPayload((prev) => ({
//                 ...prev,
//                 weight: Number(e.target.value),
//               }))
//             }
//           />
//         </div>
//         <div className="flex flex-col gap-4 items-start justify-center">
//           <label htmlFor="">lenght cm</label>
//           <input
//             type="number"
//             id="weight"
//             className="border border-slate-300 rounded-sm w-full"
//             onChange={(e) =>
//               setPayload((prev) => ({
//                 ...prev,
//                 lenght: Number(e.target.value),
//               }))
//             }
//           />
//         </div>
//         <div className="flex flex-col gap-4 items-start justify-center">
//           <label htmlFor="">width cm</label>
//           <input
//             type="number"
//             id="weight"
//             className="border border-slate-300 rounded-sm w-full"
//             onChange={(e) =>
//               setPayload((prev) => ({
//                 ...prev,
//                 width: Number(e.target.value),
//               }))
//             }
//           />
//         </div>
//         <div className="flex flex-col gap-4 items-start justify-center">
//           <label htmlFor="">height cm</label>
//           <input
//             type="number"
//             id="weight"
//             className="border border-slate-300 rounded-sm w-full"
//             onChange={(e) =>
//               setPayload((prev) => ({
//                 ...prev,
//                 height: Number(e.target.value),
//               }))
//             }
//           />
//         </div>
//         <div>
//           <button className="border border-slate-300" onClick={calculate}>
//             Calculat
//           </button>
//         </div>
//       </div>
//       <div>
//         {data?.map((item, index) => (
//           <li key={index}>
//             <strong>{item.company}</strong>: ${item.shippingPrice}
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
