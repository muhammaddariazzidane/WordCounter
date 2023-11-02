import { Skeleton } from '@/components/ui/skeleton';

export default function WordCounterSkeleton() {
  return (
    <div className="max-w-5xl  mt-10 mx-auto">
      <Skeleton className=" min-h-[22rem]" />
      <div className="flex mt-5 justify-between gap-1 items-center">
        <div className="flex gap-2 flex-wrap">
          <Skeleton className="w-14 h-6 rounded-full " />
          <Skeleton className="w-20 h-6 rounded-full " />
          <Skeleton className="w-20 h-6 rounded-full " />
        </div>
        <div className="max-w-xs">
          <Skeleton className="w-9 h-9 rounded-md " />
        </div>
      </div>
    </div>
  );
}
