import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { Name } from "../components/Name/Name";
import { Page } from "../components/Page/Page";

const Heading = styled.h1<{ cool: boolean }>`
  color: tomato;
  font-style: ${({ cool }) => (cool ? "italic" : "normal")};
`;

export default function Home() {
  return (
    <Page>
      <Heading {...{ cool: false }}>Hello, World!</Heading>
      <Name />
    </Page>
  );
}
