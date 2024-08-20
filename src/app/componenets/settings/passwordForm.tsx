'use client'
import React from "react"
import { SubmitButton } from "@/app/utils/submitButton"
import { z } from "zod"
import { sortAndDeduplicateDiagnostics } from "typescript"
import PasswordInput from "@/app/utils/passwordInput"
import { useFormStatus } from 'react-dom'
import { useFormState } from "react-dom"
import { useTranslations } from 'next-intl';
import { useRef } from "react"
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { passwordResetSchema } from "@/lib/passwordResetSchema"
import toast from "react-hot-toast"
import setNewPassword from "@/app/[locale]/(dashboard)/settings/action"
const passwordSchema = z.object({
    password: z.string().min(8, { message: 'Hasło powinno mnieć co najmniej 8 znaków' })
})

const passwordConfirmSchema = z.object({
    password: z.string(),
    confirmPassword: z.string().min(8),
}).superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['confirmPassword'],
            message: 'Passwords do not match',
        });
    }
})
/* 
const initialState = {
    message: {},
  } */
export default function PasswordForm({ setNewPassord, }: { setNewPassord: any }) {
    const t = useTranslations('Settings');

    const form = useForm<z.output<typeof passwordResetSchema>>({
        mode: 'onChange',
        resolver: zodResolver(passwordResetSchema),
        defaultValues: {
            password: '',
            confirmPassword: ''
        }
    })
    const [state, formAction] = useFormState(setNewPassword, { message: '', error: '' })
    const formRef = useRef<HTMLFormElement>(null)

    const { pending } = useFormStatus()
    //const [formValues, setFormValues] = React.useState<{ newPassword: string | undefined, confirmPassword: string | undefined }>({ newPassword: undefined, confirmPassword: undefined })

    //const [ returnState, setReturnState] = React.useState({})
    //const { pending, data } = useFormStatus();


    /*  async function handleSubmit() {
         //console.log('submit form')
          const state = setNewPassord(formValues)
          console.log('state', state)
     } */
    //const [passwordCorrect, setPasswordCorrect] = React.useState<boolean>(false)
    //const [passwordConfirmed, setPasswordConfirmed] = React.useState<boolean>(false)

    /* function handleChange(event: React.FormEvent<HTMLInputElement>) {
        let name = event.currentTarget.name;
        let value = event.currentTarget.value;
        setFormValues({ ...formValues, [name]: value })

    }
 */
    /*  function handleValidaiton() {
         //console.log('formValues.newPassword', formValues.newPassword, 'formValues.confirmPassword', formValues.confirmPassword)
         const passwordValidation = passwordSchema.safeParse({
             password: formValues.newPassword,
         })
         if (!passwordValidation.success) {
             setPasswordCorrect(false)
             //console.log('passwordValidation', passwordValidation.error.flatten().fieldErrors.password)
         }
         else {
             setPasswordCorrect(true)
             //console.log('password success')
         }
 
 
         const passwordConfirmValidation = passwordConfirmSchema.safeParse({
             password: formValues.newPassword,
             confirmPassword: formValues.confirmPassword
         })
 
         if (!passwordConfirmValidation.success) {
             setPasswordConfirmed(false)
             //console.log('passwordConfirmValidation', passwordConfirmValidation.error.flatten().fieldErrors.confirmPassword)
         } else {
             setPasswordConfirmed(true)
             //console.log('confirm success')
         }
     } */
    /* React.useEffect(() => {
        handleValidaiton()
    }, [formValues])
 */
   
    return (
        <form
            ref={formRef}
            className="flex flex-col "
            action={formAction}
            onSubmit={(evt) => {
                evt.preventDefault();
                form.handleSubmit(() => {
                  formAction(new FormData(formRef.current!));
                })(evt);
              }}
        >
            <div className="mb-6 relative">
                <Controller
                    name="password"
                    control={form.control}
                    render={
                        ({ field, fieldState }) => (
                            <PasswordInput
                                id="password"
                                defaultValue={field.value}
                                name={field.name}
                                error={fieldState.error}
                                onChange={field.onChange}
                                title={"Nowe hasło"}
                                autoFocus={true}
                            />
                        )
                    }
                />
                {/* <label className='min-w-32 md:text-right text-sm'>{t('new_password')}</label>
                <PasswordInput id={'newPassword'} name={'newPassword'} onChange={handleChange} autoFocus={true} />
                <span className={`${passwordCorrect ? 'text-green-600' : 'text-red-600'} text-xs absolute left-0 -bottom-5`}>
                    <span>{`${passwordCorrect ? '+' : '-'}`}</span>
                    {' Hasło musi mieć co najmniej 8 znaków.'}
                </span> */}
            </div>
            <div className="mb-6  relative">
                <Controller
                    name="confirmPassword"
                    control={form.control}
                    render={
                        ({ field, fieldState }) => (
                            <PasswordInput
                                id="confirmPassword"
                                defaultValue={field.value}
                                name={field.name}
                                error={fieldState.error}
                                onChange={field.onChange}
                                title={"Powtórz hasło"}
                                autoFocus={false}
                            />
                        )
                    }
                />
            </div>
            {state?.message !== "" && !state.error && (
                <div className="text-green-500 font-semibold border-green-500 rounded-md border-2 p-2 text-center">{state?.message}</div>
            )}
            {!state?.message && state?.error !=="" && (
                <div className="text-red-600 font-semibold border-red-600 rounded-md border-2 p-2 text-center">{state?.error}</div>
            )}
            <button
                className="btn-ui mt-8 ml-auto"
                type="submit"
                disabled={pending}
            >{pending ? "..." : t('save')}</button>
        </form>
    )
}