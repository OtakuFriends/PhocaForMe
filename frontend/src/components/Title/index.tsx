import "@/styles/globals.css";

export default function Title({
  size,
  children,
  id,
}: {
  size: "large" | "medium" | "small";
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div style={{ fontSize: `var(--title-${size})` }} {...(id ? { id } : {})}>
      {children}
    </div>
  );
}
