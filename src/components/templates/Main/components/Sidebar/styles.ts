import styled from "styled-components";

const ROUTE_ACTION_HEIGHT = 40;

const WRAPPER_ROUTER_GAP = 4;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 8px;

  grid-area: sidebar;

  height: calc(100% - 16px);
  width: calc(100% - 16px);

  background-color: #f6f5f5;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
`;

export const Divider = styled.hr``;

export const WrapperRouterGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const WrapperRouter = styled.ul<{
  $open: boolean;
  $routeAmount: number;
}>`
  display: flex;
  flex-direction: column;
  gap: ${WRAPPER_ROUTER_GAP}px;

  padding-left: 16px;

  max-height: ${({ $open, $routeAmount }) => {
    if (!$open) return "0px";

    const gapAmount = ($routeAmount - 1) * WRAPPER_ROUTER_GAP;

    return `${$routeAmount * ROUTE_ACTION_HEIGHT + gapAmount}px`;
  }};

  opacity: ${({ $open }) => {
    if (!$open) return 0.5;
    return 1;
  }};

  overflow: hidden;

  transition: max-height 0.2s, opacity 0.2s;
`;

export const RouteGroupAction = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 16px;
  border-radius: 6px;

  background-color: #433d8b;
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;

  user-select: none;
  cursor: pointer;
`;

export const RouteAction = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  padding-left: 16px;

  min-height: ${ROUTE_ACTION_HEIGHT}px;
  border-radius: 6px;

  background-color: #1f2544;
  color: #ffffff;

  user-select: none;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;

  overflow: hidden;
`;
