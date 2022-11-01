import './App.css'
import { Header } from "../controls/Header"
import { Content } from 'components/controls/Content'


export const App = () => {
  return (
    <div>
      {
        <div>
          <Header />
          <Content />
        </div>
      }
    </div>
  )
}
