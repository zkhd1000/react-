import React from 'react'
import logo from './images/logo.png'
import  './log.less'
export default function Logo (){

  return (
    <div className='logo-container'>
      <img src={logo} alt="logo" className='logo-img'/>
    </div>
  )
}
// export default function logo() {
//     return (
//         <div className='logo-container'>
//           <img src={logo} alt="logo" className='logo-img'/>
//         </div>
// }
