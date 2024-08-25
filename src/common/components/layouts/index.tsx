import Header from "./Header";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({children}: LayoutsProps) => {
  return (
    <div className="bg-neutral-50">
      <Header/>
      <main >
        {children}
      </main>
      {/* Footer */}
    </div>
  )
}

export default Layouts