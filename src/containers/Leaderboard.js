import React from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox';
import {ReactComponent as MaleBlue} from "../svg-assets/male-blue.svg";
import {ReactComponent as MaleYellow} from "../svg-assets/male-yellow.svg";
import {ReactComponent as FemaleRed} from "../svg-assets/female-red.svg";
import {ReactComponent as FemaleYellow} from "../svg-assets/female-yellow.svg";
import {ReactComponent as FemaleBlue} from "../svg-assets/female-blue.svg";

class CheckIn extends React.Component {
    render() {
        return (
            <ContainerDiv justifyContent="flex-start" alignItems="center">
             <Title>Leaderboard</Title>
             <PodiumWrapper>
              <RankWrapper marginTop={50}>
                <MaleBlue width={90} height={90}/>
                <Rank>2nd place</Rank>
                <Score>1780</Score>
              </RankWrapper>
              <RankWrapper margin="0 10px">
                <FemaleRed width={100} height={100} />
                <Rank>1st place</Rank>
                <Score>1850</Score>
              </RankWrapper>
              <RankWrapper marginTop={60}>
                <FemaleYellow width={80} height={80}/>
                <Rank>3rd place</Rank>
                <Score>1630</Score>
              </RankWrapper>
             </PodiumWrapper>
             <TableWrapper>
              <RankingRow>
                <p style={{ fontSize: '10px'}}>4th</p>
                <MaleBlue width={22} height={22} style={{ marginLeft: '10px' }}/>
                <Name>Long Nhong</Name>
              </RankingRow>
              <RankingRow>
                <p style={{ fontSize: '10px' }}>5th</p>
                <FemaleBlue width={22} height={22} style={{ marginLeft: '10px' }}/>
                <Name>Phuc Ho</Name>
              </RankingRow>
              <RankingRow>
                <p style={{ fontSize: '10px' }}>6th</p>
                <FemaleYellow width={22} height={22} style={{ marginLeft: '10px' }}/>
                <Name>Linh Pham</Name>
              </RankingRow>
              <RankingRow>
                <p style={{ fontSize: '10px' }}>7th</p>
                <FemaleRed width={22} height={22} style={{ marginLeft: '10px' }}/>
                <Name>Hoang Nguyen</Name>
              </RankingRow>
              <RankingRow>
                <p style={{ fontSize: '10px' }}>8th</p>
                <MaleYellow width={22} height={22} style={{ marginLeft: '10px' }}/>
                <Name>Bao Nguyen</Name>
              </RankingRow>
             </TableWrapper>
            </ContainerDiv>
        );
    }
}

const ContainerDiv = styled(Flex)`
  flex-direction: column;
  padding-top: 50px;
`;

const Title = styled.div`
  font-size: 20px;
  margin: 20px 0;
`

const PodiumWrapper = styled(Flex)`
  flex-direction: row;
`

const RankWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Rank = styled.div`
  font-weight: bold;
  margin-top: 1em;
`

const Score = styled.div`
  font-size: 12px;
  margin-top: .5em;
  color: grey;
`

const TableWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  width: 80%;
`

const RankingRow = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const Name = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
`

export default CheckIn;
