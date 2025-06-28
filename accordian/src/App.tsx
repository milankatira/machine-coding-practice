import { ChevronUp } from 'lucide-react'
import { useState } from 'react'
import './App.css'

const accordianData = [
  { title: "Section 1", content: "Content for section 1" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 3", content: "Content for section 3" }
]

function Accordian({ data }: { data: { title: string, content: string }[] }) {
  const [isOpen, setisOpen] = useState<number | null>()
  if (!data || data.length === 0) {
    return <div>No data available</div>
  }
  if (!Array.isArray(data)) {
    return <div>Invalid data format</div>
  }

  const handleToggle = (index: number) => {
    setisOpen(prev => prev === index ? null : index)
  }
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index} className="accordian-item">
          <h3 className="accordian-title" onClick={() => handleToggle(index)}>{item.title} <ChevronUp className={`${isOpen === index ? 'arrow-up':'arrow-down'}`} /></h3>
          {isOpen === index &&
            <div className="accordian-content">{item.content}</div>
          }
        </div>
      ))}
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Accordian data={accordianData} />
    </div>
  )
}

export default App