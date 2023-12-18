import MedicineIcon from "@/app/icons/MedicineIcon";
import PreventionIcon from "@/app/icons/PreventionIcon";
import SclapelIcon from "@/app/icons/ScalpelIcon";
import StetoscopeIcon from "@/app/icons/StetoscopeIcon";
type ServicesIcon = {icon: 'prevention' | 'scalpel' | 'medicine' | 'stetoscope'}



export default function ServicesIcon({icon}:ServicesIcon){
    return(
        <>
        {icon === 'scalpel' && <SclapelIcon size={"32"}/>}
        {icon === 'stetoscope' && <StetoscopeIcon size={"32"} />}
        {icon === 'medicine' && <MedicineIcon size={"32"}/>}
        {icon ===  'prevention' && <PreventionIcon size={"32"} />}
        </>
    )
}