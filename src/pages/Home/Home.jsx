import UserDetails from "../../Components/UserDetails/UserDetail";
import Links from "../../Components/MyLink/Links";
import Logo from "../../Components/Logos/Logos";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <main className="app">
      <div className="profile">
        <UserDetails />
        <Links />
        <Logo />
      </div>
      <Footer />
    </main>
  );
};
export default Home;
