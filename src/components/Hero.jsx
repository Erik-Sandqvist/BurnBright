
export default function Hero() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-left gap-10 lg:flex-row lg:gap-20">
      <h1 className="text-9xl ml-10 inline-block bg-linear-to-t from-[#09013a] via-[#000000] to-[#910305] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(236,34,39,0.35)]"
            style={{ fontFamily: '"above-the-sky-condensed", sans-serif', fontWeight: 600, fontStyle: 'normal' }}
          >
         Burn Bright
      </h1>
       <img
            className="mx-0-auto mx-auto w-1/4 rounded-[28px] pointer-events-none opacity-50"
            src="/img/logo.svg"
            alt=""
          />
        
      
      {/* <div className="mt-7 flex flex-wrap items-center gap-4">
        <a
          className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ec2227,#6e0e10)] px-5 py-3 text-sm font-medium text-[#fff1f2] shadow-[0_16px_30px_rgba(236,34,39,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(236,34,39,0.34)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8d9dd]"
          href="#manifesto"
        >
          Enter the mood
        </a>
      </div> */}
    </div>
  )
}
