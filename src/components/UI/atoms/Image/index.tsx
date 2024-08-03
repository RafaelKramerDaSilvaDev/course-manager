import * as S from "./styles";

type ImageProps = {
  src: string;
  width?: number | string;
  height?: number | string;
};

export const Image = ({ src, width, height }: ImageProps) => {
  return <S.Image src={src} width={width} height={height} />;
};
