// ContentWrapper.tsx
export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1200px] mx-auto px-[80px] p-4">{children}</div>;
}
