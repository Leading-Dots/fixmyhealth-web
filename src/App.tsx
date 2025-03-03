import { Button } from "./components/ui/button"

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-red-500">
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <Button
        variant={"outline"}
        className="mt-4"
      >Click me</Button>
    </div>
  )
}

export default App
