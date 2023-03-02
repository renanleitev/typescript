// https://www.digitalocean.com/community/tutorials/how-to-create-custom-types-in-typescript

type StatusResponse = {
  status: number;
  isValid: boolean;
};

type User = {
  name: string;
};

type GetUserResponse = {
  user: User;
};

type ApiGetUserResponse = StatusResponse & GetUserResponse;
