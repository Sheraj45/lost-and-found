export default function ViewItemsScreen({ currentUser, items, setItems, setScreen }) {
  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold text-primary text-center mb-8">
        All Lost &amp; Found Items
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">No items found yet.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md w-64 p-4 text-left flex flex-col"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-36 object-cover rounded-lg mb-3"
                />
              ) : (
                <div className="w-full h-36 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}

              <h3 className="font-bold text-ink">
                {item.name}{' '}
                <span
                  className={
                    item.type === 'Lost'
                      ? 'text-accent text-sm font-semibold'
                      : 'text-found text-sm font-semibold'
                  }
                >
                  ({item.type})
                </span>
              </h3>
              <p className="text-sm mt-1"><strong>Description:</strong> {item.description || '—'}</p>
              <p className="text-sm"><strong>Location:</strong> {item.location || '—'}</p>
              <p className="text-sm"><strong>Date:</strong> {item.date || '—'}</p>
              <p className="text-sm"><strong>Contact:</strong> {item.contact || '—'}</p>

              {item.postedBy === currentUser && (
                <button
                  onClick={() => handleDelete(item.id)}
                  className="mt-3 w-full bg-danger text-white py-1.5 rounded-md hover:bg-red-700 transition text-sm"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <button
          onClick={() => setScreen('home')}
          className="bg-primary text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-deep hover:-translate-y-0.5 transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}
