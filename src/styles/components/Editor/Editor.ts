import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export const StyledEditorLayout = styled.form`
  padding: 50px 0 100px 0;
`;

export const StyledEditorTitleBox = styled.div`
  width: 1280px;
  height: 72px;
  background-color: #e7e7e7;
  font-family: 'Noto Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  text-align: left;
  padding: 20px;
  margin-bottom: 40px;
`;

export const StyledEditorInputWrapper = styled.div`
  width: 1280px;
  margin-bottom: 30px;
`;

export const StyledEditorInputLabel = styled.label`
  display: inline-block;
  width: 100%;
  font-family: 'Noto Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  padding-left: 5px;
  padding-bottom: 15px;
`;

export const StyledEditorInput = styled.input`
  width: 100%;
  height: 65px;
  padding: 10px;
  font-size: 20px;
`;
export const StyledEditorTitle = styled.p`
  width: 100%;
  font-family: 'Noto Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  padding-left: 5px;
  padding-bottom: 15px;
`;

export const StyledCKEditor = styled(CKEditor)`
  .ck-editor__editable {
    min-height: 300px;
  }
`;

// 비공개 체크박스 버튼
export const StyledCheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledCheckBoxImg = styled.img`
  padding-right: 10px;
`;

// 비공개 비밀번호 인풋
export const StyledPasswordInput = styled.input`
  display: flex;
  width: 220px;
  height: 30px;
  padding: 6px 10px;
  align-items: center;
  border: 1px solid var(--line-gray, #d1d1d1);
`;

export const StyledPrivateCheck = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 20px 0 0 3px;
`;

export const StyledCheckBoxP = styled.p`
  color: var(--text-darkgray, #666);
  height: 24px;
  font-family: 'Noto Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;

export const StyledCheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  padding-bottom: 10px;
`;

export const StyledNormalCheckBox = styled.div`
  padding-top: 20px;
`;

export const StyledPasswordInputWrapper = styled.div`
  position: relative;
`;

export const StyledValidationText = styled.div`
  position: absolute;
  color: #f44646;
  font-family: 'Noto Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
