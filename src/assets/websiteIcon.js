import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: ${(props) =>
    props.matchesXS ? "8.5rem" : props.matchesSM ? "9.5rem" : "11.5rem"};
  width: ${(props) =>
    props.matchesXS ? "7.25rem" : props.matchesSM ? "8.25rem" : "10.25rem"};
`;

function WebsiteIcon(props) {
  const { matchesSM, matchesXS } = props;
  return (
    <Container
      className={props.className}
      matchesSM={matchesSM}
      matchesXS={matchesXS}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 64 64"
      >
        <rect
          width="58"
          height="40"
          x="3"
          y="5"
          fill="#d9dae2"
          rx="3.92"
          ry="3.92"
        ></rect>
        <path
          fill="#cfcfd9"
          d="M58.662 5.338A3.905 3.905 0 0159 6.92v32.16A3.92 3.92 0 0155.08 43H4.92a3.905 3.905 0 01-1.582-.338A3.918 3.918 0 006.92 45h50.16A3.92 3.92 0 0061 41.08V8.92a3.918 3.918 0 00-2.338-3.582z"
        ></path>
        <path
          fill="#e5e6eb"
          d="M7 33h50v6.926A1.074 1.074 0 0155.926 41H8.074A1.074 1.074 0 017 39.926V33z"
        ></path>
        <path
          fill="#cfcfd9"
          d="M55 33v4.926A1.074 1.074 0 0153.926 39H7v.926A1.074 1.074 0 008.074 41h47.852A1.074 1.074 0 0057 39.926V33z"
        ></path>
        <path
          fill="#027de5"
          d="M8.183 9h47.634A1.183 1.183 0 0157 10.183V29H7V10.183A1.183 1.183 0 018.183 9z"
        ></path>
        <path
          fill="#e5e6eb"
          d="M39 54v-9h-4v9h-6v-9h-4v9h-4a1 1 0 00-1 1v3a1 1 0 001 1h22a1 1 0 001-1v-3a1 1 0 00-1-1z"
        ></path>
        <path
          fill="#cfcfd9"
          d="M20 57h24v1.062a.938.938 0 01-.938.938H20.938a.938.938 0 01-.938-.938V57z"
        ></path>
        <path fill="#cfcfd9" d="M29 54L29 45 25 45 29 54z"></path>
        <path fill="#cfcfd9" d="M39 54L39 45 35 45 39 54z"></path>
        <path fill="#fff" d="M10 20L10 12 18 12 10 20z"></path>
        <path fill="#fff" d="M10 37L10 33 14 33 10 37z"></path>
        <path d="M57.08 4H6.92A4.925 4.925 0 002 8.92v32.16A4.925 4.925 0 006.92 46H24v7h-4a1 1 0 00-1 1v5a1 1 0 001 1h24a1 1 0 001-1v-5a1 1 0 00-1-1h-4v-7h17.08A4.925 4.925 0 0062 41.08V8.92A4.925 4.925 0 0057.08 4zM39 55h4v3H21v-3h4a1 1 0 001-1v-8h2v8a1 1 0 001 1h6a1 1 0 001-1v-8h2v8a1 1 0 001 1zm-9-9h4v7h-4zm30-4.92A2.923 2.923 0 0157.08 44H6.92A2.923 2.923 0 014 41.08V8.92A2.923 2.923 0 016.92 6h50.16A2.923 2.923 0 0160 8.92z"></path>
        <path d="M57 32H7a1 1 0 00-1 1v6.926A2.077 2.077 0 008.074 42h47.852A2.077 2.077 0 0058 39.926V33a1 1 0 00-1-1zm-1 7.926a.074.074 0 01-.074.074H8.074A.074.074 0 018 39.926V34h48z"></path>
      </svg>
    </Container>
  );
}

export default WebsiteIcon;
