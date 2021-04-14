export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';

export const signIn = (name, email, phoneNumber) => {
  return { type: SIGNIN, name, email, phoneNumber };
};

export const signOut = () => {
  return { type: SIGNOUT };
};
