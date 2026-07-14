export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
  CreateBirthday: undefined;
  EditBirthday: { id: string; name?: string };
};

export type MainTabParamList = {
  Birthdays: undefined;
  Add: undefined;
  Months: undefined;
};
