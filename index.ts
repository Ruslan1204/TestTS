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

const userNameData: string = "Ruslan";
const userAgeData: number = 36;
const isBirthdayData: boolean = true;

const userData = {
  isBirthdayData: true,
  userNameData: "Ruslan",
  userAgeData: 36,
  messages: {
    error: "Error",
  },
};

const createError = (msg: string) => {
  throw new Error(msg);
};

const logBrtSmg = ({
  isBirthdayData,
  userNameData,
  userAgeData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  userAgeData: number;
  messages: { error: string };
}): string => {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${userAgeData + 1}`;
  } else return createError(error);
};

logBrtSmg(userData);

const departments = ["dev", "design", "marketing"];
