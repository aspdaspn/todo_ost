import './App.css'
import { Header } from "../controls/Header"
import { Content } from 'components/controls/Content'
import { Fragment } from 'react'


export const App = () => {
  return (
    <div>
      {
        <Fragment>
          <Header />
          <Content />
        </Fragment>
      }
    </div>
  )
}
