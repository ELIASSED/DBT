import styled from "styled-components";

export const TherapySec = styled.div`
  color: #5a5353;
  padding: 40px 120px;
  background: ${({ lightBg }) => (lightBg ? "#FDDBD0" : "#FFE0B7")};

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const TherapyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TherapyColumn = styled.div`
  padding: 15px;
  flex: 0 0 100%;
  max-width: 100%;

  &:first-child {
    flex: 0 0 66%;
    max-width: 66%;
    order: ${({ imgStart }) => (imgStart ? 1 : 2)};
  }
  &:last-child {
    flex: 0 0 33%;
    max-width: 33%;
    order: ${({ imgStart }) => (imgStart ? 2 : 1)};
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

export const TherapyTextWrapper = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TherapyHeading = styled.h1`
  font-size: 2rem;
  color: #1f3a47;
  margin-bottom: 1rem;
  text-align: center;
`;

export const TherapySubtitle = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.5;
  color: #ea6f5c;
  margin-bottom: 0.8rem;
  text-align: justify;
  word-break: break-word;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const TherapyListItem = styled.li`
  font-size: 1rem;
  color: #cc6958;
  margin-bottom: 0.5rem;
`;

export const TherapyImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const TherapyImg = styled.img`
    max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 700px; /* Augmenter cette valeur pour agrandir l'image */
  border: 2px solid #c49964;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    max-height: 500px; /* Ajuster cette valeur pour mobile */
  }
`;

export const TherapyVideoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 555px;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TherapyVideoFrame = styled.iframe`
  width: 100%;
  height: 315px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: none;

  @media screen and (max-width: 958px) {
    height: 200px;
  }
`;

export const TherapyVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TherapyModuleSec = styled.section`
  padding: 0px;
  background: #f4e5d4;
`;

export const TherapyModuleRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TherapyModuleColumn = styled.div`
  &:first-child {
    flex: 0 0 33%;
    max-width: 33%;
  }
  &:last-child {
    flex: 0 0 66%;
    max-width: 66%;
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

export const TherapyTopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#A9B3C1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
