export default function IphoneImage() {
  return (
    <picture>
      <source
        media="(min-width: 1024px)" // lg breakpoint
        srcSet="/iphone-bg.svg"
      />
      {/* no fallback <img>, so nothing shows on mobile */}
      <img
        src="/iphone-bg.svg"
        alt="iPhone"
        width={218}
        height={311}
        className="absolute -right-[1rem] bottom-[8rem]"
      />
    </picture>
  );
}
