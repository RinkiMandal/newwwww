import { useState } from 'react';
import '../src/index.css';
import Sidebar from './componants/Sidebar';
import Navbar from './componants/Navbar';
import HomeScreen from './componants/HomeScreen'
import MainPart from './componants/MainPart';


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className={`flex flex-col flex-1 w-full ml-0 transition-all duration-300 ease-in-out ${isSidebarOpen ? '' : '-ml-1/6'}`}>
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <HomeScreen />
          <MainPart />
        </main>
      </div>
    </div>
  );
}

export default App;

