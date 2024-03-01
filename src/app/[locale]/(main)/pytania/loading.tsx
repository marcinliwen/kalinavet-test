export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="h-screen w-full flex justify-center items-center bg-blue-500">
            <span className="text-3xl text-ui-red font-bold">Loading</span>
            <span className="loading loading-dots loading-lg text-ui-red"></span>
        </div>
    )
  }