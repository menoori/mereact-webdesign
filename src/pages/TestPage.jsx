import React from 'react'
import MeButton from '../components/MeButton'
import MeInput from '../components/MeInput'

export default function TestPage() {
    return (
        <div>
            <form action="" onSubmit={(e)=>e.preventDefault()}>

            <MeButton disabled onClick={()=>console.log("hej")} transitionY text='my button' size='small' transitionColor={'AmaranthPurple'}/>
            <MeButton transitionY text='my button' size='medium' transitionColor={'InverseOuterSpaceCrayola'}/>
            <MeButton type='submit' transitionY text='my button' size='large' transitionColor={'SpaceCadet'}/>

        <MeInput placeholder='password' label='password' type={"password"} color='AmaranthPurple' />
        <MeInput type={'date'} theme='InverseEnglishViolet' />
        <MeInput type={'datetime-local'} theme='InverseEnglishViolet' />
        <MeInput id='0111' regexValidation={"email"} placeholder="example@mail.com" type={'email'} label="email" theme={'SpaceCadet'}  />
        <MeInput type={'number'} placeholder="number" theme={'AmaranthPurple'}  />
        <MeInput type={'time'} theme={'AmaranthPurple'}  />
        <MeInput id='2' noHoverAnimation regexValidation={"tel"} type={'tel'} label="Telephone" placeholder="07X XX XX XXX" theme={'AmaranthPurple'}  />
        <MeInput regexValidation={"url"} label="url" placeholder="https://www.example.com" type={'url'} required />
        
{/* Fix input file ... checkbox ... radio ... slider */}
        
            </form>
        </div>
    )
}
