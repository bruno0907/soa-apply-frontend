import Accordion from '../Accordion'

import { Container } from './styles'

const Aside: React.FC = () => {
  return(
    <Container>
      
      <h1>Seja bem vindo</h1>
      <p>Nosso apply é muito simples. Todas as informações sobre o nosso core encontra-se abaixo e para aplicar basta preencher o formulário simplificado ao lado corretamente com as suas informações e aguardar nosso contato.</p>
      <Accordion title="Quem somos">
        <p>O core da Sons of Aiur é um grupo de grupos de amigos de longa data que cansados dos cores e guildas 
        tradicionais do Azralon busca oferecer um espaço para que os players do joguinho se sintam confortáveis e busquem raidar tranquilo porém buscando a melhor progressão possível. 
        Nosso objetivo e foco como grupo é a melhor progressão preservando o bem-estar de todos. Aqui, jogamos de boa e praticamos o deboísmo. Não há intolerância, desrespeitos e ofensas. Porém não pisamos em ovos. Se você não é uma pessoa resolvida consigo, encontrará problemas.</p>
      </Accordion>

      <Accordion title="Nossos horários">
        <p>Segundas às Quintas das 22:00h até às 0:00h com invites 20 minutos antes para a limpeza de trash, organização da raid e demais orientações.</p>
      </Accordion>

       <Accordion title="Nossas Regras">
         <ul>
          <li>Loot: Trabalhamos com loot council e fazemos uso do BigDumbLootCouncil para a gestão. Todo trash loot é vendido para a conversão do gold em caldeirão e banquetes.</li>
          <li>Ranks: Todo trial vai passar por uma média de 4 lockouts para avaliação. Serão constatados todos os seus aspectos perante o grupo. Como trial não há prioridade de loot porém não é totalmente excluído. Neste período iremos avaliar a consistência do player. Trials podem ser aprovados antes dos 4 lockouts ou até ter o período extendido.</li>
          <li>Liderança: Todo input é bem vindo, se bem usado. Rages no meio da raid podem ser respondidos de igual portanto "meça suas palavras parça". O não acolhimento do input de imediato não significa que o estamos ignorando.</li>
          <li>Gear: Esperamos de todos a melhor gear possível ao alcance do player. O personagem precisam se apresentar pra raid devidamente Encantado, gemado e reparado. Faça-o antes dos invites.</li>
          <li>Addons: É obrigatório o uso do Exorsus Raid Tools para notes e gestão, Weak Auras, BigWigs ou DBM e o BigDumbLootCouncil. Tenha seus addons devidamente atualizados antes da raid.</li>
          <li>Invites: Esperamos que você esteja dentro do possível de compromissos pessoais disponível para os invites no horário.</li>
         </ul>
         
       </Accordion>
      
      <Accordion title="O que esperamos de você">
        <ul>
          <li>Comportamento: Queremos players que são progressivos. Que estão sempre em busca da melhoria constante. Que primeiramente GOSTEM do game, pesquisem a classe, e se interessem pelo content. Players cansados, desgostados e preguiçosos dispensamos.</li>
          <li>Senso de coletividade: Queremos players que sabem o que jogar em um grupo. Que prezem o coletivo e o companheirismo. Que respeitem as calls e que sejam comunicativos. Players individualistas não são quem vistos e se você for um, sofrerá sanções.</li>
          <li>Consumíveis: Um player que está disposto a raidar precisa ser auto-suficiente. Apesar de oferecermos banquete e caldeirão, os demais como Pots, Food Pessoal, Oil, Healing Potion, Armor Kits e demais são de inteira responsabilidade da pessoa e são obrigatórias na raid.</li>
          <li>Desempenho: Esperamos de você consistência. Internet estável, Pc estável, Headset funcionando e decente, capacidade de ser comunicativo em raid.</li>
          <li>Attendance: Esperamos a melhor attendance possível do player porém temos ciência dos eventuais compromissos/imprevistos que possam surgir. </li>
          <li>Ausências: Em dias de raid, precisam ser comunicadas no nosso Discord no devido canal com a maior antecedência possível. Durante a raid, esperamos que sejam as mínimas possíveis. Saídas constantes para banheiro, pegar água/comida não são bem vistas e devem ser as mínimas possíveis a fim de minimizar a ociosidade da raid. Por raidarmos 2h por dia precisamos otimizar o nosso tempo da melhor forma.</li>
        </ul>        
      </Accordion>
        
      <Accordion title="O que oferecemos">
        <ul>
          <li>Banquete e caldeirão.</li>
          <li>Repair em dia de raid.</li>
          <li>Ambiente tranquilo e adulto.</li>
          <li>Piadas ruims.</li>
        </ul>
        
      </Accordion>        
      
    </Container>    
  )
}

export default Aside