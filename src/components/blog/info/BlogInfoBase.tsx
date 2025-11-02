import React from 'react'
import { IconProps, ArrowBothIcon } from '@primer/octicons-react'

type BlogInfoBaseProps = {
  icon: React.FC<IconProps>,
  data: number,
  unit: string,
  description: string
}

function BlogInfoBase({ icon: Icon, ...props }: BlogInfoBaseProps) {

  return (
    <div className="border-2 p-1 rounded-xl border-[#d1d9e080] bg-[var(--borderColor-default, #373e47)] 
    flex flex-col items-center justify-center gap-1">
      <Icon />
      <div> {props.data} {props.unit}</div>
      <div> {props.description}</div>
    </div>
  )
}

export default BlogInfoBase