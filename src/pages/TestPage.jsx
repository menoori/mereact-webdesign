import React from 'react'
import MeButton from '../components/MeButton'
import MeInput from '../components/MeInput'

export default function TestPage() {
    return (
        <div>
            <MeButton disabled callback={()=>console.log("hej")} transitionY text='my button' size='small' transitionColor={'AmaranthPurple'}/>
            <MeButton transitionY text='my button' size='medium' transitionColor={'InverseOuterSpaceCrayola'}/>
            <MeButton transitionY text='my button' size='large' transitionColor={'SpaceCadet'}/>

        <MeInput placeholder='password' type={"password"} color='AmaranthPurple' />
        <MeInput type={'date'} color='InverseEnglishViolet' />
        <MeInput type={'datetime-local'} color='InverseEnglishViolet' />
        <MeInput type={'email'} placeholder="email" color={'SpaceCadet'}  />
        <MeInput type={'number'} placeholder="number" color={'AmaranthPurple'}  />
        <MeInput type={'time'} color={'AmaranthPurple'}  />
        

        <MeInput type={'file'} />
        
        </div>
    )
}
