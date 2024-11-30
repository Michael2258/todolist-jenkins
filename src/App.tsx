import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Todos from "./pages/Todos";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

export default App;
