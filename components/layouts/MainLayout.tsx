import Footer from "../Footer";
import Navbar from "../Navbar";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout(props: Props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
