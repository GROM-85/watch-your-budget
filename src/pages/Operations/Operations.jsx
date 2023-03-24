import { Link } from 'react-router-dom';
import TransactionButtons from 'components/TransactionButtons'
import InputArea from 'components/InputArea'
import {TransactionsContainer} from './Operations.styled'
export default function Home() {
  return (
    <div>
    
      <TransactionButtons/>
      <TransactionsContainer>
        <InputArea />
        </TransactionsContainer>
      <Link to="/report" style={{ display: 'block' }}>
        REPORT
      </Link>
      
    </div>
  );
}
