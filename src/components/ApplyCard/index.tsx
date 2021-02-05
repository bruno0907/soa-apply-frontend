import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  Card, 
  CardHeader,  
  CardBody 
} from './styles'

import avatar_placeholder from '../../assets/images/avatar_placeholder.png'

import api from '../../services/api';

interface ApplyProps{
  applicant: {    
    _id: string;
    battleTag: string;
    charName: string;
    className:string;
    mainSpec: string;
    offSpec: string;
    observations: string;
    approvalStatus: string;
  }
}

const ApplyCard: React.FC<ApplyProps> = ({ applicant }) => {
  const [raiderioInfo, setRaiderioInfo] = useState<any>()
  const [ilvl, setIlvl] = useState<any>()
  const [progression, setProgression] = useState({
    Heroic: 0,
    Mythic: 0
  })
  const [io, setIo] = useState<any>()

  useEffect(() => {
    api.getRaiderioInfo(applicant.charName) 
    .then(({ data }) => {  
      setRaiderioInfo(data)
      setIlvl(data.gear.item_level_equipped)      
      setProgression({
        Heroic: data.raid_progression["castle-nathria"].heroic_bosses_killed,
        Mythic: data.raid_progression["castle-nathria"].mythic_bosses_killed
      })
      setIo(data.mythic_plus_scores_by_season[0].scores.all)
    })
    .catch(error => console.log(error))

  }, [applicant.charName])

  return (            
    <Container>
      <Link to={`/apply/${applicant._id}`}>
        <Card applyStatus={applicant.approvalStatus}>
          <CardHeader 
            playerClass={applicant.className} 
            io={io}
          >          
            <img src={raiderioInfo?.thumbnail_url || avatar_placeholder} alt=""/>       
            <div>
              <h3>{applicant.charName}</h3>
              <p>{applicant.battleTag}</p>
            </div>
           {!raiderioInfo ? null :  <span>{io}</span>}
          </CardHeader>
          <CardBody>          
            <h4>
              {`
                ${applicant.mainSpec} 
                ${!applicant.offSpec ? '' : `/ ${applicant.offSpec}`} ${applicant.className}
              `}
            </h4> 
            { raiderioInfo ? 
              <>
                <div>
                  <span>{` ${progression.Heroic || '0'}/10H`}</span>
                  <span>{`${progression.Mythic || '0'}/10M`}</span>
                  <span>{`${ilvl || '0' } ilvl`}</span>
                </div>
              </>
              :            
              <p>Player não possui informações no Raider.io ou Informou o nome errado.</p>
            }
          </CardBody>      
        </Card>
      </Link> 
    </Container>       
  );
}

export default ApplyCard;
