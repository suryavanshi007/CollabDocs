interface DocumentLayoutProps {
  children: React.ReactNode;
}

const DocumentLayout = ({ children }: DocumentLayoutProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* <nav className="w-full bg-red-500">Document Navbar </nav> */}
      {children}
    </div>
  );
};

export default DocumentLayout;
