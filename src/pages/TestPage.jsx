import React from 'react'
import MeButton from '../components/MeButton'

export default function TestPage() {
    return (
        <div>
            <MeButton transitionY text='my button' size='small' transitionColor={'AmaranthPurple'}/>
            <MeButton transitionY text='my button' size='medium' transitionColor={'InverseOuterSpaceCrayola'}/>
            <MeButton transitionY text='my button' size='large' transitionColor={'SpaceCadet'}/>
        </div>
    )
}
