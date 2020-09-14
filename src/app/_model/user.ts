export class User {
  CompanySeq: string;
  Account: string;
  Password: string;
}

export class resData {
  Code: number;
  Data: Array<Object>;
  Msg: string;
  Success: boolean;
}

// export class login {
//   Data: Array<>;
//   Code: number;
//   Success: boolean;
//   Msg: string;
// }

export class addClock {
  Code: number;
  Success: boolean;
  Msg: string;
  Data: any;
}

export class getClockDayData {
  Data: null;
  Code: number;
  Success: boolean;
  Msg: string;
}

export class getServerTime {
  Data: {
    ServerTime: string;
  };
  Code: number;
  Success: boolean;
  Msg: string;
}
