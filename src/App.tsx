import React, { FC } from "react";
import Search from "./components/search";
import { QueryClientProvider, QueryClient } from "react-query";

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Search />
    </QueryClientProvider>
  );
};

export default App;
