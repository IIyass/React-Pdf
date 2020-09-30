import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Link,
} from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import Data from "../data/pdfJson1-1";

const CardContainer = styled.View`
  height: 11vh;
  width: 22%;
  border: 1px solid #7d7d7d;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 15px;
  margin-top: 15px;
`;
const ImageContainer = styled.Image`
  width: 100%;
  height: 3vh;
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
  margin: 0;
`;

const FirstPage = styled.View`
  width: 100vw;
  height: 90vh;
`;
const TopSection = styled.View`
  width: 31vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;
const Logo = styled.Image`
  width: 5vw;
  height: 5vh;
`;

const TopText = styled.Text`
  font-family: Oswald;
  font-size: 24px;
  color: #7d7d7d;
`;
const ButtomSection = styled.Text`
  font-family: Oswald;
  color: #7d7d7d;
  position: absolute;
  font-size: 24px;
  bottom: 40;
  left: 30%;
`;

const Title = styled.Text`
  height: 11vh;
  font-family: Oswald;
  font-size: 20px;
  color: #000;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Quixote = () => (
  <Document>
    <Page style={styles.body}>
      <FirstPage>
        <TopSection>
          <TopText> {Data.distributer}</TopText>
          <Logo source={Data.logo} />
        </TopSection>
        <ButtomSection>{Data.package}</ButtomSection>
      </FirstPage>
      <Title>{Data.title}</Title>
      {/* <View style={{ height: "11vh", marginBottom: "30px" }}></View> */}
      <CardsWrapper>
        {Data.releases.map(({ index, company, address, image, url }) => {
          return (
            <CardContainer key={index} style={styles.card}>
              <Link src={url}>
                <ImageContainer source={image} />
              </Link>
              <Link src={url}>
                <Company>{company}</Company>
              </Link>
              <Link src={url}>
                <Location>{address}</Location>
              </Link>
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
