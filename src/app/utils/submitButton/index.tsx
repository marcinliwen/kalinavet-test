'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton({text, onClick}:{text:string, onClick?: ()=>void}) {
  const { pending } = useFormStatus()
 
  return (
    <button type="submit" disabled={pending} className='btn-ui' onClick={()=>onClick && onClick()}>
      {pending ? "..." :text}
    </button>
  )
}