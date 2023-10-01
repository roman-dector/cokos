export function Circle() {
  return (
    <div className='absolute right-0 top-0 overflow-hidden'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='66'
        height='116'
        viewBox='0 0 66 116'
        fill='none'
      >
        <g
          //@ts-ignore
          // style='mix-blend-mode:lighten'
          city='0.8'
          filter='url(#filter0_f_390_375)'
        >
          <circle cx='58' cy='58' r='38' fill='#DD2B2D' />
        </g>
        <circle cx='59' cy='58' r='30' fill='#DD2B2D' />
        <defs>
          <filter
            id='filter0_f_390_375'
            x='0'
            y='0'
            width='116'
            height='116'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='10'
              result='effect1_foregroundBlur_390_375'
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
