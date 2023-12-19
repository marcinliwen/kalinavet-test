'use client';

import clsx from 'clsx';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/navigation';
import {ChangeEvent, useTransition} from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLInputElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }
  const onClickHandler: React.MouseEventHandler<Element> = (e) => {
   
  }

  return (
    <div>
    {/* <label
      className={clsx(
        'relative ',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{t('label')}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {['pl', 'de'].map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', {locale: cur})}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label> */}
    <div>
      <ul className="flex">
        {['pl', 'de'].map((locale_item) => {
          return (
            <li key={locale_item} className="">
              <label className={`block w-10 px-2 py-0 relative z-10 uppercase text-xs  font-medium border-2 border-ui-red text-center
              ${locale_item === locale ? 'text-white bg-ui-red' : 'text-ui-red'}`}>
              <input 
                type='radio' 
                value={locale_item}  
                  className='opacity-0 absolute inset-0 z-20 cursor-pointer'
              onChange={onSelectChange}
                />
                <span>{locale_item}</span>
                </label>
             {/*  <Link
                href={{ pathname }}
                locale={locale_item}
                className={`block w-10 px-2 py-0 uppercase text-xs  font-medium border-2 border-ui-red text-center
              ${locale_item === locale ? 'text-white bg-ui-red' : 'text-ui-red'}`}
                onClick={(e) => onClickHandler(e)}
              >{locale_item}
              </Link> */}
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}