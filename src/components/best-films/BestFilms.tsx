// import {style} from "./style.module.scss"
// import cnBind from 'classnames/bind'
import { MoveSlider } from '@components/move-films/MoveSlider'
import { SocialNetwork } from '@components/social-network/SocialNetwork'

export const BestFilms = () => {
  return (
    <section>
      <div className="container">
        <MoveSlider/>

        <SocialNetwork/>
      </div>
    </section>
  )
}
