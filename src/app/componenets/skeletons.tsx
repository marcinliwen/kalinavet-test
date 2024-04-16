// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function VisitSkeleton() {
    return (
        <div className={`${shimmer}  relative overflow-hidden `}>
            <div className='grid gap-2'>
                <div className="flex">
                    <div className="h-8 w-[200px] rounded-md bg-base-200 mb-4" />
                    <div className="bg-base-200 h-6 w-6 rounded-md ml-auto"></div>
                </div>
                
                <div className="h-6 w-full rounded-md bg-base-200 mb-3" />
                <div className="h-6 w-full rounded-md bg-base-200 mb-3" />
                <div className="h-6 w-full rounded-md bg-base-200 mb-3" />
                <div className="h-12 w-[94px] ml-auto rounded-md bg-base-200 " />

            </div>
        </div>
    )
}