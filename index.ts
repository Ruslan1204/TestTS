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

// const message: string | number | boolean = 5;
// const messages: string[] | number[] = ["a", "b"];

// function printMsg(msg: string | number): void {
//   console.log(msg);
// }
// printMsg(4);
// printMsg('4');

// function printMsg(msg: string | number): void {
//   if (typeof msg === "string") {
//     console.log(msg.toLocaleLowerCase);
//   } else {
//     console.log(msg.toFixed);
//   }
// }

// function printMsg(msg: string | number | boolean): void {
//   if (typeof msg === "string" || typeof msg === "number") {
//     console.log(msg.toString);
//   } else {
//     console.log(msg);
//   }
// }

// function printMsg(msg: string[] | number | boolean): void {
//   if (Array.isArray(msg)) {
//     msg.forEach((m) => console.log(m));
//   } else if (typeof msg === "number") {
//     console.log(msg.toFixed);
//   } else {
//     console.log(msg);
//   }
// }
// printMsg(4.44);
// // printMsg("4");

// const printReadings = (a: number | string, b: number | boolean): void => {
//   if (a === b) {
//     console.log(a, b);
//   }
// };

// const printReadings2 = (a: number[] | string): void => {
//   console.log(a.slice(0, 1));
// };

// const checkReadings = (
//   readings: { system: number } | { user: number }
// ): void => {
//   if ("system" in readings) {
//     console.log(readings.system);
//   } else {
//     console.log(readings.user);
//   }
// };

// function logValue(x: string | Date) {
//   if (x instanceof Date) {
//     console.log(x.getDate());
//   } else {
//     console.log(x.trim());
//   }
// }

// let msg: "Hello" = "Hello";
// msg = "Hello";

// const port3000: number = 3000;
// const port3001: number = 3001;

// function startServer(
//   protocol: "http" | "https",
//   port: 3000 | 3001
// ): "Server started" {
//   if (port === port3000 || port === port3001) {
//     console.log(`'Server started' on ${protocol}://server:${port}`);
//   } else {
//     console.log("Invalid port");
//   }

//   return "Server started";
// }
// startServer("https", 3001);

// function createAnimation(
//   id: number | string,
//   animation: string,
//   timingFunc: "ease" | "ease-out" | "ease-in" = "ease",
//   duration: number,
//   interCount: "infinite" | number
// ): void {
//   //   const elem = document.querySelector(`#${id}`) as HTMLElement;

//   //   if (elem) {
//   console.log(`${animation} ${timingFunc} ${duration} ${interCount}`);
//   // elem.style.animation = `${animation} ${timingFunc} ${duration} ${interCount}`;
//   //   }
// }
// createAnimation("id", "fade", "ease-out", 3000, "infinite");

// type AnimationYimingFunc = "ease" | "ease-out" | "ease-in";
// type AnimationID = number | string;

// function createAnimation(
//   id: AnimationID,
//   animation: string,
//   timingFunc: "ease" | "ease-out" | "ease-in" = "ease",
//   duration: number,
//   interCount: "infinite" | number
// ): void {
//   //   const elem = document.querySelector(`#${id}`) as HTMLElement;

//   //   if (elem) {
//   console.log(`${animation} ${timingFunc} ${duration} ${interCount}`);
//   // elem.style.animation = `${animation} ${timingFunc} ${duration} ${interCount}`;
//   //   }
// }
// createAnimation("id", "fade", "ease-out", 3000, "infinite");

// const serverConfig: { protocol: "http" | "https"; port: 3000 | 3001 } = {
//   protocol: "http",
//   port: 3000,
// };

// const startServer: (protocol: "http" | "https", port: 3000 | 3001) => string = (
//   protocol: "http" | "https",
//   port: 3000 | 3001
// ): "Server started" => {
//   console.log(`'Server started' on ${protocol}://server:${port}`);

//   return "Server started";
// };
// startServer(serverConfig.protocol, serverConfig.port);

// type AnimationYimingFunc = "ease" | "ease-out" | "ease-in";
// type AnimationID = number | string;

// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
// type Role = {
//   role: string;
// };
// type ConfigWithRole = Config & Role;

// type StartFunc = (protocol: "http" | "https", port: 3000 | 3001) => string;

// const serverConfig: ConfigWithRole = {
//   protocol: "http",
//   port: 3000,
//   role: "admin",
// };

// const backupConfig: ConfigWithRole = {
//   protocol: "https",
//   port: 3001,
//   role: "sysadmin",
// };

// const startServer: StartFunc = (
//   protocol: "http" | "https",
//   port: 3000 | 3001
// ): "Server started" => {
//   console.log(`'Server started' on ${protocol}://server:${port}`);

//   return "Server started";
// };
// startServer(serverConfig.protocol, serverConfig.port);

// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

interface IConfig {
  protocol: "http" | "https";
  port: 3000 | 3001;
  log: (msg: string) => void;
}

interface IRole {
  role: string;
}

interface IConfigWithIRole extends IConfig, IRole {}

const serverConfig: IConfigWithIRole = {
  protocol: "http",
  port: 3000,
  role: "admin",
  log: (msg: string): void => console.log(msg),
};

type StartFunc = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
) => string;

const startServer: StartFunc = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
): "Server started" => {
  log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
};
startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

interface IStyles {
  [key: string]: string;
}

const styles: IStyles = {
  position: "absolute",
  top: "20px",
  left: "30px",
};
