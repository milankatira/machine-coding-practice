import useToast from "./hooks/useToast"

const App = () => {
  const { trigger, NotificationComponents } = useToast('top-right');

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Toast Notification Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
          onClick={() => trigger({
            type: 'success',
            message: 'Operation completed successfully!',
            duration: 3000
          })}
        >
          Success
        </button>

        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          onClick={() => trigger({
            type: 'error',
            message: 'Something went wrong!',
            duration: 5000
          })}
        >
          Error
        </button>

        <button
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition-colors"
          onClick={() => trigger({
            type: 'warning',
            message: 'This action cannot be undone',
            duration: 4000
          })}
        >
          Warning
        </button>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          onClick={() => trigger({
            type: 'info',
            message: 'New update available',
            duration: 2000,
            sticky: true
          })}
        >
          Sticky Info
        </button>
      </div>

      {NotificationComponents}
    </div>
  )
}

export default App