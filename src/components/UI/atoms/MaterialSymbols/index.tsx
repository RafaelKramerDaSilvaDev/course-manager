type MaterialSymbolsProps = {
  icon: string;
  fontSize?: number;
};

export const MaterialSymbols = ({ icon, fontSize }: MaterialSymbolsProps) => {
  return (
    <span className="material-symbols-outlined" style={{ fontSize }}>
      {icon}
    </span>
  );
};
