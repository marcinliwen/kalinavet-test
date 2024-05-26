import { useTranslations } from "next-intl"
type OpenDays = {
    openDays: string[],
    displayOnTopBanner: boolean
}
async function getOpenDays() {
    const { data } = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldqjnpm22vwp01uldwwx5ejk/master', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            query OpenDays {
                openDays {
                  openDays
                  displayOnTopBanner
                }
              }`
        }),
    }).then((res) => res.json());
    return data.openDays[0];
}
function isOpenToday(openDays : string[]){
    const today = new Date;
    const dateList = openDays.map(item => new Date(item).toLocaleDateString())
    if(dateList.includes(today.toLocaleDateString())){
        return true;
    }
    return false;
}

export default async function BannerInfo() {
    const t = useTranslations('AlertNews');
    const { openDays, displayOnTopBanner }: OpenDays = await getOpenDays();

    if (!displayOnTopBanner) return;

    const isOpen = isOpenToday(openDays)
    return (
        <div className='container mx-auto gap-4  items-center py-1 text-white text-sm whitespace-nowrap text-right overflow-auto '>
            {isOpen ? `${t('is_open')} 9:30 - 13:30` : t('today_closed')}
        </div>
    )
}


