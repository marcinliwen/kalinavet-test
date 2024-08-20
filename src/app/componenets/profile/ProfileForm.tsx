'use client'
import React, { useEffect } from "react";
import { number } from "zod";
import { useFormState } from "react-dom";
import { editPersonData } from "@/app/[locale]/(dashboard)/profile/actions";
import { SubmitButton } from "@/app/utils/submitButton";
import { redirect } from "next/navigation";
import { useRef } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { profileSchema } from "./profileSchema";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { profileEditSubmit } from "@/app/[locale]/(dashboard)/edit-profile/action";

import Link from "next/link";
type Person = {
    name: string,
    surname: string,
    address: string,
    post_code: string,
    city: string,
    country: string,
    phone: string,
    email: string,
    id: string
}


/* async function onSubmit(data: z.output<typeof profileSchema>) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('surname', data.surname);
    formData.append('address', data.address);
    formData.append('post_code', data.post_code);
    formData.append('city', data.city);
    formData.append('country', data.country);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('id', data.id)
    console.log(await profileEditSubmit({ message: "" }, formData,));
} */
export default function ProfileForm({ profile }: { profile: Person }) {

    const form = useForm<z.output<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        mode: 'onChange',
        defaultValues: {
            name: profile.name,
            surname: profile.surname,
            address: profile.address,
            post_code: profile.post_code,
            city: profile.city,
            country: profile.country,
            phone: profile.phone,
            email: profile.email,
            id: profile.id
        }
    })

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            (e.ctrlKey || e.metaKey) &&
            (e.key === 'Enter' || e.key === 'NumpadEnter')
        ) {
            e.preventDefault()
            form.handleSubmit(() => formRef.current?.submit())
        }
    }

    const [state, formAction] = useFormState(profileEditSubmit, { message: "" });

    const formRef = useRef<HTMLFormElement>(null)
    return (
        <form
            ref={formRef}
            action={formAction}
            
            onSubmit={(evt) => {
                evt.preventDefault();
                form.handleSubmit(() => {
                  formAction(new FormData(formRef.current!));
                })(evt);
              }}
      
            className='max-w-[400px] grid'>
            {state?.message !== "" && !state.issues && (
                <div className="text-green-500 font-semibold border-green-500 rounded-md border-2 p-2 text-center">{state?.message}</div>
            )}
            {state?.issues && (
                <div className="text-red-500">
                    <ul>
                        {state.issues.map((issue) => (
                            <li key={issue} className="flex gap-1">
                                X
                                {issue}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <Controller
                name="name"
                control={form.control}
                render={
                    ({ field, fieldState }) => (
                        <FormBox
                            onChange={field.onChange}
                            title={'Imię'}
                            defaultValue={field.value}
                            name={field.name}
                            error={fieldState.error}
                        />
                    )
                }
            />
            <Controller
                name="surname"
                control={form.control}
                render={({ field, fieldState }) => (
                    <FormBox
                        onChange={field.onChange}
                        title={'Nazwisko'}
                        defaultValue={field.value}
                        name={field.name}
                        error={fieldState.error}
                    />
                )}
            />
            <Controller
                name="address"
                control={form.control}
                render={({ field, fieldState }) => (
                    <FormBox
                        onChange={field.onChange}
                        title={'Adres'}
                        defaultValue={field.value}
                        name={field.name}
                        error={fieldState.error}
                    />
                )}
            />
            <Controller
                name="city"
                control={form.control}
                render={({ field, fieldState }) => (
                    <FormBox
                        onChange={field.onChange}
                        title={'Miasto'}
                        defaultValue={field.value}
                        name={field.name}
                        error={fieldState.error}
                    />
                )}
            />
            <Controller
                name="post_code"
                control={form.control}
                render={({ field, fieldState }) => (
                    <FormBox
                        onChange={field.onChange}
                        title={'Kod pocztowy'}
                        defaultValue={field.value}
                        name={field.name}
                        error={fieldState.error}
                    />
                )}
            />
            <Controller
                name="country"
                control={form.control}
                render={({ field, fieldState }) => (
                    <FormBox
                        onChange={field.onChange}
                        title={'Państwo'}
                        defaultValue={field.value}
                        name={field.name}
                        error={fieldState.error}
                    />
                )}
            />
            <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                    <FormBox
                        onChange={field.onChange}
                        title={'Telefon'}
                        defaultValue={field.value}
                        name={field.name}
                        error={fieldState.error}
                    />
                )}
            />
            <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                    <FormBox
                        onChange={field.onChange}
                        title={'Mail'}
                        defaultValue={field.value}
                        name={field.name}
                        error={fieldState.error}
                    />
                )}
            />
            {/* <FormBox title={'Nazwisko'} defaultValue={profile.surname} name="surname" /> */}
            {/* <FormBox title={'Adres'} defaultValue={profile.address} name="address" /> */}
            {/* <FormBox title={'Miasto'} defaultValue={profile.city} name="city" /> */}
            {/* <FormBox title={'Kod pocztowy'} defaultValue={profile.post_code} name="post_code" /> */}
            {/* <FormBox title={'Państwo'} defaultValue={profile.country} name="country" /> */}
            {/* <FormBox title={'Telefon'} defaultValue={profile.phone} name="phone" /> */}
            {/* <FormBox title={'Mail'} defaultValue={profile.email} name="email" /> */}
            <input type="hidden" name="id" defaultValue={profile.id} onKeyDown={handleKeyDown} />
            <div className="flex gap-8">
                <Link href="/profile" className="btn ml-auto min-h-max">{'Anuluj'}</Link>
                <SubmitButton text="Zapisz" /* onClick={()=>closeModal()} */ />

            </div>
            {/* 
            {state?.success && <p className="text-green-700 text-xs font-semibold">{state?.success}</p>}

            {state?.errors && <p className="text-red-600 text-xs font-semibold">{'Coś poszło nie tak, spróbuj za chwilę.'}</p>} */}

        </form>
    )
}


function FormBox({ title, defaultValue, name, onChange, error }: { title: string, defaultValue: string, name: string, onChange: () => void, error?: any }) {
    return (
        <div>
            <div className='mb-4 mt-2 flex-wrap md:flex-nowrap flex items-center gap-3 w-full '>
                <label className='min-w-32 md:text-right'>{title}</label>
                <div className="relative w-full">
                    {error && <span className="text-red-600 block absolute text-sm -top-5 px-2">{error.message}</span>}
                    <input className='border rounded-lg p-2 w-full' name={name} defaultValue={defaultValue} onChange={onChange} />
                </div>
            </div>
        </div>
    )
}
