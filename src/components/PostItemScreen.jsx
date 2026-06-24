import { useState } from 'react'

export default function PostItemScreen({ currentUser, items, setItems, setScreen }) {
  const [name, setName] = useState('')
  const [type, setType] = useState('Lost')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [contact, setContact] = useState('')
  const [imageData, setImageData] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) {
      setImageData(null)
      return
    }
    const reader = new FileReader()
    reader.onload = () => setImageData(reader.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      name,
      type,
      description,
      location,
      date,
      contact,
      image: imageData,
      postedBy: currentUser,
    }
    setItems([newItem, ...items])
    alert('Item posted successfully!')
    setScreen('viewItems')
  }

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-ink mb-6">Post Lost or Found Item</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Item Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b border-gray-300 focus:border-primary outline-none py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">Item Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border-b border-gray-300 py-2 bg-transparent"
          >
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border-b border-gray-300 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-b border-gray-300 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">Contact</label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full border-b border-gray-300 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-xl shadow-md hover:bg-deep hover:-translate-y-0.5 transition"
        >
          Submit
        </button>
      </form>

      <button
        onClick={() => setScreen('home')}
        className="mt-6 text-primary underline"
      >
        Back to Dashboard
      </button>
    </div>
  )
}
