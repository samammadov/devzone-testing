import React from "react";
import { UserProvider } from "./providers/UserProvider";
import ActionButton from "./views/ActionButton";

// import RegisterForm from "./views/RegisterForm";
// import { mockNewsData } from "./mocks";
// import News from "./views/News";
// import ToggleComponent from "./views/Toggle";
// import Counter from "./views/Counter";
// import UserProfile from "./views/UserProfile";
import UserList from "./views/UserList";

const App: React.FC = () => {
  return (
    <UserProvider>
      <></>
      {/* <RegisterForm />
      <News news={mockNewsData} />
      <ToggleComponent /> */}
      {/* <Counter /> */}
      {/* {<UserProfile />} */}
      {/* <ActionButton label="Click me" onClick={() => window.alert("Clicked!")} /> */}
      <UserList />
    </UserProvider>
  );
};

export default App;
