import { Bootstrap } from "./components/Bootstrap"

export const App = () => {
  const arrobj=[{plan:'FREE',month:'$ 0/month',describe:"single user 50GB storage"},
  {plan:'PLUS',month:'$ 9/month',describe:" 5 users"},
  {plan:'PRO',month:'$ 49/month',describe:"unlimited users"}];

  return (
    <>

    <Bootstrap arrobj={arrobj}/>
    </>
  );
};
export default App

