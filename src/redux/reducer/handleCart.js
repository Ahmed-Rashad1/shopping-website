// import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
const cart = [];

// const handleCart = createSlice({
//   name: "product",
//   initialState: cart,

//   reducers: {
//     ADDITEM: (state, action) => {
//       const exist = state.find((x) => x.id === action.payload.id);
//       if (exist) {
//         return state.map((x) =>
//           x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         const product = action.payload;
//         return [
//           ...state,
//           {
//             ...product,
//             qty: 1,
//           },
//         ];
//       }
//     },
//     DELITEM: (state, action) => {
//       const exist2 = state.find((x) => x.id === action.payload.id);
//       if (exist2.qty === 1) {
//         return state.filter((x) => x.id !== exist2.id);
//       } else {
//         return state.map((x) =>
//           x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x
//         );
//       }
//     }
//   }
// })

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist2 = state.find((x) => x.id === product.id);
      if (exist2.qty === 1) {
        return state.filter((x) => x.id !== exist2.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;