import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: #fff;
`;

type MaskProps = { isDisplay: boolean };
const Mask = styled.div<MaskProps>`
  display: ${(props) => (props.isDisplay ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

export { Container, Mask };
