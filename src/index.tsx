import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "react-toastify/dist/ReactToastify.css"
import { Provider } from "react-redux"
import { QueryClientProvider, QueryClient } from "react-query"
import { persistor, store } from "./app/redux/store"
import { PersistGate } from "redux-persist/integration/react"

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
