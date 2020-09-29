import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import Data from "../data/pdfJson1";

const CardContainer = styled.View`
  height: 10vh;
  width: 22%;
  border: 1px solid #7d7d7d;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 25px;
`;
const ImageContainer = styled.Image`
  width: 100%;
  height: 50%;
  margin: 0 auto;
`;

const Company = styled.Text`
  font-size: 15px;
  font-family: Oswald;
  color: #7d7d7d;
`;
const Location = styled.Text`
  font-family: Oswald;
  font-size: 10px;
  color: #7d7d7d;
`;
const CardsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Quixote = () => (
  <Document>
    <Page style={styles.body}>
      <CardsWrapper>
        {Data.map(({ company, index, location, image }) => {
          return (
            <CardContainer key={index} style={styles.card}>
              <ImageContainer source={image} />
              <Company>{company}</Company>
              <Location>{location}</Location>
            </CardContainer>
          );
        })}
      </CardsWrapper>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default Quixote;
