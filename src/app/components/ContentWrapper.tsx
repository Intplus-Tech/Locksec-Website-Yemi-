export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-[80px] p-4">{children}</div>;
}
