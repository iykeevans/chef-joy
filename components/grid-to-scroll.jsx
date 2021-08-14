import styled from "styled-components";

function GridToScroll({ children, gridCols, gapX, gapY }) {
  return (
    <Wrapper
      className={`flex md:grid md:grid-cols-${gridCols} ${
        gapX ? `gap-x-${gapX}` : ""
      } ${gapY ? `gap-y-${gapY}` : ""}`}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow-x: auto;

  @media screen and (min-width: 768px) {
    overflow-x: unset;
  }
`;

export default GridToScroll;
