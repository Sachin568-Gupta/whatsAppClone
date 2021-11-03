import Messanger from "./components/Mesanger";
import AccountProvider from "./context/AccountProvider";
import TemplateProvider from "./theme/TemplateProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messanger />
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
