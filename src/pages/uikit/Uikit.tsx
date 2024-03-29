// import { useState } from 'react'
// import { Button, Input , Icon } from '@/ui'
// import stl from './styles.module.scss'
//
// export const Uikit = () => {
//     const [value, setValue] = useState('')
//     return (
//       <div className={stl.uikit}>
//         <div className={stl['d-f']}>
//           <Button>
//             Вход
//           </Button>
//
//           <Button
//             variant="secondary"
//             size="sm"
//           >
//             Вход
//           </Button>
//
//           <Button
//             size="xs"
//             radius="max"
//           >
//             Вход
//           </Button>
//
//           <Button postfixIcon={<Icon name="filter"/>}>
//             Вход
//           </Button>
//
//           <Button prefixIcon={<Icon name="filter"/>}>
//             Вход
//           </Button>
//
//           <Button disabled={true}>
//             Вход
//           </Button>
//         </div>
//
//         <div style={{ margin:'20px 0' }}>
//           <Button
//             prefixIcon={<Icon name="filter"/>}
//             href="/"
//           >
//             Вход
//           </Button>
//         </div>
//
//         <div style={{ fontSize:'30px' }}>
//           <Icon name="filter"/>
//
//           <Icon name="clear"/>
//
//           <Icon name="eye-off"/>
//
//           <Icon name="eye-on"/>
//         </div>
//
//         <div>
//           <Input
//             value={value}
//             placeholder="вход"
//             onChange={setValue}
//           />
//
//           <Input
//             value={value}
//             placeholder="вход"
//             clearable={true}
//             size="sm"
//             onChange={setValue}
//           />
//
//           <Input
//             value={value}
//             placeholder="вход"
//             size="xs"
//             type="password"
//             onChange={setValue}
//           />
//
//           <Input
//             value={value}
//             placeholder="вход"
//             postfixIcon={<Icon name="filter"/>}
//             prefixIcon={<Icon name="filter"/>}
//             onChange={setValue}
//           />
//
//           <Input
//             value={value}
//             placeholder="вход"
//             append={'Open'}
//             prepend={'Open'}
//             onChange={setValue}
//           />
//         </div>
//
//         <div>
//           <Input
//             type="textarea"
//             placeholder="вход"
//             disabled={true}
//             value={value}
//             onChange={setValue}
//           />
//         </div>
//       </div>
//     )
// }
