export class User {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  emailAddress: string;
  mobileNumber: string;
  createdDate: Date;
  updatedDate: Date;
  activationCode: number;
  active: boolean;
  password: string;
  role: Array<string>;
}
