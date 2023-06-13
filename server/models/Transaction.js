import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    productIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
},
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;


// import mongoose, { Mongoose } from "mongoose";
// import {loadType} from "mongoose-currency";

// const Schema=mongoose.Schema;
// loadType(mongoose);

// const daySchema = new Schema(
//     {
//       date: String,
//       revenue: {
//         type: mongoose.Types.Currency,
//         currency: "USD",
//         get: (v) => v / 100,
//       },
//       expenses: {
//         type: mongoose.Types.Currency,
//         currency: "USD",
//         get: (v) => v / 100,
//       },
//     },
//     { toJSON: { getters: true } }
//   );
  
// const monthSchema = new Schema(
//     {
//       month: String,
//       revenue: {
//         type: mongoose.Types.Currency,
//         currency: "USD",
//         get: (v) => v / 100,
//       },
//       expenses: {
//         type: mongoose.Types.Currency,
//         currency: "USD",
//         get: (v) => v / 100,
//       },
//       operationalExpenses: {
//         type: mongoose.Types.Currency,
//         currency: "USD",
//         get: (v) => v / 100,
//       },
//       nonOperationalExpenses: {
//         type: mongoose.Types.Currency,
//         currency: "USD",
//         get: (v) => v / 100,
//       },
//     },
//     { toJSON: { getters: true } }
//   );  

// const TransactionSchema= new Schema(
//     {
//         totalProfit: {
//             type: mongoose.Types.Currency,
//             currency: "USD",
//             get: (v) => v/100
//         },
//         totalRevenue: {
//             type: mongoose.Types.Currency,
//             currency: "USD",
//             get: (v) => v/100
//         },
//         totalExpenses: {
//             type: mongoose.Types.Currency,
//             currency: "USD",
//             get: (v) => v/100
//         },
//         expensesByCategory: {
//             type: Map,
//             of: {
//                 type: mongoose.Types.Currency,
//                 currency: "USD",
//                 get: (v) => v/100
//             }
//         },
//         //continue from here, designing the schema for the 2 objects from here in Array 
//         monthlyData: [monthSchema],
//         dailyData: [daySchema],
//     },
//     { timestamps: true, toJSON: {getter: true}}
// );

// const Transaction= mongoose.model("Transaction", TransactionSchema);

// export default Transaction;

 