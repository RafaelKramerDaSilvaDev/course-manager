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

export const SearchInput = styled.input``;

export const Divider = styled.hr``;

export const WrapperRouterGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RouteGroupAction = styled.li`
  padding: 6px;

  background-color: #433d8b;
  color: #ffffff;

  user-select: none;
  cursor: pointer;
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

  transition: max-height 0.4s, opacity 0.4s;
`;

export const RouteAction = styled.li`
  display: flex;
  align-items: center;
  padding-left: 8px;

  min-height: ${ROUTE_ACTION_HEIGHT}px;

  background-color: #433d8b;
  color: #ffffff;

  user-select: none;
  cursor: pointer;

  overflow: hidden;
`;
