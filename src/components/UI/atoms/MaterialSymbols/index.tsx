import * as S from "./styles";

type MaterialSymbolsProps = {
  icon: string;
  fontSize?: number | string;
  color?: string;
  onClick?: () => void;
};

export const MaterialSymbols = ({
  icon,
  fontSize,
  color,
  onClick,
}: MaterialSymbolsProps) => {
  return (
    <S.Span
      className="material-symbols-outlined"
      onClick={onClick}
      $fontSize={fontSize}
      $color={color}
    >
      {icon}
    </S.Span>
  );
};
