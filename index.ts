// const srt = "Hello";
// console.log(srt);

// const userNameData: string = "Ruslan";
// const userAgeData: number = 36;
// const isBirthdayData: boolean = true;

// function logBrtSmg(
//   isBirthday: boolean,
//   userName: string,
//   userAge: number
// ): void {
//   if (isBirthday) {
//     console.log(`Congrats ${userName.toUpperCase()}, age: ${userAge + 1}`);
//   }
// }

// function logBrtSmg(
//   isBirthday: boolean,
//   userName: string,
//   userAge: number
// ): string {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age: ${userAge + 1}`;
//   } else return "error";
// }

// const userNameData: string = "Ruslan";
// const userAgeData: number = 36;
// const isBirthdayData: boolean = true;

// const userData =
//   '{"isBirthdayData": true, "userNameData": "Ruslan", "userAgeData": 36}';

// const userObj: {
//   isBirthdayData: boolean;
//   userNameData: string;
//   userAgeData: number;
// } = JSON.parse(userData);

// const logBrtSmg = (
//   isBirthday: boolean,
//   userName: string,
//   userAge: number
// ): string => {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age: ${userAge + 1}`;
//   } else return "error";
// };

// logBrtSmg(isBirthdayData, userNameData, userAgeData);

// const userNameData: string = "Ruslan";
// const userAgeData: number = 36;
// const isBirthdayData: boolean = true;

// const userData = {
//   isBirthdayData: true,
//   userNameData: "Ruslan",
//   userAgeData: 36,
//   messages: {
//     error: "Error",
//   },
// };

// const createError = (msg: string) => {
//   throw new Error(msg);
// };

// const logBrtSmg = ({
//   isBirthdayData,
//   userNameData,
//   userAgeData,
//   messages: { error },
// }: {
//   isBirthdayData: boolean;
//   userNameData: string;
//   userAgeData: number;
//   messages: { error: string };
// }): string => {
//   if (isBirthdayData) {
//     return `Congrats ${userNameData.toUpperCase()}, age: ${userAgeData + 1}`;
//   } else return createError(error);
// };

// logBrtSmg(userData);

// const departments: string[] = ["dev", "design", "marketing"];
// const num: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// const report = departments
//   .filter((d: string) => d !== "dev")
//   .map((d: string) => `${d} - done`);

// const [first] = report;
// console.log(first);

// const electricityUserData = {
//   readings: 95,
//   units: "kWt",
//   mode: "double",
// };

// const waterUserData = {
//   readings: 3,
//   units: "m3",
// };

// const elRate: number = 0.45;
// const wRate: number = 2;

// const monthPayments: number[] = [0, 0]; // [electricity, water]

// const calculatePayments = (
//   { readings, mode }: { readings: number; mode: string },
//   wData: { readings: number },
//   elRate: number,
//   wRate: number
// ) => {
//   if (mode === "double" && readings < 50) {
//     monthPayments[0] = readings * elRate * 0.7;
//   } else {
//     monthPayments[0] = readings * elRate;
//   }

//   monthPayments[1] = wData.readings * wRate;
// };

// calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// const sendInvoice = (
//   [el, water]: number[],
//   electricityUserData: { readings: number; units: string },
//   waterUserData: { readings: number; units: string }
// ) => {
//   const text = `    Hello!
//       This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//       It will cost: ${el}€

//       This month you used ${waterUserData.readings} ${waterUserData.units} of waterts-node index.ts
//       It will cost: ${water}€`;

//   return text;
// };

// const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
// console.log(invoice);

// const userNameData: string = "Ruslan";
// const userAgeData: number = 36;
// const isBirthdayData: boolean = true;

// const userData = {
//   isBirthdayData: true,
//   userNameData: "Ruslan",
//   userAgeData: 36,
//   messages: {
//     error: "Error",
//   },
// };

// const userDataTupl: [boolean, number, ...string[]] = [
//   true,
//   36,
//   "Ruslan",
//   "Katya",
//   "Alisa",
// ];

// const createError = (msg: string) => {
//   throw new Error(msg);
// };

// const logBrtSmg = ({
//   isBirthdayData,
//   userNameData,
//   userAgeData,
//   messages: { error },
// }: {
//   isBirthdayData: boolean;
//   userNameData: string;
//   userAgeData: number;
//   messages: { error: string };
// }): string => {
//   if (isBirthdayData) {
//     return `Congrats ${userNameData.toUpperCase()}, age: ${userAgeData + 1}`;
//   } else return createError(error);
// };

// logBrtSmg(userData);

// const departments: string[] = ["dev", "design", "marketing"];
// const num: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// const report = departments
//   .filter((d: string) => d !== "dev")
//   .map((d: string) => `${d} - done`);

// const [first] = report;
// console.log(first);

const message: string | number | boolean = 5;
const messages: string[] | number[] = ["a", "b"];

function printMsg(msg: string | number): void {
  console.log(msg);
}
printMsg(4);
printMsg('4');