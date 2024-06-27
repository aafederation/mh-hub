import { HeadMatter } from "./HeadMatter";
import { TopBar } from "./TopBar";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <HeadMatter />
      <section className="display-none sm:display-block">
        <TopBar />
      </section>
      <Menu />
      {children}
      <Footer />
    </>
  );
};
