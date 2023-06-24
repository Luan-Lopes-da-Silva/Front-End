/* eslint-disable react/prop-types */
import style from './profileSection.module.scss'

// eslint-disable-next-line react/prop-types
export default function ProfileSection(props){
return <div
{...props}
className={`${style.container} ${props.className}`}
>{props.children}</div>
}