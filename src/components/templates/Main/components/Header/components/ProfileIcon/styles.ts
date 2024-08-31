import styled from "styled-components";
import { Container } from "../../../../../../UI/atoms/Container";

export const Circle = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  max-width: 40px;
  max-height: 40px;

  border: 2px solid ${({ theme }) => theme.colors.white100};

  cursor: pointer;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }
`;
