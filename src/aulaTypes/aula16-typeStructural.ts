type VerifyUserFn = (user: User, setValues: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValues) => {
  return (
    user.username === sentValues.username &&
    user.password === sentValues.password
  );
};

const BDuser = { username: 'shima', password: 'shima' };
const sentUser = { username: 'shima', password: 'shima', permissions: 'aoba' };

console.log(verifyUser(BDuser, sentUser));
