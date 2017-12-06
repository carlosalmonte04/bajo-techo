import React from 'react'
import {
  LookingForAptImg,
  HappyPeopleImg,
  IdentityImg
} from '../../components/vector-images/ImgIndex'
import Pitch from '../../components/welcome/Pitch'

const PitchesContainer = () => {
  return (
    <section className="elevator-pitch-section">
      <div className="index-elevator-pitch-container">
        <h1>Que es Techo Unido?</h1>
        <Pitch
          direction="left"
          pitchTitle={'Mudarte hoy? Why not!?'}
          pitch={'Techo Unido te ayuda a encontrar el apartamento \
                  de tus sueño al precio de tu bolsillo.\
                  Todo mientras vives con tus amigos!'}
        >
          <LookingForAptImg width={150} height={150} color="rgba(99, 139, 230, 0.76)" />
        </Pitch>
        <Pitch
          direction="right"
          icon={HappyPeopleImg}
          pitchTitle={'Para que mudarse cerca? Mudense juntos!'}
          pitch={'Techo Unido te permite elegir una nueva familia!\
                  Sinceramente lamentamos todo el tiempo que nos tomó.'}
        >
          <HappyPeopleImg width={150} height={150} color="rgba(99, 139, 230, 0.76)" />
        </Pitch>
        <Pitch
          direction="left"
          icon={IdentityImg}
          pitchTitle={'Nada mas seguro que tu nuevo hogar.'}
          pitch={'Cada usuario pasa por nuestro sistema de verificacion \
                  para confirmar identidad e historial criminal.'}
        >
          <IdentityImg width={150} height={150} color="rgba(99, 139, 230, 0.76)" />
        </Pitch>
      </div>
    </section>
  )
}
export default PitchesContainer
