import styled from 'styled-components';
import { DropDownProps } from './Board';

export const StyledDropDown = styled.div<DropDownProps>`
  width: ${(props) => props.$width || '118px'};
  height: ${(props) => props.$height || '40px'};

  & .DropDownButton {
    width: ${(props) => props.$width || '118px'};
    height: ${(props) => props.$height || '40px'};
    position: relative;
    border-bottom: 1px solid #d1d1d1;
    border-radius: 0%;
    background: rgba(217, 217, 217, 0);
  }
  & .DropDownSvg {
    position: relative;
    left: 100px;
    bottom: 10px;
  }
  & .DropDownList {
    position: relative;
    width: ${(props) => props.$width || '40px'};
    top: -31px;
  }
  & .DropDownOption {
    width: 40px;
    height: 40px;
    color: #999;
    text-align: center;
    line-height: 20px;
  }
`;
