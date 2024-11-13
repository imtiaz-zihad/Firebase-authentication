import { useContext } from "react";
import { authContext } from "./MainLayout";

const Home = () => {
  const contextValue = useContext(authContext);


  const {
    handleGoogleLogIn,
    handleGithubLogIn,
    handleTwitterLogIn,
  } =contextValue
  return (
    <div className="text-5xl flex flex-col gap-5">
      <button onClick={handleGoogleLogIn}>Google</button> 
      <button onClick={handleGithubLogIn}>Github</button>
      <button onClick={handleTwitterLogIn}>Twitter</button>
    </div>
  );
};

export default Home;
