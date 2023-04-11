import React from 'react'

export default function ContentBox({children}) {
  return (
    <div className=" [&>h3]:text-[23.33333px] [&>h3]:mb-[16px] [&>h3]:leading-7 [&>h3]:font-medium xl:[&>h3]:text-[28px] [&>p]:text-base [&>p]:mb-4 xl:[&>p]:text-[17px] [&>li>a]:text-inherit  [&>li>a]:underline  [&>li]:list-none [&>li]:mb-[5px] hover:[&>li>a]:text-[#298556] [&>li>a]:text-base xl:[&>li>a]:text-[17px] [&>h4]:text-[18.666667px] [&>h4]:leading-[22.4px]   [&>h4]:mb-[16px] [&>h4]:font-medium xl:[&>h4]:text-[21px] xl:[&>h4]:leading-[25.2px]   [&>div>a>svg]:h-6 hover:[&>div>a>svg>*]:fill-[#298556]  [&>div]:flex  [&>div]:gap-[10px] ">
        {children}
    </div>
  )
}
