import * as Headless from '@headlessui/react'
import { Link as RouterLink } from 'react-router-dom'
import React, { forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: React.ComponentPropsWithoutRef<typeof RouterLink>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <RouterLink {...props} ref={ref} />
    </Headless.DataInteractive>
  )
})