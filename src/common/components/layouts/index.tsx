import Footer from "./Footer";
import Header from "./Header";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({children}: LayoutsProps) => {
  return (
    <div className="bg-neutral-50 px-16 py-4">
      <Header/>
      <main >
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layouts