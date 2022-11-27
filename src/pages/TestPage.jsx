import React from 'react'
import MeButton from '../components/MeButton'
import MeInput from '../components/MeInput'

export default function TestPage() {
    return (
        <div>
            <MeButton disabled callback={()=>console.log("hej")} transitionY text='my button' size='small' transitionColor={'AmaranthPurple'}/>
            <MeButton transitionY text='my button' size='medium' transitionColor={'InverseOuterSpaceCrayola'}/>
            <MeButton transitionY text='my button' size='large' transitionColor={'SpaceCadet'}/>
        <MeInput placeholder='password' color='AmaranthPurple'/>
        <MeInput placeholder='password' color='InverseEnglishViolet' disabled/>
        </div>
    )
}
